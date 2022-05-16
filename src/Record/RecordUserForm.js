import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import RecordItem from './RecordItem'
import '../CSS/Wrapper.css';


const RecordUserForm = () => {
    const { id } = useParams();

    const [trans, setTrans] = useState(() => {
        const saved = localStorage.getItem('Transaction');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    return (
        <div className="container-left">
            <div>
                {trans.filter((record) => (record.id === id)).map((match, i) => <RecordItem key={i} record={match} />)}
            </div>
            {(trans.length !== 0) && <button>출력하기</button>}
            <Link to='/record'><button>뒤로가기</button></Link>
        </div>
    )
};

export default RecordUserForm;

