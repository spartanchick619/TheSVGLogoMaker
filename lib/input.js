const inquirer = require("inquirer");

async function getInput() {
  // The result of the user input is stored in the 'userInput' variable.
  const userInput = await inquirer.prompt(questions);

  return userInput;
}

// Export an object that includes the 'getInput' function.
module.exports = {
  getInput,
};