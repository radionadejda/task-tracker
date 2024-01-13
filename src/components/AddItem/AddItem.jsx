import { useEffect, useRef } from 'react';
import styles from './AddItem.module.scss';

export const AddItem = ({ newItem, setNewItem, addItem }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [newItem]);

    return (
        <form className={styles.form}>
            <input
                type="text"
                required
                name="taskInput"
                ref={inputRef}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className={styles.input}
            />
            <button
                type="submit"
                onClick={addItem}
                className={styles.addButton}>
                add
            </button>
        </form>
    );
};
