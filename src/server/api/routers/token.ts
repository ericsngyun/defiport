import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tokenRouter = createTRPCRouter({
  getAllTokens: publicProcedure.query(async () => {
    return {
      tokens: [
        { id: 1, name: "token1" },
        { id: 2, name: "token2" },
      ],
    };
  })
})