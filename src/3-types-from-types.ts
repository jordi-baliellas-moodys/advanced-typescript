type Username = {
  id: string;
  username: string;
  birthdate: Date;
  location: string;
};

// key of
type KeyOfUsername = keyof Username;

const field: KeyOfUsername = "username";

// Indexed Access Types
type BirthdateType = Username["birthdate"];

// type UnresolvedUsername = {
//     id: string;
//     usernamee: string;
// }

type UnresolvedUsername = Pick<Username, "id" | "username">;
// Omit

type UuidMap = Record<string, number>;
const uuidMap: UuidMap = {
  "22123-3213-123-123": 1,
};

type PartialUsername = Partial<Username>;

type RequiredUsername = Required<PartialUsername>; // === Username

type ReadonlyUsername = Readonly<Username>;

const username: Username = {
  id: "121212",
  username: "jordi",
  birthdate: new Date(1998, 6, 27),
  location: "Tenerife",
};

username.username = "jordibaliellas";

const readonlyJordi: ReadonlyUsername = {
  id: "121212",
  username: "jordi",
  birthdate: new Date(1998, 6, 27),
  location: "Tenerife",
};

//readonlyJordi.username = "jordibaliellas";

type NullableUsername = Username | null;
type NonNullableUsername = NonNullable<NullableUsername>; // === Username

const testingFunction = (a: string, b: number) => "hello";

testingFunction(...["ddd", 0]);

type TestingFunctionProps = Parameters<typeof testingFunction>;

const props: TestingFunctionProps = ["ddd", 4];
testingFunction(...props);

type returnTestingFunction = ReturnType<typeof testingFunction>;

// Conditional

interface Person {
  id: string;
}
interface UsernameI extends Person {
  username: string;
}

type Example1 = UsernameI extends Person ? number : string;

// type Example1 = number;

type Example2 = RegExp extends Person ? number : string;

// type Example2 = string;

type CacheKey<Str extends string> = `cacheId-${Lowercase<Str>}`;
type MainID = CacheKey<"MY_APP" | "X_APP">;

const mainId: MainID = "cacheId-my_app";
