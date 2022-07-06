import React from 'react'
import { useAuth } from '../Context/authContext'

const ModalAddCart = () => {
    
      const {openModal} = useAuth();

    return (
       <section>
           <p>Producto Agregado</p>
       </section>
  )
}

export default ModalAddCart