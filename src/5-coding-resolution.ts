type GuardedType<T, D> = T extends (x: any) => x is infer U ? U : D;
export const filterMap = <
  InputType,
  OutputType,
  FilterFn extends (item: InputType) => boolean
>(
  array: InputType[],
  filterFn: FilterFn,
  mapFn: (
    item: GuardedType<typeof filterFn, InputType>,
    idx: number
  ) => OutputType
): OutputType[] => {
  const result: OutputType[] = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!filterFn(element)) continue;
    result.push(
      mapFn(element as GuardedType<typeof filterFn, InputType>, index)
    );
  }

  return result;
};
