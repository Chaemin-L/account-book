import React from 'react';
import { Link } from 'react-router-dom'
import './Wrapper.css';

const PayForm = ({ total, loginUser, userList, updateUser, clearCart }) => {
    function submit(e) {
        e.preventDefault();
        if (!loginUser||Object.keys(loginUser).length === 0) {
            // 로그인을 요구하는 토스트 메시지 등록.
            return;
        } 
        // eslint-disable-next-line
        updateUser(userList.map(user => (loginUser == user) ? { ...user, account: loginUser.account - total } : user));
        clearCart([]);  // 카트 초기화

        // 결제 완료 토스트 메시지 등록
    }

    return (
        <div className="container-left">
            <form>
                <div>
                    {loginUser&&<span>{loginUser.name} 님,</span>}
                    <span>결제금액 {total}</span>
                </div>
                <button onClick={submit}><Link to="/">결제하기</Link></button>
            </form>
            <button><Link to="/">돌아가기</Link></button>
        </div>
    );
}

export default PayForm;