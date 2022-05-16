import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './Wrapper.css';
import './Table.css';

let loginUser; //Wrapper에서 동기화, Header에서 사용

const Header = ({  cancel }) => {
    return (
        <div>
            {loginUser && Object.keys(loginUser).length !== 0 ? <span><span>{loginUser.name} 님</span><button onClick={() => cancel({})}>취소</button></span>: null }
            <Link to='/record'><button className='btn btn-record'>장부 확인하기</button></Link>
        </div>);
};

const Cart = ({ calc, cart, onRemove }) => {
    let total = 0;
    useEffect(() => {
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
    
    const caution = () => swal("알림", "로그인이 필요한 기능입니다.", "info");

    return (
        <div className='btn-set'>
            <Link to='/search'><button className='btn'>회원검색</button></Link>
            <Link to={loginUser ? '/pay' : '/'}><button className='btn' onClick={() => { if (!loginUser) caution(); }}>결제하기</button></Link>
            <Link to='/register'><button className='btn'>회원등록</button></Link>
            <Link to={loginUser ? '/save' : '/'}><button className='btn' onClick={() => { if (!loginUser) caution(); }}>충전하기</button></Link>
        </div>
    );
}

function RightWrapper({total, setTotal, user, cancel, selectList, onSelect}) {
    loginUser = user;

    const removeOrder = (name) => {
        let temp = selectList.map(menu => (
          menu = (menu.name === name) ? { ...menu, count: menu.count - 1 } : menu));
        onSelect(temp.filter(menu => menu.count !==0));
    };
    
    return (
        <div className="wrap container-right">
            <Header cancel={cancel} />
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