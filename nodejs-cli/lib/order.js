const inquirer = require("inquirer");

const orderDetailsQuestions = [
  {
    type: "list",
    name: "Coating",
    message: "Choose cake Coating",
    choices: ["Butter", "Icing Sugar"],
  },
  {
    type: "list",
    name: "type",
    message: "Choose cake type",
    choices: [
      "Strawberry",
      "Vanilla",
      "Mint",
      "White Chocolate",
      "Black Forest",
    ],
  },
  {
    type: "list",
    name: "Cake Size",
    message: "Choose cake size",
    choices: ["Small", "Medium", "Large"],
    default: 1,
  },
  {
    type: "list",
    name: "Toppings",
    message: "Choose cake Topping",
    choices: ["Fruit", "Chocolate", "Biscuits"],
  },
];

const inQuirerOder = async () => {
  const answers = await inquirer.prompt(orderDetailsQuestions);
  return Object.keys(answers).map(
    (key, index) => `\n${index + 1}:${key} => ${answers[key]}`
  );
};

const commanderOrder = (options) => {
  return Object.keys(options).map(
    (key, index) => `\n${index + 1}:${key} => ${options[key]}`
  );
};

module.exports = {
  commanderOrder,
  inQuirerOder,
  orderDetailsQuestions
};
