//map()
const names = [
  { firstName: "Ola", lastName: "Nordmann" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mario", lastName: "Rossi" },
  { firstName: "Jan", lastName: "Jansen" },
];

console.log("befor map:", names);

const newCombinedNames = names.map(({ firstName, lastName }) => {
  //modify and return person
  return `${firstName} ${lastName}`;
});

console.log("After map", newCombinedNames);

//Calculate the area of the triangle
const trinagles = [
  { base: 100, height: 200 },
  { base: 50, height: 100 },
  { base: 600, height: 700 },
];

const area = trinagles.map(({ base, height }) => {
  return (1 / 2) * base * height;
});

console.log(area);
