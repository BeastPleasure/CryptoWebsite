import React from 'react';
import './Signup.css';
import Crypto from '../assets/trade.png';


const Signup = () => {
    return (
        <div className='signup'>

            <div className='container'>


                {/* left */}

                <div className='left'>

                    <img src={Crypto} alt='' />

                </div>


                {/* right */}

                <div className='right'>

                    <h2> Earn Passive Income With Crypto </h2>

                    <p> 
                        Earn Up To 12% Annual Rewards On 30+ Digital Assets.
                        Simply Hold Your Assets In The App To Automatically Earn Rewards
                        At The End Of Each Month With No Lockups And No Limits
                    </p>
                    
                    <div className='input-container'>

                        <input type='email' placeholder='Enter your email' />

                        <button className='btn'>Learn More</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Signup;