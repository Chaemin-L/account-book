import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';
import swal from 'sweetalert';
import Trans from '../Database/Trans';
import WriteTrans from '../Functions/WriteTrans';

const SaveForm = ({ loginUser, userList, updateUser }) => {
    const [money, setMoney] = useState(0);

    let newTrans = new Trans(
        loginUser.phoneNumber.substring(7),
        loginUser.name,
        null,
    );
    
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
        WriteTrans(userList, loginUser, updateUser, newTrans);
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