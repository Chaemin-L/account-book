import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import RecordItem from './RecordItem'
import '../ui/Wrapper.css';


const RecordUserForm = () => {
    const { id } = useParams();
    let cnt = 0;

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
        </div>
    )
};

export default RecordUserForm;

