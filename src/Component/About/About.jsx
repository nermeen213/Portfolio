import React from 'react'
import Style from './About.module.css';
import { Helmet } from 'react-helmet';


export default function About() {
    

    return (
        <>
        <Helmet>
            <title>ABOUT</title>
           
        </Helmet>
        <section className='box'>
        <div className="container-fluid d-flex  align-items-center  justify-content-center ">
                <div className='d-flex align-items-center justify-content-center sec w-75  '>
                    <h2 className='h1 fw-bolder  '>ABOUT COMPONENT</h2>
                    <div className='d-flex justify-content-center align-items-center w-100 my-3'>
                        <div className='hr'></div>
                        <i class="fa-solid fa-star mx-3 "></i>
                        <div className='hr'></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 fs-6'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className='col-md-6 fs-6 '>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
            
        </>
    )
}
