import { useEffect, useState } from 'react';
import './AdviceCard.scss'
import Loader from '../loader/Loader.jsx'

const AdviceCard = () => {

    const [data, setData] = useState([])


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



    console.log(data);

    return (
        <article className="card">
            <section className='card-top'>
                    {data.slip == undefined
                    ? <Loader /> 
                    : <p className='advice-nr'>ADVICE #{data.slip.id}</p>}
            </section> 
            <section className='card-main'>
                <p className='advice-content'>

                </p>
            </section>
            <section className='card-bottom'>
                <div className="stroke"></div>

                <div className="stroke"></div>
            </section>
        </article>
    );
}

export default AdviceCard;