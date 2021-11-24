// 链表的基础知识
// 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。
// 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括2个部分，一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。

// 链表适用于存储一些经常增加、删除的数据。

// 写一个链表
// 增加
// 删除
// 修改
// 查询

// 单向链表
// 双向链表


// 环形链表
// 思路：快慢指针
// 定义2个指针，一个慢指针、一个慢指针，并且一开始慢指针指向head节点，快指针指向head.next节点，
// 然后快指针每次向前移动2步，慢指针每次向前移动1步，开始遍历链表。
// 如果链表有环，那么快慢指针一定会相遇，指向同一个节点，当指向同一个节点时，遍历结束。

function ListNode(val){
    this.val = val
    this.next = null
}

/**
 * @param { ListNode } head
 * @returns { boolean }
*/
let hasCycle = function(head){
    if(!head) return false

    let pre = head, cur = head

    while(cur && cur.next){
        pre = pre.next
        cur = cur.next.next
        if(pre === cur){
            return true
        }
    }

    return false
}


// 环形链表2
// 找环的入口

let detectCycle = function(head) {
    if(!head) return null
    let pre = head, cur = head

    while(cur && cur.next){
        pre = pre.next
        cur = cur.next.next
        if(pre === cur){
            let temp = head
            while(pre !== temp){
                pre = pre.next
                temp = temp.next
            }
            return pre
        }
    }
    return null
}

// 快乐数
let isHappy = function(n){
    let pre = n, cur = getNext(n)
    while(cur !== pre && cur !==1){
        pre = getNext(pre)
        cur = getNext(getNext(cur))
    }
    return cur === 1 
}

let getNext = function(n){
    let t = 0
    while(n){
        t+=(n%10) * (n%10)
        n = Math.floor(n/10)
    }
    return t
}
// 反转链表
// 定义指针--pre ，pre指向null
// 定义指针 -- cur, cur指向我们的头节点
// 定义指针 -- next, next指向cur
// 所指向节点的下一个节点。
// 这样我们的指针就初始化完毕了
// 然后重复上述操作
// 当cur指针指向null的时候，我们就完成了整个链表的反转

let reverseList = function(head){
    if(!head) return null

    let pre = null, cur = head
    while(cur){
        // [cur.next, pre, cur] = [pre, cur, cur.next]
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

// 反转链表2
/**
 * 12345null
 * 我们需要将第m个节点到第n个节点的链表进行反转。
 * 例如m=2,n=4,
 * 首先我们定义一个虚拟头节点，起名叫做hair,将它指向我们的真实头节点
 * 定义一个指针pre指向虚拟头节点。
 * 定义一个指针cur指向pre指针所指向节点的下一个节点
 * 让我们的pre指针和cur指针同时向后移动，直到我们找到了第m个节点
 * 定义指针con和tail,con指向pre所指向的节点，tail指向cur指针所指向的节点。
 * con所指向的节点，将是我们将部分链表反转后，部分链表头节点的前驱节点。
 * tail则是部分链表反转后的尾节点。
 * 
 * 开始我们的链表反转，首先定义一个指针third指向cur所指向的节点的下一个节点
 * 然后将cur所指向的节点指向pre所指向的节点，将pre指针移动到cur指针所在的位置。
 * 将cur指针移动到third指针所在的位置，直到我们的pre指针指向第n个节点，重复上面步骤
 * 此时pre指针指向了第m个节点并且将第m到第n个节点之间反转完毕
 * 
 * 
*/

let reverseBetween = function(head, left, right){
    if(!head) return null

    let ret = new ListNode(-1, head), pre =ret, cnt = right - left + 1
    while(--left){
        pre = pre.next

    }
    pre.next = reverse(pre.next, cnt)

    return ret.next

}
let reverse = function(head,n){
    let pre = null, cur = head
    while(n--){
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }

    head.next = cur
    return pre

    return pre
}

/**
 * K个一组反转链表
 * 
*/

let reverseKGroup = function(head, k){
    if(!head) return null
    let ret = new ListNode(-1, head), pre = ret

    do{
        pre.next = reverse(pre.next, k)
        for(let i=0;i< k && pre; i++){
            pre = pre.next
        }
        if(!pre) break;
    }while(1);

    return ret.next
}

let reverse = function(head,n){
    let pre = head, cur = head, con = n
    while(--n && pre){
        pre = pre.next
    }
    if(!pre) return head
    pre = null
    while(con--){
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    head.next = cur
    return pre
}

// draw.io