/**
 * 冒泡排序，把最大（或最小）往后调，相邻的2个值进行比较，如果符合设定条件则进行位置对调。
 * 
*/

const arr = [1,3,2,5]

console.log('正序:', sort(arr))

function sort(arr){
    const len = arr.length - 1

    for(let i = 0; i < len; i++){
        // 每次内循环结束最大的值会被移动到尾部，最大的值将在下一次循环中不纳入计算（len - i）
        for(let j = 0; j < len - i; j++){
            const nextIndex = j + 1
            // 相邻的值进行比较，如果符合条件则进行位置对调
            if(arr[j] > arr[nextIndex]){
                const temp = arr[j]
                arr[j] = arr[nextIndex]
                arr[nextIndex] = temp
            }
        }
    }
    return arr
}