import { useDate } from '../../context';
import { dateReducer } from '../../reducer';
import './Navbar.css'
import React from 'react';

export const Navbar = () => {

    const {dateDispatch} = useDate();
    const handleSearchClick = () => {
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",
        });
    };
    return (
        <header className="heading d-flex align-center">
   
        {/* <img className="icon mr-1" src="/assets/image.png" alt="lightbul"/> */}
        <h1 className="heading-title">
            <a className="link" href="/">StayHaven</a>
        </h1>
        <div className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
            <span className="form-option">Any Where</span>
            <span className='border-right-1px'></span>
            <span className="form-option">Any Week</span>
            <span className='border-right-1px'></span>
            <span className = "form-option">Add Guests</span>
            <span class="search material-symbols-outlined">search</span>
        </div>

    <nav className="nav d-flex align-center gap-large">
        <div className='nav d-flex align-center cursor-pointer'>
        <span className="material-symbols-outlined profile-option menu"> menu_open </span>
        <span className="material-symbols-outlined profile-option person">account_circle</span>
        </div>   
    </nav>
</header>
    );
}

