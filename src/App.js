
import { useState } from 'react';
import './App.css';
import Base from './Base/Base';
import { StudentDetails } from './Components/Students';

function App() {

  return (
    <div className="App">



    <Base
    title = "Batch Details"
    description= "All students details"
    >
      <StudentDetails/>
      
    </Base>
    
      
    </div>
  );
}

export default App;

//////////////////////
// crud succesfull
// props drlling  done
// hooks (usestate and useeffects)
// prop child to parent 
// routings 
// buttons 
// unauthoried re routings 
// material ui done
//////////////////////////////
