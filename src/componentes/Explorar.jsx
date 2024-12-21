
import React from 'react'
import '../styles/Section.css'

export default function Explorar({ title }) {
  return (
    <div className="section-explorar">
      <div className='section-content'>
        <h2>{ title }</h2>
        <h1>Tramas y Bases</h1>
        <p>El juego tiene lugar en los últimos días de la Edad de Fuego, 
          la cual comenzó tras la derrota de los dragones que anteriormente gobernaban el mundo. 
          Durante la Edad Antigua el mundo era un lugar oscuro y lúgubre habitado solamente por una raza inmortal 
          de dragones gigantes cuya capacidad de prolongar su vida eternamente provenía de sus escamas. 
          Así fue hasta que un grupo de seres descubrieron el poder de la Primera Llama y, siendo liderados por Gwyn, el Señor de la Luz Solar, 
          acabaron con casi la totalidad de los dragones en una legendaria guerra que dio origen, tras la derrota del bando reinante, a la Edad de Fuego. 
          Durante la Edad de Fuego aparecieron todos los seres vivientes que se ven en el mundo de Dark Souls.</p>
        
        <p>La exploración es un pilar fundamental en la experiencia de Dark Souls. El juego presenta un mundo interconectado y 
          laberíntico conocido como Lordran, compuesto por una amplia variedad de áreas únicas, cada una con su propia atmósfera, 
          desafíos y secretos. Los jugadores comienzan su travesía en el Refugio de los No Muertos, una lúgubre prisión en un lugar remoto, y, 
          tras escapar, se embarcan en un viaje para encender los Grandes Fuegos, enfrentándose a enemigos y 
          descubriendo el destino de los no muertos marcados por la oscura maldición.</p>

        <p>La estructura del mundo incentiva la exploración minuciosa. No hay marcadores que indiquen el camino correcto, 
          y muchas rutas parecen estar escondidas detrás de paredes ilusorias, puertas secretas o caminos poco obvios. 
          Lugares como las profundas catacumbas de Tumba de los Gigantes, las traicioneras alturas de Fortaleza de Sen y 
          la majestuosa decadencia de Anor Londo ofrecen desafíos únicos, pero también recompensas significativas para quienes se atrevan a adentrarse en sus misterios. 
          La sensación de progresión no solo depende del avance del jugador, sino también de la comprensión del entorno y de las conexiones entre las áreas.</p>
      </div>
    </div>
  )
}

