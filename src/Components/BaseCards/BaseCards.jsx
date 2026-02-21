import { useState } from 'react'
import { UseCollection } from '../../Hooks/UseCollection'
import BaseCard from '../BaseCard/BaseCard'
import Modal from '../Modal/Modal'
import CreateProduct from '../CreateProduct/CreateProduct'

const BaseCards = ({ searchTerm, getBrendId, setGetBrendId }) => {
    const {data: products} = UseCollection("products")
    const [openProductModal, setOpenProductModal] = useState(false)

    const filteredProducts = products
      ?.filter((product) => {
        // 1. Brend bo‘yicha filter
        if (!getBrendId) return true;
        return product.brendId === getBrendId;
      })
      ?.filter((product) => {
        // 2. Qidiruv bo‘yicha filter
        if (!searchTerm.trim()) return true;

        const search = searchTerm.toLowerCase();

        return (
          product.pName?.toLowerCase().includes(search) ||
          product.bName?.toLowerCase().includes(search)
        );
      });





  return (
    <div className='shadow relative'>
    <div className='brendCards flex flex-col '>

      

        {/* create product */}
        {openProductModal && <Modal 
         close={()=>setOpenProductModal(false)}
         title={"Yangi maxsulot qoshing"}>
         <CreateProduct setOpenProductModal={setOpenProductModal}/>
         </Modal>}

        

        

    </div>

    <div className='products '>
        <div className="productsUp flex items-center justify-between p-2 my-2 ">
            <h3 className='capitalize text-2xl font-bold lg:ml-18'>mahsulotlar</h3>
        <div className="addNew pr-3">
          <button className="btn" onClick={()=>setOpenProductModal(true)} >maxsulot qoshing</button>
        </div>
        </div>


        <div className="productsDown grid lg:grid-cols-2 gap-2">
          {/* <h3>vbnm,.</h3> */}
        {filteredProducts?.map((product)=>(
            <BaseCard key={product.id} product={product} />
        ))}
        </div>
    </div>



    </div>
  )
}

export default BaseCards