const settings = {
  minAge: 18,
  maxAge: 60,
};

Object.freeze(settings);
let count = 0;
let average = 0;
const users = [
  { name: "Adi", age: 22, marks: 80 },
  { name: "", age: 17, marks: 40 },
  { name: "Ravi", age: 30, marks: 65 },
  { name: null, age: 45, marks: 90 },
  { name: "Sara", age: 61, marks: 55 },
];

for (let i = 0; i < 5; i++) {
  if (Boolean(users[i].name) === false) {
    users[i].name = "unknown";
  }
  if (
    users[i].age >= settings.minAge &&
    users[i].age <= settings.maxAge &&
    users[i].marks >= 60
  ) {
    users[i].eligible = true;
    if (users[i].eligible === true) {
      count++;
    }
  } else {
    users[i].eligible = false;
  }
  console.log(users[i]);
}
console.log(`No of elgible users : ${count}`);
