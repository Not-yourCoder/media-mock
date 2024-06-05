import { images } from '../constants/images'


const Search = () => {
  return (
    <div className='bg-white p-6 rounded-lg text-3xl col-span-6'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={images.component} />
          <input type='text' className='text-[14px] px-4 focus:outline-none focus:ring-0 placeholder:font-semibold ' placeholder='Search here...' />
        </div>
        <div className='flex gap-1'>
          <img src={images.component1} alt="" />
          <div className='text-[14px] font-medium'>Filters</div>
        </div>
      </div>
    </div>
  )
}

export default Search