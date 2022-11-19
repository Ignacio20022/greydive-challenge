import { useParams } from "react-router-dom";
import data from "../../../db.json";
import { useEffect } from "react";
import styles from "./Home.module.css";
import parser from "html-react-parser";

const Home = () => {
    const { id } = useParams();

    let item = []; // should be useSelector
    // const isLoading = useSelector((state) => state.isLoading)
    // const error = useSelector((state) => state.error)
    if (!item.length) item = data.find((item) => item.idVideo === id);

    useEffect(() => {
        // dispatch(getData())

        return () => {
            if (item.length) {
                // dispatch clear state action
            }
        };
    }, []);

    // if(isLoading) return <Loader />
    // if(error) return <Error />

    console.log(item);
    return (
        <div className={styles.box}>
            <h1>Cliente: {item.cliente}</h1>
            <h3>
                <a href={item.linkVideo} target='_blank'>
                    Video
                </a>
            </h3>
            <div className={styles.videoPlayer}>
                <video src={item.linkVideo} controls />
            </div>
            <div className={styles.transcripcion}>
                <h2>Transcripción</h2>
                <div>{parser(item.transcripcion)}</div>
            </div>
            <div className={styles.tareas}>
                <h1>Tareas</h1>
                <h3>{item.escenario}</h3>
                <hr></hr>
                <ul>
                    {item.preguntas?.map((pregunta, index) => (
                        <li key={index}>
                            <h3>Tarea {index + 1}</h3>
                            <p>{pregunta.texto}</p>                                
                            <hr></hr>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
