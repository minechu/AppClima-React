import React from 'react';

const Clima = ({datos}) => {
    
    let {name, main} = datos;
    if(!name) return null;
    
    const kelvin = 273.15;

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    { parseInt(main.temp - kelvin) } <span> &#x2103; </span>
                </p>
                <p>Temperatura Maxima: { parseInt(main.temp_max - kelvin) } &#x2103; </p>
                <p>Temperatura Minima: { parseInt(main.temp_min - kelvin) } &#x2103; </p>
            </div>
        </div>
    );
}

export default Clima;