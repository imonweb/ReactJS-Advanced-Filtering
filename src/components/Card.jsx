import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
     <section className="card__container--card">
        <img src={img} alt="Shoe" className='card__container--card-img' />
        <div className="card__details">
          <h3 className="card__details__card-title">{title}</h3>
          <section className="card__details__card-reviews">
            {star} {star} {star} {star}
            <span className="card__details__card-reviews--total-reviews">{reviews}</span>
          </section>
          <section className="card__details__card_price">
            <div className="card__details__card_price--price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="card__details__card_price--bag">
              <BsFillBagHeartFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>  
  )
}

export default Card