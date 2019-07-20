import React, {useState, useEffect} from 'react';

//Hoja de estilos
import './index.css';

//Componentes personalizados
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario.js';
import Error from './componentes/Error.js';
import Clima from './componentes/clima.js';


function App() {

  //state principal
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const datosConsulta = ({ciudad, pais}) => {
    
    // Validar que ambos campos esten 
    if(!ciudad || !pais){
      guardarError(true);
      return;
    }

    // Si existen agregar al state
    guardarCiudad(ciudad);
    guardarPais(pais);
    guardarError(false);
  }

  //cargar un componente condicionalmente
  let componente;
  if(error){
    componente = <Error mensaje="Ambos campos som obligatorios"/>
  }else if(resultado.cod === "404"){
    componente = <Error mensaje="No encontramos esa ciudad en nuestros registros" />
  }else{
    componente = <Clima datos={resultado}/>;
  }

  useEffect(() => {

    // Prevenir la primera ejecucion
    if(ciudad === '') return; 

    const consultarApiClima = async () => {
      const appID = '39285c4503684bee0660b7eb95903c3a';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
  
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
  
      guardarResultado(datos);
    }

    consultarApiClima();
  }, [ciudad, pais])

  return (
    <div className="App">
      <Header titulo="Clima React app" />

      <div className="contenedor-form">
        <div className="container">

          <div className="row">

            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta}/>
            </div>

            <div className="col s12 m6">
              {componente}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
