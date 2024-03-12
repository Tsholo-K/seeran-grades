const Button = ({ title, type, black=false }) => {
  return (
    <>
        <button 
        type={`${type}`} 
        className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white active:bg-[#ffcf2e] hover:bg-[#ffcf2e] border-white rounded-md ${ black ? 'bg-black text-white' : 'bg-[#d0f0e4] text-black' }   transition-all duration-300 py-1`}
        >
            {title}
        </button>
    </>
  )
};

export default Button;