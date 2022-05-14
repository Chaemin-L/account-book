import React, { useState } from 'react';
import RightWrapper from './ui/RightWrapper';
import MenuList from './ui/MenuList';
import SearchForm from './ui/SearchForm';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  const [selectList, setList] = useState([]); // selectList data format [{name, count}, ]
 
  return (
    <div className='wrap wrap-container'>
        <Routes>
          <Route path="/" element={<MenuList selectList={selectList} onSelect={setList}/>}/>
            <Route path="/search" element={<SearchForm />} />
        </Routes>
      <RightWrapper selectList={selectList} onSelect={setList}/>
    </div>
  );
}
           
export default App;