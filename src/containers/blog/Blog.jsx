import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'
const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="got3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="Automated Guided Vehicles" />   
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="Network Evaluation" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="Portfolios and Microsites" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="Custom Solution Development" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="Are you ready to start building that dream website or web application?" />
                </div>
            </div>
        </div>
    )
}

export default Blog