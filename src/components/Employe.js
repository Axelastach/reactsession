import React from 'react'

function Employe(props) {
    return (
        <>

         <h3>Employe {props.name}</h3>
         <p>{props.role ? props.role : "No role"}</p>

        </>
       

        
    )
}

export default Employe
