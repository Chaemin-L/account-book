import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import data from '../database/Customer'

import './Wrapper.css';

const SearchForm = ({setUser}) => {
    const [match, setMatch] = useState([]);

    function search(e) {
        setMatch( data.filter(d => d.id.includes(e.target.value)));
    }

    function selectUser(user) {
        console.log(user);
        setUser(user);
        <Link to='/'></Link>
       
    }
    return (
        <div className="container-left">
            <input onChange={search}/>
            <button><Link to='/'>돌아가기</Link></button>
            <ul>
                {match.map((user) => <li key={user.id} onClick={()=>{selectUser(user)}}>{user.name}{user.account}</li>)}
            </ul>
        </div>
    );
}

export default SearchForm;