import React from 'react';
import './Hero.css';
import Crypto from '../assets/hero-img.png';


const Hero = () => {
  return (
    <div className='hero'>

        <div className='container'>

            {/* Left Side */}

            <div className='left'>

                <p> Buy & Sell Crypto 24/7 Using Your Retirement Account </p>

                <h1> Invest In Cryptocurrency With Your IRA </h1>

                <p> Buy, Sell, and Store Hundreds Of Cryptocurrencies </p>

                <div className='input-container'>

                    <input type='email' placeholder='Enter Your E-mail Here'/>

                    <button className='btn'> Learn More </button>

                </div>

            </div>


            {/* Right Side */}

            <div className='right'> 

                <div className='img-container'>

                    <img src={Crypto} alt=''/>

                </div>

            </div>

        </div>

    </div>
  );
};

export default Hero;