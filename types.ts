export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next == undefined ? null : next;
  }

  toArray(): number[] {
    const arr: number[] = [];
    let curr: ListNode | null = this;
    while (curr != null) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}


export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val == undefined ? 0 : val;
    this.left = left == undefined ? null : left;
    this.right = right == undefined ? null : right;
  }
}
