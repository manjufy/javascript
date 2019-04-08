var person = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    set lang(lang) {
      this.language = lang;
    },
    get lang() {
        return this.language;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en"
  console.log(person.lang)