/**
 * 选择排序：就是选出最小（或最大）的一个值，存放在数组的起始位置，然后再从剩余的中寻找到最小（大）值，然后放到已排序的值末尾。
*/

const arr = [1,3,2,5]

console.log('正序:', sort(arr))

function sort(arr){
    const len = arr.length
    // 最小值 标记索引
    let markIndex

    for(let i=0; i< len - 1; i++){
        markIndex = i

        // 内循环找到本轮中最小的值
        for(let j = i + 1; j < len; j++){
            // 将数组中的每个值（除开与之对比的值“j=i+1”）与标记的值进行计算，符合条件则将值的索引标识为 标记索引
            if(arr[j] < arr[markIndex]){
               markIndex = j
            }
        }
        // 找到了最小的值，进行位置对调
        const temp = arr[i]
        arr[i] = arr[markIndex]
        arr[markIndex] = temp
    }
    return arr
}