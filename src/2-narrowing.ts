const transform = (code: string | number): string => {
  if (typeof code === "string") {
    return code.toLocaleLowerCase();
  }
  return code.toString();
};

const equal = (code: string | number, code2: string): boolean => {
  if (code === code2) {
    // code is string;
    code;
    return true;
  }

  // code still string or number
  code;
  return false;
};

// IN operator

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Animal = Fish | Bird;

function move(animal: Animal) {
  if ("swim" in animal) {
    // animal is a fish
    return animal.swim();
  }

  return animal.fly();
}

// instanceof

function transformDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date.toUpperCase());
  }
}

// type predicate

function animalIsFish(animal: Fish | Bird) {
  return (animal as Fish).swim !== undefined;
}

const animals: Animal[] = [{ swim: () => {} }];
// const fishes = animals.filter(animalIsFish).map(fish => fish.swim());

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const fishes2 = animals.filter(isFish).map((fish) => fish.swim());
