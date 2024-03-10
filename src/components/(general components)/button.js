const Button = ({ title, type }) => {
  return (
    <>
        <button 
        type={`${type}`} 
        className={`w-full text-center border focus:bg-[#ffcf2e] active:bg-[#ffcf2e] hover:bg-[#ffcf2e] border-white rounded-md bg-black text-white transition-all duration-300 py-1`}
        >
            {title}
        </button>
    </>
  )
};

export default Button;