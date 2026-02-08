import { useEffect, useState } from 'react'
import { UseFireStore } from '../../Hooks/UseFireStore'
import { UseCollection } from '../../Hooks/UseCollection'

const CreateProduct = ({setOpenProductModal}) => {
    const {addDocument: newProduct} = UseFireStore("products")
    const {data: brends} = UseCollection("brends")
    const [getBname, setGetBname] = useState(null)
    const [pName, setPname]= useState("")
    const [cPrice, setCprice] = useState("")
    const [cAmount, setCamount] = useState("")
    const [itogo, setItogo] = useState(null)

    const selectedBrend =(e)=>{
        const findBrend = brends.find((item)=> item.id == e)
        setGetBname(findBrend)
    }

    useEffect(()=>{
        const calcing = (Number(cAmount) * Number(cPrice)) || 0
        setItogo(calcing)
    }, [cPrice, cAmount])

    const hanleSubmit = (e)=> {
        e.preventDefault()

        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()+1
        const day = now.getDate()
        const hour = now.getHours()
        const minute = now.getMinutes()


        newProduct({
            bName: getBname.bName,
            brendId: getBname.id,
            pName,
            cAmount,
            cPrice,
            itogo,
            time: {
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute
            }
            
        })
        .then(()=>alert("maxsulot qoshildi!"))
        .catch((error)=>alert(error.message))

        setGetBname(null)
        setPname("")
        setCamount("")
        setCprice("")
        setItogo(null)
        setOpenProductModal(false)
    }

  return (
    <div className='px-2'>
        <form className='forma'onSubmit={hanleSubmit} >
            <label className='formLabel'>
                <span>brend nomi:</span>
                <select className='inp' required onChange={(e)=>selectedBrend(e.target.value)}>
                    <option value="">tanlang...</option>
                    {brends?.map((brend)=>(
                        <option key={brend.id} value={brend.id}>
                            {brend.bName.toUpperCase()}
                        </option>
                    ))}
                </select>
            </label>

            <label className='formLabel'>
                <span>maxsulot nomi:</span>
                <input 
                className="inp" 
                placeholder='maxsulot nomi...'
                type="text" 
                value={pName}
                onChange={(e)=> setPname(e.target.value)}
                />
            </label>

            <label className='formLabel'>
                <span>soni:</span>
                <input 
                className="inp" 
                placeholder='soni...'
                type="number" 
                value={cAmount}
                onChange={(e)=> setCamount(e.target.value)}
                />
            </label>

            <label className='formLabel'>
                <span>narxi:</span>
                <input 
                className="inp" 
                placeholder='narxi...'
                type="number"
                value={cPrice}
                onChange={(e)=> setCprice(e.target.value)} 
                />
            </label>

            <label className='formLabel'>
                <span>itogo:</span>
                <input 
                className="inp" 
                placeholder={itogo}
                readOnly
                />
            </label>

            <div className="btns">
                <button className="btn" onClick={()=>setOpenProductModal(false)} type='button'
                >bekor qilish</button>
                <button className="btn">saqlash</button>
            </div>
        </form>
    </div>
  )
}

export default CreateProduct