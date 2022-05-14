import React, {  useState } from 'react';
import MenuList from './ui/MenuList';
import RightWrapper from './ui/RightWrapper';


function App(){
  const [selectList, setList] = useState([]); // selectList data format [{name, count}, ]

  const addOrder = (name, price) => {
    //setTotal(total + price);
    if ((selectList.length === 0) || (selectList.filter((menu) => (menu.name === name)).length === 0)) 
      setList([...selectList, { name: name, price: price, count: 1 }]);
     else 
      setList( selectList.map(menu =>(menu.name === name) ? { ...menu, count: menu.count + 1 } : menu))
  };

  const removeOrder = (name) => {
    let temp = selectList.map(menu => (
      menu = (menu.name === name) ? { ...menu, count: menu.count - 1 } : menu));
    setList(temp.filter(menu => menu.count !==0));
}


  return (
    <div className='wrap wrap-container'>
      <MenuList onSelect={addOrder} />
      <RightWrapper selectList={selectList} onSelect={removeOrder}/>
    </div>
      );
}
           
export default App;