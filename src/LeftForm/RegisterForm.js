import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../ui/Wrapper.css';

const RegisterForm = ({addUser}) => {
    const [userInfo, setUserInfo] = useState({
        id: "",
        name: "",
        phoneNumber: "",
        account: 0,
    });

    function saveUser(e) {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    }

    function submit(e) {
        e.preventDefault();
        userInfo.id = userInfo.phoneNumber.substring(7);
        setUserInfo({ ...userInfo, id: userInfo.phoneNumber.substring(7) });
        addUser(userInfo);
    }

    return (
        <div className="container-left">
            <form>
                <label>이름</label>
                <input name="name" onChange={saveUser}/>
                <label>전화번호</label>
                <input name="phoneNumber" onChange={saveUser}/>
                <Link to='/'><button onClick={submit}>등록하기</button></Link>
            </form>
            <Link to="/"><button>돌아가기</button></Link>  
        </div>
    );
}

export default RegisterForm;