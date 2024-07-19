import "./HotelCard.css"
import {useNavigate} from "react-router-dom"
export const HotelCard = ({hotel}) => {
    
    const { _id, name, image, city, state, rating, price}=hotel;
    const navigate = useNavigate()
    const handleHotelCardClick = () => {
       navigate(`/hotels/${name}/${city}-${state}/${_id}/reserve`)
    }
    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div onClick={handleHotelCardClick}>
                <img className="img"
                    src= {image}
                    alt={name} />

                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location"> {city}, {state} </span>
                        <span className="rating d-flex align-center">
                            <span className="material-symbols-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>

                    <p className="hotel-name">{name}</p>
                    <p className="price-details">
                        <span className="price">Rs. {price}</span>
                        <span>night</span>
                    </p>
                </div>
            </div>
            <button className="button btn-wishlist absolute">
                <span class="material-symbols-outlined favorite cursor">favorite</span>
            </button>

        </div>
    )

}