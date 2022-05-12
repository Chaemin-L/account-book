import db from '../database/Menu'
import './Button.css' 


const MenuComponent = ({ menu, onClick }) => {
    return (
        <button className="btn" onClick={() => (onClick(menu.name, menu.price)) }>
            <h2>{menu.name}</h2>
            {menu.price}
        </button>
    );
};

const MenuList = ({ onClick }) => {
    return (
        <div>
            {}
            {db.drink && db.drink.map(menu => (<MenuComponent menu={menu} key={menu.id} onClick={onClick}/>))}
        </div>
    );
};

export default MenuList;