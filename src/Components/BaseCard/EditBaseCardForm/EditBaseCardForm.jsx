import { useEffect, useRef, useState } from 'react'
import { UseFireStore } from '../../../Hooks/UseFireStore'

const EditBaseCardForm = ({product, seteditBaseCard}) => {
    const {editDocument: editProduct} = UseFireStore("products")
    const bName = useRef()
    const pName = useRef()
    const day = useRef()
    const month = useRef()
    const year = useRef()
    const [editSoldAmount, setEditSoldAmount] = useState("")
    const [editOmborda, setEditOmborda] = useState("")
    const [editCamount, setEditCamount] = useState("")
    const [editCprice, setEditCprice] = useState("")
    const [editItogo, setEditItogo] = useState(product.itogo)

    useEffect(()=>{
        const calculateItogo = Number(editCamount) * Number(editCprice);
        setEditItogo(calculateItogo  || 0)
    },[editCamount, editCprice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{

        await editProduct(product.id, {
            bName: bName.current.value || product.bName,
            pName: pName.current.value || product.pName,
            cAmount: editCamount || product.cAmount,
            cPrice: editCprice || product.cPrice,
            omborda: editOmborda || product.omborda,
            itogo: editItogo,
            time: {
                day: day.current?.value || product.time.day,
                month: month.current?.value || product.time.month,
                year: year.current?.value || product.time.year
            }
        })
        alert("maxsulot taxrirlandi!!!")
        seteditBaseCard(null)
    } catch(error) {
        alert("maxsulot taxrirlanmadi!!!")
        console.log(error.message)
    }
    }

  return (
    <div>
        <div className='bg-white text-[#2D5F5D] h-screen mx-2 rounded-2xl p-2'>
                <form className='forma pt-0' onSubmit={handleSubmit}>

                 <label className='formLabel mt-1'>
                    <span>brend nomi:</span>
                    <input className='inp' 
                    type="text" defaultValue={product.bName}
                    ref={bName}
                    />
                </label>

                <label className='formLabel mt-1'>
                    <span>maxsulot nomi:</span>
                    <input className='inp' 
                    type="text" 
                    defaultValue={product.pName}  
                    ref={pName}  />
                </label>

                <label className='formLabel mt-1'>
                    <span>kelish soni: 
                        {/* <span className='text-[12px] text-black/40 ml-1'>{product.cPrice} kelishi</span> */}
                        </span>
                    <input className='inp' 
                    type="number" 
                    placeholder={product.cAmount}
                    value={editCamount}
                    onChange={(e)=>setEditCamount(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>sotilgan soni:</span>
                    <input className='inp' 
                    type="number" 
                    placeholder={`sotilgan soni ${product.soldAmount} ta`}
                    value={editSoldAmount}
                    onChange={(e)=> setEditSoldAmount(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>omborda:</span>
                    <input className='inp' 
                    type="number" 
                    placeholder={`omborda ${product.omborda} ta qolgan`}
                    value={editOmborda}
                    onChange={(e)=>setEditOmborda(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>narxi: 
                        {/* <span className='text-[12px] text-black/40 ml-1'>{product.cPrice} kelishi</span> */}
                        </span>
                    <input className='inp' 
                    type="number" 
                    placeholder={` ${product.cPrice} so'mdan kelgan`}
                    value={editCprice}
                    onChange={(e)=>setEditCprice(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>itogo:</span>
                    <span className='inp' >{editItogo}</span>
                </label>

                <div className='times grid grid-cols-3 gap-2'>
                    <label className='formLabel mt-1'>
                        <span>kun:</span>
                        <input className='inp' type="text" 
                        defaultValue={product.time.day}
                        ref={day} />
                    </label>

                    <label className='formLabel mt-1'>
                        <span>oy:</span>
                        <input className='inp' type="text" 
                        defaultValue={product.time.month}
                        ref={month} />
                    </label>

                    <label className='formLabel mt-1'>
                        <span>yil:</span>
                        <input className='inp' type="text" 
                        defaultValue={product.time.year}
                        ref={year} />
                    </label>
                </div>

                <div className="btns">
                    <button className="btn" type='button'
                    onClick={()=>seteditBaseCard(null)}
                    >bekor</button>
                    <button className="btn">saqla</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditBaseCardForm