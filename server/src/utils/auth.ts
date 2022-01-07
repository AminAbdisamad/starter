import { User } from '@prisma/client'
import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'

export const ACCESS_KEY = process.env.SECRET_KEY as string
const REFRESH_KEY = process.env.REFRESH_KEY as string

export const getUserId = async (req: Request) => {
  // Get Authorization header
  const header = req.headers.authorization
  console.log({ header })
  if (!header) throw new Error('Auth required to access resource')
  const token: string = header.replace('Bearer ', '')

  //   Get User provided Token
  const userId = await jwt.verify(token, ACCESS_KEY)
  console.log({ userId })
  return userId
}

export const createRefreshToken = (res: Response, user: User) => {
  const token = jwt.sign({ userId: user.id }, REFRESH_KEY, { expiresIn: '7d' })
  res.cookie('uid', token, { httpOnly: true, secure: true })
  // path: '/refresh_token'
}

export const createAccessToken = (user: User) => {
  return jwt.sign({ userId: user.id }, ACCESS_KEY, { expiresIn: '30s' })
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('uid', token, { httpOnly: true })
}
