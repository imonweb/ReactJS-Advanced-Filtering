import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = () => {
  return (
     <section className="card__container--card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" className='card__container--card-img' />
        <div className="card__details">
          <h3 className="card__details__card-title">Shoe</h3>
          <section className="card__details__card-reviews">
            <AiFillStar className='ratings-star' />
            <AiFillStar className='ratings-star' />
            <AiFillStar className='ratings-star' />
            <AiFillStar className='ratings-star' />
            <span className="card__details__card-reviews--total-reviews">4</span>
          </section>
          <section className="card__details__card_price">
            <div className="card__details__card_price--price">
              <del>£300</del> £200
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