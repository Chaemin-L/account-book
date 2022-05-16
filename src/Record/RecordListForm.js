import React from 'react';
import { Link } from 'react-router-dom'
import '../CSS/Wrapper.css';


const RecordListForm = ({ userList }) => {

    return (
        <div className="container-left">
            <ul>
                {userList.map(user => (<Link to={`/record/${user.id}`}><li key={user.id}>{user.name} || {user.phoneNumber} || {user.account}</li></Link>))}
            </ul>
        </div>
    )
};

export default RecordListForm;

