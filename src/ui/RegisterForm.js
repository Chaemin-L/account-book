import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './Wrapper.css';

const RegisterForm = ({addUser}) => {
    const [userInfo, setUserInfo] = useState({
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
        console.log(userInfo);
        addUser(userInfo);
    }

    return (
        <div className="container-left">
            <form>
                <label>이름</label>
                <input name="name" onChange={saveUser}/>
                <label>전화번호</label>
                <input name="phoneNumber" onChange={saveUser}/>
                <button onClick={submit}><Link to='/'>등록하기</Link></button>
            </form>
            <button><Link to="/">돌아가기</Link></button>
        </div>
    );
}

export default RegisterForm;