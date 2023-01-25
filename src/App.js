import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Base from './Base/Base';
import AuthPage from './Components/AuthPage';
import DashBoard from './Components/DashBoard';
import NoPage from './Components/NoPage';
import StudentProfile from './Components/StudentProfile';
import { StudentDetails } from './Components/Students';
import WelcomePage from './Components/WelcomePage';
import { data } from './Data/data';

function App() {
  const [studentsData, setStudents] = useState(data);
  return (
    <div className="App">
       
   <Switch>
    
     <Route exact path = "/">
     <WelcomePage/>
     </Route>
      
      <Route path="/dashboard">
          <DashBoard/>
      </Route>

      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path = "/details">
        <StudentDetails 
        studentsData={studentsData} 
        setStudents= {setStudents}/>
      </Route>

      <Route path = "/students">
         <Redirect to = "/details"/>
      </Route>

      <Route path = "/student/:id">
        <StudentProfile studentsData={studentsData} />
      </Route>

      <Route path = "**">
        <NoPage/>
      </Route>




   </Switch>

    
    
      
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


{/* <Base
    title = "Batch Details"
    description= "All students details"
    >
      <StudentDetails/>
      
    </Base>

    <DashBoard/>

    <AuthPage/> */}