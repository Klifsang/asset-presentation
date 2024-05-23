import React from 'react'
import './about.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {DownOutlined } from '@ant-design/icons'
import data from '../../../assets/Accordion'
import { useState } from 'react'

function About() {
  return (
    <section className="about-wrapper" id='about'>
        <div className="innerWidth paddings flexCenter a-container">
            <div className="a-right">
                <img src="./Frame5-rep.svg" alt="" />
            </div>
            <div className="a-left">
              <h2 className='primaryText'>Why choose  <br />
              <span className='blueText'>Asset-Ace?</span>
              </h2>
              <Accordion
                   className='accordion'
                   allowMultipleExpanded={false}
                   preExpanded={[0]}
                   >
                    {
                        data.map((item,i)=>{
                            const [className,setClassName]=useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                    <AccordionItemState>
                                        {({expanded})=>expanded? setClassName('expanded'):setClassName('collapsed')}
                                    </AccordionItemState>

                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className='primaryText'>{item.heading} </span>
                                            <div className="flexCenter icon">
                                                <DownOutlined size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                   </Accordion>
            </div>
        </div>
    </section>
  )
}

export default About