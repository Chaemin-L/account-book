import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';
import swal from 'sweetalert';
import Trans from '../Database/Trans';
import WriteTrans from '../Functions/WriteTrans';


const PayForm = ({ total, loginUser, userList, updateUser, cart, clearCart }) => {
    let newTrans = new Trans(
        loginUser.phoneNumber.substring(7),
        loginUser.name,
        null,
        0,
        cart,
    );

    function submit(e) {
        e.preventDefault();
        if (total === 0) {
            swal("결제불가!", "상품을 먼저 선택해주세요.", "error");
            return;
        }
        newTrans = { ...newTrans, date: new Date().toLocaleDateString(), menu: cart, amount: -total };
        WriteTrans(userList, loginUser, updateUser, newTrans);
        clearCart([]);  // 카트 초기화

        // 결제 완료 토스트 메시지 등록
        swal("완료!", "정상적으로 금액이 사용되었습니다.", "success");
    }

    return (
        <div className="container-left">
            <form>
                <div>
                    {Object.keys(loginUser).length !== 0&&<span>{loginUser.name} 님,</span>}
                    <span>결제금액 {total}</span>
                    <span>현재 보유금액 {loginUser.account}</span>
                </div>
                <Link to="/"><button onClick={submit}>결제하기</button></Link>
            </form>
            <Link to="/"><button>돌아가기</button></Link>
        </div>
    );
}

export default PayForm;