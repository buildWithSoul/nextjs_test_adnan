import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
    return (
        <>
        <section className="section sec1">
          <div className="container">
            <div className="columns is-align-items-center">
              <div className="column">
                <Image src="/images/why-section.svg" alt="Why give with us?" width={745.49} height={628.3} />
              </div>
              <div className="column">
                <h2 className="title is-size-3-desktop is-size-6-mobile mb-5 has-text-primary title-custom-design mb-5">Why give with us?</h2>
                <p className="subtitle is-size-5-desktop  is-size-7-mobile is-flex mt-3"><span><Image src="/images/para-check.svg" alt="paragraph icon" width={40} height={40} /></span> <span className="para-icon-text pl-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span></p>
                <p className="subtitle is-size-5-desktop is-size-7-mobile  is-flex"><span><Image src="/images/para-check.svg" alt="paragraph icon" width={40} height={40} /></span> <span className="para-icon-text pl-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span></p>
                <a href="/" className="button is-link ml-6">
                  <span>View Water Requests</span>
                  <span className="icon is-small">
                    <i className="fas fa-check"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section sec2">
          <div className="container">
            <div className="columns is-align-items-center">
              <div className="column">
              <h2 className="title is-size-3-desktop is-size-6-mobile mb-5 has-text-primary title-custom-design mb-5">Why give with us?</h2>
                <p className="subtitle is-size-5-desktop  is-size-7-mobile is-flex mt-3"><span><Image src="/images/para-check.svg" alt="paragraph icon" width={40} height={40} /></span> <span className="para-icon-text pl-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span></p>
                <p className="subtitle is-size-5-desktop is-size-7-mobile  is-flex"><span><Image src="/images/para-check.svg" alt="paragraph icon" width={40} height={40} /></span> <span className="para-icon-text pl-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span></p>
                <a href="/" className="button is-link ml-6">
                  <span>View Water Requests</span>
                  <span className="icon is-small">
                    <i className="fas fa-check"></i>
                  </span>
                </a>
              </div>
              <div className="column">
                <Image src="/images/how-section.svg" alt="Why give with us?" width={745.49} height={628.3} />
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Aboutus
