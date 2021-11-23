var d = '()[]{}'
let res = false
const stack = []
const map = new Map([
    [')','('],
    ['}','{'],
    [']','['],
])
for(let item of d){
    if(map.has(item)){
        console.log('map.get(item):', map.get(item))
    if(!stack.length || (stack[stack.length - 1] !== map.get(item))){
        res = false
        break
    }
    stack.pop()
    }else{
    stack.push(item)
    }
}
console.log(stack.length === 0 || res)