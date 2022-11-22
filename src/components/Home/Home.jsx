import { useParams } from "react-router-dom";
import data from "../../assets/db.json";
import { useEffect } from "react";
import styles from "./Home.module.css";
import parserHTML from "html-react-parser";

const Home = () => {
    const { client, test } = useParams();

    // let item = []; // should be useSelector
    // const isLoading = useSelector((state) => state.isLoading)
    // const error = useSelector((state) => state.error)

    const videos = data.filter((video) => video.cliente === client)
    const item = videos[test - 1]

    useEffect(() => {
        // dispatch getdata action

        return () => {
            if (item) {
                // dispatch clear state action
            }
        };
    }, []);

    // if(isLoading) return <Loader />
    // if(error) return <Error />

    if(!videos.length){
        return <h1>No existe el cliente {client}</h1>
    }
    else if(!item){
        return <h1>No existe el test {test} de {client}</h1>
    }

    return (
        <div className={styles.box}>
            <h1>Cliente: {item.cliente}</h1>
            <h2>Test {test}</h2>
            <div className={styles.videoPlayer}>
                <video src={item.linkVideo} controls />
            </div>
            <div className={styles.transcripcion}>
                <h2>Transcripción</h2>
                <div>{parserHTML(item.transcripcion)}</div>
            </div>
            <div className={styles.tareas}>
                <h1>Tareas</h1>
                <h3>{item.escenario}</h3>
                <hr></hr>
                <ul>
                    {item.preguntas?.map((pregunta, index) => (
                        <li key={index}>
                            <h3>Tarea {index + 1}</h3>
                            <p className={styles.texto}>{pregunta.texto.replaceAll('\\n', '\n')}</p>
                            <p className={styles.duracion}>Duración de la tarea: {pregunta.tiempo}</p>
                            <hr></hr>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
