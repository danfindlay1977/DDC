
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import {readFileSync, readdirSync} from "fs"
export const videoRouter = createTRPCRouter({
  videoList: publicProcedure.query(({ctx}) => { 
        return ctx.videoList
  }),
  userVideoList: publicProcedure.query( async ({ctx}) => {
    const videos = await ctx.prisma.video.findMany({
      where: {
      userId: ctx.session?.user.id
      }
    })
    console.log(videos)
    return videos
  })
})