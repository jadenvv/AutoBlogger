import { env } from "node:process"
import * as readline from "node:readline/promises"
import { existsSync, writeFile, appendFile } from "node:fs"
import { stdin as input, stdout as output } from "node:process"
export async function env_vars(): Promise<void> {
  if (existsSync('.env')) {




  }
  else {
    const ogWrite = process.stdout.write.bind(process.stdout);
    const rl: readline.Interface = readline.createInterface({ input, output });
    const username: string = await rl.question("email for github :");
    const password: Promise<string> = rl.question("password for github: ");
    process.stdout.write = function (
      data: string | Uint8Array,
      encodingOrCb?: BufferEncoding | ((err?: Error | null) => void),
      cb?: (err?: Error | null) => void
    ): boolean {
      const str = typeof data === "string" ? data : data.toString();
      if (str.includes("\n")) {
        process.stdout.write = ogWrite;
      }
      return ogWrite("*", encodingOrCb as BufferEncoding, cb);
    };
    const content = `EMAIL={}`
    writeFile(".env", await password, (err: unknown) => {


    });



  }

}

