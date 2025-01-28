//Javascript in built data structures arrays, sets, maps.
/*
 Javascript sets
 A set is a collection of unique values. Each value can only occur once in a set. The values can be
 of any data types.
*/
// Creating a set
const points = new Set([1, 2,3]);

//Adding values to a set
points.add(4)
points.add(3)
points.add(5)

console.log(points)

//Deleting from a set
points.delete(4)
console.log(points)

//Checking for an element in a set
console.log(points.has(4))
console.log(points.has(3))

for(let point of points){
    console.log(point)
};

//Javascript Maps
//A map holds key-value pairs where the keys can be of any data type. A map remembers original insertion order of keys.

//Creating a Map
const map1 = new Map([
    ['a', 1000]
    ['b', 2]
]);

//Adding items to the map
map1.set('c', 3);
map1.set('d', 400);
map1.set(5, 300);

//  Checking for an item in a map
console.log(map1.has('c'))

//Getting items from the map
console.log(map1.get('c'));

//Deleting an item
map1.delete('b');

//Getting the number of items in a map
console.log("The size of the map is", map1.size)

console.log(map1)