import Button from "./Button"
import Card from "./Card"
import styles from '../Components/Modules/ErrorModal.module.css'

const ErrorModal = ({dtitle, dmessage,onConfirm}) =>{
    return(
        <div onClick={onConfirm}>
            <div className={styles.backdrop}/>
            <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{dtitle}</h2>
            </header>
            <div className={styles.content}>
                <p>{dmessage}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onConfirm}><span>cancel</span></Button>
            </footer>
        </Card>
        </div>
        
    )
}
export default ErrorModal