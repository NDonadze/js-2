// work 1

let numberArray = [0, 1, 2, 3, 4];
console.log(numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4]);

let numberArraySum = numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4];
console.log(numberArraySum);

// work 2

let person1 = {
    name:"Nikusha",
    age:20,
    address:"Tbilisi",
};

let person2 = {
    name: "Vaxo",
    age:20,
    address:"Tbilisi"
};

 let person3 = {
    name:"Tazo",
    age:"19",
    address:"Tbilisi",
 };

 let personArray = [person1, person2, person3]
 
 let personArray2 = [
    {
        name:"Nikusha",
        age:20,
        address:"Tbilisi",
    },
    {
        name: "Vaxo",
        age:20,
        address:"Tbilisi"
    },
    {
        name:"Givi",
        age:"20",
        address:"Tbilisi",
     },
 ]

//  work 3

console.log(`My name is ${person1.name}. My age is ${person1.age}. My address is ${person1.address}.`);

console.log(`My name is ${person1.name}`);
console.log(`My age is ${person1.age}.`);
console.log(`My address is ${person1.address}.`);

// work 4

if (personArray[1].age<19) {
    console.log("I'm teenager")
} else(
    console.log("I'm adult")
);

// work 5

let numberArray2 = [10, 20, 30, 40, 50]

for (let n=numberArray2.length; n<6; n++ ){
    numberArray2= numberArray2 + n;
}

console.log(numberArray2);

// ყველაფერი ვცადე თუმცა არ გამომდის:(

// work 6

let currentDay;
switch(new Date().getDay()){
    case 0:
        currentDay= "Sunday";
        break;
    case 1:
        currentDay="Monday";
        break;
    case 2:
        currentDay="Tuesday";
        break;
    case 3:
        currentDay="Wednesday";
        break;
    case 4:
        currentDay="Thursday";
        break;
    case 5:
        currentDay="Friday";
        break;
    case 6:
        currentDay="Saturday";
        break;
}
console.log(`Today is ${currentDay}.`)


