let nums1 = [1, 2, 3, 4, 4]
let nums2 = [1, 2, 3, 5]
let nums3 = [4, 2, 5, 6, 4]

function hasDuplicate(nums) {
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i + 1]){
            return true;
        };
    } 
    return false;
};

console.log(hasDuplicate(nums1))
console.log(hasDuplicate(nums2))
console.log(hasDuplicate(nums3))


function hasDuplicate2(nums){
    for (let i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true;
            }
        }
    }
}

console.log(hasDuplicate2(nums1))
console.log(hasDuplicate2(nums2))
console.log(hasDuplicate2(nums3))
