/*
    Container with most water #leetcode q11
    You are given an integer array heights where heights[i] represents the height of the ith bar.

    You may choose any two bars to form a container. return the maximum amount of water a container can store.

    Example 1:
    Input height = [1,7,2,5,4,7,3,6]
    index -- These specify the position of an item in an array, starting from 0 - (length - 1)
    length -- 8
    [] -- array
    {} -- Specifies a block of Code or used to create an object.
    Output: 36

    Example 2:
    Input height = [2,2,2]
    Output: 4
*/

// Solution
function maxArea(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }
    console.log(max);
}

const height = [1, 7, 2, 5, 4, 7, 3, 6];
maxArea(height); // 36



// Solution using two pointers
function WaterContainer2(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    console.log(max);
}

WaterContainer2(height); // 36