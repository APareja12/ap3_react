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
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="Machine Rebuild Program" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="3 WAREHOUSE AUTOMATION SOLUTIONS THAT MAXIMIZE PRODUCTION DURING LABOR SHORTAGES" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="MURATA MACHINERY USA DEBUTS THE FIRST HYBRID FIBER LASER MACHINE AT FABTECH 2021" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="AGV ROI: A DEEPER COST-BENEFIT ANALYSIS FOR AUTOMATED GUIDED VEHICLES" />
                </div>
            </div>
        </div>
    )
}

export default Blog