import React from 'react'
import "./Final.scss";

function Final() {
    return (
        <section className='section-end'>
            <div className='tittle-page'>
                <h1>Parabéns!</h1>
                <h2>Sua comunidade recebeu 40 cestas básicas. <br /> Para onde você gostaria de encaminhá-las?</h2>
            </div>
            <div className='inpt-doar'>
                <input type="text" placeholder='Doar para creche X' />
                <input type="text"  placeholder='Doar para creche Y'/>
                <h2>Doar depois</h2>
            </div>
        </section>
    )
}

export default Final;