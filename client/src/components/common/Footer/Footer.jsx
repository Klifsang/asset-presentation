import React from 'react'
import './footer.css'

function Footer() {
  return (
    <section className="f-wrapper" >
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo22.jpg" alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all asset management <br />
                    Easy for our clients
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">254 Kenya Eldoret </span>

                <div className="flexCenter f-menu">
                    <span>Apply</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer