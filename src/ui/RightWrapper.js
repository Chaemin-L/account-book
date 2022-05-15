import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Wrapper.css';
import './Table.css';

const Header = ({ user, cancel }) => {
    return (
        <div>
            {user && Object.keys(user).length !== 0 ? <span><span>{user.name} 님</span><button onClick={() => cancel({})}>취소</button></span>: null }
            <Link to='/record'><button className='btn btn-record'>장부 확인하기</button></Link>
        </div>);
};

const Cart = ({ calc, cart, onRemove }) => {
    let total = 0;
    useEffect(() => {
        // eslint-disable-next-line
        cart.length !== 0 ? cart.forEach(menu => calc(total += menu.count * menu.price)) : calc(total = 0);
        return () => total = 0;
    }, [cart]);

    return (
        <div className='wrap-cart'>
        <table className='table'>
            <thead>
                <tr>
                    <th className='th' colSpan={'70%'}>메뉴</th>
                    <th className='th' colSpan={'10%'}>수량</th>
                    <th className='th' colSpan={'20%'}>총가격</th>
                </tr>
            </thead>
            <tbody>
                {cart && cart.map((menu, i) => {
                    return (
                        <tr key={i} onClick={()=>onRemove(menu.name)}>
                            <td className='td' colSpan={'70%'}>{menu.name}</td>
                            <td className='td' colSpan={'10%'}>{menu.count}</td>
                            <td className='td' colSpan={'20%'}>{menu.count * menu.price}</td>
                        </tr>);
                })}
            </tbody>
        </table>
    </div>);    
};

const ButtonSet = () => {

    return (
        <div className='btn-set'>
            <Link to='/search'><button className='btn'>회원검색</button></Link>
            <Link to='/pay'><button className='btn'>결제하기</button></Link>
            <Link to='/register'><button className='btn'>회원등록</button></Link>
            <Link to='/save'><button className='btn'>충전하기</button></Link>
        </div>
    );
}

function RightWrapper({total, setTotal, user, cancel, selectList, onSelect}) {
   
    const removeOrder = (name) => {
        let temp = selectList.map(menu => (
          menu = (menu.name === name) ? { ...menu, count: menu.count - 1 } : menu));
        onSelect(temp.filter(menu => menu.count !==0));
    };
    
    return (
        <div className="wrap container-right">
            <Header user={user} cancel={cancel} />
            <Cart calc={setTotal} cart={selectList} onRemove={removeOrder} />
            <div className='wrap wrap-total'>
                <span>합계 </span>
                <span> {total}</span>
            </div>
            <ButtonSet />
        </div>
    );


};

export default RightWrapper;