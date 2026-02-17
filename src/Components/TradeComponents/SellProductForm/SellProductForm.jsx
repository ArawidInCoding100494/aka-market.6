import { useEffect, useState } from 'react'
import { UseFireStore } from '../../../Hooks/UseFireStore'

const SellProductForm = ({product, setOpenSellModal}) => {
    const {addDocument: soldProducts} = UseFireStore("soldProducts")
    const {editDocument: editProducts}= UseFireStore("products")
    const [sellAmount, setSellAmount] = useState("")
    const [sellPrice, setSellPrice] = useState("")
    const [itogo, setItogo] = useState("0")
    const [soldProfit, setSoldProfit] = useState()

    // console.log(product)

    useEffect(()=>{
        const calculateItogo = Number(sellAmount) * Number(sellPrice)
        const calculateProfit  = ((Number(sellAmount) * Number(sellPrice)) - (Number(product.cPrice)*Number(sellAmount)))
        setSoldProfit(Number(calculateProfit))
        setItogo(Number(calculateItogo))
    },[sellAmount, sellPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{

         const hozir = new Date();

            const yil = hozir.getFullYear();
            const oy = hozir.getMonth() + 1; 
            const kun = hozir.getDate();
            const soat = hozir.getHours();
            const minut = hozir.getMinutes();



            await editProducts(product.id, {
              omborda:
               Number(product.omborda) > Number(sellAmount)
                ? Number(product.omborda) - Number(sellAmount)
                : 0,

            soldAmount:
                (Number(product.soldAmount) || 0) + Number(sellAmount),
            })

        await soldProducts({
            soldBname: product.bName,
            soldPName: product.pName,
            soldAmount: Number(sellAmount),
            soldPrice: Number(sellPrice),
            itogo: Number(itogo),
            soldProfit: Number(soldProfit),
            vaqt: {
                yil: yil,
                oy: oy,
                kun: kun,
                soat: soat,
                minut: minut,
            },
            cAmount: product.cAmount,
            cPrice: product.cPrice,
        })
        alert("maxsulot sotildi")
        console.log("maxsulot sotildi")

        setSellAmount("")
        setSellPrice("")
        setItogo("")
        setOpenSellModal(null)

        }catch(error){
            alert("maxsulot sotilmadi")
            console.log(error.message)
        }

    }

    
    
  return (
    <div>
        <div className='bg-white text-[#2D5F5D] h-screen mx-2 rounded-2xl p-2'>
            <div className='px-3 capitalize'>
            <h3>brend: 
                <span className='font-bold ml-2'>{product.bName}</span>
             </h3>
            <h3>brend: 
                <span className='font-bold ml-2'>{product.pName}</span>
             </h3>
            </div>
            <form className='forma pt-0' onSubmit={handleSubmit}>

                <label className='formLabel mt-1'>
                    <span>soni:</span>
                    <input className='inp' 
                    required
                    type="number" 
                    placeholder={`omborda ${product.omborda} ta qolgan`}
                    value={sellAmount}
                    onChange={(e)=>setSellAmount(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>narxi: 
                        <span className='text-[12px] text-black/40 ml-1'>{product.cPrice} kelishi</span>
                        </span>
                    <input className='inp' 
                    required
                    type="number" 
                    placeholder='narxi...'
                    value={sellPrice}
                    onChange={(e)=>setSellPrice(e.target.value)} />
                </label>

                <label className='formLabel mt-1'>
                    <span>itogo:</span>
                    <span className='inp' >{itogo}</span>
                </label>

                <div className="btns">
                    <button className="btn" type='button'
                    onClick={()=>setOpenSellModal(null)}
                    >bekor</button>
                    <button className="btn">saqla</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SellProductForm