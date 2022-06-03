const renderCakes = require("../lib/cakes-list");

const results = [
  "\n1 => Strawberry",
  "\n2 => Vanilla",
  "\n3 => Mint",
  "\n4 => White Chocolate",
  "\n5 => Black Forest",
  "\n6 => Red Velvet",
  "\n7 => Fruit Cake",
];

test("renders cakes list", () => {
  expect(renderCakes()).toEqual(results);
});
