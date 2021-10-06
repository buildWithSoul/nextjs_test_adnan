import React from 'react'
import Image from 'next/image'

const Flyway = () => {
    return (
        <section className="section sec3">
          <div className="container">
            <div className="has-text-centered mb-5">
              <h2 className="title is-size-3-desktop is-size-6-mobile mb-5 has-text-primary title-custom-design">Water access flyway</h2>
              <p className="title is-size-4-desktop is-size-7-mobile">Support corporations that support water equality</p>
            </div>
            <div className="columns is-desktop">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                      <Image src="/images/flyway1.svg" alt="Vercel Logo" width={452} height={293} />
                  </div>
                  <div className="card-content px-0">
                    <div className="content">
                      <h4 className="title is-size-5-desktop is-size-6-mobile is-size-5-desktop is-size-6-mobile"> Support a corporation</h4>
                      <p className="subtitle is-size-6-desktop is-size-7-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                      <div className="btn-wrap is-flex is-justify-content-space-between">
                        <a className="button has-text-primary is-size-5 has-text-weight-bold">View More</a>
                        <a className="button is-primary is-size-5 has-text-weight-bold">12 Liters </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                      <Image src="/images/flyway2.svg" alt="Vercel Logo" width={452} height={293} />
                  </div>
                  <div className="card-content px-0">
                    <div className="content">
                      <h4 className="title is-size-5-desktop is-size-6-mobile"> Support a corporation</h4>
                      <p className="subtitle is-size-6-desktop is-size-7">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                      <div className="btn-wrap is-flex is-justify-content-space-between">
                        <a className="button has-text-primary is-size-5 has-text-weight-bold">View More</a>
                        <a className="button is-primary is-size-5 has-text-weight-bold">12 Liters </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                      <Image src="/images/flyway3.svg" alt="Vercel Logo" width={452} height={293} />
                  </div>
                  <div className="card-content px-0">
                    <div className="content">
                      <h4 className="title is-size-5-desktop is-size-6-mobile"> Support a corporation</h4>
                      <p className="subtitle is-size-6-desktop is-size-7-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                      <div className="btn-wrap is-flex is-justify-content-space-between">
                        <a className="button has-text-primary is-size-5 has-text-weight-bold">View More</a>
                        <a className="button is-primary is-size-5 has-text-weight-bold">12 Liters </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-act-wrap mt-6">
                <div className="columns is-mobile">
                  <div className="column is-half-desktop is-offset-6-desktop is-12-mobile  is-flex is-justify-content-space-between">
                    <a href="/" className="button is-link">
                      <span>Find More Corporation</span>
                      <span className="icon is-small">
                        <i className="fas fa-check"></i>
                      </span>
                    </a>
                    <a className="button is-primary is-hidden-touch">Link your corporation </a>
                  </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Flyway
