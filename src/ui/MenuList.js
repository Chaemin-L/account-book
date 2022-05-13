import db from '../database/Menu'
import './Button.css' 


const MenuComponent = ({ menu, onClick }) => {
    return (
        <button className="btn btn-menu" onClick={() => (onClick(menu.name, menu.price)) }>
            <span>{menu.name}</span>
            <br/>
            <span>{menu.price}</span>
        </button>
    );
};

const MenuList = ({ onSelect }) => {
    return (
        <div className="container-left">
            {db.drink && db.drink.map(menu => (<MenuComponent menu={menu} key={menu.id} onClick={onSelect}/>))}
        </div>
    );
};

export default MenuList;