
import React from 'react'
import '../styles/Section.css'
import image1 from '../images/guia1.jpg'
import image2 from '../images/guia2.jpg'

export default function Guias({ title }) {
  return (
    <div className="section-guias">
      <div className='content1'>
        <h1>Mapas y Guias</h1>
        <img src={image1} alt="Mapa1" className='guide-image1'/>
        <img src={image2} alt="Mapa2" className='guide-image1'/>
      </div>
    </div>
  )
}

