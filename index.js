const inquirer = require("inquirer");
const fs= require ("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");
const {userInput, getInput} =require("./lib/input");

// prompts with questions
inquirer.prompt([
    {
        name:"text",
        message:"Enter up to three characters.",
        type: "input",
        filter: function(input){
            return input.trim().toUpperCase();
        },
        Validate:function(input) { 
            if (input.length === 0 || input.length > 3) {
                return "What three letters are the text for your logo?";
            } else {
                return true;
            }
          },
        },
      {
        name:"textColor",
        message:"What color is your log? (Bykeyword or hexadecimal number)",
        type:"input",
        filter: function(input){
            return input.trim().toLowerCase();
        },
        validate: validateColorName,
      },
      {
        name: 'logoShape',
        message: "What shape is yout logo?",
        type: 'list',
        choices: [
            {
                name: 'Circle',
                value: new Circle(),
            },
            {
                name: 'Square',
                value: new Square(),
            },
            {
                name: 'Triangle',
                value: new Triangle(),
            }
        ]
    },
        name: "shapeColor",
        message: "What color is your shape? (By keyword or hexadecimal number)",
        type: "input",
        filter: function(input){
            return input.trim(). toLowerCase();
        },
        validate: varlidateColorName,
      },
  ]).then(answer => {
      console.log(answer);

      svgMaker(answer);
  })
//function processes data for creating svg file
  function svgMaker( { text, textColor, logoShape, logoColor } ) {
      logoShape.setLogoColor(logoColor);
      const svgContent = `
          <svg version="1.1"
              width="300" height="200"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="transparent" />

              ${logoShape.renderLogoColor()}

              ${logoShape.rendertext(text, logoColor)}
          </svg>`;

  writeToFile('logo.svg', svgContent);
}
//function generates files based on received data
  function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (error) => {
          if (error) {
              console.log(error);
              return;
          } else {
              console.log('Generated logo.svg!');
          }
      })
    }
