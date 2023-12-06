/*class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  //compareAge è un metodo che confronta due argomenti: user1 e user2
  compareAge(user1, user2) {
    if (user1.age > user2.age) {
      console.log(user1.firstName + " è più grnade di " + user2.firstName);
    } else if (user1.age < user2.age) {
      console.log(user2.firstName + " è più grande di " + user1.firstName);
    } else {
      console.log(user1.firstName + " ha la stessa età di " + user2.firstName);
    }
  }
}

const user1 = new User("Francesco", "Garcia", 35, "Spain");
const user2 = new User("John", "Wayne", 30, "USA");

//chiamiamo il metodo compareAge su user1 passandogli user2 come primo argomento
user1.compareAge(user2, user1);

//---------------------------------------------------------------------------------------------------------------------//

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static compareAge(user1, user2) {
    if (user1.age > user2.age) {
      console.log(user1.firstName + " è più grande di " + user2.firstName);
    } else if (user1.age < user2.age) {
      console.log(user2.firstName + " è più grande di " + user1.firstName);
    } else {
      console.log(user1.firstName + " ha la stessa età di " + user2.firstName);
    }
  }
}

const user1 = new User("Francesco", "Garcia", 35, "Spain");
const user2 = new User("John", "Wayne", 30, "USA");

User.compareAge(user1, user2); // Chiamata diretta al metodo statico, legato alla classe e non all'istanza */

//---------------------------------------------------------------------------------------------------------------------//

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAgeWith(otherUser) {
    if (this.age > otherUser.age) {
      console.log(this.firstName + " è più grande di " + otherUser.firstName);
    } else if (this.age < otherUser.age) {
      console.log(otherUser.firstName + " è più grande di " + this.firstName);
    } else {
      console.log(
        this.firstName + " ha la stessa età di " + otherUser.firstName
      );
    }
  }
}

user1 = new User("Francesco", "Garcia", 35, "Spain");
user2 = new User("John", "Wayne", 30, "USA");

user1.compareAgeWith(user2); // Chiamata del metodo sull'istanza user1 per confrontare le età -> la chiamo su un oggetto per compararlo all'altro
