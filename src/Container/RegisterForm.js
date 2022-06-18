import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';
import User from '../Database/User';

const RegisterForm = ({addUser}) => {
    let newUser = new User();

    return (
        <div className="container-left">
            <form>
                <label>이름</label>
                <input name="name" onChange={newUser.save}/>
                <label>전화번호</label>
                <input name="phoneNumber" onChange={newUser.save}/>
                <Link to='/'><button onClick={(e)=>newUser.create(e, addUser)}>등록하기</button></Link>
            </form>
            <Link to="/"><button>돌아가기</button></Link>  
        </div>
    );
}

export default RegisterForm;