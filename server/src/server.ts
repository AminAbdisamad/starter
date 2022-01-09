// @ts-ignore
// import { createServer } from 'graphql-yoga';
import Express from 'express'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'
import cors from 'cors'
import { readFileSync } from 'fs'
import { context } from './context'
import { ApolloServer, gql } from 'apollo-server-express'

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8')

import { Mutation } from './Mutation'
import { Query } from './Query'
import { setupRefreshToken } from './utils/refreshToken'

const resolvers = { Mutation, Query }

// ALLOWED HOSTS
const HOSTS = ['http://localhost:3000', 'https://studio.apollographql.com']

async function StartApolloServer() {
  // Express App
  const app = Express()
  app.use(cookieParser())
  app.use(
    cors({
      origin: HOSTS,
      credentials: true,
    }),
  )

  // REFRESH TOKEN  CONFIGURATION

  setupRefreshToken(app)
  // CORS configuration

  // const corsOptions = {
  //   origin: HOSTS[0],
  //   credential: true,
  //   // 'Access-Control-Allow-Credentials': true,
  // }

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context,
  })
  await server.start()
  server.applyMiddleware({ app, cors: false })

  // Enable Cors

  // app.use(Cors())
  // Express Server
  app.use((req, res) => {
    res.send('Welcome to Apollo Express GrapQL Api')
  })

  // GraphQL Server
  app.listen(4000, () => {
    console.log(`Server Running on port 4000...`)
  })
}
StartApolloServer()
