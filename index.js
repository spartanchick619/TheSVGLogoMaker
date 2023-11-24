const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg {
  constructor(){
    this.textElement = ''
    this.shapeElement = ''
  }
  render(){
    return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
  }
  setTextElement(text,color){
    this.textElement = ' <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
  }
  setShapeElement(shape){
    this.shapeElement = shape.render()
  }
}
// array of questions to prompt
const questions = [
  {
    type: "input",
    name:"text",
    message:"TEXT: Enter up to three characters.",
    validate:(input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: What color is your logo? (By keyword or hexadecimal number)",
  },
  {
    type: "input",
    name: "logoShape",
    message: "What shape is yout logo?",
    choices: ["Circle, Square, Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: What color is your shape? (By keyword or hexadecimal number)",    
  },
];

//function to write data
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congratulations, you have Generated a logo.svg!");
  });
}
var user_text = "";

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, ' '));
  
  // Handle Question 1
  if (answers.text.length > 0 && answers.text.length < 4) {
    // 1-3 chars, valid entry
    user_text = answers.text;
  console.log("User text: [" + user_text + "]");
  } else {
    // 0 or 4+ chars, invalid entry
    console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
    return;
  }

  //user font color
  user_font_color = answers["textColor"];
  console.log("User font color: [" + user_font_color + "]"); 

  var svgString = "";
  var svg_file= "logo.svg";

  //user shape color
  user_shape_color = answers.shape;
  console.log("User shape color: [" + user_shape_color + "]");
  //user shape type
  user_shape_type = answers["logoShape"];
  console.log("User entered shape = [" + user_shape_type + "]");

  //user shape
  let user_shape;
  if (user_shape_type === "Square" || user_shape_type === "square") {
    user_shape = new Square();
    console.log("User selected Square shape");
  }
  else if (user_shape_type === "Circle" || user_shape_type === "circle") {
    user_shape = new Circle();
    console.log("User selected Circle shape");
  }
  else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
    user_shape = new Triangle();
    console.log("User selected Triangle shape");
  }
  else {
    console.log("Invalid shape!");
  }
  user_shape.setColor(user_shape_color);{
  }
  user_shape.setColor(user_shape_color);

  //create new svg instance and add dhape and text elements
  var svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape);
  svgString = svg.render();

  console.log("Displaying shape:\n\n" + svgString);

  console.log("Shape generation complete!");
  console.log("Writing shape to file...");

  writeToFile(svg_file, svgString); 
});
