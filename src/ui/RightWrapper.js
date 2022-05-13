import React, { useState } from 'react';
import './Table.css'
import './Wrapper.css'

const Header = ({ user, cancel }) => {
    <div>
        <span>{user ? user : ""}님 </span>
        <button onClick={() => cancel("")}>취소</button>
        <button>장부 확인하기</button>
    </div>
};

const Cart = ({ cart, onRmove }) => {
    return (
        <div className="wrap wrap-table">
            <table className='table'>
                <thead>
                    <tr>
                        <th className='th' colSpan={'70%'}>메뉴</th>
                        <th className='th' colSpan={'10%'}>수량</th>
                        <th className='th' colSpan={'20%'}>총가격</th>
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map(menu => (
                        <tr>
                            <td className='td' colSpan={'70%'}>{menu.name}</td>
                            <td className='td' colSpan={'10%'}>{menu.count}</td>
                            <td className='td' colSpan={'20%'}>{menu.count * menu.price}</td>
                        </tr>))}
                </tbody>    
            </table>
        </div>
    )    
};


function RightWrapper({selectList, onSelect}) {
    const [user, setUser] = useState("");
   
    return (
        <div className="wrap container-left">
            <Header user={user} cancel={setUser} />
            <Cart cart={selectList} onRemove={onSelect} />
        </div>
    );


};

export default RightWrapper;