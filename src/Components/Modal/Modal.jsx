import { IoMdClose } from "react-icons/io";

function Modal({ children, width, close, bg, title }) {
  return (
    <>
        
      <div 
        className="fixed inset-0 bg-black/10 z-9998 backdrop-blur-sm" 
        onClick={() => close(false)} 
      >
      <div 
      className="fixed w-[80%] lg:w-[35%] h-screen bg-[#2D5F5D] text-white border top-0 left-0 py-7.5 px-0 opacity-100 animate-[model_0.3s_forwards] overflow-auto z-9999">

        <div className="flex items-center justify-between py-1 px-3 lg:px-7.5 border-b-[0.4px] mb-3 pb-3">
          <h3>{title}</h3>

          {/* Desktop only close */}
          <button
            onClick={() => close(false)}
            className="hidden lg:flex text-xl"
          >
            <IoMdClose />
          </button>
        </div>


        <div className="model__children"> {children}</div>



        <button
        onClick={() => close(false)}
        className="btn fixed bottom-4 left-[60%] lg:hidden"
      >
        Yopish
      </button>


      </div>
      </div>

    </>
  );
}

export default Modal;