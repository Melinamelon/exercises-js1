function getAgeInDays(age) {
    return age * 365;
  }
  
  function createGreeting(name, age) {
    const ageInDays = getAgeInDays(age);
    const message =
      "My name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }

  let message = createGreeting("Melina", 31);

  console.log(message)