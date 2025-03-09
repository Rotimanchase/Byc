import React from 'react'
import '../style.css' 
import { blog2 } from '../assets'
import Blogfoot from './Blogfoot'
import Pargin from './Pargin'
import Breadcrumbs from './Breadcrumbs'

const Blog2 = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb py-5 ms-5">
            <li className="breadcrumb-item bd-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item bd-item active" aria-current="page">Blogs</li>
        </ol>
        </nav>


      <div className="container-fluid">
        <div className="text-center">
          <h1 className="display-5 fw-bold py-5">How important are shoes in your style?</h1>
        </div>

        <div className="row">
          <div className="col col-lg-12">
          <div className="car border-0 ms-5 me-5">
            <div className="card-body ">
              <p style={{fontSize: "23.6px"}} className="card-text custom-para  my-5 w-100">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit   
                mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
            </div>
            <img src={blog2} className="card-img-bottom img-fluid my-5" alt="..."/>

            <p style={{fontSize: "23.6px"}} className='card-text custom-para my-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor doAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do  </p>
          </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="display-5 fw-bold py-5">More Blog news</h1>
        </div>
        
      </div>


      <Blogfoot/>

      <Pargin/>

    </>
  )
}

export default Blog2
