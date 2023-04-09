
import './App.css';
import Employe from './components/Employe';

function App() {
  let showEmployees =true;

  return (
    <div className="App">
      {console.log('inside the return ')}
      {showEmployees ?
      <>
      <Employe  name= "Axel" role = "Intern"/> 
      <Employe name='Abey'/> 
      <Employe name='Jphn'/> 
      
      </>
      :
      <p>You cannot see the employees</p>
    
    }

        
        

    </div>
  );
}

export default App;
