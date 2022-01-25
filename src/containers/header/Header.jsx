import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">MURATEC IS A WORLD LEADER IN MACHINE TOOL TECHNOLOGY</h1>
                <p>Murata Machinery USA, Inc. is a subsidiary of Murata Machinery Ltd., a world leader in machine tool technology, automated material handling systems, clean room automation, and textile machinery. Established in 1935, Murata Machinery Ltd., is the sole manufacturer of the Muratec brand, which is synonymous with industrial automation and reliability across our extensive product line.</p>

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