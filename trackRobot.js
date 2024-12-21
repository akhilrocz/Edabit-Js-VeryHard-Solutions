function trackRobot(...movements) {
  let x = 0;
  let y = 0;
  const directions = ["North", "East", "South", "West"];
  let currentDirectionIndex = 0;
  for (let movement of movements) {
    let currentDirection = directions[currentDirectionIndex];
    switch (currentDirection) {
      case "North":
        y += movement;
        break;
      case "East":
        x += movement;
        break;
      case "South":
        y -= movement;
        break;
      case "West":
        x -= movement;
        break;
    }
    currentDirectionIndex = (currentDirectionIndex + 1) % 4;
  }
  return [x, y];
}

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());

console.log(trackRobot(-10, 20, 10));
