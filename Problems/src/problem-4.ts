/**
 Problem 4:
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;

 */

type Shape = Circle | Rectangle;

interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  height: number;
  width: number;
}

const calculateShapeArea = (shape: Shape): number | string => {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.height * shape.width;
  } else {
    return "Unknown Shape . please enter valid input";
  }
};

const circleArea = calculateShapeArea({shape : "circle" , radius: 5});
console.log(circleArea);

const rectangleArea = calculateShapeArea({
 shape:"rectangle" , width:4 , height:6
});

console.log(rectangleArea);
