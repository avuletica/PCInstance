export class User {
    _id: any;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    postalCode: number;
    creditCardNumber: number;
    userRole: string;

    constructor(id: any, username: string, password: string, email: string, firstName: string, lastName: string,
        country: string, city: string, address: string, postalCode: number, creditCardNumber: number, userRole: string) {
        this._id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.postalCode = postalCode;
        this.creditCardNumber = creditCardNumber;
        this.userRole = userRole;
    }
}