export default function Trans(id, name, date, amount=0, menu=[]) {
    this.id = id;
    this.name = name; 
    this.date = date;
    this.amount = amount;
    this.menu = menu;
}