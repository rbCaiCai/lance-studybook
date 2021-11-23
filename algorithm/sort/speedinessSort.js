/**
 * 
 * @param {*} arr
 * @param {*} left 左边界
 * @param {*} right 右边界
 */
function sort(arr, left, right){
    let len = arr.length
    let partitionIndex //基准

    left = left? left : 0
    right = right ? right : len - 1

    // 结束条件
    if(right > left){
        partitionIndex = partition(arr,left,right)
        sort(arr, left, partitionIndex - 1)
        sort(arr, partitionIndex + 1, right)
    }
    return arr
}

/**
 * 分组
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr,left,right){
    let pivot = left //基准
    let index = pivot + 1
    for (let i = index; i <= right; i++) {
        if(arr[i] < arr[pivot]){
            swap(arr, i, index)
            index ++
        }
    }

    swap(arr, pivot, index - 1)

    return index - 1
}
/**
 * 交换
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


console.log(sort([5,4,3,2,1]))