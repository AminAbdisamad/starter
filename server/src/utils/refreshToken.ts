import { PrismaClient } from '@prisma/client'
import { Express } from 'express'
import jwt from 'jsonwebtoken'
import { createAccessToken, createRefreshToken, sendRefreshToken } from './auth'

const db = new PrismaClient()

export function setupRefreshToken(app: Express) {
  return app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.uid
    console.log({ token })
    if (!token) {
      return res.send({ ok: false, accessToken: '' })
    }

    let payload: any = null
    try {
      payload = jwt.verify(token, process.env.REFRESH_KEY!)
    } catch (err) {
      console.log(err)
      return res.send({ ok: false, accessToken: '' })
    }

    // token is valid and
    // we can send back an access token
    const user = await db.user.findUnique({ where: { id: payload.userId } })

    if (!user) {
      return res.send({ ok: false, accessToken: '' })
    }

    sendRefreshToken(res, createRefreshToken(user))

    return res.send({ ok: true, accessToken: createAccessToken(user) })
  })
}
