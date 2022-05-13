import React, { useState } from 'react';

const Header = ({ user, cancel }) => {
    <div>
        <span>{user ? user : ""}님 </span>
        <button onClick={() => cancel("")}>취소</button>
        <button>장부 확인하기</button>
    </div>
};

const Cart = ({ cart, onRmove }) => {
    return (
        <table>
  <thead>
    <tr>
      <th>메뉴</th>
      <th>수량</th>
      <th>총가격</th>
    </tr>
        </thead>
        <tbody>
        {cart && cart.map(menu => (<tr><td colSpan={'70%'}>{menu.name}</td><td colSpan={'10%'}>{menu.count}</td><td colSpan={'20%'}>{menu.count*menu.price}</td></tr>))}
        </tbody>    
    </table>
    )    
};


function RightWrapper({selectList, onSelect}) {
    const [user, setUser] = useState("");
   
    return (
        <div>
            <Header user={user} cancel={setUser} />
            <Cart cart={selectList} onRemove={onSelect} />
        </div>
    );


};

export default RightWrapper;