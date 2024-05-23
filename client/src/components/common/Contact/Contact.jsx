import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className="c-wrapper" id='contact'>
      <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
              <span className='orangeText'>our Contact</span>
              <span className='primaryText'>Easy to contact us</span>
              <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good manager improves production</span>

            <div className="flexColStart contactModes">
              <div className="flexStart row">

                <div className="flexCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                          <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span primaryText>Call</span>
                      <span>07 275 267 07 </span>
                      
                    </div>
                  </div>
                  <div className="flexCenter buttonn">
                    Call now
                  </div>
                </div>


                <div className="flexCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span primaryText>Chat</span>
                      <span>07 275 267 07 </span>
                      
                    </div>
                  </div>
                  <div className="flexCenter buttonn">
                    Chat now
                  </div>
                </div>

                


              </div>
              <div className="flexStart row">

                <div className="flexCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                          <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span primaryText>Video Call</span>
                      <span>07 275 267 07 </span>
                      
                    </div>
                  </div>
                  <div className="flexCenter buttonn">
                    Video Call now
                  </div>
                </div>


                <div className="flexCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                          <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span primaryText>Message</span>
                      <span>07 275 267 07 </span>
                      
                    </div>
                  </div>
                  <div className="flexCenter buttonn">
                    Message now
                  </div>
                </div>

                


              </div>
            </div>


            </div>
            <div className="c-right ">
              <img src="./call1.jpeg" alt="" className="image-container" />
            </div>
      </div>
    </section>
  )
}

export default Contact