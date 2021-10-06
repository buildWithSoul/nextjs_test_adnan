import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'

const Hero = () => {
    return (
        <section className="hero is-primary">
            <div className="container">
                <div className="hero-body py-0">
                <div className="columns is-align-items-center">
                    <div className="column">
                        <h1 className="title is-size-1-desktop mb-6">
                            Directly increase clean water access for humans around the world.
                        </h1>
                        <div className="queryform is-flex is-flex-wrap-wrap is-flex-direction-row">
                            <div className="form-field mb-5 is-flex">
                                <input className="input is-medium" type="text" placeholder="Enter a input" />
                                <button className="button is-link is-medium">Submit</button>
                            </div>
                            <p className="is-size-4-desktop is-italic mt-3">You're sending 1000L of water with this donation</p>
                        </div>
                    </div>
                    <div className="column pr-0">
                        <Image
                            src="/images/herocap.png" 
                            height={525} 
                            width={724} 
                            alt="Quench Logo"
                        />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
