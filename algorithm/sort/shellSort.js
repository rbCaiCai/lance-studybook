/**
 * 希尔排序
 * @param { Array } arr 被排序的数组
 * @returns 返回排序后结果
*/
function shellSort(arr){
    const len = arr.length
    // 获取间隔（步长）
    let gap = Math.floor(len / 2)

    // 循环gap间隔，逐步缩小为1
    for(gap; gap > 0; gap = Math.floor(gap / 2)){

        // 对当前分期执行直接插入排序
        for(let i = gap; i< len; i++){
            let temp = arr[i], j
            for(j = i-gap; j >=0 && arr[j] > temp; j-=gap){
                arr[j+gap] = arr[j]
            }
            arr[j+gap] = temp
        }
    }
    return arr
}


console.log(shellSort([8,9,1,7,2,3,4,6,0]))