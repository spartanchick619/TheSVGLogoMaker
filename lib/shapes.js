class Shapes {
  setLogoColor(shapeColor) {
      this.shapeColor = shapeColor;
  }

  renderText(text, fontColor) {
      return `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${fontColor}">${text.toUpperCase()}</text>`;
  }  
}

class Circle extends Shapes {
  renderLogoColor() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}


class Square extends Shapes {
  renderLogoColor() {
      return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}


class Triangle extends Shapes {
  renderLogoColor() {
      return `<polygon points="150,20 55,160 245,160" fill="${this.shapeColor}" />`;
  }

  renderText(text, fontColor) {
      return `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${fontColor}">${text.toUpperCase()}</text>`;
  }  
}


module.exports = { Circle, Square, Triangle };