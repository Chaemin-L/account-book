import db from '../Database/Menu'
import '../CSS/Button.css' 

const MenuItem = ({ menu, onClick }) => {
    return (
        <button className="btn btn-menu" onClick={() => (onClick(menu.name, menu.price)) }>
            <span>{menu.name}</span>
            <br/>
            <span>{menu.price}</span>
        </button>
    );
};

const MenuList = ({ selectList, onSelect }) => {
    const addOrder = (name, price) => {
        if ((selectList.length === 0) || (selectList.filter((menu) => (menu.name === name)).length === 0)) 
          onSelect([...selectList, { name: name, price: price, count: 1 }]);
         else 
          onSelect( selectList.map(menu =>(menu.name === name) ? { ...menu, count: menu.count + 1 } : menu))
    };
    
    return (
        <div className="container-left">
            {db.drink && db.drink.map(menu => (<MenuItem menu={menu} key={menu.id} onClick={addOrder}/>))}
        </div>
    );
};

export default MenuList;