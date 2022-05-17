import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';
import swal from 'sweetalert';

const PayForm = ({ total, loginUser, userList, updateUser, cart, clearCart }) => {
    let newTrans = {
        id: loginUser.phoneNumber.substring(7),
        name: loginUser.name,
        date: null,
        type: '-',
        amount: 0,
        menu: cart,
    };

    const [trans, setTrans] = useState(() => {
        const saved = localStorage.getItem('Transaction');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    
    useEffect(() => {
        localStorage.setItem('Transaction', JSON.stringify(trans));
    }, [trans]);
    

    function submit(e) {
        e.preventDefault();
        if (total === 0) {
            swal("결제불가!", "상품을 먼저 선택해주세요.", "error");
            return;
        }
        newTrans = { ...newTrans, date: new Date().toLocaleDateString(), menu: cart, amount: total };
        // eslint-disable-next-line
        updateUser(userList.map(user => (loginUser.id === user.id) ? { ...user, account: loginUser.account-total } : user));
        (trans.length!==0) ? setTrans(prevTrans => ([...prevTrans, newTrans])) : setTrans([newTrans]);
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