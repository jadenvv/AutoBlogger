const tokens = {
  title: "title",
  keyw: "keywords",
  sections: "sections",
  dash: "-",
  colon: ":",
  write: "write",
  tone: "tone",
  author: "author",
  list: "list",
  num: "#",
  text: "<TEXT>"
  unidentified: undefined,

} as const;

type token = typeof tokens[keyof typeof tokens]
function lookAhead() {


}
function processTok(slice: string): { tok: token, index: number } {
  const ret: token | null = null;

  switch (current) {
    case ':':
      ret.push(tokens.colon);

    case ' ':
      const tmp: string | undefined = file.slice(prev, index + 1);
      const process_token = tokens[tmp as keyof typeof tokens];
      if (process_token === undefined)
        ret.push(tokens.unidentified);
      else
        ret.push(process_token)
      break;
  }
}
function lex_analysis(file: string): token[] {
  let prev: number = 0;
  let index: number = 0;
  let ret: token[] = [];
  let current: string | undefined = file.charAt(index);
  while (current !== '') {


  }
  index += 1;
  current = file.charAt(index);
}
return ret;

}

