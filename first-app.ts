let userName = "Robbie";

// userName = 34;
userName = "Robbie";

let userAge = 34;

let isValid = true;

// String, number, boolean

type StringOrNum = string | number;

let userID: StringOrNum = "abc1";
userID = 1234;

// userId = true;

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = "Robbie";

let user: User;

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

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {
  // login logic
}

login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Robbie",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Robbie",
};
