import { ListItem } from '../ListItem/ListItem';
import { AddItem } from '../AddItem/AddItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './List.module.scss';
import { useState } from 'react';

export const List = () => {
    const [items, setItems] = useLocalStorage('taskList', []);
    const [newItem, setNewItem] = useState('');

    const handleChecked = (id) => {
        const updatedList = items.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setItems(updatedList);
    };

    const deleteItem = (id) => {
        const updatedList = items.filter((item) => item.id !== id);
        setItems(updatedList);
    };

    const addItem = (e) => {
        e.preventDefault();
        if (newItem.trim() === '') {
            return;
        }
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const itemToAdd = { id, name: newItem, checked: false };
        const updatedList = [...items, itemToAdd];
        setItems(updatedList);
        setNewItem('');
    };

    return (
        <main className={styles.main}>
            <h2 className={styles.title}>this is list</h2>

            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                addItem={addItem}
            />
            {items.length === 0 ? (
                <p className={styles.congrats}>Yay! No more work for today!</p>
            ) : (
                <ul className={styles.list}>
                    {items.map((item) => (
                        <ListItem
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            checked={item.checked}
                            handleChecked={() => handleChecked(item.id)}
                            deleteItem={() => deleteItem(item.id)}
                        />
                    ))}
                </ul>
            )}
        </main>
    );
};
