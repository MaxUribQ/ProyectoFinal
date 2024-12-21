
import React from 'react'
import '../styles/Section.css'

export default function General({ title }) {
  return (
    <div className="section-general">
      <div className='section-content'>
        <h2>{ title }</h2>
        <h1>Dark Souls</h1>
        <p>Dark Souls es un juego de rol de acción de 2011 desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. 
          Sucesor espiritual de Demon's Souls, es el primer juego de la saga Dark Souls. El juego tiene lugar en el reino de Lordran, 
          donde los jugadores asumen el papel de un personaje no muerto maldito que comienza una peregrinación para descubrir su destino. 
          En agosto de 2012 se lanzó una versión para PC con contenido adicional, conocida como Prepare to Die Edition. 
          También fue lanzada para consolas con el subtítulo Artorias of the Abyss en octubre de 2012.</p>
        
        <p>Dark Souls ha sido citado como uno de los mejores videojuegos jamás creados. Los críticos elogiaron la profundidad de su combate, 
          su intrincado diseño de niveles y el uso de texto de ambientación. Sin embargo, la dificultad del juego recibió críticas mixtas, y algunos lo criticaron por ser demasiado implacable. 
          La versión original del juego para PC fue menos bien recibida, con críticas dirigidas a varios problemas técnicos. Para abril de 2013, 
          el juego había vendido más de dos millones de copias en todo el mundo. Su éxito condujo al desarrollo de dos secuelas, Dark Souls II (2014) y Dark Souls III (2016), 
          mientras que se lanzó una versión remasterizada en 2018.</p>
      </div>

    </div>
  )
}




