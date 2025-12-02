import React from 'react';
import phone from "../assets/iphone.png";

const Home = () => {
    const val="Iphone"
    return (
        <div className='card'> 
            <img src={phone} alt="Iphone"/>
            <h1>{val}</h1>
            <p>This is Iphone 13 pro</p>
        </div>
    );
};

export default Home;