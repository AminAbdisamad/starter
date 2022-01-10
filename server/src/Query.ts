import { ContextType } from './context'
import { DBType } from './types'
import { getUserId } from './utils/auth'
export const Query = {
  users: (_parent: any, _args: any, { db, res }: ContextType) => {
    const users = db.user.findMany({ include: { posts: true } })

    return users
  },

  user: async (_parent: any, args: any, { db }: DBType) => {
    const parsedID = parseInt(args.id)

    const user = await db.user.findUnique({
      where: { id: parsedID },
      include: { posts: true },
    })
    const postCount = user?.posts.length
    console.log(` ${user?.username} has ${postCount} posts`)
    if (!user) throw new Error('user not found')
    return user
  },
  // Me (LoggedIn User)
  me: async (_parent: any, _args: any, { db, req }: ContextType) => {
    // get current logged in user
    const { userId }: any = await getUserId(req)

    console.log({ me: userId })
    if (!userId) {
      throw new Error('JWT is required to access this resource')
    }
    return db.user.findUnique({ where: { id: userId } })
  },

  // Posts
  post: async (_parent: any, args: any, { db }: DBType) => {
    const parsedID = parseInt(args.id)

    const post = await db.post.findUnique({ where: { id: parsedID } })
    if (!post) throw new Error('Post not found')
    return post
  },
  posts: async (_parent: any, _args: any, { db, req }: ContextType) => {
    const { userId }: any = await getUserId(req)
    return await db.post.findMany({ include: { author: true } })
  },
}
