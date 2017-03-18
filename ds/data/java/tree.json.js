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
		question : "TODO",
		tags : ["qqq"]
	},
	{
		question : "TODO",
		tags : ["qqq"]
	},
	{
		question : "TODO",
		tags : ["qqq"]
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