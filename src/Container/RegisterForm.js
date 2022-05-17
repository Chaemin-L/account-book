import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';

const RegisterForm = ({addUser}) => {
    const [newUser, setNewUser] = useState({
        id: "",
        name: "",
        phoneNumber: "",
        account: 0,
    });

    function saveUser(e) {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    }

    function submit(e) {
        e.preventDefault();
        newUser.id = newUser.phoneNumber.substring(7);
        setNewUser({ ...newUser, id: newUser.phoneNumber.substring(7) });
        addUser(newUser);
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