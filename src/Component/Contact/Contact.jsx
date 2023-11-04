import React, { useEffect } from 'react'
import Style from './Contact.module.css';
import { Helmet } from 'react-helmet';

export default function Contact() {
 function getLoop(){
    let inputs =document.getElementsByTagName('input');
   
    for(let i=0 ; i<inputs.length ;i++){
        inputs[i].addEventListener('keyup',(e)=>{
            console.log(e.target);
        })
     
    }
 }
useEffect(()=>{
  getLoop()
},[])
  
  
    
    

    return (
        <>
        <Helmet>
            <title>Contact</title>
        </Helmet>
            <div className="container high d-flex">
                <h2 className='fs-1 fw-bolder '>CONATCT SECTION</h2>
                <div className='d-flex justify-content-center align-items-center w-100 mb-5 my-3'>
                        <div className='hrr'></div>
                        <i class="fa-solid fa-star mx-3 "></i>
                        <div className='hrr'></div>
                    </div>
                <div className='w-50 mx-auto'>
                    {/* <div className=' position-relative '> */}
                    {/* <label htmlFor="username " id='ggg' className='la'>userName</label> */}
                    <input  type="text" id='username' placeholder='userName' className=' w-100 form-control border-0 border-bottom py-3   shadow-none laa'  />

                    {/* </div> */}
                    <div className=' position-relative '>
                    {/* <label htmlFor="userage" className='labels'>userAge</label> */}
                    <input type="number" id='userage' placeholder='userAge' className='w-100 form-control border-0 border-bottom py-3  shadow-none'/>
                    </div>
                    <div className=' position-relative '>
                    {/* <label htmlFor="useremail" className='labels' >userEmail</label> */}
                    <input type="email" placeholder='userEmail' id='useremail'  className='w-100 form-control border-0 border-bottom py-3  shadow-none'/>

                    </div>
                    <div className=' position-relative '>
                    {/* <label htmlFor="password" className='labels'>userPassword</label> */}
                    <input type="password" id='password' placeholder='Password' className='w-100 form-control border-0 border-bottom py-3  shadow-none'/>


                    </div>

                    <button type='submit' className='btn btnn my-2 '>Send Message</button>
                


                </div>
            </div>
        </>
    )


   


}
