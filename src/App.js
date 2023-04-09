
import './App.css';
import Employe from './components/Employe';

function App() {
  console.log('we are about to list the employees');
  let showEmployees =true;

  return (
    <div className="App">
      {console.log('inside the return ')}
      {showEmployees ?
      <>
      <Employe/> 
      <Employe/> 
      <Employe/> 
      <Employe/>
      </>
      :
      <p>You cannot see the employees</p>
    
    }

        
        

    </div>
  );
}

export default App;
