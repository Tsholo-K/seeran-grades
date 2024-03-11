import Image from "next/image";


const AttendanceCard = ({ learner, button }) => {
  return (
    <div className='relative rounded-xl bg-white mb-4 mt-2'>
        <Image src={`/${learner.image}.svg`} alt='user icon' width={50} height={50} className='absolute top-4 left-3 rounded-full' />
        <p className='pl-20 pt-4 pb-10'>{learner.name.charAt(0).toUpperCase() + learner.name.slice(1)} {learner.surname.charAt(0).toUpperCase() + learner.surname.slice(1)}</p>
        <form className='bg-white rounded-xl'>
            <input type='text' disabled value={`${learner.id}`} className='absolute bg-white  left-20 top-10' />
            <button className='absolute right-4 top-[20px] rounded-lg bg-black focus:bg-[#ffcf2e] px-4 py-2 text-white' >{button}</button>
        </form>
    </div>
  )
};

export default AttendanceCard;