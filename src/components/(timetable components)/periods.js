import Image from "next/image";


const Periods = ({ periods }) => {
  return (
    <div>
        {
            periods.map( (period, index) => (
                <div key={index} className="mb-8">
                    <p className="pb-1 text-gray-400 pl-2">{period.from} - {period.to}</p>
                    <div className="bg-white rounded-xl py-3 px-4">
                        <p className="w-full text-center py-2 text-xl">{period.class}</p>
                        {
                            period.classroom && 
                            <div className="flex pt-3">
                                <Image src={'/class.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                                <div className="grid grid-cols-1 place-content-center">
                                    <p className="text-sm pl-2 text-gray-500 lg:text-base">classroom : {period.classroom}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            ) )
        }
    </div>
  )
};

export default Periods;