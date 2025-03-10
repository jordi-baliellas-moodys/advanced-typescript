// Let's create a function which accepts an array, a filtering function and a mapping function
// The result of this function should be the items filtered and mapped with only one for.

const filterMap = (arr: any, filterFn: any, mapFn: any) => {
  const result: any = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!filterFn(element)) continue;
    result.push(mapFn(element));
  }

  return result;
};

interface BasicVehicle {
  id: number;
  name: string;
  type: string;
}

interface Car extends BasicVehicle {
  totalDoors: number;
  type: "car";
  openWindow: () => void;
}

interface Motorbike extends BasicVehicle {
  chainModel: string;
  type: "motorbike";
  shiftGear: () => void;
}

type Vehicle = Car | Motorbike;

const vehicles: Vehicle[] = [
  { id: 1, name: "renault", type: "car", totalDoors: 3, openWindow: () => {} },
  { id: 2, name: "audi", type: "car", totalDoors: 5, openWindow: () => {} },
  {
    id: 3,
    name: "yamaha",
    type: "motorbike",
    chainModel: "yamaha-chain",
    shiftGear: () => {},
  },
  { id: 3, name: "hyundai", type: "car", totalDoors: 5, openWindow: () => {} },
];

const carsTotalDoors: number[] = filterMap(
  vehicles,
  (vehicle) => vehicle.type === "car",
  (vehicle) => vehicle.totalDoors
);
