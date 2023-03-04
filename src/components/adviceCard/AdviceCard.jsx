import { useEffect, useState } from 'react';
import './AdviceCard.scss'
import Loader from '../loader/Loader.jsx'
import PatternDivDesk from '../../img/pattern-divider-desktop.svg'
import PatternDivDeskMobile from '../../img/pattern-divider-desktop.svg'
import Dice from '../../img/icon-dice.svg'

const AdviceCard = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
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
    }

    fetchData()



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
            <button
                type='button'
                onClick={fetchData}>
                <img src={Dice} alt="" />
            </button>
        </article>
    );
}

export default AdviceCard;