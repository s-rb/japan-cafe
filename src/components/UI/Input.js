import styles from './Input.module.css';

// При помощи {...props.input} все переданные, но явно не прописанные пропсы будут установлены
// (например передать type: number - установит инпуту такой тип
const Input = (props) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input}/>
    </div>
}

export default Input;