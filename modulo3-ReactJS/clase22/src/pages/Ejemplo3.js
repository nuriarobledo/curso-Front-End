import '../styles/estilos.css'
const Ejemplo3 = props => {
    return (
        <div>
            <h1>Ejemplo para GoogleMaps</h1>
            <div className="mapa">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13086.590116203839!2d-57.956657409667976!3d-34.91529390191063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63a518efa1b%3A0xab89cfc05dd742!2sPlaza%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1668090136114!5m2!1ses-419!2sar"
               style={{width:1000, height:450, border:0 }}></iframe>
            </div>
        </div>
    )
}

export default Ejemplo3;