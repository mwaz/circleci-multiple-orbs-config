const order = require("../lib/order");
const inquirer = require("inquirer");

const orderObj = {
  type: "Vanilla",
  size: "Large",
  topping: "Nuts",
};

const result = [
  "\n1:type => Vanilla",
  "\n2:size => Large",
  "\n3:topping => Nuts",
];

test("Maps properties correctly - commander", () => {
  expect(order.commanderOrder(orderObj)).toEqual(result);
  expect(order.commanderOrder(orderObj).length).toEqual(3);
  expect(order.commanderOrder(orderObj)[0]).toContain("Vanilla");
  expect(order.commanderOrder(orderObj)[1]).toContain("Large");
  expect(order.commanderOrder(orderObj)[2]).toContain("Nuts");
});

describe("Order different types of cakes", () => {
  test("order cake: type A", async () => {
    cakeA = {
      Coating: "Butter",
      type: "Strawberry",
      "Cake Size": "Medium",
      Toppings: "Fruit",
    };

    const order_cli = await inquirer.prompt(order.orderDetailsQuestions, cakeA);
    expect(order_cli).toMatchObject(cakeA);
  });

  test("order cake: type B", async () => {
    cakeB = {
      Coating: "Icing Sugar",
      type: "Vanilla",
      "Cake Size": "Large",
      Toppings: "Chocolate",
    };

    const order_cli = await inquirer.prompt(order.orderDetailsQuestions, cakeB);
    expect(order_cli).toMatchObject(cakeB);
  });

  test("order cake: type C", async () => {
    cakeC = {
      Coating: "Butter",
      type: "Mint",
      "Cake Size": "Small",
      Toppings: "Biscuits",
    };

    const order_cli = await inquirer.prompt(order.orderDetailsQuestions, cakeC);
    expect(order_cli).toMatchObject(cakeC);
  });
});
