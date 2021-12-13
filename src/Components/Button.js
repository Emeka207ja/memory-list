import styles from '../Components/Modules/Button.module.css'

const Button = (props)=>{
    return(
        <div className={styles.button}>
            <button type={props.type} onclick={props.onclick}>{props.children}</button>
        </div>
    )
}
export default Button