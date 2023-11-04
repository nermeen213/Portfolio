import { useState } from 'react';
import Style from './Portfolio.module.css';

import image1 from '../../Assets/image/poert1 (1).png';
import image2 from '../../Assets/image/port2.png'
import image3 from '../../Assets/image/port3.png'
import { Helmet } from 'react-helmet';


export default function Portfolio() {
const [data, setdata] = useState(
    [
        {img :image1 , id:"img1"},
        {img :image2 , id:"img2"},
        {img :image3 , id:"img3"},
        {img :image1 , id:"img4"},
        {img :image2 , id:"img5"},
        {img :image3 , id:"img6"},
       
        
    ]
)


    return (
        <>
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
        <div className="container py-5 text-center ">
        <h2 className='h1 fw-bolder'>PORTFOLIO COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center w-100 my-3 '>
                        <div className='hrr'></div>
                        <i class="fa-solid fa-star mx-3 "></i>
                        <div className='hrr'></div>
                    </div>
            <div className="row g-4">
                {data.map((item)=><>
                    <div className="col-md-4">
                    <div className='image'>
                    <img src={item.img} alt="" className='w-100 rounded-4'/>
                    <div className="layer d-flex align-items-center rounded-4 justify-content-center  " data-bs-toggle="modal" data-bs-target={'#'+item.id}>
                    <i className="fa-solid fa-plus fa-2xl fs-1 "></i>
                    </div>
                    </div>
                    
                </div>
                </>)}

                {data.map((item)=><>
              <div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body p-0 ">
        <img src={item.img} className='w-100 ' alt="" />
      </div>
      
    </div>
  </div>
              </div>
                </>)}
                
            </div>
        </div>
        </>
    )
}
