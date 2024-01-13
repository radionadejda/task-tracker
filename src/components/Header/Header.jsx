import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>smol task tracking app</h1>
        </header>
    );
};
