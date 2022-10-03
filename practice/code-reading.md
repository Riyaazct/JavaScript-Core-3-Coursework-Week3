# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

line 7 was declared globally on line 1 and line 4 was declared within the code block and logged out from within the function and each of the variables have its' own values.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

line 34 will output 10 and line 35 will output undefined.

x is defined globally and therefore accessible from within the function, whereas Y is declared and given its value from within the function so it is only available to said function and to be able to access it, one would need to log it out from within the function and not globally.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);
const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

line 56 returns 10 because x is passed through as a parameter and the code in the body is then applied and the result returned.
line 57 returns 9 because that is the value assigned to x and it wasn't modified in the function previously.

line 66 outputs {x: 10} because the property and value was assigned to y on line 58 and then on line 66 it is passed through the function on line 60 and that is where the value is increased by 1.
