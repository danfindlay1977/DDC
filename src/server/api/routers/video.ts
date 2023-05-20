
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import {readFileSync, readdirSync} from "fs"
export const videoRouter = createTRPCRouter({
  videoList: publicProcedure.query(({ctx}) => { 
        return ctx.videoList
    })
})