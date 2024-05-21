function myFunction(){
    // 1
    const yourName = prompt("Enter your name:");
    const yourNameLength = yourName.length;

    // 2
    const sum = 3 + 5;
    const quotient = 16 / 2;
    confirm(`Quotient of 16 on 2: ${quotient}`);

    // 3
    const age = 25;
    console.log(`Age: ${age}`);

    // 4
    const word = prompt("Enter any word:");
    const wordLength = word.length;
    console.log(`Word length: ${wordLength}`);
    console.log(`First two letters of the word: ${word.substring(0, 2)}`);
    //5
    const parent1Age = parseInt(prompt("Enter the age of the first parent:"));
    const parent2Age = parseInt(prompt("Enter the age of the second parent:"));
    if (parent1Age > parent2Age) {
        console.log("The first parent is older");
    } else if (parent2Age > parent1Age) {
        console.log("The second parent is older");
    } else {
        console.log("Parents are of the same age");
    }

    // 6
    const childAge = parseInt(prompt("Enter the age of the child:"));
    const isReady = confirm("Is the child ready to go to the concert?");
    if (isReady && childAge >= 12) {
        console.log("Go get tickets!");
    } else {
        console.log("Stay home");
    }

    // 7
    function square(number) {
        return number * number;
    }
    const squaredNumber = square(5);
    alert(`Result of squaring: ${squaredNumber}`);

    // 8
    function greet(name) {
        return `Hello, ${name}!`;
    }
    const greeting = greet(prompt("Enter your name:"));
    alert(greeting);

    // 9
    function divideByFour(number) {
        return number / 4;
    }
    const number = parseInt(prompt("Enter a number:"));
    const result = divideByFour(number);
    if (result % 1 === 0) {
        alert("Expression is true");
    } else {
        alert("Expression is false");
    }

    // 10
    function perimeter(a, b) {
        return 2 * (a + b);
    }
    const a = parseInt(prompt("Enter the length of side a:"));
    const b = parseInt(prompt("Enter the length of side b:"));
    const perimeterValue = perimeter(a, b);
    console.log(`Perimeter of the rectangle: ${perimeterValue}`);

    // 11
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    // 12
    for (let i = 5; i <= 50; i += 5) {
        console.log(i);
    }

    // 13
    let i = 5;
    while (i <= 50) {
        console.log(i);
        i += 5;
    }

    // 14
    i = 5;
    while (i <= 50) {
        console.log(i);
        i += 5;
    }

    // 15
    i = 5;
    while (i < 1) {
        console.log("You can't kill us");
    }

    // 16
    const order = prompt("Enter your order (apple, orange, juice, beer):");
    switch (order) {
        case "apple":
            console.log("Your choice of apple is perfect");
            break;
        case "orange":
            console.log("Your choice of orange is perfect");
            break;
        case "juice":
            console.log("Your choice of juice is perfect");
            break;
        case "beer":
            console.log("Your choice of beer is perfect");
            break;
        default:
            console.log("Go away!");
            break;
    }

    // 17
    const arr = ["a", "b", "c", "d", "e"];
    console.log(arr[2]);

    // 18
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        console.log(arri);
    }

    // 19
    const emptyArr = new Array();
    emptyArr.push("a", "b", "c", "d", "e");
    for (let i = 0; i < emptyArr.length; i++) {
        console.log(emptyArr[i]);
    }

    // 20
    const phoneBook = {
        name: "Ivan Ivan Ivanovich",
        phoneNumber: "+79001234567",
    };
    console.log(`Full Name: ${phoneBook.name}`);
    console.log(`phone number: ${phoneBook.phoneNumber}`);
}