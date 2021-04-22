/* Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
linkedList1 = [1,2,3]
linkedList2 = [1,4,7]

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let linkedList1 = new ListNode(1)
linkedList1.next = new ListNode(2)
linkedList1.next.next = new ListNode(3)
console.log(linkedList1)

let linkedList2 = new ListNode(1)
linkedList2.next = new ListNode(3)
linkedList2.next.next = new ListNode(7)
console.log(linkedList2)

let mergeTwoLists = (l1, l2) => {
  if(!l1) return l2
  if(!l2) return l1

  let newList = new ListNode(-1)
  let result = newList

  while (l1 && l2) {
    if (l1.val > l2.val) {
      newList.next = new ListNode(l2.val);
      newList = newList.next;
      l2 = l2.next
    } else if (l2.val > l1.val) {
      newList.next = new ListNode(l1.val);
      newList = newList.next;
      l1 = l1.next;
      } else {
        newList.next = new ListNode(l1.val);
        newList = newList.next;
        l1 = l1.next

        newList.next = new ListNode(l2.val);
        newList = newList.next;
        l2 = l2.next;
      }
    }

    if (l1) newList.next = l1
    if (l2) newList.next = l2

    return result.next
}

let result1 = mergeTwoLists(linkedList1, linkedList2)