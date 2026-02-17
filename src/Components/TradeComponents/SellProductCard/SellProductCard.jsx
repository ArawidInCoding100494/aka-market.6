import React, { useState } from 'react'
import { UseCollection } from '../../../Hooks/UseCollection'
import SellProductForm from '../SellProductForm/SellProductForm'
import Modal from "../../Modal/Modal"

const SellProductCard = ({ searchTerm }) => {
  const {data: products} = UseCollection("products")
  const [openSellModal, setOpenSellModal] = useState(null)

  const filteredProducts = products?.filter((product) => {
  if (!searchTerm.trim()) return true;

  const search = searchTerm.toLowerCase();

  return (
    product.pName?.toLowerCase().includes(search) ||
    product.bName?.toLowerCase().includes(search)
  );
});


  return (
    <div >
        <h2 className='capitalize font-bold text-center my-2'>maxsulotlar</h2>
        <div className='lg:grid grid-cols-2 gap-1  '>
        {filteredProducts && filteredProducts.map((product)=>(
            <div  key={product.id}
            className='sellCard border my-1 shadow rounded-2xl p-2 capitalize bg-[#2D5F5D] text-white '>
                <div className='flex items-center justify-between '>
                    <h3 className='capitalize'>brend: 
                        <span className='text-2xl font-bold'> {product.bName} </span></h3>
                    <h3 className='capitalize'>maxsulot:  
                        <span className='text-2xl font-bold'> {product.pName}</span>
                        </h3>
                </div>
                <div className='flex items-center justify-between my-2'>
                    <h3>omborda: <span> {product.omborda}</span></h3>
                    <button className='btn'
                    onClick={()=>setOpenSellModal(product)}
                    >sotish</button>
                </div>
            </div>
        ))}
        </div>
        {openSellModal && 
        <Modal 
                 close={()=>setOpenSellModal(null)}
                 title={"maxsulotni soting"}>
        <SellProductForm product={openSellModal} setOpenSellModal={setOpenSellModal}/>
        </Modal>
        }
    </div>
  )
}

export default SellProductCard