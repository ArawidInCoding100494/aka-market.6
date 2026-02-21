import React, { useState } from 'react'
import { UseFireStore } from '../../../Hooks/UseFireStore'

const AddProductForm = ({product, setAddProduct}) => {
    const {editDocument: addProduct} = UseFireStore("products")
    const [addAmount, setAddAmount] = useState("")
    const [addNewPrice, setAddNewPrice] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
         await addProduct(product.id,{
            cAmount: (product.cAmount + Number(addAmount)) || product.cAmount,
            cPrice: addNewPrice || cPrice
        })

        alert("qo'shimcha maxsulot qo'shildi!!!")
        setAddProduct(null)


    } catch(erorr) {
        alert("qo'shimcha maxsulot qo'shilmadi!!!")
        console.log(erorr.message)
    }
    }


  return (
    <div>
        <div className='bg-white text-[#2D5F5D] h-screen mx-2 rounded-2xl p-2'>
            <div className='px-3 capitalize'>
            <h3>brend: 
                <span className='font-bold ml-2'>{product.bName}</span>
             </h3>
            <h3>maxsulut: 
                <span className='font-bold ml-2'>{product.pName}</span>
             </h3>
             <h3>kelgan narxi: 
                <span className='font-bold ml-2'>{product.cPrice}</span>
             </h3>
             <h3>jami kelgani: 
                <span className='font-bold ml-2'>{product.cAmount}</span>
             </h3>
             <h3>omborda: 
                <span className='font-bold ml-2'>{product.omborda}</span>
             </h3>
             <h3>jami sotilgani: 
                <span className='font-bold ml-2'>{product.soldAmount}</span>
             </h3>
            </div>

            <form className='forma pt-0' onSubmit={handleSubmit}>

                <label className='formLabel mt-1'>
                    <span>soni:</span>
                    <input className='inp' 
                    required
                    type="number" 
                    placeholder="qo'shiladigan soni..."
                    value={addAmount}
                    onChange={(e)=>setAddAmount(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>narx o'zgardimi?</span>
                    <input className='inp' 
                    required
                    type="number" 
                    placeholder="o'zgargan narx..."
                    value={addNewPrice}
                    onChange={(e)=>setAddNewPrice(e.target.value)} />
                </label>

                <div className="btns">
                    <button className="btn" type='button'
                    onClick={()=>setAddProduct(null)}
                    >bekor</button>
                    <button className="btn">saqla</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProductForm