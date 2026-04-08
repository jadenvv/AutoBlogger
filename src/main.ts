import { fileURLToPath } from "url"
import githook from "./githook.ts"
import { loadEnvFile } from "process";
/* function lex_analysis(file: string): string[] {
  let prev: string = "";
  let index: number = 0;
  let current: string = file.charAt(index);
  while (current !== '') {
    switch (current) {
      case ' ':
        break;

    }

    index += 1;
    current = file.charAt(index);
  }

}
*/
async function main(): Promise<void> {
  const repo = "AutoBlogger";
  await githook.initGithook(repo);
  await githook.existRepo();
  await githook.createWebHook();


}
if (process.argv[1] == fileURLToPath(import.meta.url)) {
  loadEnvFile(".env")
  await main();


}
