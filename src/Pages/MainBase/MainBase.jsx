import ContentUp from "../../Components/ContentUp/ContentUp";
import BaseCards from "../../Components/BaseCards/BaseCards";

const MainBase = () => {


  return (
    <div>
      <div className="baseUp flex items-center justify-between px-3 shadow">

      

      <div className=" w-full lg:w-[50%]">
      <ContentUp title={"baza"} />
      </div>

      

      </div>

      <div className="baseMain">
        <h3 className="capitalize text-2xl font-bold my-2 lg:mt-8 ml-4 lg:ml-18">brendlar</h3>
        <div className="main_contents shadow">
            <BaseCards/>
        </div>
      </div>
    </div>
  )
}

export default MainBase