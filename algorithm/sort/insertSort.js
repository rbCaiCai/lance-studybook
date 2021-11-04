/**
 * 插入排序
 * 比较前后2个值，如果符合条件则进行位置对调并且依次往前比较
*/

const arr = [5,2,0,6,8,9]

console.log('正序:', sort(arr))

function sort(arr){
    const len = arr.length
    
    for(let i = 0; i < len; i++){
        let index = i + 1 
        
        // 依次比较前后2个值，如果符合条件则进行位置对调
        while(index >= 0 && arr[index] < arr[index - 1]){
            const temp = arr[index]
            arr[index] = arr[index - 1]
            arr[index - 1] = temp
            // 依次往前比较
            index --
        }
    }
    return arr
}