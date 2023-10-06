import { ListNode } from "../types";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let result: ListNode | null = null;

  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    result = list1;
    result.next = mergeTwoLists(list1.next, list2);
  }

  if (list1.val >= list2.val) {
    result = list2;
    result.next = mergeTwoLists(list1, list2.next);
  }

  return result;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2)?.toArray());
