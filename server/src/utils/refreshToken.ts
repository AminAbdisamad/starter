import { PrismaClient } from '@prisma/client'
import { Express } from 'express'
import jwt from 'jsonwebtoken'
import { createAccessToken, createRefreshToken, sendRefreshToken } from './auth'

const db = new PrismaClient()

export function setupRefreshToken(app: Express) {
  return app.post('/refresh_token', async (req, res) => {
    const refreshToken = req.cookies.uid
    console.log({ refreshToken })
    if (!refreshToken) {
      return res.send({ ok: false, accessToken: '' })
    }

    let payload: any = null
    try {
      payload = jwt.verify(refreshToken, process.env.REFRESH_KEY!)
    } catch (err) {
      console.log(err)
      return res.send({ ok: false, accessToken: '' })
    }

    // refreshToken is valid and
    // we can send back an access refreshToken
    const user = await db.user.findUnique({ where: { id: payload.userId } })

    if (!user) {
      return res.send({ ok: false, accessToken: '' })
    }

    sendRefreshToken(res, createRefreshToken(user))

    return res.send({ ok: true, accessToken: createAccessToken(user) })
  })
}
