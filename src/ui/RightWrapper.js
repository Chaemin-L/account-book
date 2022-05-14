import React, { useEffect, useState } from 'react';
//import Modal from 'react-modal';
import './Table.css'
import './Wrapper.css'

const Header = ({ user, cancel }) => {
    return (<div>
        <span>{user? user+" 님" : user} </span>
        {user? <button onClick={() => cancel("")}>취소</button>: null}
        <button className='btn btn-record'>장부 확인하기</button>
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
                {cart && cart.map(menu => {
                    return (
                        <tr onClick={()=>onRemove(menu.name)}>
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
    const [searchModal, setSearchModal] = useState(false);
    const [payModal, setPayModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [chargeModal, setChargeModal] = useState(false);

    return (
        <div className='btn-set'>
            <button className='btn' onClick={()=>setSearchModal(!searchModal)}>회원검색</button>
            <button className='btn' onClick={()=>setPayModal(!payModal)}>결제하기</button>
            <button className='btn' onClick={()=>setRegisterModal(!registerModal)}>회원등록</button>
            <button className='btn' onClick={()=>setChargeModal(!chargeModal)}>충전하기</button>
        </div>
    );
}

function RightWrapper({selectList, onSelect}) {
    const [user, setUser] = useState("");
    const [total, setTotal] = useState(0);
   
    return (
        <div className="wrap container-right">
            <Header user={user} cancel={setUser} />
            <Cart calc={setTotal} cart={selectList} onRemove={onSelect} />
            <div className='wrap wrap-total'>
                <span>합계 </span>
                <span> {total}</span>
            </div>
            <ButtonSet />
        </div>
    );


};

export default RightWrapper;