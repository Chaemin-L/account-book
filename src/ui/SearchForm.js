import React from 'react';
import { Link } from 'react-router-dom'

import './Wrapper.css';

const SearchForm = () => {
    return (
        <div className="container-left">
            <input />
            <button><Link to='/'>돌아가기</Link></button>

        </div>
    );
}

export default SearchForm;