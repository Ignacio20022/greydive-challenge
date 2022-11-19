import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>
            <h2>La pagina que estas buscando no se encontró</h2>
        </div>
    );
}
 
export default NotFound;