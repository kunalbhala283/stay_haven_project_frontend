
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FinalPrice, HotelDetails, HotelImages, Navbar } from "../../components";
import './SingleHotelPage.css'
export const SingleHotelPage = () => {
    const { id } = useParams();
    const [singleHotel, setSingleHotel] = useState();
    

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://stayhaven-project.onrender.com/api/hotel/${id}`);
                console.log(data);
                setSingleHotel(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [id]);

     
    if (!singleHotel) {
        return <div>Loading...</div>;
    }

    const { name, state } = singleHotel;

    

    return (
        <Fragment>
            <Navbar />
            <main className="single-hotel-page">
                <span className="hotel-name-add">{name}, {state}</span>
                <HotelImages singleHotel={singleHotel} />
           
            <div className="d-flex">
                <HotelDetails singleHotel={singleHotel}/>
                <FinalPrice singleHotel={singleHotel}/>
            </div>
            </main>
        </Fragment>
    );
};