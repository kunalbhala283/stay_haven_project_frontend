import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCategory } from '../../context';
import "./Categories.css"

export const Categories = () => {
    const [categories,setCategories] = useState([]);
    const [totalcategories, setTotalcategories] = useState(0);
    const [numofCategoryToShow,setNumofCategoryToShow]= useState(0);
   
   
    const {hotelCategory,setHotelCategory} = useCategory();

    
    const handlerightbuttonclick = () => {
        setNumofCategoryToShow(prev=>prev+10)
    }
    const handleleftbuttonclick = () => {
        
        setNumofCategoryToShow(prev=>prev>0?prev-10:prev)
    } 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get('https://stayhaven-project.onrender.com/api/categories');
                setTotalcategories(data.length);
                const categoriesToShow = data.slice(numofCategoryToShow,numofCategoryToShow+10);
                
                setCategories(categoriesToShow);
                
            } catch (err) {
                console.error(err);
            }

        };

        fetchData();
    }, [numofCategoryToShow]);

    const handleCategoryClick = (category) => {
       
        setHotelCategory(category);
        console.log(hotelCategory)
    }
    console.log({"Hotel Category": hotelCategory });

    return (
        <section className='categories d-flex align-center gap-large cursor-pointer'>
             {
                numofCategoryToShow >=10 && (
                    <button 
                    className='buttonclick cursor-pointer'
                    onClick={handleleftbuttonclick}>
                    <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                )
             }
            
           {
            categories&& categories.map(({_id,category})=>(
                 <span className={category===hotelCategory?"border-bottom ":""} 
                 key={_id}
                  onClick={()=> handleCategoryClick(category)}>{category}</span>))
           }
           {
                 (numofCategoryToShow + 10 < totalcategories ) && (
                    <button 
                    className='buttonclick cursor-pointer'
                    onClick={handlerightbuttonclick}>
                    <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                 )
           }
            
        </section>
    );
};
