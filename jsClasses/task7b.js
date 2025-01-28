let a = 'tar'
let b = 'rat'

//split("").sort("").join("")
//split: this splits the array
//sort: sorts the array in alphabetical order
//join: joins it back



let s = split("").sort("").join("")
let t = split("").sort("").join("")
anagram(() => {
    if(s === t){
      true;
    }
    else{
        false;
    }
})

anagram;