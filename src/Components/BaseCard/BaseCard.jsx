import React, { useState } from 'react'
import { UseFireStore } from '../../Hooks/UseFireStore'
import Modal from '../Modal/Modal'
import EditBaseCardForm from './EditBaseCardForm/EditBaseCardForm'
import AddProductForm from './AddProductForm/AddProductForm'

const BaseCard = ({product}) => {
  const {deleteDocument: deleteProduct} = UseFireStore("products")
  const [editBaseCard, seteditBaseCard] = useState(null)
  const [addProduct, setAddProduct] = useState(null)

            const handleDelete = (id) => {
              const isConfirm = window.confirm("Rostdan ham o‘chirmoqchimisiz?");
              if (!isConfirm) return;

              deleteProduct(id);
            };



    


  return (
    <div className= {`card   rounded-2xl p-2 px-3 my-1 capitalize
    ${product.omborda <= 0 ? "text-[#2D5F5D] bg-white border-3" : "bg-[#2D5F5D] text-white"}
    `}>
      <div className='flex-col  items-center justify-between'>
        <h3>Brend: <span className='font-bold text-2xl capitalize'>{product.bName}</span></h3>
        <h4>Maxsulot: <span className='font-bold text-2xl capitalize'>{product.pName}</span></h4>
      </div>
      <div className='flex items-center justify-between my-2'>
        <h5>kelish soni: {product.cAmount}</h5>
        <h5>kelish narxi: {product.cPrice}</h5>
      </div>
      <div className='flex items-center justify-between my-2'>
        <h5 >omborda {product?.omborda}</h5>
        <h5>sotildi {product?.soldAmount}</h5>
      </div>
      <div className='flex items-center justify-between'>
         <h5>vaqt: {product.time.hour}:{product.time.minute}  {product.time.day}.{product.time.month}.{product.time.year}  </h5>
        
      </div>

      <div className='mt-2 flex items-center justify-between'>


        <button className='btn'
        onClick={()=> seteditBaseCard(product)}
        >🖊 taxrir</button>


         <button className='btn'
         onClick={()=> handleDelete(product.id)}
         >🗑 delete</button>


        <button className='btn '
        onClick={()=>setAddProduct(product)}
        >➕</button>


      </div>

      {editBaseCard && 
      <Modal 
         close={()=>seteditBaseCard(null)}
         title={"maxsulotni taxrirlang"}>
          <EditBaseCardForm  product={editBaseCard} seteditBaseCard={seteditBaseCard} />
      </Modal>
      }

      {addProduct &&
      <Modal 
         close={()=>setAddProduct(null)}
         title={"yana shu maxsulotdan qo'shasizmi?"}>
          <AddProductForm  product={addProduct} setAddProduct={setAddProduct} />
      </Modal>
      }

    </div>
  )
}

export default BaseCard