import React from 'react'
import './home.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <section className="h-wraper" id='home'>
        <div className="paddings innerWidth flexCenter h-wrap">
            <motion.div
                            initial={{y:'2rem',opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{
                                duration:3,
                                type:'spring'
                            }} className="flexColStart h-left">
                <span className="primaryText">
                Unlock Your Potential <br />
                with Asset-Ace <br />
                <p className="secondaryText">Welcome to Asset-Ace, your premier asset management system! We’re thrilled to have you on board and are confident that our platform will streamline your asset management processes, making them more efficient and effective. Thank you for choosing Asset-Ace. We’re excited to be a part of your asset management success story!</p>
                </span>
                <Link to='/login'><button className='buttonn'>Get started</button></Link>
                
            </motion.div>
            <div className="flexCenter h-right">
            <motion.div 
                        initial={{
                            x:'7rem',opacity:0
                        }}
                        animate={{
                            x:0,opacity:1
                        }}
                        transition={{
                            duration:3,
                            type:"spring"
                        }}
                        className="image-container"
                        > 
                <img src="./image9.svg" alt="" />
                <img src="./Group.svg" alt="" className='dot1'/>
                <img src="./Group.svg" alt="" className='dot2'/>
             </motion.div>
            </div>

            <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8000} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Asset inventory
                            </span>
                            
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy customers
                            </span>
                            
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp  end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Award wining
                            </span>
                            
                        </div>
                        </div>

        </div>
    </section>
  )
}

export default Home