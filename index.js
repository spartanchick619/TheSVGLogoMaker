const inquirer = require("inquirer");
const Svg = required('./lib/svg');
const fs = require ("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");
const {userInput, getInput} =require("./lib/svg");
const { error } = required("console");

// prompts with questions
const questions = [
    {
        type: "input",
        name:"text",
        message:"Enter up to three characters.",
        type: "input",
        validate:(input) => input.length <= 3,
    },
        type:"input",
        name: "textColor",
        message:"What color is your log? (Bykeyword or hexadecimal number)",
    },
    {
        type: "list",
        name: 'logoShape',
        message: "What shape is yout logo?",
        choices:["circle", "triangle, "square"],
    },
        type: "input",
        name: "shapeColor",
        message: "What color is your shape? (By keyword or hexadecimal number)",    
    },
  ];
  inquirer
    .createPromptModule(questions)
    .then((responses) => {
      let shape;
      if (response.shape === "circle"){ 
      } else if (response.shape === "triangle"){
        shape = new Triangle();
      } else {
        shape = new Square();
      }
      shape.setLogoColor(response.shapeColor);  
      const svg = new Svg();
      svg.setShape(shape);
      svg.setText(response.text, response.textColor);
      fs.writeFile(`examples/logo-${response.text}.svg`, svg.render(), (err) => {
        if (err) console.log(err);
          console.log("Your logo was created!!");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });