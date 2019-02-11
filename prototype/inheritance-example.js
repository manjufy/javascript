function Person(firstName, lastName, phone) {
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone

    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}

// https://medium.com/@js_tut/a-guide-to-prototype-based-class-inheritance-in-javascript-849d3c3ddca?sk=fd103c0f2b738607329455e7c83bb8f2

