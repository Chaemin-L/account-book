import React, {  useState } from 'react';
import MenuList from './ui/MenuList';
import RightWrapper from './ui/RightWrapper';


function App(){
  const [selectList, setList] = useState([]); // selectList data format [{name, count}, ]
  const [total, setTotal] = useState(0); // set total

  const addMenu = (name, price) => {
    setTotal(total + price);
    if ((selectList.length === 0) || (selectList.filter((menu) => (menu.name === name)).length === 0)) 
      setList([...selectList, { name: name, price: price, count: 1 }]);
     else 
      setList( selectList.map(menu =>(menu.name === name) ? { ...menu, count: menu.count + 1 } : menu))
  };

  const removeMenu = (name) => {
    setList(selectList.map(menu => {
        menu = (menu.name === name) ? { ...menu, count: menu.count - 1 } : menu;
        return (menu.count === 0) ? null : menu;
    }));
}


  return (
    <div className='wrap wrap-container'>
      <MenuList onSelect={addMenu} />
      <RightWrapper selectList={selectList} onSelect={removeMenu}/>
    </div>
      );
}
           
export default App;