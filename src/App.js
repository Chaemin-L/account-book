import React, { useState, useEffect } from 'react';
import RightWrapper from './ui/RightWrapper';
import MenuList from './ui/MenuList';
import SearchForm from './ui/SearchForm';
import RegisterForm from './ui/RegisterForm';
import SaveForm from './ui/SaveForm';
import PayForm from './ui/PayForm';
import { Routes, Route } from 'react-router-dom';


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
        <Route path="/pay" element={<PayForm total={total} loginUser={loginUser} userList={userList} updateUser={setUserList} cart={selectList} clearCart={setList}/>} />
        </Routes>
      <RightWrapper total={total} setTotal={setTotal} user={loginUser} cancel={setLoginUser} selectList={selectList} onSelect={setList}/>
    </div>
  );
};
           
export default App;