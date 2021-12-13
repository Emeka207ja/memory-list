import { useState } from 'react';

import AddUser from './Components/AddUserForm';
import Displayusers from './Components/DisplayUsers';


function App() {
  const [users, setUsers]= useState([])

  const Uservalues = (name, age)=>{
    setUsers(prevState=>{
      return [ ...prevState, {name:name, age:age, id:Math.random().toString()}]
      
    })
    console.log( name, age)
  }
  return (
    <div>
      <AddUser onUser={Uservalues}/>
      <Displayusers formUsers ={users}/>
    </div>
  );
}

export default App;
