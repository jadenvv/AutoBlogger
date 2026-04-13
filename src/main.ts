import { fileURLToPath } from "url"
import githook from "./githook.ts"
export * as lex from "./lexical.ts"
import express from "express";

import type { Request, Response } from "express"
const app = express();
app.use(express.json())
app.post("/push", async (req: Request, res: Response) => {
  console.log("here")
  const content = await githook.getBlog();
  console.log(content)

})
const port = 4040;

async function main(): Promise<void> {
  const repo = "AutoBlogger";
  await githook.initGithook(repo);
  await githook.existRepo();
  await githook.createWebHook();
  const content = await githook.getBlog();

}
if (process.argv[1] == fileURLToPath(import.meta.url))
  await main();

app.listen(4040, () => {
  console.log(`app listening ${port}`)

});
