// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

// .push()

var nameArray = [  ];
nameArray.push("Randy", "Salazar");

console.log(nameArray);

var genericNumberArray = [1, 2, 3, 4, 5];
genericNumberArray.push(6, 7, 8, 9, 10);

console.log(genericNumberArray);

// .pop()

var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var popResult = colors.pop();

console.log(colors);
console.log(popResult);

// .reverse()

var scrambledWords = ['win', 'the', 'for', 'burritos'];
scrambledWords.reverse();

console.log(scrambledWords);

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
phoneNumber.reverse();

console.log(phoneNumber);

// .shift()

var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var nextOrder = orderQueue.shift();

console.log(nextOrder);

// .sort

var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
mixedNums.sort();

console.log(mixedNums);

var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
mixedWords.sort();

console.log(mixedWords);

// .splice()

var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var notFruit = fruitCollection.splice(-5, 3 );

console.log(fruitCollection);
console.log(notFruit);

var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
gemBox.splice(5, 8, "Sapphire");

console.log(gemBox);

//inserting elements .unshift()

var upToTen = [1, 2, 9, 10];
upToTen.splice(0,2);
upToTen.unshift(1,2, 3, 4, 5, 6, 7, 8);

console.log(upToTen);

//.concat()
var brown1 = ['brown'];
var brown2 = ['brown'];
var brown3 = ['brown'];
var brown4 = ['brown'];
var brown5 = ['brown'];

var brownOnly = brown1.concat(brown2, brown3, brown4, brown4);

console.log(brownOnly);


//.unshift 

var orderedValues = [4, 5, 6, 7, 8, 9, 10];
orderedValues.unshift(1,2, 3);

console.log(orderedValues);

var orderedValuesNewLength = orderedValues.length;
console.log(orderedValuesNewLength);

//concat

var randomThingsArray=genericNumberArray.concat(colors);

console.log(randomThingsArray);

// var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];

var customOrder = [ {takeOut: "Pop Corn"}, {takeOut: "Chips"}];
var updatedOrders = customOrder.concat(orderQueue);
console.log(updatedOrders);


