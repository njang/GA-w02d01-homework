
// ### Answer the Following
// For each of the following, write which **datatypes** you would use to represent the data, and then give a small example of the **data structure**:

// 1. A light switch that can be either on or off.
// boolean
// 2. A user's email address.
// string
// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// object
// 4. A list of student names from our class.
// array
// 5. A list of student names from our class, each with a location.
// array
// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// array

// ## Take it Easy
// 1. Make an array that holds all of the colors of the rainbow.
const rainbow = {"red", "orange", "yellow", "green", "blue", "indigo", "violet"};
// 2. Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);
// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const neoJang = {
	favoriteFood: "seafood",
	hobby: "auto mechanic",
	residence: "Austin",
	dataType: "boolean"
}
// 4. Write code that will access your hobby from the object that you just created.
console.log(neoJang.hobby);