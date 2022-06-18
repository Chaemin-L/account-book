export default function User(id="", name="", phoneNumber="", account=0) {
    this.id = id;
    this.name = name; 
    this.phoneNumber = phoneNumber;
    this.account = account;

    return ({
        save: (e) => {
            const { name, value } = e.target;
            this[name] = value;
        },
        create: (e, addUser) => {
            e.preventDefault();
            console.log(this, addUser);
            this.id = this.phoneNumber.substring(7);
            addUser(this);
        }
    }
    );
}