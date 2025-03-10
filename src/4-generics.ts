const failPick = (obj: object, key: string) => obj[key];

const failResult = failPick({ aaa: 0 }, "ddd");

const pick = <T extends object>(obj: T, key: keyof T) => obj[key];

const result = pick({ bbb: 0 }, "bbb");

interface Width {
  xs: number | string;
  sm: number | string;
  md: number | string;
  lg: number | string;
  xl: number | string;
}

type MinimumOneWidth = Required<Pick<Width, "xs">> &
  Partial<Pick<Width, Exclude<keyof Width, "xs">>>;

type Widths = Width | string | number;

// const width: Widths = {
//     xs: 12,
//     xl: 2,
// };

type RequireAtLeastOne<T extends object> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

// type WidthNumber = {
//   xs: Required<Pick<Width, "xs">> &
//     Partial<Pick<Width, Exclude<keyof Width, "xs">>>;
//   sm: Required<Pick<Width, "sm">> &
//     Partial<Pick<Width, Exclude<keyof Width, "sm">>>;
// };

type CorrectWidths = RequireAtLeastOne<Width> | string | number;

const correctWidth: CorrectWidths = { xs: 12, md: 2 };

// Infer with generics

type Room = {
  name: string;
  size: number;
  closets: Map<string, number>[];
};

type House = {
  name: string;
  address: string;
  rooms: Map<string, Room>;
};

type InputMapToObject = Map<keyof any, any> | object | unknown[];
type ReturnMapToObject<T extends InputMapToObject> = T extends Map<
  infer KMap extends keyof any,
  infer VMap
>
  ? Record<KMap, VMap extends InputMapToObject ? ReturnMapToObject<VMap> : VMap>
  : T extends object
  ? {
      [P in keyof T]: T[P] extends InputMapToObject
        ? ReturnMapToObject<T[P]>
        : T[P];
    }
  : T extends (infer VArray)[]
  ? VArray extends InputMapToObject
    ? ReturnMapToObject<VArray>[]
    : VArray[]
  : never;

type ParsedHouse = ReturnMapToObject<House>;

const companyTotals = [
  { name: "apple", total: 5, date: new Date() },
  { name: "nvidia", total: 2, date: new Date() },
];

export const pickAndSum = <
  T extends object,
  TKey extends keyof {
    [K in keyof T as T[K] extends number ? K : never]: T[K];
  }
>(
  arr: T[],
  key: TKey
) => arr.reduce((a, b) => a + (b[key] as number), 0);

pickAndSum(companyTotals, "total");
