const Score = ({ score, total }) => {

    let result = score / total * 100
  
    let colour = null
    if ( result > 79 ) {
      colour = 'bg-green-600'
    } else if ( 39 < result && result < 80 ) {
      colour = 'bg-orange-500'
    } else {
      colour = 'bg-red-600'
    }
    
    result = result.toString().slice(0, 4)
    
    return (
      <>
        <div className="w-full pb-10">
          <div className="mx-auto w-fit">
            <p className={`${colour} text-center w-[180px] h-[180px] lg:h-[250px] lg:w-[250px] text-white rounded-full pt-[67px] lg:pt-[90px] text-5xl lg:text-7xl`}>{result}%</p>
          </div>
          <p className="w-full text-center pt-3 text-gray-400 text-sm lg:text-xl">score</p>
        </div>
      </>
    )
};

export default Score;