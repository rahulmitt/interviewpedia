var linkedlist_que = [
	{
		question : "Basic Linked List",
		tags : ["qqq"]
	},
	{
		question : "Count Occurence Of Element",
		tags : ["qqq"]
	},
	{
		question : "Detect Loop In Linked List",
		tags : ["qqq"]
	},
	{
		question : "Find Length Of Linked List",
		tags : ["qqq"]
	},
	{
		question : "Find Middle Node",
		tags : ["qqq"]
	},
	{
		question : "Find Nth Node",
		tags : ["qqq"]
	},
	{
		question : "Find Nth Node From End",
		tags : ["qqq"]
	},
	{
		question : "Reverse Linked List",
		tags : ["qqq"]
	},
	{
		question : "Search Element In Linked List",
		tags : ["qqq"]
	},
	{
		question : "Swap Two Nodes",
		tags : ["qqq"]
	},
	
]

var linkedlist_ans = [
    {
	/* Basic Linked List */
	"text" : function(){/*
<p>Implementation for a node object</p>
<pre>
package com.interviewpedia.linkedlist.util;

public class Node<E> {
    private E data;
    private Node<E> next;

    public Node(E data) {
        this.data = data;
    }

    public E getData() {
        return data;
    }

    public void setData(E data) {
        this.data = data;
    }

    public Node<E> getNext() {
        return next;
    }

    public void setNext(Node<E> next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return "Node{" +
                "data=" + data +
                '}';
    }
}
</pre>
<p>Implementation for basic linked list</p>
<pre>
package com.interviewpedia.linkedlist.util;

public class BasicLinkedList<E> {
    protected Node<E> head = null;

    public BasicLinkedList() {
    }

    public BasicLinkedList(E... elements) {
        for (E data : elements) {
            add(data);
        }
    }

    public void add(E data) {
        Node<E> node = new Node<E>(data);
        if (head == null) {
            head = node;
            return;
        }

        Node<E> cursor = null;
        for (cursor = head; cursor.getNext() != null; cursor = cursor.getNext()) {
        }
        cursor.setNext(node);
    }

    public void add(int index, E data) {
        Node<E> node = new Node<E>(data);

        if (index == 0) {
            node.setNext(head);
            head = node;
            return;
        }

        Node<E> cursor = head;
        int i = 0;
        for (; cursor.getNext() != null && i < index - 1; cursor = cursor.getNext(), i++) ;

        if (i == index - 1) {
            node.setNext(cursor.getNext());
            cursor.setNext(node);
            return;
        } else {
            throw new IndexOutOfBoundsException("Index=" + index + " :: Size=" + (i + 1));
        }
    }

    public Node<E> remove(int index) {
        if (head == null) {
            throw new IndexOutOfBoundsException("Index=" + index + " :: Size=0");
        }

        Node<E> deleted = null;

        if (index == 0) {
            deleted = head;
            head = head.getNext();
            return deleted;
        }

        int iCursor = 0;
        for (Node cursor = head; cursor.getNext() != null; cursor = cursor.getNext(), iCursor++) {
            if (iCursor == index - 1) {
                deleted = cursor.getNext();
                cursor.setNext(deleted.getNext());
                return deleted;
            }
        }

        throw new IndexOutOfBoundsException("Index=" + index + " :: Size=" + (iCursor + 1));
    }

    public void traverse() {
        for (Node cursor = head; cursor != null; cursor = cursor.getNext()) {
            System.out.print(cursor.getData() + " --> ");
        }
        System.out.println("NULL");
    }

    public static void main(String[] args) {
        BasicLinkedList<Integer> list = new BasicLinkedList<Integer>(1, 2, 3, 4);
        list.traverse();
        list.add(4, 5);
        list.traverse();
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Count Occurence Of Element */
	"text" : function(){/*
<p>Input: 1, 2, 3, 4, 3, 5, 8, 3, 8</p>
<p>Count occurence of element 3</p>
<p>Output:&nbsp;3 appeared 3 times</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class CountOccurenceOfElement {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public int countOccurence(E element) {
            int count = 0;
            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext()) {
                if(element.equals(cursor.getData())){
                    count++;
                }
            }
            return count;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4, 3, 5, 8, 3, 8);
        System.out.println("3 appeared " + list.countOccurence(3) + " times");
        System.out.println("8 appeared " + list.countOccurence(8) + " times");
        System.out.println("1 appeared " + list.countOccurence(1) + " times");
        System.out.println("30 appeared " + list.countOccurence(30) + " times");
    }
}

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Detect Loop In Linked List */
	"text" : function(){/*
<p><br /><a href="https://www.quora.com/How-does-Floyds-cycle-finding-algorithm-work" target="_blank">https://www.quora.com/How-does-Floyds-cycle-finding-algorithm-work</a><br />Floyd's cycle-finding algorithm</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class DetectLoopInLinkedList {
    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public void induceLoop() {
            Node<E> cursor;
            for (cursor = head; cursor.getNext() != null; cursor = cursor.getNext()) {
            }
            cursor.setNext(head);
        }

        public boolean hasLoop() {
            Node<E> slowCursor = head;
            Node<E> fastCursor = head;

            for (; slowCursor != null && fastCursor != null && fastCursor.getNext() != null; ) {
                slowCursor = slowCursor.getNext();
                fastCursor = fastCursor.getNext().getNext();

                if (slowCursor == fastCursor) {
                    return true;
                }
            }
            return false;
        }

        public void removeLoop() {
            //TODO:
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4, 5, 6, 7, 8, 9);
        list.induceLoop();
        System.out.println("Has loop: " + list.hasLoop());

        list.removeLoop();
        System.out.println("Has loop: " + list.hasLoop());
        list.traverse();
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Find Length Of Linked List */
	"text" : function(){/*
<p>Input: 1, 2, 3, 4</p>
<p>Output: 4</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class FindLengthOfLinkedList {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public int size() {
            int count = 0;
            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext()) {
                count++;
            }
            return count;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4);
        System.out.println("Size=" + list.size());

    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Find Middle Node */
	"text" : function(){/*
<p>Input: 10, 20, 30, 40, 50</p>
<p>Output: 30</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class FindMiddleNode {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public Node<E> find() {

            if (head == null) {
                return null;
            }

            Node<E> slowCursor = head;
            Node<E> fastCursor = head;

            for (; fastCursor.getNext() != null && fastCursor.getNext().getNext() != null;
                 slowCursor = slowCursor.getNext(), fastCursor = fastCursor.getNext().getNext());
            return slowCursor;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(10, 20, 30, 40, 50);
        System.out.println(list.find());
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Find Nth Node */
	"text" : function(){/*
<p>Input: 10, 20, 30, 40, 50</p>
<p>n=1</p>
<p>Output: 20</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class FindNthNode {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public Node<E> find(int index) {

            if (head == null) {
                return null;
            }

            int i = 0;
            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext(), i++) {
                if (i == index) {
                    return cursor;
                }
            }

            return null;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(10, 20, 30, 40, 50);
        System.out.println(list.find(0));
        System.out.println(list.find(1));
        System.out.println(list.find(2));
        System.out.println(list.find(3));
        System.out.println(list.find(4));
        System.out.println(list.find(5));
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Find Nth Node From End */
	"text" : function(){/*
<p>Input: 10, 20, 30, 40, 50</p>
<p>n=1</p>
<p>Output: 40</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class FindNthNodeFromEnd {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public int size() {
            int iCursor = 0;
            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext(), iCursor++) {
            }

            return iCursor;
        }

        public Node<E> find(int n) {

            int index = size() - n - 1;

            if (head == null) {
                return null;
            }

            int iCursor = 0;
            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext(), iCursor++) {
                if (iCursor == index) {
                    return cursor;
                }
            }

            return null;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(10, 20, 30, 40, 50);
        System.out.println(list.find(0));
        System.out.println(list.find(1));
        System.out.println(list.find(2));
        System.out.println(list.find(3));
        System.out.println(list.find(4));
        System.out.println(list.find(5));
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Reverse Linked List */
	"text" : function(){/*
<p>Input: 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 9 --> NULL</p>
<p>Output: 9 --> 8 --> 7 --> 6 --> 5 --> 4 --> 3 --> 2 --> 1 --> NULL</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class ReverseLinkedList {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public void reverse() {
            if (head != null) {
                head = reverse(head, null);
            }
        }

        private Node<E> reverse(Node curr, Node prev) {
            if (curr.getNext() == null) {
                curr.setNext(prev);
                return curr;
            }

            Node r = reverse(curr.getNext(), curr);
            curr.setNext(prev);
            return r;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4, 5, 6, 7, 8, 9);
        list.traverse();

        list.reverse();
        list.traverse();
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Search Element In Linked List */
	"text" : function(){/*
<p>Input: 1, 2, 3, 4</p>
<p>Search Element: 4</p>
<p>Output: 4</p>

<p>Search Element: 5</p>
<p>Output: null</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class SearchElementInLinkedList {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public Node<E> search(E element) {

            if (head == null) {
                return null;
            }

            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext()) {
                if (cursor.getData().equals(element)) {
                    return cursor;
                }
            }
            return null;
        }
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4);
        Node<Integer> result = null;

        result = list.search(4);
        System.out.println(result);

        result = list.search(5);
        System.out.println(result);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Swap Two Nodes */
	"text" : function(){/*
<p>Input: 1 --> 2 --> 3 --> 4 --> 5 --> NULL</p>
<p>Swap elements 1 with 5</p>
<p>Output: 5 --> 2 --> 3 --> 4 --> 1 --> NULL</p>
<pre>
package com.interviewpedia.linkedlist.puzzles;

import com.interviewpedia.linkedlist.util.BasicLinkedList;
import com.interviewpedia.linkedlist.util.Node;

public class SwapTwoNodes {

    static class LinkedList<E> extends BasicLinkedList<E> {

        public LinkedList() {
            super();
        }

        public LinkedList(E... elements) {
            super(elements);
        }

        public Node<E> search(E element) {

            if (head == null) {
                return null;
            }

            for (Node<E> cursor = head; cursor != null; cursor = cursor.getNext()) {
                if (cursor.getData().equals(element)) {
                    return cursor;
                }
            }
            return null;
        }

        public void swap(E element1, E element2) {
            if (element1.equals(element2)) {
                return;
            }

            if (head == null) {
                return;
            }

            Node<E> prevNode1 = null;
            Node<E> prevNode2 = null;

            Node<E> currNode1 = null;
            Node<E> currNode2 = null;

            if (element1.equals(head.getData())) {
                currNode1 = head;
            } else if (element2.equals(head.getData())) {
                currNode2 = head;
            }

            for (Node<E> cursor = head; cursor.getNext() != null; cursor = cursor.getNext()) {
                if (currNode1 != null && currNode2 != null) {
                    break;
                }

                if (element1.equals(cursor.getNext().getData())) {
                    prevNode1 = cursor;
                    currNode1 = prevNode1.getNext();

                } else if (element2.equals(cursor.getNext().getData())) {
                    prevNode2 = cursor;
                    currNode2 = prevNode2.getNext();
                }
            }

            if (currNode1 == null || currNode2 == null) {
                return;
            }

            // delete c1 from the list
            if (prevNode1 == null) {
                head = currNode1.getNext();
            } else {
                prevNode1.setNext(currNode1.getNext());
            }
            currNode1.setNext(null);

            // delete c2 from the list
            if (prevNode2 == null) {
                head = currNode2.getNext();
            } else {
                prevNode2.setNext(currNode2.getNext());
            }
            currNode2.setNext(null);

            //insert c2 next to p1
            if (prevNode1 == null) {
                currNode2.setNext(head);
                head = currNode2;
            } else {
                currNode2.setNext(prevNode1.getNext());
                prevNode1.setNext(currNode2);
            }


            // insert c1 next to p2
            if (prevNode2 == null) {
                currNode1.setNext(head);
                head = currNode1;
            } else {
                currNode1.setNext(prevNode2.getNext());
                prevNode2.setNext(currNode1);
            }

        }

    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>(1, 2, 3, 4, 5);
        list.traverse();

        list.swap(1, 5);
        list.traverse();
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
]