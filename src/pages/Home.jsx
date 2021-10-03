import React from 'react'
import { EventApp } from './EventApp.jsx'
import { Hero } from '../components/Hero.jsx'

export const Home = () => {
    return (
        <section>
            <div className="home-section">
                <Hero />
            </div>
            <EventApp />
        </section>
    )
}
