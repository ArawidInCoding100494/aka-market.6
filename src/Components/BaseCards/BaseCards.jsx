import React, { useState } from 'react'
import { UseCollection } from '../../Hooks/UseCollection'
import BaseCard from '../BaseCard/BaseCard'
import Modal from '../Modal/Modal'
import CreateBrand from '../CreateBrand/CreateBrand'
import CreateProduct from '../CreateProduct/CreateProduct'

const BaseCards = () => {
    const {data: products} = UseCollection("products")
    const {data: brends} = UseCollection("brends")
    const [getBrendId, setGetBrendId] = useState(null)
    const [openBrendModal, setOpenBrendModal] = useState(false)
    const [openProductModal, setOpenProductModal] = useState(false)

    const  filteredProducts = getBrendId
    ? products?.filter((product)=> product.brendId === getBrendId)
    : products


  return (
    <div className='shadow'>
    <div className='brendCards flex py-2 '>
        {/* create brend */}
        {openBrendModal && <Modal
        close={()=>setOpenBrendModal(false)}
        title={"Yangi brend qo'shing"}>
            <CreateBrand setOpenBrendModal={setOpenBrendModal}/>
        </Modal>}

        {/* create product */}
        {openProductModal && <Modal 
         close={()=>setOpenProductModal(false)}
         title={"Yangi maxsulot qoshing"}>
         <CreateProduct setOpenProductModal={setOpenProductModal}/>
         </Modal>}

        <div className=' w-full shadow pl-2'>
        {brends && brends.map((brend)=>(
            <div className='brendCard' key={brend.id}
              onClick={()=>setGetBrendId(brend.id)}>
              <h2 className='text-2xl font-bold capitalize'>{brend.bName}</h2>
            </div>
        ))}
        </div>
        <div className='w-[40%] lg:w-[30%] shadow lg:px-2'>
            <button className="btn text-[14px]" onClick={()=>setOpenBrendModal(true)}>brend yaratish</button>
        </div>
    </div>

    <div className=' '>
        <div className="productsUp flex items-center justify-between p-2 my-2 ">
            <h3 className='capitalize text-2xl font-bold lg:ml-18'>mahsulotlar</h3>
        <div className="addNew pr-3">
          <button className="btn" onClick={()=>setOpenProductModal(true)} >maxsulot qoshing</button>
        </div>
        </div>


        <div className="productsDown grid lg:grid-cols-2 gap-2">
        {filteredProducts?.map((product)=>(
            <BaseCard key={product.id} product={product} />
        ))}
        </div>
    </div>



    </div>
  )
}

export default BaseCards