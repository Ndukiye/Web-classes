
/*
Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
create a function "groupAnagrams" that returns an array of anagrams

An anagram is a string that contains the exact same characters as another string, but the order of the
characters can be different.

Example 1:
input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]
output: [["hat"],["act",'cat],["stop","pots","tops"]]

Example 2:
input: strs = ["x"]
output: [["x"]]

Example 3:
input: strs=[""]
output: [[""]]
*/
 //solution

//  function groupAnagrams(strs) {
//       let anagrams = new Map();

//       for(str of strs){
//       let sortedstrs = str
//       .split('').sort().join('');

//       if(!anagrams.has(sortedstrs)){
//         anagrams.set(sortedstrs, [str]);//sets the key sortedstrs with the str array value into the map
//       } else{
//         anagrams.get(sortedstrs).push(str);//gets the key which is stored in the map and then pushes the str array value into the key
//       }
//       }
//        return Array.from(anagrams.values());//converts the map anagrams into an array
       
//  };

 //let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
//  let result = groupAnagrams(strs);
//  console.log(result);


// function groupAnagrams2(strs){
//   const group = {};
//   for(let str of strs){
//     const key = str.split("").sort().join("");
//     group[key] = group[key] || [];
//     group[key].push(str);
//   }
//   console.log(group)
//   return Object.values(group)
// }

//groupAnagrams(strs);


//let z = 5;
//console.log(z);


