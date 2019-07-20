import React, {useState} from 'react';

const Formulario = ({datosConsulta}) => {

    // busqueda = state
    // guardarBusqueda = setState()
    const [busqueda, guardarBusqueda] = useState({
        ciudad : "",
        pais : ""
    })

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = (e) => {
        e.preventDefault();
        datosConsulta(busqueda);
    }

    return(
        <form onSubmit={consultarClima}>
            <div className="input-fild col s12">
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
                
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-fild col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un pais</option>
                    <option value="VE">Venezuela</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Espana</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <div className="input-fild col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-black yellow accent-4" value="Buscar clima"/>
            </div>
        </form>
    );
}

export default Formulario;