const RecordItem = ({record}) => {
    console.log(record);
    return (
        <div>
            <span>{record.name}({record.id})   </span>
            <span>{record.date}   </span>
            <span>{record.type}{record.amount}   </span>
            <span>{record.menu?record.menu.map(m => (m.name+' '+ m.count+"  ")): ""}</span>
        </div>);
}

export default RecordItem;