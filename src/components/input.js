const Input = ({ type, placeholder }) => {
  return (
    <>
        <input 
        type={`${type}`} 
        placeholder={`${placeholder}`}  
        className="border rounded-md px-5 py-1 w-full focus:outline-none"
        />
    </>
  )
};

export default Input;