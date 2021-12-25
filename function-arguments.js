const paintWall = function (color, cardinal_point) {
    console.log("The " + cardinal_point + " wall has been painted " + color);
}

paintWall("orange", "north");
paintWall("south", "grey");
// paintWall();
// without an argument you get undefined.

// it does matter, the first argument when calling is de first argument in your log
// same switching the function defenition
// when switch both the order of the arguments are correct by logging.