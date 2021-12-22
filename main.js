/* 
👉 Write your kata here!
*/

// Function takes in an array of integers. The array can vary in length. Count the amount of odd numbers and even numbers.
// Return which ever count is higher e.g
//     -if there are more even numbers than odd, then return the amount of even numbers
//     -if there are more odd numbers than even, then return the amount of odd numbers
//     -if the amount of odd and even numbers are the same, then return a string saying "Equal".


//👉 Write the function your CodeWarriors will start with below here:

export default function oddOrEven(array){
    let oddCount = 0;
    let evenCount = 0;
    array.forEach((element) => {
        if(element % 2 === 0){
            evenCount++
        } else if (element % 2 !== 0){
            oddCount++;
        }
    });

    if(oddCount > evenCount) return oddCount;
    if(evenCount > oddCount) return evenCount;
    if(oddCount === evenCount) return "Equal";
}


