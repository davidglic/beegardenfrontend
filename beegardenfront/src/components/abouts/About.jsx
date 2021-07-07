import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return (
        <div className="about-wrapper">
            <h3>About Little Bee Gardens</h3>
            <div className="about-content">

                <div className="about-container vision">
                    <h4>How this all got started</h4>
                    <p className="about-p">Little Bee Gardens was started when I became aware of a disturbing trend in my own back yard. In the spring of 2021 I didn't see a single honey bee in my back yard. I wasn't alone, at the same time my wife showed me a local social media thread were other people were lamenting the same thing. In this thread, local beekeepers&mdash;myself included&mdash;came into the thread and started discussing why we'd all moved our hives out of town. My experience with suburban beekeeping was one of frustration and sorrow, and was mirrored by my peers. Colonies of honeybees that should have been at peak health and growth were dwindling, struggling, and fialing.Unwittingly, our neighbors were poisoning our hives.</p>

                    <p className="about-p">My neighbors in the social media discussion were wholly unaware of this and eager for information on how to prevent a repeat of this tradegy. An idea began bouncing around in my brain about how we can not only educate more people on how to live successfully with honeybees&mdash;and all our other friendly pollinators&mdash;but help them by enriching and expanding their local habitats. With this in mind, I built a website with the hopes of starting a movement.</p>
                </div>

                <div className="about-container why">
                    <h4>Why are pollinators important?</h4>
                    <p className="about-p">Pollinating insect populations around the world are declining, and this is a problem for many reasons. Much of the food we eat&mdash;roughly 1/3&mdash; is reliant on pollinators, and a health population increases crop yeilds. Our own gardens benefit from a diverse population of pollinators as different species will better pollinate different plants. Native eco-systems also rely on pollinators and their effects: not only plant species but birds, mammals, and even other insects can decline without a health population of pollinators to support them. </p>

                </div>

                <div className="about-container how">
                    <h4>How can you help?</h4>
                    <p className="about-p">There are many ways you can help pollinating insects thrive in your community:</p>
                    <ul className="about-list">
                        <li className="about-list-item">Plant a Bee Garden</li>
                        <li className="about-list-item">Practice safe spraying of pesticides and herbicides</li>
                        <li className="about-list-item">Create nesting areas native pollinators</li>
                        <li className="about-list-item">Inform and inspire your friends families and neighbors.</li>
                    </ul>
                    <p><Link to="/articles">Learn more with our Articles and howtos</Link></p>

                </div>

            </div>
        </div>
    )
}
export default About