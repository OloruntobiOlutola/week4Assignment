// Person Object
function Person(name, sex, age, height) {
  return {
    personalDetails: function () {
      sex = sex.toLowerCase();
      const pronoun = sex.startsWith("f") ? "she" : "he";
      const message = `Name is ${name}, ${pronoun} is ${age}years old and has a height of ${height}`;
      return message;
    },
    isAnAdult: function () {
      const range = age >= 18 ? true : false;
      return range;
    },
  };
}

// School Object
function School(name, sex, age, height) {
  let schoolName = "Seamfix International School";
  let address = "Lekki phase one";
  return {
    schoolInfo: function () {
      const message = `This is ${schoolName} it is located at ${address}`;
      return message;
    },
    studentInfo: function () {
      return Person.call(this, name, sex, age, height);
    },
  };
}

// An instance of a school with a student
const school = new School("Bayo", "f", 15, "5.2ft");

// Testing the functions
console.log(school.schoolInfo());
console.log(school.studentInfo().isAnAdult());
console.log(school.studentInfo().personalDetails());
