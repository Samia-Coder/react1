import React from 'react'
//name export here
import { product } from '../data/data'

const Product = () => {
  return (
    <div className='container'>
    <h3 className='text-center'>Product Page</h3>
      <div className='row'>
      {
        product.map((item, i)=>{
            return(
                <div className='col-sm-6 col-md- 4 col-lg-3 my-3' key={i}>
                    <div className='card'>
                    <img src={item.image} className='card-img-top' alt=''/>
                        <div className='p-3'>
                            <h5 className=''>{item.title}</h5>
                            <p className=''>{item.description}</p>
                            <h6>Price : ${item.price}</h6>
                            <button className='btn btn-primary '>Shop</button>
                        </div>
                    </div>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Product
