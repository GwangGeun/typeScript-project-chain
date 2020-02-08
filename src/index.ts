export {};

const name = "Nicolas";
const age = 24;
const gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

sayHi("name", 444, "a");
