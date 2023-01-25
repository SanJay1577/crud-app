
import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const element = <h1>hi</h1>

function Base ({title, description, children}) {
    // react navigator
    const history = useHistory();

    return (
        <div className='main-component'>
             <AppBar position='static'>
               <Toolbar variant='dense'>
                <Button 
                color='inherit'
                onClick={()=>history.push("/dashboard")}>
                DashBoard</Button>

                <Button 
                color='inherit' 
                onClick={()=>history.push("/details")}>
                    Student List</Button>
                <Button 

                color='inherit' 
                onClick={()=>history.push("/register")}>
                    Login</Button>

                <Button 
                color='inherit'
                 onClick={()=>history.push("/adkjadgjsgdjs")}>
                    Nopage</Button>
                    
               </Toolbar>
            </AppBar>
            <header>
                <h1 className='heading'>{title}</h1>
            </header>
            <main className='main-segment'>
               <h2>{description}</h2>

               <div>
                  {children}
               </div>
            </main>
          
        </div>
    )
}

export default Base


// difference between jsx and component 
