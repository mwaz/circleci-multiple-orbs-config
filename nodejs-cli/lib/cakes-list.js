const cakes = [
  "Strawberry",
  "Vanilla",
  "Mint",
  "White Chocolate",
  "Black Forest",
  "Red Velvet",
  "Fruit Cake",
];

const renderCakes = () => {
  return cakes.map((cake, index) => `\n${index + 1} => ${cake}`);
};

module.exports = renderCakes;
