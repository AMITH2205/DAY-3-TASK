var personObj = {
  firstName: "Amith",
  lastName: "Raj",
  DOB: "22-05-1999",
  role: "developer",
  age: "xx",
  location: "chennai",
  nationality: "india",
  skills: ["JS", "Python", "C++"],
  projects: [
    { name: "RC Toy CAR", langs: ["Python", "JS"] },
    { name: "Hotel Booking Application", lang: ["JS", "Python"] },
  ],
};
console.log(personObj);

console.log("for in");
//for in
for (var x in personObj) {
  console.log(x, personObj[x]);
}

//for of
const iterable = [10, 20, "AMITH", 30];

for (var value of iterable) {
  console.log(value);
}

//FOR EACH
var x = [2, 5, 8, 10];
x.forEach(function (y, i, arr) {
  console.log(y * 2, i, arr);
});
