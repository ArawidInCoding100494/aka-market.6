import React from 'react'

const BaseCard = ({product}) => {

    


  return (
    <div className=' card bg-[#2D5F5D] text-white rounded-2xl p-2 px-3 my-1'>
      <div className='flex items-center justify-between'>
        <h3>Brend: <span className='font-bold text-2xl capitalize'>{product.bName}</span></h3>
        <h4>Maxsulot: <span className='font-bold text-2xl capitalize'>{product.pName}</span></h4>
      </div>
      <div className='flex items-center justify-between my-2'>
        <h5>kelish soni: {product.cAmount}</h5>
        <h5>kelish narxi: {product.cPrice}</h5>
      </div>
      <div className='flex items-center justify-between my-2'>
        <h5>omborda {product?.omborda}</h5>
        <h5>sotildi {product?.soldAmount}</h5>
      </div>
      <div>
         <h5>vaqt: {product.time.hour}:{product.time.minute}  {product.time.day}.{product.time.month}.{product.time.year}  </h5>
      </div>
    </div>
  )
}

export default BaseCard