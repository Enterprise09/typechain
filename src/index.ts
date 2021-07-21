//Interface
/*
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "enterprise",
  gender: "male",
  age: 22,
};
*/

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  } //end of constructor
}

const enter = new Human("Enter", 21, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(enter));

export {};
