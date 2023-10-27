import { TreeNode } from "../types";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  let l = invertTree(root.left);
  let r = invertTree(root.right);

  root.left = r;
  root.right = l;

  return root;
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(invertTree(root));
