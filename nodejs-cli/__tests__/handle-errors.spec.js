const { Command } = require("commander");

test("when arguments includes -- then stop processing options", () => {
  const program = new Command();

  program
    .option("-c, --coatings [value]", "cake coatings to apply")
    .option("-t, --type <cake-type>", "specify the type of cake");

  program.parse([
    "node",
    "palatial-cakes-cli",
    "--coatings",
    "--",
    "--type",
    "order-cake",
  ]);

  const opts = program.opts();
  expect(opts.coatings).toBe(true);
  expect(opts.type).toBeUndefined();
  expect(program.args).toEqual(["--type", "order-cake"]);
});

test("unknown option, then handle error", () => {
  const program = new Command();
  program
    .exitOverride()
    .command("order-cake")
    .action(() => {});

  let caughtErr;
  try {
    program.parse(["node", "palatial-cakes-cli", "order-cake", "--color"]);
  } catch (err) {
    caughtErr = err;
  }
  expect(caughtErr.code).toBe("commander.unknownOption");
});

test("unknown command, then handle error", () => {
  const program = new Command();
  program
    .exitOverride()
    .command("order-cake")
    .action(() => {});

  let caughtErr;
  try {
    program.parse(["node", "palatial-cakes-cli", "make-order"]);
  } catch (err) {
    caughtErr = err;
  }
  expect(caughtErr.code).toBe("commander.unknownCommand");
});
