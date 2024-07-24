import { useEffect ,useState} from "react"
import axios from "axios"
import { DateSelector } from "../DateSelector/DateSelector"
import "./SearchStayWithDate.css"
import { useDate,useCategory } from "../../context"
export const SearchStayWithDate = () => {

    const {destination, guests,isSearchResultOpen, dateDispatch} = useDate();
    const [hotels, setHotels] = useState([]);
    const {hotelCategory} = useCategory();
    useEffect(()=>{
        (async () =>{
          try{
             const { data } = await axios.get(`https://stayhaven-project.onrender.com/api/hotels/?category=${hotelCategory}`);
             setHotels(data)
             if(data.length===0){
               alert("Currently no hotel available")
             }
             console.log(hotels)
             
           }
            catch(err){
                 console.log(err);
           }
         }) ();
    },[hotelCategory]);
    const handleDestinationChange = (event) => {
        dateDispatch({
            type:"DESTINATION",
            payload: event.target.value,
        })
    }

    const handleguestchange = (event) => {
        dateDispatch({
            type:"GUESTS",
            payload: event.target.value,
        })
    }

    const handlesearchclick = (city) => {

        dateDispatch({
            type:"DESTINATION",
            payload: city,
        })

    }

   const  handledestinationFocus = () => {
     dateDispatch ({
        type: "SHOW_SEARCH_RESULT",

     });
   };
    
    const destinationOptions = hotels && hotels.filter(
        ({ city = '', state = '', country = '' }) => 
          city.toLowerCase().includes(destination.toLowerCase()) ||
          state.toLowerCase().includes(destination.toLowerCase()) ||
          country.toLowerCase().includes(destination.toLowerCase())
      );
    

    return (
        <div className="destination-container">
            <div className="destination-options d-flex align-center absolute">
                <div className="location-container">

                    <label className="label">Where</label>
                   
                    <input
                     value={destination}
                     onFocus={handledestinationFocus}
                    onChange={handleDestinationChange}
                    className="input search-dest" placeholder="Search Destination" autoFocus />

                </div>
                <div className="location-container">
                    <label className="label">Check In</label>
                    <DateSelector placeholder="Check In" checkInType="in" />
                </div>
                <div className="location-container">
                    <label className="label">Check Out</label>
                    <DateSelector placeholder="Check Out" checkInType="out" />
                </div>
                <div className="location-container">
                    <label className="label">NO. of Guests</label>
                    <input 
                    value={guests}
                    className="input search-dest" placeholder="Add Guests" onChange={handleguestchange}></input>

                </div>
                <div className="search-container d-flex align-center cursor">
                    <span className=" material-symbols-outlined">
                        search
                    </span>
                    <span>Search</span>
                </div>
            </div>
            {
                isSearchResultOpen && (
                <div className="search-result-container absolute">
              {
                destinationOptions && destinationOptions.map(({state, city})=>(
                    <p className="p cursor-pointer" onClick={()=> handlesearchclick(city)}>
                         {city}, {state}
                    </p>
                ) )
              }
            </div>
                )

            }
            

        </div>
    )
}