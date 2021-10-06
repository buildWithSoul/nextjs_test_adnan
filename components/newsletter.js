import React from 'react'
import Image from 'next/image'

const Newsletter = () => {
    return (
        <section className="section py-0 newsletter-sec">
            <div className="container">
                <div className="box newsletter-box px-6-desktop px-4-mobile">
                <div className="columns is-desktop is-align-items-center">
                    <div className="column  is-three-fifths">
                        <div className="columns  is-flex-mobile">
                            <div className="column is-2-desktop is-4-mobile">
                                <Image
                                    src="/images/newslettericon.svg" 
                                    height={135.23} 
                                    width={135.23} 
                                    alt="Newsletter Mailer"
                                />
                            </div>
                            <div className="column is-8-mobile">
                                <div className="content">
                                    <h3 className="title is-size-3-desktop is-size-6-mobile">Subscribe Our News Letter :</h3>
                                    <p className="subtitle is-size-5-desktop is-size-7-mobile has-text-black has-text-weight-medium">Sign up for all the news about our latest arrivals ang get an exclusive early</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-12-mobile">
                        <div className="subscform is-flex">
                            <input className="input is-medium" type="email" placeholder="Enter email address" />
                            <button className="button is-primary is-medium">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Newsletter
