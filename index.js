// 1
/*
const curryChaining = (a) => {
    var sum = a || 0;
    if (a === undefined) return sum;
    return (b) => {
        if (b === undefined) return sum;
        else return curryChaining(sum + b);
    };
};

console.log(curryChaining(10)(15)(14)());
console.log(curryChaining(10)(14)());
*/
// 2
/*
const user = {
  name: "Petr",
  age: 49,
  children: [
    {
      name: "Nina",
      age: 25,
      children: [
        { name: "Andrey", age: 3 },
        { name: "Oleg", age: 1 },
      ],
    },
    {
      name: "Aleksandr",
      age: 22,
    },
  ],
};

const sumAge = (user) => {
  // Solution 1
    var sum = user.age;
    if (!user.children) return sum;
    for (let i = 0; i < user.children.length; i++) {
      if (user.children) sum += sumAge(user.children[i]);
      else return sum;
    }
    return sum;

// Solution 2
    return user.children?.reduce(
        (acum, elem) => (elem.children ? acum + sumAge(elem) : acum + elem.age),
        user.age
    );
  /
};
console.log(sumAge(user));
*/
