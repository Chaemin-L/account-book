import React from 'react';
import { Link } from 'react-router-dom'
import './Wrapper.css';

const SaveForm = ({ loginUser, userList, updateUser }) => {
    
    let money = 0;

    function onChange(e) {
        money =  Number(e.target.value);
    }
    function submit(e) {
        e.preventDefault();
        if (Object.keys(loginUser).length === 0) {
            // 로그인을 요구하는 토스트 메시지 등록.
            return;
        } 
        // eslint-disable-next-line
        updateUser(userList.map(user => (loginUser == user) ? { ...user, account: loginUser.account+money } : user));
    }

    return (
        <div className="container-left">
            <form>
                <label>충전 금액:</label>
                <input onChange={onChange}/>
                <span>원</span>
                <button onClick={submit}><Link to="/">충전하기</Link></button>
            </form>
            <button><Link to="/">돌아가기</Link></button>
        </div>
    );
}

export default SaveForm;