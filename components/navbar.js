import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
					<header className="site-header py-5">
							<div className="container">
								<nav className="navbar" role="navigation" aria-label="main navigation">
									<div className="navbar-brand">
											<Link href="/">
													<a className="navbar-item">
													<Image
															src="/images/logo.png" 
															height={75} 
															width={215} 
															alt="Quench Logo"
													/>
													</a>
											</Link>
											<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
											<span aria-hidden="true"></span>
											<span aria-hidden="true"></span>
											<span aria-hidden="true"></span>
											</a>
									</div>

									<div id="navbarCommon" className="navbar-menu">
									<div className="navbar-end">
										<Link href="/">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
													Home
											</a>
										</Link>
										<Link href="/water-request">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
												Water Request
											</a>
										</Link>
										<Link href="/donation">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
												Donation
											</a>
										</Link>
										<Link href="/my-request">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
												My Request
											</a>
										</Link>
										<Link href="/corporation">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
											Corporations 
											</a>
										</Link>
										<Link href="/corporate-details">
											<a className="navbar-item has-text-weight-semibold is-tab is-size-5">
											Corporate details 
											</a>
										</Link>
										<div className="navbar-item">
											<div className="buttons">
											<a className="button is-primary is-uppercase">
													<strong>Sign In</strong>
											</a>
											</div>
										</div>
									</div>
							</div>
							</nav>
							</div>
					</header>
		)	
}

export default Navbar
