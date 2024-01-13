import styles from './ListItem.module.scss';

export const ListItem = (props) => {
    return (
        <div className={styles.item}>
            <label
                htmlFor={`checkbox${props.id}`}
                className={`${styles.label} ${props.checked ? styles.done : ''}`}>
                {props.name}
            </label>
            <input
                type="checkbox"
                id={`checkbox${props.id}`}
                className={styles.checkbox}
                checked={props.checked}
                onChange={props.handleChecked}></input>
            <button
                className={styles.deleteButton}
                onClick={() => props.deleteItem(props.id)}>
                delete
            </button>
        </div>
    );
};
