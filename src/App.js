
import './index.css';
import Employe from './components/Employe';
import { useState } from 'react';
import{v4 as uuidv4} from 'uuid'

function App() {
  const [ role ,setRole]=useState('dev')
  const [employes,setEmployes]=useState(
    [
      {
        
        name:'Axel',
        role:'developer',
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name:'Caleb',
        role:'engineer',
        img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name:'John',
        role:'manager',
        img:"https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name:'Melanie',
        role:'senior intern',
        img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name:'Sal',
        role:'software engineer',
        img:"https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg"
      },
      {
        name:'Jake',
        role:'the devops guy',
        img:"https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
    ]
  )
  const showEmployees =true;
  

  return (
    <div className="App">
      
      {showEmployees ?(
      <>
      <input type ='text' onChange={(e)=>{
        console.log(e.target.value)
        setRole (e.target.value);
      }}/>
      <div className='flex flex-wrap justify-center'>
        {employes.map((employee)=>{
          
        
          return(
          <Employe 
          key={uuidv4()}
          name={employee.name}
          role={employee.role}
          img={employee.img}
          />

        );})}
      
 
      </div>
      
      </>
       ) :
     ( <p>You cannot see the employees</p>)
    
    }

        
        

    </div>
  );
}

export default App;
