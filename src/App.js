import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RightWrapper from './Container/RightWrapper';
import MenuList from './Container/MenuForm';
import SearchForm from './Container/SearchForm';
import RegisterForm from './Container/RegisterForm';
import SaveForm from './Container/SaveForm';
import PayForm from './Container/PayForm';
import RecordListForm from './Record/RecordListForm';
import RecordUserForm from './Record/RecordUserForm';

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selectList, setList] = useState([]); // selectList data format [{name, count}, ]
  const [total, setTotal] = useState([]);

  const [userList, setUserList] = useState(() => {
    const saved = localStorage.getItem('User');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  
  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(userList));
    setLoginUser(userList.filter(user => (user.phoneNumber === loginUser.phoneNumber))[0]);
  }, [userList]);
  
  const addUser = (user) => {
    setLoginUser(user);
    setUserList([...userList, user]);
  }
 
  return (
    <div className='wrap wrap-container'>
        <Routes>
        <Route path="/" element={<MenuList selectList={selectList} onSelect={setList}/>}/>
        <Route path="/search" element={<SearchForm userList={userList} setUser={setLoginUser} />} />
        <Route path="/register" element={<RegisterForm addUser={addUser} />} />
        <Route path="/save" element={<SaveForm loginUser={loginUser} userList={userList} updateUser={setUserList} />}/>
        <Route path="/pay" element={<PayForm total={total} loginUser={loginUser} userList={userList} updateUser={setUserList} cart={selectList} clearCart={setList} />} />
        <Route path="/record" element={<RecordListForm userList={userList} />} />
        <Route path="/record/:id" element={<RecordUserForm />} />  
      </Routes>
      <RightWrapper total={total} setTotal={setTotal} user={loginUser} cancel={setLoginUser} selectList={selectList} onSelect={setList}/>
    </div>
  );
};
           
export default App;