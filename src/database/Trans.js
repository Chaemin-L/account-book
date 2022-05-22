export default function Trans(id, name, date, type, amount=0, menu=[]) {
    this.id = id;
    this.name = name; 
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.menu = menu;
}