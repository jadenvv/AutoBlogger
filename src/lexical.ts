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
<<<<<<< HEAD
=======
  quotation: "\"", 
>>>>>>> a4389e573afc67aefc9fd20e3cc21eb881bf30af
  text: "<TEXT>",
  unidentified: undefined,
} as const;

type token = typeof tokens[keyof typeof tokens]
<<<<<<< HEAD
function lookAhead(): string {


=======
type char<S extends string> = S extends `${infer One}${infer Rest}` 
	? (Rest extends "" ? S:never )
	: never; 
function lookAhead<T extends string>(str: string ) : char<T>{
	return str.charAt(1) ;
>>>>>>> a4389e573afc67aefc9fd20e3cc21eb881bf30af
}
function processTok(slice: string): { tok: token, index: number } {
  const ret: {tok: token, index: number }| null = null;

  switch (current) {
    case ':':
      return 
      break; 
    case '\"':
	ret
	break; 	

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

