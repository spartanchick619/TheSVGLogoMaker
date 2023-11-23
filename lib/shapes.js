class Shape {
    constructor(){
      this.color= ''
  }
    setLogoColor(shapeColor) {
      this.shapeColor = shapeColor;
  }
//define a circle class that extends shape and makes an svg circle w posiyion,size,and fill color
class Circle extends Shape{
    render() {
      return `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${fontColor}">${text.toUpperCase()}</text>`;
  }  
}
//define a square class that extends shape and makes an svg 
class Circle extends Shape {
  renderLogoColor() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}


class Square extends Shape {
  renderLogoColor() {
      return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}


class Triangle extends Shape {
  renderLogoColor() {
      return `<polygon points="150,20 55,160 245,160" fill="${this.shapeColor}" />`;
  }

  renderText(text, fontColor) {
      return `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${fontColor}">${text.toUpperCase()}</text>`;
  }  
}


module.exports = { Circle, Square, Triangle };