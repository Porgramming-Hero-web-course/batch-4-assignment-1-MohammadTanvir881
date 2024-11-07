// problem 4

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

const calculateShapeArea = (shape: Shape) : number | string => {
  if ( "radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.height * shape.width;
  } else {
    return "Unknown Shape . please enter valid input";
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 6 });
console.log(circleArea)

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea)

