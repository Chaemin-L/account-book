import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../ui/Wrapper.css';


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
        if (!loginUser||Object.keys(loginUser).length === 0) {
            // 로그인을 요구하는 토스트 메시지 등록.
        } 
        newTrans = { ...newTrans, date: new Date().toLocaleDateString(), menu: cart, amount: total };
        // eslint-disable-next-line
        updateUser(userList.map(user => (loginUser.id === user.id) ? { ...user, account: loginUser.account-total } : user));
        (trans.length!==0) ? setTrans(prevTrans => ([...prevTrans, newTrans])) : setTrans([newTrans]);
        clearCart([]);  // 카트 초기화

        // 결제 완료 토스트 메시지 등록
    }

    return (
        <div className="container-left">
            <form>
                <div>
                    {Object.keys(loginUser).length !== 0&&<span>{loginUser.name} 님,</span>}
                    <span>결제금액 {total}</span>
                </div>
                <Link to="/"><button onClick={submit}>결제하기</button></Link>
            </form>
            <Link to="/"><button>돌아가기</button></Link>
        </div>
    );
}

export default PayForm;