import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../ui/Wrapper.css';

const SearchForm = ({userList, setUser}) => {
    const [match, setMatch] = useState([]);

    function search(e) {
        setMatch( userList.filter(user => (user.name.includes(e.target.value)||user.phoneNumber.includes(e.target.value))));
    }

    function selectUser(user) {
        console.log(user);
        setUser(user);       
    }
    
    return (
        <div className="container-left">
            <input onChange={search}/>
            <Link to='/'><button>돌아가기</button></Link>
            <ul>
                {match.map((user, i) => <li key={i} onClick={() => { selectUser(user) }}><Link to='/'>{user.name}  {user.phoneNumber}  {user.account}</Link></li>)}
            </ul>
        </div>
    );
}

export default SearchForm;