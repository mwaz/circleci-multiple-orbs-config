#!/usr/bin/env node

const { program } = require("commander");
const renderCakes = require("../lib/cakes-list");
const order = require("../lib/order");
program.version("1.0.0");

program
  .command("order-cake") // sub command
  .description("Order a custom cake")
  .option("-c, --coatings [value]", "cake coatings to apply") // treat coatings as a value
  .option("-t, --type <cake-type>", "specify the type of cake") // type is required
  .option("-s, --size", "specify size of the cake", "medium") // medium default size
  .option("-T, --topping [cake-topping]", "specify cake topping")
  .action(async (args) => {
    console.log("-----------------------");
    console.log("     ", "ORDER", "     ");
    console.log("-----------------------");
    // console.log(...order.commanderOrder(args));
    console.log(...(await order.inQuirerOder()));
  });


program
  .command("list")
  .description("list types of available cakes")
  .action(() => {
    console.log("-----------------------");
    console.log("    ", "CAKE LIST", "    ");
    console.log("-----------------------");
    console.log(...renderCakes());
  });

program.parse(process.argv);

// console.log(process.argv);
