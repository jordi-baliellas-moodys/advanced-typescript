const sum: number = 0 + 5;
const float: number = 4.444;

const str: string = "Hello, world";

const bool: boolean = true;

const arr: number[] = [1, 2, 3];

// We will never use this or try it at least
const dd: any = { d: 0 };

// Functions types
const fun: () => string = () => "Hello";

function hello(): string {
  return "Hello";
}

// Object types
const obj: { d: number; g?: string } = { d: 0 };

// Interfaces

interface Pet {
  run: () => void;
}
type PetT = { run: () => void };

interface Pet {
  walk: () => void;
}

// type PetT = {
//   walk: () => void;
// }

const pet: Pet = {
  run: () => {},
  walk: () => {},
};

// Union types

type Code = number | string;

const code: Code = "121";
const code2: Code = 121;

// Assertion

const iAmNumber = "" as any as number;

// Literal strings

type Literal1 = "GET" | "POST";

// null / undefined

let notSure: string | null | undefined = undefined;
notSure = "text";
notSure = null;
