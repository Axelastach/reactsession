
import './index.css';
import Employe from './components/Employe';
import { useState } from 'react';

function App() {
  const [ role ,setRole]=useState('dev')
  const showEmployees =true;
  

  return (
    <div className="App bg-red-300">
      
      {showEmployees ?(
      <>
      <input type ='text' onChange={(e)=>{
        console.log(e.target.value)
        setRole (e.target.value);
      }}/>
      <Employe  name= "Axel" role = "Intern"/> 
      <Employe name='Abey' role ={role}/> 
      <Employe name='Jphn'/> 
      
      
      </>
       ) :
     ( <p>You cannot see the employees</p>)
    
    }

        
        

    </div>
  );
}

export default App;
