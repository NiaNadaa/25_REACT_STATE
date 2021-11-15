function Main(){
    let evento = {
        nombre: "Salsa dance party",
        fecha: "24/07/2020",
        hora: "16:00",
        lugar: {
            direccion:"Done Bikendi Kalea, 2",
            ciudad: "Bilbao"
                }
    };
    return(
        <>
        <h2>Nombre del Evento: {evento.nombre}</h2>
        <h4>Fecha: {evento.fecha}</h4>
        <h4>Hora: {evento.hora}</h4>
        <p>Lugar: {evento.lugar.direccion}</p>
        <p>Ciudad: {evento.lugar.ciudad}</p>
        </>
    )
};

export default Main;