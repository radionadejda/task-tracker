import { Header } from '../components/Header/Header';
import { List } from '../components/List/List';
import { Footer } from '../components/Footer/Footer';
import styles from '../styles/App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <List />
            <Footer />
        </div>
    );
}

export default App;
