import './HotelImages.css'
export const HotelImages = ({ singleHotel }) => {
   if (!singleHotel) {
       return <div>Loading...</div>;
   }

   const { image, imageArr } = singleHotel;

   return (
       <div className="hotel-image-container d-flex gap-small">
           <div className="primary-image-container">
               <img className="hotel-img primary-img" src={image} alt="primary-image"
                />
           </div>
           <div>
            {
               imageArr && imageArr.map(image => <img key={image} className="hotel-img" src={image} alt="hotel-image"/>)
            }
           </div>
       </div>
   );
};