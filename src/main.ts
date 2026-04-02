import { fileURLToPath } from "url"
import { env_vars } from "./init.ts"
import githook from "./githook.ts"

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
function main(): void {
  env_vars();

  githook.get_browser();

}
if (process.argv[1] == fileURLToPath(import.meta.url)) {
  main();


}
