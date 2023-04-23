
const createUser = ( {firstName, lastName, email} ) => ({
    firstName,
    lastName,
    email, 
    fullName()  {
        return `Hello ${this.firstName} ${this.lastName}`
    }
})  

const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
});

console.log(user1)