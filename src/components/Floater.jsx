
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const Floater = () => {
  return (
      // <button className="z-[10000]">
      //   <div className="z-[10000] fixed bottom-12 right-8 flex items-end gap-4 p-4 rounded-full bg-[#3248F2] shadow-md shadow-indigo-500">
      //      <RiQuestionAnswerLine size={30} color="white" />
      //     </div>
      //   </button>

      <div className="group fixed bottom-20 right-5 p-2 flex items-end justify-end w-32 h-32">

        <div className="text-white shadow-xl flex items-center justify-center p-5 rounded-full bg-gradient-to-r from-indigo-700 to-[#3248F2] z-[10000] absolute ">
          <RiQuestionAnswerLine className="h-6 w-6 group-hover:scale-110 transition duration-[0.6s] "/>
        </div>

        <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-[85px] flex p-2 hover:p-3 bg-green-400 hover:bg-green-500 text-white cursor-pointer">
          <IoLogoWhatsapp className="w-8 h-8 p-[2px] " />
        </div>

        <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-20 flex p-3 hover:p-4 bg-blue-400 hover:bg-blue-500 text-white cursor-pointer ">
          <FaPhoneAlt  className="w-6 h-6 p-[2px]"/>
        </div>

        <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 group-hover:-translate-x-16 flex p-3 hover:p-4 bg-orange-400 hover:bg-orange-500 text-white cursor-pointer" >
          <IoCalendarOutline className="w-6 h-6 "/>
        </div>

      </div>
  );
};

export default Floater;
