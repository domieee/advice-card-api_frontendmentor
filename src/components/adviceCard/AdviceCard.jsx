import { useEffect, useState } from 'react';
import './AdviceCard.scss'
import Loader from '../loader/Loader.jsx'
import PatternDivDesk from '../../img/pattern-divider-desktop.svg'
import PatternDivDeskMobile from '../../img/pattern-divider-desktop.svg'
import Dice from '../../img/icon-dice.svg'

const AdviceCard = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(json => {
            setData(json)
        })

    }

    useEffect(() => {
        try {
            fetch('https://api.adviceslip.com/advice')
                .then(res => res.json())
                .then(json => {
                    setData(json)
                    return json
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
                {data.slip == undefined
                    ? <Loader />
                    : <p className='advice-content'>"{data.slip.advice}"</p>}
            </section>
            <section className='card-bottom'>

            </section>
            <button type='button' onClick={fetchData}>

            </button>
        </article>
    );
}

export default AdviceCard;