import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMask } from "../../sorting/sorting";
import { ActionCreator } from "../../store/action";
function PopupCard({offerActive, setOfferActive, currentOffer, setSuccessActive}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = offerActive ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        body.style.overflow = 'auto';
        setOfferActive(false);
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [offerActive]);
  
  return(
    <>
    {(offerActive) ? <FocusTrap>
    <div className={(offerActive) ? "popup-card__active" : "popup-card"} 
      onClick={evt => setOfferActive(false)}
    >
      <div className="popup-card__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="popup-card__header">Добавить товар в корзину</h2>
        <div className="popup-card__case">
          <img src="./image/electro-1-mini.png" />
          <div className="popup-card__description-wrapper">
            <h2 className="popup-card__description-header">{currentOffer.name}</h2>
            <p className="popup-card__text">Артикул: {currentOffer.article}</p>
            <p className="popup-card__text">{currentOffer.type}, {currentOffer.strings} струнная </p>
            <p className="popup-card__price">Цена: {addMask(currentOffer.price)} ₽</p>
          </div>
          <button className="popup-card__button" onClick={() => {
            dispatch(ActionCreator.addToCard(currentOffer));
            setOfferActive(false);
            setSuccessActive(true);
            }}>Добавить в корзину</button>
        </div>
        <button className="popup-card__close" onClick={() => setOfferActive(false)}></button>
      </div>
    </div>
    </FocusTrap> : null}
    </>
  );
}

export default PopupCard;