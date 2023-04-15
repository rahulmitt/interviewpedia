var ood_que = [
    {
        id : 1,
        question : "OOP Basics",
        tags : ["OOP Basics"]
    },

    {
        id : 2,
        question : "OO Analysis and Design",
        tags : ["OOAD"]
    },

    {
        id : 3,
        question : "UML",
        tags : ["UML"]
    },

    {
        id : 4,
        question : "Class Diagram",
        tags : ["Class Diagram"]
    },

    {
        id : 5,
        question : "Use Case Diagram",
        tags : ["Use Case Diagram"]
    },

    {
        id : 6,
        question : "Activity Diagram",
        tags : ["Activity Diagram"]
    },

    {
        id : 7,
        question : "Sequence Diagram",
        tags : ["Sequence Diagram"]
    },
];

var ood_ans = [
    {   /* OOP Basics */
        id : 1,
        "text" : function(){/*
<p style="text-align: justify;"><b>Object-oriented programming</b> (OOP) is a style of programming that focuses on using objects
to design and build applications. Contrary to procedure-oriented programming where programs are designed as blocks of statements
to manipulate data, OOP organizes the program to combine data and functionality and wrap it inside something called an <b>Object</b>.</p>

<p style="text-align: justify;">If you have never used an object-oriented programming language before, you will need to learn a few basic concepts before you can
begin writing any code. This chapter will introduce some basic concepts of OOP:</p>

<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Object</strong>: Objects represent a real-world entity and the basic building block of OOP. For example, an Online Shopping System will have objects such as shopping cart, customer, product item, etc.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Class</strong>: Class is the prototype or blueprint of an object. It is a template definition of the attributes and methods of an object. For example, in the Online Shopping System, the Customer object will have attributes like shipping address, credit card, etc., and methods for placing an order, canceling an order, etc.</p>
</li>
</ol>
<p style="text-align: center;"><img src="data/system_design/images/ood/OOP_basics.png" alt="" width="30%" /></p>

<p style="text-align: justify;">The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Encapsulation</strong>: Encapsulation is the mechanism of binding the data together and hiding it from the outside world. Encapsulation is achieved when each object keeps its state private so that other objects don’t have direct access to its state. Instead, they can access this state only through a set of public functions.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Abstraction</strong>: Abstraction can be thought of as the natural extension of encapsulation. It means hiding all but the relevant data about an object in order to reduce the complexity of the system. In a large system, objects talk to each other, which makes it difficult to maintain a large code base; abstraction helps by hiding internal implementation details of objects and only revealing operations that are relevant to other objects.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Inheritance</strong>: Inheritance is the mechanism of creating new classes from existing ones.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Polymorphism</strong>: Polymorphism (from Greek, meaning “many forms”) is the ability of an object to take different forms and thus, depending upon the context, to respond to the same message in different ways. Take the example of a chess game; a chess piece can take many forms, like bishop, castle, or knight and all these pieces will respond differently to the ‘move’ message.</p>
</li>
</ol>
    */}.toString().slice(14,-3)
    },

    {   /* OO Analysis and Design */
        id : 2,
        "text" : function(){/*
<p style="text-align: justify;">OO Analysis and Design is a structured method for analyzing and designing a system by applying object-oriented concepts. This design process consists of an investigation into the objects constituting the system. It starts by first identifying the objects of the system and then figuring out the interactions between various objects.</p>
<p style="text-align: justify;">The process of OO analysis and design can be described as:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Identifying the objects in a system;</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Defining relationships between objects;</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Establishing the interface of each object; and,</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Making a design, which can be converted to executables using OO languages.</p>
</li>
</ol>
<p style="text-align: justify;">We need a standard method/tool to document all this information; for this purpose we use UML. UML can be considered as the successor of object-oriented (OO) analysis and design. UML is powerful enough to represent all the concepts that exist in object-oriented analysis and design. UML diagrams are a representation of object-oriented concepts only. Thus, before learning UML, it is essential to understand OO concepts.</p>
    */}.toString().slice(14,-3)
    },

    {   /* UML */
        id : 3,
        "text" : function(){/*
<p style="text-align: justify;">UML stands for Unified Modeling Language and is used to model the Object-Oriented Analysis of a software system. UML is a way of visualizing and documenting a software system by using a collection of diagrams, which helps engineers, businesspeople, and system architects understand the behavior and structure of the system being designed.</p>
<p style="text-align: justify;">Benefits of using UML:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Helps develop a quick understanding of a software system.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">UML modeling helps in breaking a complex system into discrete pieces that can be easily understood.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">UML’s graphical notations can be used to communicate design decisions.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Since UML is independent of any specific platform or language or technology, it is easier to abstract out concepts.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">It becomes easier to hand the system over to a new team.</p>
</li>
</ol>
<p style="text-align: justify;"><strong>Types of UML Diagrams:</strong> The current UML standards call for 14 different kinds of diagrams. These diagrams are organized into two distinct groups: structural diagrams and behavioral or interaction diagrams. As the names suggest, some UML diagrams analyze and depict the structure of a system or process, whereas others describe the behavior of the system, its actors, and its building components. The different types are broken down as follows:</p>
<p style="text-align: justify;"><strong>Structural UML diagrams</strong></p>
<ul>
<li style="text-align: justify;">
<p style="text-align: justify;">Class diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Object diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Package diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Component diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Component Structure diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Deployment diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Profile diagram</p>
</li>
</ul>
<p style="text-align: justify;"><strong>Behavioral UML diagrams</strong></p>
<ul>
<li style="text-align: justify;">
<p style="text-align: justify;">Use case diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Activity diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Sequence diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">State diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Communication diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Interaction overview diagram</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Timing diagram</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Class Diagram */
        id : 4,
        "text" : function(){/*
<p style="text-align: justify;">Class diagram is the backbone of object-oriented modeling - it shows how different entities (people, things, and data) relate to each other. In other words, it shows the static structures of the system.</p>
<p style="text-align: justify;">A class diagram describes the attributes and operations of a class and also the constraints imposed on the system. Class diagrams are widely used in the modeling of object-oriented systems because they are the only UML diagrams that can be mapped directly to object-oriented languages.</p>
<p style="text-align: justify;">The purpose of the class diagram can be summarized as:</p>
<ul>
<li>
<p style="text-align: justify;">Analysis and design of the static view of an application;</p>
</li>
<li>
<p style="text-align: justify;">To describe the responsibilities of a system;</p>
</li>
<li>
<p style="text-align: justify;">To provide a base for component and deployment diagrams; and,</p>
</li>
<li>
<p style="text-align: justify;">Forward and reverse engineering.</p>
</li>
</ul>
<p style="text-align: justify;">A class is depicted in the class diagram as a rectangle with three horizontal sections, as shown in the figure below. The upper section shows the class’s name (Flight), the middle section contains the properties of the class, and the lower section contains the class’s operations (or “methods”).</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/sample_class_diagram.png" alt="" width="30%" /></p>
<p style="text-align: justify;">These are the different types of relationships between classes:</p>
<p style="text-align: justify;"><strong>Association</strong>: If two classes in a model need to communicate with each other, there must be a link between them. This link can be represented by an association. Associations can be represented in a class diagram by a line between these classes with an arrow indicating the navigation direction.</p>
<ul>
<li>
<p style="text-align: justify;">By default, associations are always assumed to be bi-directional; this means that both classes are aware of each other and their relationship. In the diagram below, the association between Pilot and FlightInstance is bi-directional, as both classes know each other.</p>
</li>
<li>
<p style="text-align: justify;">By contrast, in a uni-directional association, two classes are related - but only one class knows that the relationship exists. In the below example, only Flight class knows about Aircraft; hence it is a uni-directional association</p>
</li>
</ul>
<p style="text-align: justify;"><strong>Multiplicity</strong> Multiplicity indicates how many instances of a class participate in the relationship. It is a constraint that specifies the range of permitted cardinalities between two classes. For example, in the diagram below, one FlightInstance will have two Pilots, while a Pilot can have many FlightInstances. A ranged multiplicity can be expressed as “0…*” which means “zero to many" or as “2…4” which means “two to four”.</p>
<p style="text-align: justify;">We can indicate the multiplicity of an association by adding multiplicity adornments to the line denoting the association. The below diagram, demonstrates that a FlightInstance has exactly two Pilots but a Pilot can have many FlightInstances.</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/sample_class_diagram1.png" alt="" width="60%" /></p>
<p style="text-align: justify;"><strong>Aggregation</strong>: Aggregation is a special type of association used to model a “whole to its parts” relationship. In a basic aggregation relationship, the lifecycle of a PART class is independent of the WHOLE class’s lifecycle. In other words, aggregation implies a relationship where the child can exist independently of the parent. In the above diagram, Aircraft can exist without Airline.</p>
<p style="text-align: justify;"><strong>Composition</strong>: The composition aggregation relationship is just another form of the aggregation relationship, but the child class’s instance lifecycle is dependent on the parent class’s instance lifecycle. In other words, Composition implies a relationship where the child cannot exist independent of the parent. In the above example, WeeklySchedule is composed in Flight which means when Flight lifecycle ends, WeeklySchedule automatically gets destroyed.</p>
<p style="text-align: justify;"><strong>Generalization</strong>: Generalization is the mechanism for combining similar classes of objects into a single, more general class. Generalization identifies commonalities among a set of entities. In the above diagram, Crew, Pilot, and Admin, all are Person.</p>
<p style="text-align: justify;"><strong>Dependency</strong>: A dependency relationship is a relationship in which one class, the client, uses or depends on another class, the supplier. In the above diagram, FlightReservation depends on Payment.</p>
<p style="text-align: justify;"><strong>Abstract class</strong>: An abstract class is identified by specifying its name in italics. In the above diagram, both Person and Account classes are abstract classes.</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/uml_conventions.png" alt="" width="50%" /></p>
    */}.toString().slice(14,-3)
    },

    {   /* Use Case Diagram */
        id : 5,
        "text" : function(){/*
<p style="text-align: justify;">Use case diagrams describe a set of actions (called use cases) that a system should or can perform in collaboration with one or more external users of the system (called actors). Each use case should provide some observable and valuable result to the actors.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Use Case Diagrams describe the high-level functional behavior of the system.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">It answers what system does from the user point of view.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Use case answers ‘What will the system do?’ and at the same time tells us ‘What will the system NOT do?’.</p>
</li>
</ol>
<p style="text-align: justify;">A use case illustrates a unit of functionality provided by the system. The primary purpose of the use case diagram is to help development teams visualize the functional requirements of a system, including the relationship of “actors” to the essential processes, as well as the relationships among different use cases.</p>
<p style="text-align: justify;">To illustrate a use case on a use case diagram, we draw an oval in the middle of the diagram and put the name of the use case in the center of the oval. To show an actor (indicating a system user) on a use-case diagram, we draw a stick figure to the left or right of the diagram</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/sample_usecase_diagram.png" alt="" width="50%" /></p>
<p style="text-align: justify;">The different components of the use case diagram are:</p>
<ul>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>System boundary</strong>: A system boundary defines the scope and limits of the system. It is shown as a rectangle that spans all use cases of the system.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Actors</strong>: An actor is an entity who performs specific actions. These roles are the actual business roles of the users in a given system. An actor interacts with a use case of the system. For example, in a banking system, the customer is one of the actors.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Use Case</strong>: Every business functionality is a potential use case. The use case should list the discrete business functionality specified in the problem statement.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Include</strong>: Include relationship represents an invocation of one use case by another use case. From a coding perspective, it is like one function being called by another function.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Extend</strong>: This relationship signifies that the extended use case will work exactly like the base use case, except that some new steps will be inserted in the extended use case.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Activity Diagram */
        id : 6,
        "text" : function(){/*
<p style="text-align: justify;">We use Activity Diagrams to illustrate the flow of control in a system. An activity diagram shows the flow of control for a system functionality; it emphasizes the condition of flow and the sequence in which it happens. We can also use an activity diagram to refer to the steps involved in the execution of a use case.</p>
<p style="text-align: justify;">Activity diagrams illustrate the dynamic nature of a system by modeling the flow of control from activity to activity. An activity represents an operation on some class in the system that results in a change in the state of the system. Typically, activity diagrams are used to model workflow or business processes and internal operations.</p>
<p style="text-align: justify;">Following is an activity diagram for a user performing online shopping:</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/sample_activity_diagram.png" alt="" width="30%" /></p>
<p style="text-align: justify;"><strong>What is the difference between Activity diagram and Sequence diagram?</strong></p>
<p style="text-align: justify;"><strong>Activity diagram</strong> captures the process flow. It is used for functional modeling. A functional model represents the flow of values from external inputs, through operations and internal data stores, to external outputs.</p>
<p style="text-align: justify;"><strong>Sequence diagram</strong> tracks the interaction between the objects. It is used for dynamic modeling, which is represented by tracking states, transitions between states, and the events that trigger these transitions.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Sequence Diagram */
        id : 7,
        "text" : function(){/*
<p style="text-align: justify;">Sequence diagrams describe interactions among classes in terms of an exchange of messages over time and are used to explore the logic of complex operations, functions or procedures. In this diagram, the sequence of interactions between the objects is represented in a step-by-step manner.</p>
<p style="text-align: justify;">Sequence diagrams show a detailed flow for a specific use case or even just part of a particular use case. They are almost self-explanatory; they show the calls between the different objects in their sequence and can explain, at a detailed level, different calls to various objects.</p>
<p style="text-align: justify;">A sequence diagram has two dimensions: The vertical dimension shows the sequence of messages in the chronological order that they occur; the horizontal dimension shows the object instances to which the messages are sent.</p>
<p style="text-align: center;"><img src="data/system_design/images/ood/sample_sequence_diagram.png" alt="" width="50%" /></p>
<p style="text-align: justify;">A sequence diagram is straightforward to draw. Across the top of your diagram, identify the class instances (objects) by putting each class instance inside a box (see above figure). If a class instance sends a message to another class instance, draw a line with an open arrowhead pointing to the receiving class instance and place the name of the message above the line. Optionally, for important messages, you can draw a dotted line with an arrowhead pointing back to the originating class instance; label the returned value above the dotted line.</p>
    */}.toString().slice(14,-3)
    },
];