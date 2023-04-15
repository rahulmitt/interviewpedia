var ooad_puzzles_que = [
    {
        id : 1,
        question : "Design a Library Management System",
        tags : ["Design a Library Management System"]
    },

    {
        id : 2,
        question : "Design a Parking Lot",
        tags : ["Design a Parking Lot"]
    },

    {
        id : 3,
        question : "Design Amazon - Online Shopping System",
        tags : ["Design Amazon - Online Shopping System"]
    },

    {
        id : 4,
        question : "Design Stack Overflow",
        tags : ["Design Stack Overflow"]
    },

    {
        id : 5,
        question : "Design a Movie Ticket Booking System",
        tags : ["Design a Movie Ticket Booking System"]
    },

    {
        id : 6,
        question : "Design an ATM",
        tags : ["Design an ATM"]
    },

    {
        id : 7,
        question : "Design an Airline Management System",
        tags : ["Design an Airline Management System"]
    },

    {
        id : 8,
        question : "Design Blackjack and a Deck of Cards",
        tags : ["Design Blackjack and a Deck of Cards"]
    },

    {
        id : 9,
        question : "Design a Hotel Management System",
        tags : ["Design a Hotel Management System"]
    },

    {
        id : 10,
        question : "Design a Restaurant Management system",
        tags : ["Design a Restaurant Management system"]
    },

    {
        id : 11,
        question : "Design Chess",
        tags : ["Design Chess"]
    },

    {
        id : 12,
        question : "Design an Online Stock Brokerage System",
        tags : ["Design an Online Stock Brokerage System"]
    },

    {
        id : 13,
        question : "Design a Car Rental System",
        tags : ["Design a Car Rental System"]
    },

    {
        id : 14,
        question : "Design LinkedIn",
        tags : ["Design LinkedIn"]
    },

    {
        id : 15,
        question : "Design Cricinfo",
        tags : ["Design Cricinfo"]
    },

    {
        id : 16,
        question : "Design Facebook - a social network",
        tags : ["Design Facebook - a social network"]
    },
];

var ooad_puzzles_ans = [
    {   /* Design a Library Management System */
        id : 1,
        "text" : function(){/*
<p style="text-align: justify;">A Library Management System is a software built to handle the primary housekeeping functions of a library. Libraries rely on library management systems to manage asset collections as well as relationships with their members. Library management systems help libraries keep track of the books and their checkouts, as well as members’ subscriptions and profiles.</p>
<p style="text-align: justify;">Library management systems also involve maintaining the database for entering new books and recording books that have been borrowed with their respective due dates.</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms.png" alt="" width="50%" /></p>

<h2>System Requirements</h2>
<p style="text-align: justify;">We will focus on the following set of requirements while designing the Library Management System:</p>
<ol>
<li>
<p style="text-align: justify;">Any library member should be able to search books by their title, author, subject category as well by the publication date.</p>
</li>
<li>
<p style="text-align: justify;">Each book will have a unique identification number and other details including a rack number which will help to physically locate the book.</p>
</li>
<li>
<p style="text-align: justify;">There could be more than one copy of a book, and library members should be able to check-out and reserve any copy. We will call each copy of a book, a book item.</p>
</li>
<li>
<p style="text-align: justify;">The system should be able to retrieve information like who took a particular book or what are the books checked-out by a specific library member.</p>
</li>
<li>
<p style="text-align: justify;">There should be a maximum limit (5) on how many books a member can check-out.</p>
</li>
<li>
<p style="text-align: justify;">There should be a maximum limit (10) on how many days a member can keep a book.</p>
</li>
<li>
<p style="text-align: justify;">The system should be able to collect fines for books returned after the due date.</p>
</li>
<li>
<p style="text-align: justify;">Members should be able to reserve books that are not currently available.</p>
</li>
<li>
<p style="text-align: justify;">The system should be able to send notifications whenever the reserved books become available, as well as when the book is not returned within the due date.</p>
</li>
<li>
<p style="text-align: justify;">Each book and member card will have a unique barcode. The system will be able to read barcodes from books and members’ library cards.</p>
</li>
</ol>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">We have three main actors in our system:</p>
<ul>
<li>
<p style="text-align: justify;"><strong>Librarian</strong>: Mainly responsible for adding and modifying books, book items, and users. The Librarian can also issue, reserve, and return book items.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Member</strong>: All members can search the catalog, as well as check-out, reserve, renew, and return a book.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>System</strong>: Mainly responsible for sending notifications for overdue books, canceled reservations, etc.</p>
</li>
</ul>

<p style="text-align: justify;">Here are the top use cases of the Library Management System:</p>
<ul>
<li>
<p style="text-align: justify;"><strong>Add/Remove/Edit book</strong>: To add, remove or modify a book or book item.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Search catalog</strong>: To search books by title, author, subject or publication date.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Register new account/cancel membership</strong>: To add a new member or cancel the membership of an existing member.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Check-out book</strong>: To borrow a book from the library.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Reserve book</strong>: To reserve a book which is not currently available.</p>
</li>
</ul>
<ul>
<li>
<p style="text-align: justify;"><strong>Renew a book</strong>: To reborrow an already checked-out book.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Return a book</strong>: To return a book to the library which was issued to a member.</p>
</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms_diagram_usecase.png" alt="" /></p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">Here are the main classes of our Library Management System:</p>
<ul>
<li>
<p style="text-align: justify;"><strong>Library</strong>: The central part of the organization for which this software has been designed. It has attributes like ‘Name’ to distinguish it from any other libraries and ‘Address’ to describe its location.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Book</strong>: The basic building block of the system. Every book will have ISBN, Title, Subject, Publishers, etc.</p>
</li>
<li>
<p style="text-align: justify;"><strong>BookItem</strong>: Any book can have multiple copies, each copy will be considered a book item in our system. Each book item will have a unique barcode.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Account</strong>: We will have two types of accounts in the system, one will be a general member, and the other will be a librarian.</p>
</li>
<li>
<p style="text-align: justify;"><strong>LibraryCard</strong>: Each library user will be issued a library card, which will be used to identify users while issuing or returning books.</p>
</li>
<li>
<p style="text-align: justify;"><strong>BookReservation</strong>: Responsible for managing reservations against book items.</p>
</li>
<li>
<p style="text-align: justify;"><strong>BookLending</strong>: Manage the checking-out of book items.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Catalog</strong>: Catalogs contain list of books sorted on certain criteria. Our system will support searching through four catalogs: Title, Author, Subject, and Publish-date.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Fine</strong>: This class will be responsible for calculating and collecting fines from library members.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Author</strong>: This class will encapsulate a book author.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Rack</strong>: Books will be placed on racks. Each rack will be identified by a rack number and will have a location identifier to describe the physical location of the rack in the library.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Notification</strong>: This class will take care of sending notifications to library members.</p>
</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms_diagram_class.png" alt="" /></p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;"><strong>Check-out a book</strong>: Any library member or librarian can perform this activity. Here are the set of steps to check-out a book:</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms_diagram_activity1.png" alt="" /></p>
<p style="text-align: justify;"><strong>Return a book</strong>: Any library member or librarian can perform this activity. The system will collect fines from members if they return books after the due date. Here are the steps for returning a book:</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms_diagram_activity2.png" alt="" /></p>
<p style="text-align: justify;"><strong>Renew a book</strong>: While renewing (re-issuing) a book, the system will check for fines and see if any other member has not reserved the same book, in that case the book item cannot be renewed. Here are the different steps for renewing a book:</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/lms_diagram_activity3.png" alt="" /></p>

<h2>Code</h2>
<p style="text-align: justify;">Here is the code for the use cases mentioned above:</p>
<ol>
</li>
<li>
<p style="text-align: justify;">Check-out a book</p>
</li>
</li>
<li>
<p style="text-align: justify;">Return a book</p>
</li>
</li>
<li>
<p style="text-align: justify;">Renew a book</p>
</li>
</ol>
<p style="text-align: justify;">Note: This code only focuses on the design part of the use cases. Since you are not required to write a fully executable code in an interview, you can assume parts of the code to interact with the database, payment system, etc.</p>

<p style="text-align: justify;"><strong>Enums and Constants</strong>: Here are the required enums, data types, and constants:</p>
<pre class="">
public enum BookFormat {
  HARDCOVER,
  PAPERBACK,
  AUDIO_BOOK,
  EBOOK,
  NEWSPAPER,
  MAGAZINE,
  JOURNAL
}
&nbsp;
public enum BookStatus {
  AVAILABLE,
  RESERVED,
  LOANED,
  LOST
}
&nbsp;
public enum ReservationStatus{
  WAITING,
  PENDING,
  CANCELED,
  NONE
}
&nbsp;
public enum AccountStatus{
  ACTIVE,
  CLOSED,
  CANCELED,
  BLACKLISTED,
  NONE
}
&nbsp;
public class Address {
  private String streetAddress;
  private String city;
  private String state;
  private String zipCode;
  private String country;
}
&nbsp;
public class Person {
  private String name;
  private Address address;
  private String email;
  private String phone;
}
&nbsp;
public class Constants {
  public static final int MAX_BOOKS_ISSUED_TO_A_USER = 5;
  public static final int MAX_LENDING_DAYS = 10;
}
</pre>
<p>&nbsp;</p>

<p style="text-align: justify;"><strong>Account, Member, and Librarian</strong>: These classes represent various people that interact with our system:</p>
<pre class="">public enum BookFormat {
  HARDCOVER,
  PAPERBACK,
  AUDIO_BOOK,
  EBOOK,
  NEWSPAPER,
  MAGAZINE,
  JOURNAL
}
&nbsp;
public enum BookStatus {
  AVAILABLE,
  RESERVED,
  LOANED,
  LOST
}
&nbsp;
public enum ReservationStatus{
  WAITING,
  PENDING,
  CANCELED,
  NONE
}
&nbsp;
public enum AccountStatus{
  ACTIVE,
  CLOSED,
  CANCELED,
  BLACKLISTED,
  NONE
}
&nbsp;
public class Address {
  private String streetAddress;
  private String city;
  private String state;
  private String zipCode;
  private String country;
}
&nbsp;
public class Person {
  private String name;
  private Address address;
  private String email;
  private String phone;
}
&nbsp;
public class Constants {
  public static final int MAX_BOOKS_ISSUED_TO_A_USER = 5;
  public static final int MAX_LENDING_DAYS = 10;
}
</pre>
<p>&nbsp;</p>
<p style="text-align: justify;"><strong>Account, Member, and Librarian</strong>: These classes represent various people that interact with our system:</p>
<pre class="">
// For simplicity, we are not defining getter and setter functions. The reader can
// assume that all class attributes are private and accessed through their respective
// public getter methods and modified only through their public methods function.
&nbsp;
public abstract class Account {
  private String id;
  private String password;
  private AccountStatus status;
  private Person person;
&nbsp;
  public boolean resetPassword();
}
&nbsp;
public class Librarian extends Account {
  public boolean addBookItem(BookItem bookItem);
&nbsp;
  public boolean blockMember(Member member);
&nbsp;
  public boolean unBlockMember(Member member);
}
&nbsp;
public class Member extends Account {
  private Date dateOfMembership;
  private int totalBooksCheckedout;
&nbsp;
  public int getTotalBooksCheckedout();
&nbsp;
  public boolean reserveBookItem(BookItem bookItem);
&nbsp;
  private void incrementTotalBooksCheckedout();
&nbsp;
  public boolean checkoutBookItem(BookItem bookItem) {
    if (this.getTotalBooksCheckedOut() &gt;= Constants.MAX_BOOKS_ISSUED_TO_A_USER) {
      ShowError("The user has already checked-out maximum number of books");
      return false;
    }
    BookReservation bookReservation = BookReservation.fetchReservationDetails(bookItem.getBarcode());
    if (bookReservation != null &amp;&amp; bookReservation.getMemberId() != this.getId()) {
      // book item has a pending reservation from another user
      ShowError("This book is reserved by another member");
      return false;
    } else if (bookReservation != null) {
      // book item has a pending reservation from the give member, update it
      bookReservation.updateStatus(ReservationStatus.COMPLETED);
    }
&nbsp;
    if (!bookItem.checkout(this.getId())) {
      return false;
    }
&nbsp;
    this.incrementTotalBooksCheckedout();
    return true;
  }
&nbsp;
  private void checkForFine(String bookItemBarcode) {
    BookLending bookLending = BookLending.fetchLendingDetails(bookItemBarcode);
    Date dueDate = bookLending.getDueDate();
    Date today = new Date();
    // check if the book has been returned within the due date
    if (today.compareTo(dueDate) &gt; 0) {
      long diff = todayDate.getTime() - dueDate.getTime();
      long diffDays = diff / (24 * 60 * 60 * 1000);
      Fine.collectFine(memberId, diffDays);
    }
  }
&nbsp;
  public void returnBookItem(BookItem bookItem) {
    this.checkForFine(bookItem.getBarcode());
    BookReservation bookReservation = BookReservation.fetchReservationDetails(bookItem.getBarcode());
    if (bookReservation != null) {
      // book item has a pending reservation
      bookItem.updateBookItemStatus(BookStatus.RESERVED);
      bookReservation.sendBookAvailableNotification();
    }
    bookItem.updateBookItemStatus(BookStatus.AVAILABLE);
  }
&nbsp;
  public bool renewBookItem(BookItem bookItem) {
    this.checkForFine(bookItem.getBarcode());
    BookReservation bookReservation = BookReservation.fetchReservationDetails(bookItem.getBarcode());
    // check if this book item has a pending reservation from another member
    if (bookReservation != null &amp;&amp; bookReservation.getMemberId() != this.getMemberId()) {
      ShowError("This book is reserved by another member");
      member.decrementTotalBooksCheckedout();
      bookItem.updateBookItemState(BookStatus.RESERVED);
      bookReservation.sendBookAvailableNotification();
      return false;
    } else if (bookReservation != null) {
      // book item has a pending reservation from this member
      bookReservation.updateStatus(ReservationStatus.COMPLETED);
    }
    BookLending.lendBook(bookItem.getBarCode(), this.getMemberId());
    bookItem.updateDueDate(LocalDate.now().plusDays(Constants.MAX_LENDING_DAYS));
    return true;
  }
}
</pre>

<p style="text-align: justify;"><strong>BookReservation, BookLending, and Fine</strong>: These classes represent a book reservation, lending, and fine collection, respectively.</p>
<pre>
public class BookReservation {
  private Date creationDate;
  private ReservationStatus status;
  private String bookItemBarcode;
  private String memberId;

  public static BookReservation fetchReservationDetails(String barcode);
}

public class BookLending {
  private Date creationDate;
  private Date dueDate;
  private Date returnDate;
  private String bookItemBarcode;
  private String memberId;

  public static void lendBook(String barcode, String memberId);
  public static BookLending fetchLendingDetails(String barcode);
}

public class Fine {
  private Date creationDate;
  private double bookItemBarcode;
  private String memberId;

  public static void collectFine(String memberId, long days) {}
}</pre>

<p style="text-align: justify;"><strong>BookItem</strong>: Encapsulating a book item, this class will be responsible for processing the reservation, return, and renewal of a book item.</p>
<pre>
public abstract class Book {
  private String ISBN;
  private String title;
  private String subject;
  private String publisher;
  private String language;
  private int numberOfPages;
  private List&lt;Author&gt; authors;
}

public class BookItem extends Book {
  private String barcode;
  private boolean isReferenceOnly;
  private Date borrowed;
  private Date dueDate;
  private double price;
  private BookFormat format;
  private BookStatus status;
  private Date dateOfPurchase;
  private Date publicationDate;
  private Rack placedAt;

  public boolean checkout(String memberId) {
    if(bookItem.getIsReferenceOnly()) {
      ShowError("This book is Reference only and can't be issued");
      return false;
    }
    if(!BookLending.lendBook(this.getBarCode(), memberId)){
      return false;
    }
    this.updateBookItemStatus(BookStatus.LOANED);
    return true;
  }
}

public class Rack {
  private int number;
  private String locationIdentifier;
}</pre>

<p style="text-align: justify;"><strong>Search interface and Catalog</strong>: The Catalog class will implement the Search interface to facilitate searching of books.</p>
<pre>
public interface Search {
  public List&lt;Book&gt; searchByTitle(String title);
  public List&lt;Book&gt; searchByAuthor(String author);
  public List&lt;Book&gt; searchBySubject(String subject);
  public List&lt;Book&gt; searchByPubDate(Date publishDate);
}

public class Catalog implements Search {
  private HashMap&lt;String, List&lt;Book&gt;&gt; bookTitles;
  private HashMap&lt;String, List&lt;Book&gt;&gt; bookAuthors;
  private HashMap&lt;String, List&lt;Book&gt;&gt; bookSubjects;
  private HashMap&lt;String, List&lt;Book&gt;&gt; bookPublicationDates;

  public List&lt;Book&gt; searchByTitle(String query) {
    // return all books containing the string query in their title.
    return bookTitles.get(query);
  }

  public List&lt;Book&gt; searchByAuthor(String query) {
    // return all books containing the string query in their author's name.
    return bookAuthors.get(query);
  }
}</pre>


    */}.toString().slice(14,-3)
    },

    {   /* Design a Parking Lot */
        id : 2,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Amazon - Online Shopping System */
        id : 3,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Stack Overflow */
        id : 4,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design a Movie Ticket Booking System */
        id : 5,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design an ATM */
        id : 6,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design an Airline Management System */
        id : 7,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Blackjack and a Deck of Cards */
        id : 8,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design a Hotel Management System */
        id : 9,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design a Restaurant Management system */
        id : 10,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Chess */
        id : 11,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design an Online Stock Brokerage System */
        id : 12,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design a Car Rental System */
        id : 13,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design LinkedIn */
        id : 14,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Cricinfo */
        id : 15,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Design Facebook - a social network */
        id : 16,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/ooad_puzzles/TODO.png" alt="" /></p>

<ol>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ol>

<h2>System Requirements</h2>
<p style="text-align: justify;">TODO</p>

<h2>Usecase Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>

<h2>Activity Diagrams</h2>
<p style="text-align: justify;">TODO</p>

<h2>Code</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },
];