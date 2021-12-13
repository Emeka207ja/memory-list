import {useState} from 'react'
import Card from "./Card"
import styles from '../Components/Modules/Adduser.module.css'
import Button from "./Button"
import ErrorModal from './ErrorModal'

const AddUser = ({onUser})=>{
    const [name, setName] = useState('')
    const [age,setAge]=useState('')
    const [error, setError]= useState()
    const handleNameChange = (e)=>{
        setName(e.target.value) 
    }
    const handleAgeChange = (e)=>{
        setAge(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setName('')
        setAge('')
        if(name.trim().length===0 || age.trim().length===0){
            setError({
                title:'Name or Age must not be Empty',
                message: 'Please select a none empty name and age '
            })
            return;
        }
        if(age<1){
            setError({
                title: 'invalid Age',
                message: 'please select an age greater or equal to 1'
            })
            return;
        }
        
        onUser(name,age)
        console.log(name,age)
    }
    const handleError = ()=>{
        setError(null)
    }
    return(
        <div>
            <Card className={styles.form}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={handleNameChange} value={name}/>

                <label htmlFor='age'>Age</label>

                <input type='number' id='age' name='age' onChange={handleAgeChange} value={age}/>
                <Button type='submit'><span>Add user</span></Button>
            </form>
        </Card>
        {
            error && <ErrorModal dtitle={error.title} dmessage={error.message} onConfirm={handleError}/>
        }
        </div>
        
    )
}
export default AddUser