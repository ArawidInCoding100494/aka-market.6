import { IoSearchSharp } from "react-icons/io5";

const Searching = ({
    value,
    onchange,
}) => {
  return (
    <div>
        <div className="relative inline-block">
          <input className="inp w-30 lg:w-auto" 
          placeholder="qidirish"
          onChange={(e)=>onchange(e.target.value)} 
          type="text"
          value={value} />
          <IoSearchSharp className="absolute right-3 top-2" />
        </div>
    </div>
  )
}

export default Searching