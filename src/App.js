import React, {  useState } from 'react';
import MenuList from './ui/MenuList';

  

function App(){
  //const [menu, setMenu] = useState(db);
  const [selectList, setList] = useState([]); // selectList data format [{name, count}, ]
  const [total, setTotal] = useState(0); // set total
  const onChange = (name, price) => {
    setTotal(total + price);
    //selectList가 비어있거나 등록된 메뉴가 없을 경우 새로운 객체 추가
    if ((selectList.length === 0) || (selectList.filter((menu) => (menu.name === name)).length === 0)) 
      setList([...selectList, { name: name, count: 1 }]);
     else 
      setList( selectList.map(menu =>(menu.name === name) ? { ...menu, count: menu.count + 1 } : menu))
 
  };

  return (
    <div>
      <MenuList onClick={onChange} />
      <div>
        {selectList.map(i => i.name)}
        <br />
        {total}
      </div>
    </div>
      );
}
           
export default App;

      
