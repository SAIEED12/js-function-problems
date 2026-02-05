/* Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]
 */

let arr = [5, 3, 5, 2, 3, 9, 2, 7];
function removeDuplicates(arr){
    let uniqueArr = [];
    for(let i of arr){
        if(!uniqueArr.includes(i)){
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates(arr))