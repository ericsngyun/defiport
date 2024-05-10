import MaxWidthWrapper from "~/components/MaxWidthWrapper";

import { api } from "~/trpc/react"

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const test = await api.test.test()
  // const tokens = api.token.getAllTokens()

  return (
    <MaxWidthWrapper>
      <main className = "">
        hello
        {tokens}
        {/* {test.greeting} */}
      </main>
    </MaxWidthWrapper>
  );

}
