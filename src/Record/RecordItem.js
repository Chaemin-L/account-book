const RecordItem = ({record}) => {
    console.log(record);
    return (
        <div>
            <span>{record.name}({record.id})   </span>
            <span>{record.date}   </span>
            <span>{record.amount>0? ("+"+record.amount): record.amount}   </span>
            <span>{record.menu?record.menu.map(m => (m.name+' '+ m.count+"  ")): ""}</span>
        </div>);
}

export default RecordItem;