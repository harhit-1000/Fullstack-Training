class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
  }

class admin extends user {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
  }

  const user1 = new user("john", 25);
  const admin1 = new admin("jane", 30, "superadmin");

  console.log(user1.getName());

  // The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:


  const arr = ["John", "Peter", "Sally", "Jane"];
  const myJSON = JSON.stringify(arr);

// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)