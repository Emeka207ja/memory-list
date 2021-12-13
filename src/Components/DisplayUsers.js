import Card from "./Card"
import styles from '../Components/Modules/Displayusers.module.css'

const Displayusers = ({formUsers})=>{
    console.log(formUsers)
    return(
        <Card className={styles.Displayusers}>
            <ul>
                <br/>
                {
                formUsers.map(user=>{
                   return(
                       <div key={user.id}>
                           <li >
                               Added {user.name} with age ({user.age})
                           </li>
                       </div>
                   )
                })
                }
            </ul>
        </Card>
    )
}
export default Displayusers