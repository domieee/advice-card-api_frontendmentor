import { useEffect, useState } from 'react';
import './AdviceCard.scss'
import Loader from '../loader/Loader.jsx'

const AdviceCard = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
        try {
            fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json)
            })
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        try {
            fetch('https://api.adviceslip.com/advice')
                .then(res => res.json())
                .then(json => {
                    setData(json)
                })
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <article className="card">
            <section className='card-top'>
                {data.slip == undefined
                    ? <Loader />
                    : <p className='advice-nr'>ADVICE #{data.slip.id}</p>}
            </section>
            <section className='card-main'>
                {data.slip == undefined
                    ? <Loader />
                    : <p className='advice-content'>"{data.slip.advice}"</p>}
            </section>
            <section className='card-bottom'>

            </section>
            <button
                type='button'
                onClick={fetchData}>
            </button>
        </article>
    );
}

export default AdviceCard;