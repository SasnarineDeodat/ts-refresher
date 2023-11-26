let userName = "Robbie";

// userName = 34;
userName = "Robbie";

let userAge = 34;

let isValid = true;

// String, number, boolean

let userID: string | number = "abc1";
userID = 1234;

// userId = true;

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = "Robbie";

user = {
  name: "Robbie",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age:number}[]

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}
