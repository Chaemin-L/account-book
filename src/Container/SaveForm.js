import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';
import swal from 'sweetalert';
import Trans from '../Database/Trans';

const SaveForm = ({ loginUser, userList, updateUser }) => {
    const [money, setMoney] = useState(0)
    const [trans, setTrans] = useState(() => {
        const saved = localStorage.getItem('Transaction');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    let newTrans = new Trans(
        loginUser.phoneNumber.substring(7),
        loginUser.name,
        null,
        '+',
    );
    
    useEffect(() => {
        localStorage.setItem('Transaction', JSON.stringify(trans));
    }, [trans]);

    function onChange(e) {
        setMoney(Number(e.target.value));
    }

    function submit(e) {
        e.preventDefault();
        if (money === 0) {
            swal("충전불가!", "충전 금액을 먼저 입력해주세요.", "error");
            return;
        }
        newTrans = { ...newTrans, date: new Date().toLocaleDateString(), amount: money };
        // eslint-disable-next-line
        updateUser(userList.map(user =>  (loginUser.id === user.id) ? { ...user, account: loginUser.account + money } : user));
        (trans.length !== 0) ? setTrans(prevTrans => ([...prevTrans, newTrans])) : setTrans([newTrans]);
        swal("완료!", "정상적으로 금액이 충전되었습니다.", "success");
    }

    return (
        <div className="container-left">
            <form>
                <label>충전 금액:</label>
                <input onChange={onChange}/>
                <span>원</span>
                <Link to="/"><button onClick={submit}>충전하기</button></Link>
            </form>
            <Link to="/"><button>돌아가기</button></Link>
        </div>
    );
}

export default SaveForm;