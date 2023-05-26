import '../styles/product-card.css'
import { useState } from 'react';

function ProductCard({images, title, price, description})  {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
    setShowModal(true);
  };

    const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalContent = (e) =>{
    e.stopPropagation();
  };
    return (
      <>
      <div className="productCard" onClick={handleModalOpen}>
        <figure>
          <img src={images[0]} alt={title} />
        </figure>
        <p>{title}</p>
        <p>$ {price}</p>
       {showModal && (
        <div className='modal' onClick={handleModalClose}>
            <div className='modal-content' onClick={handleModalContent}>
                <span className='close' onClick={handleModalClose}>
                    &times;
                </span>
                <h3>{title}</h3>
                <p >{description}</p>
                <button>Añadir al carrito</button>
                <button onClick={handleModalClose}>cerrar</button>
            </div>
            </div>
       )}
        </div>
      </>
     
    );
  }

  export { ProductCard};