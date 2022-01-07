import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
// @ts-ignore
// import { createPubSub } from 'graphql-yoga';

// const pubsub: any = createPubSub();

// export interface Context {
//   prisma: PrismaClient;
// }

export interface ContextType {
  db: PrismaClient
  req: Request
  res: Response
}
const db = new PrismaClient()

export const context = async ({
  req,
  res,
}: {
  req: Request
  res: Response
}) => {
  return {
    db,
    req,
    res,
  }
}
