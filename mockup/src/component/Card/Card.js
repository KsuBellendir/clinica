import './Card.css';
import card from '../../images/card1.png'

const Card = () => {

  return (
    <div className='container'>
        <div className='text'>
            <h1 className='h1'>Многопрофильная клиника для детей и взрослых</h1>
            <p className='p'>Здесь будет привлекательный рекламный слоган с информацией о клинике</p>
        </div>
        <img className='img' src={card} alt='фото детской комнаты в кабинете'/>
    </div>
  )
}

export default Card;