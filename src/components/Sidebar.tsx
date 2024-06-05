import { useState } from 'react'
import { sidebar } from '../constants/sidebar'
import { images } from '../constants/images'


const Sidebar = () => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className='col-span-3'>
      <div className='bg-white rounded-lg text-3xl  h-[700px] flex flex-col justify-between'>
        <div className='my-4'>
          {sidebar.map((item, index) => (
            <>
              <div
                key={index}
                className={`flex gap-4 items-center text-[16px] px-10 mt-2 py-2 cursor-pointer ${active === index ? 'text-black border-l-4 border-[#88C2BB]' : 'text-gray-500 border-l-4 border-white'}`}
                onClick={() => setActive(index)}
              >
                <img src={item.icon} alt={item.label} className={active === index ? "text-red-800" : ""} />
                <div className='capitalize font-semibold'>{item.label}</div>
              </div>
            </>
          ))}
        </div>
        <div className='flex gap-4 mx-10 mb-10'>
          <img src={images.logout} className='w-[20px]' />
          <div className='text-[16px] font-semibold text-[#88C2BB] '>Log out</div>
        </div>
      </div>
      <div className='flex justify-between mt-2 text-xs text-gray-500'>
        <div>2024©Football</div>
        <div>Developed by Arya</div>
      </div>
    </div>
  )
}

export default Sidebar
