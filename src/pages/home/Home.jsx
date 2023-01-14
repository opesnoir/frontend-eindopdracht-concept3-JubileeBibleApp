import React, {useEffect, useState} from 'react';
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import {Form, Link} from "react-router-dom";
/*import styles from "../search/Search.module.css";*/
import styles from './Home.module.css';
import axios from "axios";
import TextBox from "../../components/TextBox/TextBox";
import VideoBox from "../../components/VideoBox/VideoBox";
import Bible from "../../assets/home-bible-pexels-johnmark-smith-272337.jpg";
import sheeps from "../../assets/home-sheeps-pexels-pixabay-460956 copy.jpg";
import Tiles from "../../components/Tiles/Tiles";
import TilesMirror from "../../components/TilesMirror/TilesMirror";


// api key
const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {

    const [bible, setBible] = useState();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Jesus');

    //DUPLICAAT
    useEffect(() => {
        async function fetchData() {
            setError(false)
            try {
                setLoading(true)
                const response = await axios.get(`https://api.scripture.api.bible/v1/bibles`, {
                    // header data and api key
                    headers: {
                        'api-key': API_KEY,
                    },
                    //add params here
                    params: {}
                })
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        //invoke function
        void fetchData()
    }, [])

    return (
        <>
            <BasicIntro
                title="Zoek een Bijbelvers"
                introduction="Welkom op Jubilee BibleApp. Zoek hieronder een Bijbelvers op titel of steekwoord in ruim 40 vertalingen. Selecteer een Bijbel, voer een zoekterm in en druk op de button om de resultaten te bekijken"
            >
                {<form action="" className={styles.form}>
                    <label htmlFor="">
                        <label htmlFor="bible" className={styles.label}></label>
                        <select
                            className={styles.select}
                            name="bible"
                            id="bible"
                            value={bible}
                            onChange={(e) => setBible(e.target.value)}>
                            {data.map((b) => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="searchTerm" className={styles.label}></label>
                        <input
                            className={styles.input}
                            type="text"
                            name="searchTerm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}/>
                        <Link to="/search">
                            <button
                                className={styles.button}
                                type="submit"
                            >Zoeken
                            </button>
                        </Link>
                    </label>
                </form>}
            </BasicIntro>
            <section className={styles.section}>
                  <div className={styles.box}>
                <TextBox
                    className={styles.whiteBox}
                    title="Bijbeltekst van de dag"
                    text="insert hier dynamisch de Bijbeltekst"
                />
                  </div>
                <div className={styles.box}>
                <TextBox
                    className={styles.whiteBox}
                    title="De Bijbel"
                    text="Achtergrondinformatie"
                >
                {<Link to="/about-Bijbel"><button type="button" className={styles.linkLeesOverBijbel}>Lees meer</button></Link>}
                </TextBox>
                    </div>
            </section>
            <section className={styles.videoContainer}>
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/XEjDiMjkVRo"
                    title="What is the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/7_CGP-12AE0"
                    title="Story of the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/takEeHtRrMw"
                    title="The New Humanity"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </section>


            <Tiles
                title="Registratie"
                text="Registreer je om favoriete Bijbelverzen op te kunnen slaan."
                LinkTo="/register"
                button="registreer"
                type="button"
                onClick="onClick"
                src={Bible}
                alt="Afbeelding van een Bijbel"
                classNameButton={styles.buttonRegistreren}
                classNameImg={styles.imgBible}
            />

            <TilesMirror
                title="Aanmelden voor de nieuwsbrief"
                text="Op de hoogte blijven van ontwikkelingen en contact houden met Jubilee BibleApp? Meld je dan aan voor de nieuwsbrief."
                type="button"
                onClick="onClick"
                src={sheeps}
                alt="Afbeelding van twee schapen"
                classNameImg={styles.imgSheep}
            >
                <form action="">
                <label className={styles.formAanmeldenLabel} htmlFor="">Email:</label>
                <input className={styles.formAanmeldenInput} type="text"/>
                    <button className={styles.buttonAanmelden}>Aanmelden</button>
                </form>
                    <label>
                        <input
                            className={styles.emailCheckbox}
                            type="checkbox"
                        />
                        Ik ga akkoord met het verzenden van mijn e-mailadres.
                    </label>
            </TilesMirror>
            <hr/>
        </>
    );
};

export default Home;