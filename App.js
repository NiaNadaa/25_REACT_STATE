import './App.css';
//import Main from "./Main"
import evento from "./evento"

function App() {

function Evento(props){
  return(
    <>
        <h2>Nombre del Evento: {props.evento.nombre}</h2>
        <h4>Fecha: {props.evento.fecha}</h4>
        <h4>Hora: {props.evento.hora}</h4>
        <p>Lugar: {props.evento.lugar.direccion}</p>
        <p>Ciudad: {props.evento.lugar.ciudad}</p>
    </>
  )
}

  return (
    <Evento evento={evento}/>
  );
}

export default App;
