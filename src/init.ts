import { env } from "node:process"
import * as readline from "node:readline/promises"
import { existsSync } from "node:fs"
export function env_vars() {
  if (existsSync('.env')) {

    console.log("does  exist")


  }
  else
    console.log("doesn't exist")




}
