import { useState } from "react";
import { motion as _motion } from "framer-motion"; 

const tabs = ["Home", "Search", "About", "FAQ"];

const Head=()=>{
    const [selected, setSelected] = useState(tabs[0]);
    return(
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div>LOGO-DESCRIPTION</div>
            <div className=" w-1/3 h-10  backdrop-blur-3xl rounded-3xl flex justify-center p-2 flex-wrap sticky top-4 z-50 gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
            </div>
        </div>
    );
};
const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <_motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-md"
        ></_motion.span>
      )}
    </button>
  );
};
export default Head;