import './App.css';
import db from './database/DBController';
  
function App() {
    return (
      <>{db.menu.coffee.forEach((item, i) => console.log(i, item.name))}</>
    );
}

export default App;