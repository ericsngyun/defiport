import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const testRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return {
      greeting: 'hello world'
    }
  })
});