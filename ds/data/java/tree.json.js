var tree_que = [
	{
		question : "Basic Binary Tree",
		tags : ["Binary", "Tree"]
	},
	{
		question : "Basic Binary Search Tree",
		tags : ["Binary", "Search", "Tree", "BST"]
	},
	{
		question : "Trie",
		tags : ["Trie"]
	},
	{
		question : "Print Nodes At k Distance from Root",
		tags : ["Print", "Nodes", "K", "Distance", "Tree"]
	},
	{
		question : "Find Height Of Binary Tree",
		tags : ["Find", "Height", "Binary", "Tree"]
	},
	{
		question : "Check If Binary Tree Is BST",
		tags : ["Check", "Binary", "Tree", "BST"]
	},
	{
		question : "Find Level In Binary Tree Having Max Sum",
		tags : ["Find", "Level", "Max", "Sum", "Binary", "Tree"]
	},
	{
		question : "Find Max Sum Path Root To Leaf",
		tags : ["Find", "Max", "Sum", "Path", "Binary", "Tree"]
	},
	{
		question : "Check if a binary tree is balanced",
		tags : ["TODO"]
	},
	{
		question : "Given a sorted array, write an algo to create a BST with minimum height",
		tags : ["TODO"]
	},
	{
		question : "Given a BST, write an algo which creates a Linked-list of all the nodes at each depth. Eg., if there is a BST with depth D, you will have d linked lists",
		tags : ["TODO"]
	},
	{
		question : "check is a binary tree is a BST",
		tags : ["TODO"]
	},
	{
		question : "Find the next in-order successor of a given node in BST",
		tags : ["TODO"]
	},
	{
		question : "Find 1st common ancestor of 2 nodes in a binary tree",
		tags : ["TODO"]
	},
	{
		question : "Find if binary tree T1 is a subtree of T2",
		tags : ["TODO"]
	},
	{
		question : "Print all the paths which sum to a given value in a binary tree",
		tags : ["TODO"]
	},
	{
		question : "Maximum element between two nodes of BST",
		tags : ["TODO"]
	},
	{
		question : "Sum of k smallest elements in BST",
		tags : ["TODO"]
	},
	{
		question : "Kth smallest element in BST using O(1) Extra Space",
		tags : ["TODO"]
	},
	{
		question : "Kth Largest Element in BST when modification to BST is not allowed",
		tags : ["TODO"]
	},
	{
		question : "Check whether BST contains Dead End or not",
		tags : ["TODO"]
	},
	{
		question : "Find the closest element in Binary Search Tree",
		tags : ["TODO"]
	},
	{
		question : "Check if given sorted sub-sequence exists in binary search tree",
		tags : ["TODO"]
	},
	{
		question : "In-place Convert BST into a Min-Heap",
		tags : ["TODO"]
	},
	{
		question : "Print Common Nodes in Two Binary Search Trees",
		tags : ["TODO"]
	},
	
	
]

var tree_ans = [
	{
		/* Basic Binary Tree */
		"text" : function(){/*
<p><a href="http://www.sanfoundry.com/java-program-implement-binary-tree/" target="_blank">http://www.sanfoundry.com/java-program-implement-binary-tree/</a></p>

<p>Implementation of the Node object</p>
<pre>
package com.interviewpedia.binarytree.util;

public class Node<E> {

    private Node<E> left;
    private E data;
    private Node<E> right;

    public Node(E data) {
        this.data = data;
    }

    public Node<E> getLeft() {
        return left;
    }

    public void setLeft(Node<E> left) {
        this.left = left;
    }

    public E getData() {
        return data;
    }

    public void setData(E data) {
        this.data = data;
    }

    public Node<E> getRight() {
        return right;
    }

    public void setRight(Node<E> right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Node<?> node = (Node<?>) o;

        return data != null ? data.equals(node.data) : node.data == null;
    }

    public int countChildren() {
        if (left == null && right == null) {
            return 0;
        }

        if (left == null || right == null) {
            return 1;
        }

        return 2;
    }

    public boolean isLeaf() {
        return countChildren() == 0;
    }

    public boolean hasLeft() {
        return left != null;
    }

    public boolean hasRight() {
        return right != null;
    }
}
</pre>

<p>Implementation of the Basic Binary Tree</p>

<pre>
package com.interviewpedia.binarytree.util;

public class BasicBinaryTree<E> {
    protected Node<E> root = null;

    enum Traversal {
        PRE_ORDER, IN_ORDER, POST_ORDER
    }

    public BasicBinaryTree() {
    }

    public BasicBinaryTree(E... elements) {
        for (E element : elements) {
            insert(element);
        }
    }

    public boolean isEmpty() {
        return root == null;
    }

    public int size() {
        return size(root);
    }

    public boolean search(E element) {
        return search(root, element);
    }

    public void insert(E element) {
        Node newNode = new Node(element);
        root = insert(root, newNode);
    }

    public void traverse(Traversal order) {
        switch (order) {
            case PRE_ORDER:
                preOrder(root);
                break;

            case IN_ORDER:
                inOrder(root);
                break;

            case POST_ORDER:
                postOrder(root);
                break;

            default:

                break;
        }
    }

    private Node insert(Node cursor, Node newNode) {
        if (cursor == null)
            cursor = newNode;
        else {
            if (cursor.getRight() == null)
                cursor.setRight(insert(cursor.getRight(), newNode));
            else
                cursor.setLeft(insert(cursor.getLeft(), newNode));
        }
        return cursor;
    }

    private int size(Node cursor) {
        if (cursor == null)
            return 0;
        else {
            int length = 1;
            length += size(cursor.getLeft());
            length += size(cursor.getRight());
            return length;
        }
    }

    private boolean search(Node cursor, E element) {
        if (cursor.getData() == element)
            return true;
        if (cursor.getLeft() != null)
            if (search(cursor.getLeft(), element))
                return true;
        if (cursor.getRight() != null)
            if (search(cursor.getRight(), element))
                return true;
        return false;
    }

    private void preOrder(Node cursor) {
        if (cursor != null) {
            System.out.print(cursor.getData() + " --> ");
            preOrder(cursor.getLeft());
            preOrder(cursor.getRight());
        }
    }

    private void inOrder(Node cursor) {
        if (cursor != null) {
            inOrder(cursor.getLeft());
            System.out.print(cursor.getData() + " --> ");
            inOrder(cursor.getRight());
        }
    }

    private void postOrder(Node cursor) {
        if (cursor != null) {
            postOrder(cursor.getLeft());
            postOrder(cursor.getRight());
            System.out.print(cursor.getData() + " --> ");
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Basic Binary Search Tree */
		"text" : function(){/*
<p>Implementation of Basic Binary Search Tree</p>
<pre>
package com.interviewpedia.binarytree.util;

public class BasicBinarySearchTree {

    private Node<Integer> root = null;

    public BasicBinarySearchTree() {
    }

    public BasicBinarySearchTree(Integer... values) {
        for (Integer value : values) {
            insert(value);
        }
    }

    public void insert(Integer value) {
        Node<Integer> node = new Node<Integer>(value);
        insert(root, node);
    }

    public void delete(Integer value) {
        Node<Integer> toBeDeleted = new Node<Integer>(value);
        root = delete(root, toBeDeleted);
    }

    public void traverse() {
        inOrder(root);
    }

    private Node minimumElement(Node<Integer> cursor) {
        if (cursor.getLeft() == null) {
            return cursor;
        } else {
            return minimumElement(cursor.getLeft());
        }
    }

    private Node<Integer> delete(Node<Integer> cursor, Node<Integer> toBeDeleted) {
        if (cursor == null) {
            return null;
        }

        if (toBeDeleted.getData() < cursor.getData()) {
            cursor.setLeft(delete(cursor.getLeft(), toBeDeleted));

        } else if (toBeDeleted.getData() > cursor.getData()) {
            cursor.setRight(delete(cursor.getRight(), toBeDeleted));

        } else {
            // 1. if nodeToBeDeleted have both children
            if (cursor.getLeft() != null && cursor.getRight() != null) {
                Node temp = cursor;
                // 1.1 Finding minimum element from right
                Node<Integer> minNodeForRight = minimumElement(temp.getRight());
                // 1.2 Replacing current node with minimum node from right subtree
                cursor.setData(minNodeForRight.getData());
                // 1.3 Deleting minimum node from right now
                delete(cursor.getRight(), minNodeForRight);

            }
            // 2. if nodeToBeDeleted has one child
            // 2.1 if nodeToBeDeleted has only left child
            else if (cursor.getLeft() != null) {
                cursor = cursor.getLeft();
            }
            // 2.3. if nodeToBeDeleted has only right child
            else if (cursor.getRight() != null) {
                cursor = cursor.getRight();
            }
            // 3. if nodeToBeDeleted do not have child (Leaf node)
            else
                cursor = null;
        }
        return cursor;
    }

    private void insert(Node<Integer> cursor, Node<Integer> nodeToBeInserted) {
        if (cursor == null) {
            root = nodeToBeInserted;
            return;
        }

        if (nodeToBeInserted.getData() < cursor.getData()) {
            if (cursor.getLeft() == null) {
                cursor.setLeft(nodeToBeInserted);
            } else {
                insert(cursor.getLeft(), nodeToBeInserted);
            }

        } else if (nodeToBeInserted.getData() > cursor.getData())
            if (cursor.getRight() == null) {
                cursor.setRight(nodeToBeInserted);
            } else {
                insert(cursor.getRight(), nodeToBeInserted);
            }
    }

    private void inOrder(Node<Integer> cursor) {
        if (cursor == null) {
            return;
        }
        inOrder(cursor.getLeft());
        System.out.print(cursor.getData() + " --> ");
        inOrder(cursor.getRight());
    }

}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Trie */
		"text" : function(){/*
<p>Implementation of a Word Dictionary</p>
<p><a href="https://www.youtube.com/watch?v=AXjmTQ8LEoI" target="_blank">https://www.youtube.com/watch?v=AXjmTQ8LEoI</a></p>
<pre>
package com.interviewpedia.trie;

import java.util.HashMap;

public class WordDictionary {
    private class TrieNode {
        private boolean isWord;
        private HashMap<Character, TrieNode> mappings;

        public TrieNode() {
            isWord = false;
            mappings = new HashMap<Character, TrieNode>();
        }

        public boolean hasMapping(Character key) {
            return mappings.containsKey(key);
        }

        public TrieNode getMapping(Character key) {
            return mappings.get(key);
        }

        public void addMapping(Character key) {
            mappings.put(key, new TrieNode());
        }

        public void removeMapping(Character key) {
            mappings.remove(key);
        }
    }

    private TrieNode root = new TrieNode();

    public void addWordRecursively(String word) {
        if (word.length() == 0) {
            return;
        }

        addWordRecursively(root, word, 0);
    }

    private void addWordRecursively(TrieNode curr, String word, int index) {
        if (index == word.length()) {
            curr.isWord = true;
            return;
        }

        Character key = word.charAt(index);
        if (!curr.hasMapping(key)) {
            curr.addMapping(key);
        }
        addWordRecursively(curr.getMapping(key), word, index + 1);
    }

    public boolean search(String word) {
        if (word.length() == 0) {
            return false;
        }

        return search(root, word, 0);
    }

    private boolean search(TrieNode curr, String word, int index) {
        if (index == word.length()) {
            return curr.isWord;
        }

        Character key = word.charAt(index);
        if (!curr.hasMapping(key)) {
            return false;
        }

        return search(curr.getMapping(key), word, index + 1);
    }

    public void delete(String word) {
        if (word.length() == 0) {
            return;
        }

        delete(root, word, 0);
    }

    private boolean delete(TrieNode curr, String word, int index) {
        if (index == word.length()) {
            if (curr.isWord) {
                curr.isWord = false;
                return curr.mappings.size() == 0;

            } else {
                return false;
            }
        }

        Character key = word.charAt(index);
        if (!curr.hasMapping(key)) {
            return false;
        }
        boolean deleteCurrentNote = delete(curr.getMapping(key), word, index + 1);
        if (deleteCurrentNote) {
            curr.removeMapping(key);
            return curr.mappings.size() == 0;
        }
        return false;
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Print Nodes At k Distance from Root */
		"text" : function(){/*
<p>Given a root of a tree, and an integer k. Print all the nodes which are at k distance from root.</p>
<p>For example, in the below tree, 1, 3, 5 are at distance 2 from root.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4<br />&nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\<br />&nbsp; &nbsp; 2 &nbsp; &nbsp; &nbsp; 8<br />&nbsp; / &nbsp;\ &nbsp; &nbsp; /<br />1 &nbsp; &nbsp;3 &nbsp; 5</p>
<pre>
package com.interviewpedia.binarytree.puzzles;

import com.interviewpedia.binarytree.util.BasicBinarySearchTree;
import com.interviewpedia.binarytree.util.Node;

public class PintNodesAtKDistancefromRoot extends BasicBinarySearchTree {

    public PintNodesAtKDistancefromRoot() {
        super();
    }

    public PintNodesAtKDistancefromRoot(Integer... elements) {
        super(elements);
    }

    public void print(int k) {
        printKDistance(root, k);
    }

    private void printKDistance(Node<Integer> cursor, int k) {
        if (cursor == null) {
            return;
        }

        if (k == 0) {
            System.out.print(cursor.getData() + ", ");
            return;
        } else {
            printKDistance(cursor.getLeft(), k - 1);
            printKDistance(cursor.getRight(), k - 1);
        }
    }


    public static void main(String[] args) {
        PintNodesAtKDistancefromRoot tree = new PintNodesAtKDistancefromRoot(4, 2, 8, 1, 3, 5);
        int k = 2;
        tree.traverse();
        System.out.println();
        System.out.print("Nodes " + k + " distance apart: ");
        tree.print(k);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Find Height Of Binary Tree */
		"text" : function(){/*
<p>Input: 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
<p>Output: 5</p>
<pre>
package com.interviewpedia.binarytree.puzzles;

import com.interviewpedia.binarytree.util.BasicBinaryTree;
import com.interviewpedia.binarytree.util.Node;

public class FindHeightOfBinaryTree {

    static class BinaryTree extends BasicBinaryTree<Integer> {

        public BinaryTree() {
            super();
        }

        public BinaryTree(Integer... elements) {
            super(elements);
        }

        public int computeHeight() {
            return getHeight(root);
        }

        private int getHeight(Node cursor) {
            if (cursor == null) {
                return 0;
            }

            return Math.max(getHeight(cursor.getLeft()), getHeight(cursor.getRight())) + 1;
        }

    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree(1, 2, 3, 4, 5, 6, 7, 8, 9);
        tree.traverse(BinaryTree.Traversal.IN_ORDER);
        int height = tree.computeHeight();
        System.out.println("\nHeight: " + height);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Check If Binary Tree Is BST */
		"text" : function(){/*
<pre>
package com.interviewpedia.binarytree.puzzles;

import com.interviewpedia.binarytree.util.BasicBinarySearchTree;
import com.interviewpedia.binarytree.util.BasicBinaryTree;
import com.interviewpedia.binarytree.util.Node;

import java.util.ArrayList;
import java.util.List;

public class CheckIfBinaryTreeIsBST {

    static class BinaryTree extends BasicBinarySearchTree {
        public BinaryTree() {
            super();
        }

        public BinaryTree(Integer... elements) {
            super(elements);
        }

        Node<Integer> prev;

        public boolean isBST() {
            prev = null;
            return isBST(root);
        }

        public boolean isBST(Node<Integer> node) {
            // traverse the tree in inorder fashion and
            // keep a track of previous node
            if (node != null) {
                if (!isBST(node.getLeft()))
                    return false;

                // allows only distinct values node
                if (prev != null && node.getData() <= prev.getData())
                    return false;
                prev = node;
                return isBST(node.getRight());
            }
            return true;
        }

    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree(10, 14, 12, 8);
        tree.traverse();
        System.out.println(tree.isBST());

    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Find Level In Binary Tree Having Max Sum */
		"text" : function(){/*
<p><a href="http://www.makeinjava.com/find-level-binary-tree-maximum-sum-java-non-recursive-example/" target="_blank">http://www.makeinjava.com/find-level-binary-tree-maximum-sum-java-non-recursive-example/</a></p>
<pre>
package com.interviewpedia.binarytree.puzzles;

import com.interviewpedia.binarytree.util.BinaryNode;

import java.util.LinkedList;
import java.util.Queue;

// Time complexity is O(n)
public class FindLevelInBinaryTreeHavingMaxSum {

    public static final BinaryNode LEVEL_DELIMITER = null;

    
    //    Find out the level, which having maximum sum, for a given binary tree
    //                    55
    //                  /      \
    //               50         40
    //             /   \      /    \
    //           25    80   45      90
    //                    / \     /  \
    //                   10  35  65   75

    //    Sum at level 0: 55
    //    Sum at Level 1: 50 + 40 = 90
    //    Sum at level 2: 25 + 80 + 45 + 90 = 240
    //    Sum at level 4: 10 + 35 + 65 + 75 = 185

    //    So, Level 2 has maximum sum of 240
    
    public static void printMaxSumLevel(BinaryNode root) {
        if (root == null) {
            System.out.println("Tree is empty");
            return;
        }

        Queue<BinaryNode> queue = new LinkedList<BinaryNode>();
        // Root is at level 0, push root node to queue
        queue.offer(root);
        // Push null as level delimiter, to the queue
        queue.offer(LEVEL_DELIMITER);

        int level = 0, maxSum = 0;
        int localLevel = 0, localSum = 0;

        while (!queue.isEmpty()) {
            BinaryNode node = queue.poll();

            if (node != null) {
                if (node.left != null) {
                    queue.offer(node.left);
                }

                if (node.right != null) {
                    queue.offer(node.right);
                }
                localSum += node.data;

            } else {
                if (!queue.isEmpty()) {
                    queue.offer(LEVEL_DELIMITER);
                }

                // Update maxSum if it is less than local sum and Save the level of local sum
                if (localSum > maxSum) {
                    maxSum = localSum;
                    level = localLevel;
                }
                // Reset the level sum for next level calculation
                localSum = 0;
                localLevel++;
            }
        }
        System.out.println("Max Sum = " + maxSum + " is at Level = " + level);
    }

    public static void main(String[] args) {
        BinaryNode root = buildTree();
        printMaxSumLevel(root);
    }

    public static BinaryNode buildTree() {

    //                 55
    //              /      \
    //          50         40
    //         /   \      /    \
    //       25    80   45      90
    //                 / \     /  \
    //               10  35  65   75

        //  level 0
        BinaryNode root = new BinaryNode(55);

        //  level 1
        root.left = new BinaryNode(50);
        root.right = new BinaryNode(40);

        //  level 2
        root.left.left = new BinaryNode(25);
        root.left.right = new BinaryNode(80);
        root.right.left = new BinaryNode(45);
        root.right.right = new BinaryNode(90);

        //  level 3
        root.right.left.left = new BinaryNode(10);
        root.right.left.right = new BinaryNode(35);
        root.right.right.left = new BinaryNode(65);
        root.right.right.right = new BinaryNode(75);

        return root;
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Find Max Sum Path Root To Leaf */
		"text" : function(){/*
<p><a href="http://www.makeinjava.com/find-maximum-sum-root-leaf-path-binary-tree-java-recursive-example/" target="_blank">http://www.makeinjava.com/find-maximum-sum-root-leaf-path-binary-tree-java-recursive-example/</a></p>
<pre>
package com.interviewpedia.binarytree.puzzles;

import com.interviewpedia.binarytree.util.BinaryNode;

import java.util.Arrays;

// Given a binary tree, find maximum sum from root to leaf paths using recursive algorithm
public class FindMaxSumPathRoot2Leaf {

    private static int maxSum = 0;
    private static int[] arr;

    //    Given a binary tree, find maximum sum from root to leaf paths using recursive algorithm
    //                     50
    //                  /      \
    //               30         30
    //             /   \      /    \
    //           40    10   30      60

    //    Path 1: 50 -> 30 -> 40 Sum=120
    //   Path 2: 50 -> 30 -> 10 Sum=90
    //    Path 3: 50 -> 30 -> 30 Sum=110
    //    Path 4: 50 -> 30 -> 60 Sum=140

    //    So, Path [50->30->60] has maximum sum of 140
    
    public static void printMaxSumPath(BinaryNode root, int[] path) {
        maxSum = Integer.MIN_VALUE;
        maxSumPathRoot2Leaf(root, path, 0, 0);
        System.out.println("Maximum Sum :" + maxSum);
        System.out.println("Root to Leaf Path: " + Arrays.toString(arr));
    }

    public static void maxSumPathRoot2Leaf(BinaryNode root, int[] path, int index, int sum) {
        if (root == null) {
            return;
        }

        path[index++] = root.data;
        sum += root.data;

        if (root.left == null && root.right == null) {
            if (sum > maxSum) {
                maxSum = sum;
                arr = Arrays.copyOf(path, index);
            }
            return;
        }
        maxSumPathRoot2Leaf(root.left, path, index, sum);
        maxSumPathRoot2Leaf(root.right, path, index, sum);
        return;
    }


    public static void main(String[] args) {
        BinaryNode root = buildTree();
        int[] path = new int[512];
        printMaxSumPath(root, path);
    }

    public static BinaryNode buildTree() {
    //                     50
    //                  /      \
    //               30         30
    //             /   \      /    \
    //           40    10   30      60
      
        //  level 0
        BinaryNode root = new BinaryNode(50);

        //  level 1
        root.left = new BinaryNode(30);
        root.right = new BinaryNode(30);

        //  level 2
        root.left.left = new BinaryNode(40);
        root.left.right = new BinaryNode(10);
        root.right.left = new BinaryNode(30);
        root.right.right = new BinaryNode(60);

        return root;
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* TODO */
		"text" : function(){/*
<p>TODO</p>
<pre>

</pre>
		*/}.toString().slice(14,-3)
	},
]