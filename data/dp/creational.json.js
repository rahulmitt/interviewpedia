var creational_que = [
	{
		id : 1,
		question : "Builder",
		tags : ["GoF", "Creational Design Patterns", "Builder"]
	},

	{
		id : 2,
		question : "Simple Factory",
		tags : ["GoF", "Creational Design Patterns", "Simple Factory"]
	},

	{
		id : 3,
		question : "Factory Method",
		tags : ["GoF", "Creational Design Patterns", "Factory Method"]
	},

	{
		id : 4,
		question : "Prototype",
		tags : ["GoF", "Creational Design Patterns", "Prototype"]
	},

	{
		id : 5,
		question : "Abstract Factory",
		tags : ["GoF", "Creational Design Patterns", "Abstract Factory"]
	},

	{
		id : 6,
		question : "Singleton",
		tags : ["GoF", "Creational Design Patterns", "Singleton"]
	},

    {
		id : 7,
		question : "Object Pool",
		tags : ["GoF", "Creational Design Patterns", "Object Pool"]
	},
]

var creational_ans = [
    {   /* Builder */
        id : 1,
		"text" : function(){/*

<p><a href="https://stackoverflow.com/questions/1673841/examples-of-gof-design-patterns-in-javas-core-libraries" target="_blank">https://stackoverflow.com/questions/1673841/examples-of-gof-design-patterns-in-javas-core-libraries</a></p>

<p><img src="data/dp/images/creational/1.builder.png" alt="" width="800" height="400"/></p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Abstract Product</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Concrete Product</strong></td>
</tr>

<tr>
<td style="vertical-align: top;"  width=50%>
<pre>
public interface IUser {
    String getFirstName();
    String getLastName();
    Integer getAge();
    IAddress getAddress();
}
</pre>
</td>

<td style="vertical-align: top;" width=50%>
<pre>
public final class User implements IUser {
    String firstName;
    String lastName;
    Integer age;
    IAddress address;

    public User() {}

    @Override
    public String getFirstName() {
        return firstName;
    }

    @Override
    public String getLastName() {
        return lastName;
    }

    @Override
    public Integer getAge() {
        return age;
    }

    @Override
    public IAddress getAddress() {
        return address;
    }

    @Override
    public String toString() {
        return "User{" +
            "firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", age=" + age +
            ", address=" + address +
            '}';
    }
}
</pre>
</td>
</tr>
</table>

<p>&nbsp;</p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Abstract Builder</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Concrete Builder</strong></td>
</tr>

<tr>
<td style="vertical-align: top;" width=50%>
<pre>
public interface IUserBuilder {

    FirstNameStep with();

    interface FirstNameStep {
        LastNameStep firstName(String firstName);
    }

    interface LastNameStep {
        AgeStep lastName(String lastName);
    }

    interface AgeStep {
        AddressStep age(int age);
    }

    interface AddressStep {
        BuildStep address(IAddress address);
    }

    interface BuildStep {
        IUser build();
    }

    interface IBuilder extends FirstNameStep,
        LastNameStep, AgeStep,
        AddressStep, BuildStep {}
}
</pre>
</td>

<td style="vertical-align: top;"  width=50%>
<pre>
public final class UserBuilder implements
  IUserBuilder {

  public UserBuilder() {}

  @Override
  public FirstNameStep with() {
    return new Builder();
  }

  private static class Builder implements
    IBuilder {

    private final User user = new User();

    @Override
    public LastNameStep firstName(String fName) {
        user.firstName = firstName;
        return this;
    }

    @Override
    public AgeStep lastName(String lName) {
        user.lastName = lastName;
        return this;
    }

    @Override
    public AddressStep age(int age) {
        user.age = age;
        return this;
    }

    @Override
    public BuildStep address(IAddress address) {
        user.address = address;
        return this;
    }

    @Override
    public IUser build() {
        return user;
    }
  }
}
</pre>
</td>
</tr>
</table>

<p>&nbsp;</p>

<pre>
public class Director {

    static IAddressBuilder addressBuilder = new AddressBuilder();
    static IUserBuilder userBuilder = new UserBuilder();

    public static void main(String[] args) {

        IAddress address1 = addressBuilder.with()       // impl for AddressBuilder omitted here
                .flatNo("A56")
                .building("Rustomjee Apartments")
                .street("Goregaon")
                .city("Mumbai")
                .country("India")
                .build();

        IUser user1 = userBuilder.with()
                .firstName("Rahul")
                .lastName("Mittal")
                .age(37)
                .address(address1)
                .build();

        System.out.println(user1);
    }
</pre>

        */}.toString().slice(14,-3)
    },

    {   /* Simple Factory */
        id : 2,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/2.simple_factory.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Factory Method */
        id : 3,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/3.factory_method.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Prototype */
        id : 4,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/4.prototype.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Abstract Factory */
        id : 5,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/5.abstract_factory.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Singleton */
        id : 6,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/6.singleton.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Object Pool */
        id : 7,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p><img src="data/dp/images/creational/7.object_pool.png" alt="" width="800" height="400"/></p>
        */}.toString().slice(14,-3)
    },
]