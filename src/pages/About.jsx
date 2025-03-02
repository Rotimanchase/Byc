import React from 'react'
import Breadcrumbs from '../component/Breadcrumbs'
import { apic1, apic11, apic2 } from '../assets'
import Recentlyview from '../component/Recentlyview'



const About = () => {
  return (
    <>
      <div className="col-10 ms-5 ps-3">
        {/* <Breadcrumbs/> */}
      </div>

      <div className="container-fluid">
        <div className="text-center py-5">
          <h1 className="display-5 fw-bold py-5">ABOUT US</h1>
        </div>

        <div className="card mb-3 border-0 ms-5 me-5">
          <div className="row g-0 align-items-center">
            <div className="col-12 col-lg-6">
              <img
                src={apic1}
                alt=""
                className="img-fluid rounded-start w-100"/>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card-body ms-3 abou-body ">
                <h1 className="card-title fw-bold">ABOUT BYC AFRICA</h1>
                <p style={{fontSize: "34px"}} className="card-text afri-p mt-5 text-muted">We are the sole distributor of BYC products in<br/> Africa. We import BYC products from Korea<br/> and distribute them to African countries<br/> through Onamik Holdings Limited.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="row px-5 ">
          <div className="text-center py-5">
            <h1 className="display-5 fw-bold py-5">WHAT OUR RECORD SAYS</h1>
          </div>


          <div className="col-12 col-lg-4">
            <div className="a-card border-2 ps-2 py-5 w-100" style={{backgroundColor: "#BD3A3A0A", boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4 mb-4'>Gold Prize for the Best Listed Firm awarded<br/>by Daesin Economy Research Institute.</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 1990</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>Selected as representaive enterprise of Korea for<br/> successful stategies on globalization of Korean brands<br/> by Korean Traders Association.</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 1993</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>BYC' selected as the most preferred brand for<br/> underwear by the Federation of Korean Women <br/>Economists..</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 1997</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-5 pb-4">
          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>Selected as the official commercializer of underwear for<br/> 1988 France Worldcup.</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 1997</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light pb-2 pt-4'>The Prize for Export of Original Brands awarded as<br/> recommended by the Korean Assoiatioon of Textile<br/> Industries</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 1999</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>"The 10th Prize for the Enterprise of Economical<br/> Justice" by the enterprise Assessment commission.</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 2001</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-5 pb-5">
          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>The Prize for Export of Original Brands awarded as<br/> recommended by the Korean Assoiatioon of Textile <br/>Industries</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 2006</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light py-4'>selected by korea management association as no.1<br/> in brand influence among the men's underwear <br/>companies</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 2006</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="a-card bg-light border-2 ps-2 py-5 w-100" style={{boxShadow: " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>
              <img className='c-img py-4 ms-4' src={apic2} alt="" />
              <div className="card-body ms-4">
                <h6 className='text-muted fw-light mb-4 py-4'>Selected as the Best Korean Enterprise of 1992 by <br/> Korean Management Association.</h6>
                <h4 className="mb-5 text-danger fw-bolder">Year 2011</h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="col-12 mt-5 col-lg justify-content-center align-items-center">
        <Recentlyview/>
      </div>
    </>
  )
}

export default About
