import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer has-background-primary has-text-white ">
            <div className="container">
                <div className="columns footer-top is-multiline">
                    <div className="column is-4-desktop is-12-mobile">
                        <Image
                            src="/images/footer-logo.svg" 
                            height={78} 
                            width={279} 
                            alt="Footer Logo"
                        />
                        <div className="content mt-4">
                            <p className="subtitle is-6 has-text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  .Lorem Ipsum </p>
                        </div>
                    </div>
                    <div className="column is-4-desktop is-12-mobile footernav-sec is-flex is-justify-content-space-between is-align-items-flex-start">
                        <div className="footer-nav-block">
                            <div className="content">
                                <h5 className="title has-text-white is-4 has-text-white">
                                    Quick Link
                                </h5>
                                <ul className="footer-nav ml-0">
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Principle 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Founding team
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                            Water fest
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Contribute
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-nav-block">
                            <div className="content">
                                <h5 className="title has-text-white is-4">
                                    Quench Poverty
                                </h5>
                                <ul className="footer-nav ml-0">
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Hydrate 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Water Delivery
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                Quench Cali 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="footer-link has-text-white">
                                                US SDG 6.1
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4-desktop is-12-mobile ">
                        <div className="box address-box has-text-white">
                            <p class="is-flex is-align-items-center">
                                <span class="icon mr-4">
                                    <Image
                                        src="/images/phone.svg" 
                                        height={24} 
                                        width={24} 
                                        alt="call us"
                                    />
                                </span>
                                <span>1234567890</span>
                            </p>
                            <p class="is-flex is-align-items-center">
                                <span class="icon mr-4">
                                    <Image
                                        src="/images/mail.svg" 
                                        height={24.66} 
                                        width={28}
                                        alt="email us"
                                    />
                                </span>
                                <span>Quench@gmail.com</span>
                            </p>
                            <p class="is-flex is-align-items-center">
                                <span class="icon mr-4">
                                    <Image
                                        src="/images/address.svg" 
                                        height={28} 
                                        width={28}
                                        alt="email us"
                                    />
                                </span>
                                <span>A -789 Apple Avenue Nr post Offered Plaza US</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-footer mt-5 py-5">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6-desktop is-12-mobile">
                            <p className="subtitle is-6 has-text-white">Copyright © 2021 Quench Pvt. Ltd. All rights reserved.</p>
                        </div>
                        <div className="column is-6-desktop is-12-mobile">
                            <ul className="m-0 is-flex is-align-items-center is-justify-content-flex-end social-nav">
                                <li>
                                    <a href="">
                                        <Image
                                            src="/images/facebook.svg" 
                                            alt="Facebook"
                                            width={12}
                                            height={22}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/images/insta.svg" 
                                            alt="Insta"
                                            width={22}
                                            height={22}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/images/linkedin.svg" 
                                            alt="Linkedin"
                                            width={22}
                                            height={22}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/images/twitter.svg" 
                                            alt="twitter"
                                            width={22}
                                            height={22}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
