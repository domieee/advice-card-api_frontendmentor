import { useEffect, useState } from 'react';
import './AdviceCard.scss'

const AdviceCard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(json => {
                setData([json])
            })
    }, [])

    console.log(data);

    return (
        <article className="card">
            <section className='card-top'>
                <p className='advice-nr'>{data.slip.id}</p>
            </section>
            <section className='card-main'>
                <p className='advice-content'></p>
            </section>
            <section className='card-bottom'>
                <div className="stroke"></div>

                <div className="stroke"></div>
            </section>
        </article>
    );
}

export default AdviceCard;