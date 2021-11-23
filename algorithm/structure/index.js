let array = [2,3,8,7,1,2,2,9,8]
let maxValue = 0

for(let i=0; i< array.length; i++){
    if(maxValue < array[i]){
        maxValue = array[i]
    }
}

let sortArray = countingSort(array, maxValue)

console.log(sortArray)

function countingSort(arr, maxValue){
    let bucket = new Array(maxValue + 1)
    for(let i=0;i< arr.length; i++){
        let num = arr[i]
        if(bucket[num] == null){
            bucket[num] = 1
        }else{
            bucket[num] += 1
        }
    }

    let arrCurrIndex = 0

    for(let i=0; i< bucket.length; i++){
        while(bucket[i] > 0){
            let num = i
            arr[arrCurrIndex++] = num
            bucket[i] -=1
        }
    }
    return arr
}