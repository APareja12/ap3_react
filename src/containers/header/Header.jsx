import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Muratek has been helping companies with their IT needs since 1999</h1>
                <p>Our founder and CEO, Paul Muratore believes that the heart of our success is our dedicated and talented employees. Headquartered in the Financial District of Manhattan, Muratek is an information technology solutions provider that serves the tri-state area. In addition to IT Support in New York, we also have locations that offer IT Services in Raleigh, NC, and one in Chicago that is coming soon. <br /> Muratek is an end-to-end provider, offering everything from network management to help desk support and web/application development for small to medium-sized businesses. We create integrated systems that are coordinated and maintained by seasoned professionals trained and experienced in the newest technologies.</p>

                    <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                    </div>

                    <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header