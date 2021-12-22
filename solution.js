
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
