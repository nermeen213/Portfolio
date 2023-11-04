import React from 'react'
import Style from './Footer.module.css';

export default function Footer() {
    

    return <>
    <footer className='footer'>
        <div className="container p-5">
        <div className='row'>
    <div className="col-md-4 my-4 ">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className="col-md-4 my-4 text-center  ">
        <h3>AROUND THE WEB</h3>
        
            <div className='d-flex text-center justify-content-center  '>
                <div className='icon d-flex  align-items-center justify-content-center '>
                <i className="fa-brands fa-facebook px-3 fs-5  "></i>
                </div>
                <div className='icon d-flex  align-items-center justify-content-center '>
                <i className="fa-brands fa-twitter px-3 fs-5 "></i>

                </div>
                <div className='icon d-flex  align-items-center justify-content-center '>
                <i className="fa-brands fa-linkedin px-3 fs-5"></i>

                </div>
                <div className='icon d-flex  align-items-center justify-content-center '>
                <i className="fa-brands fa-instagram px-3 fs-5"></i>

                </div>
                
            
            </div>
       
    </div>
    <div className="col-md-4 my-4 ">
        <h3>ABOUT FREELANCER</h3>
        <p className='px-0'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        {/* <p>created by Route</p> */}
    </div>


    </div>
        </div>
        <div className='container-fluid foot d-flex  align-items-center justify-content-center  '>
            <p>Copyright © Your Website 2021</p>

        </div>
   




    </footer>
        
        </>
        
    }
