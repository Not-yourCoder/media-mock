import ArtistCard from './ArtistCard'
import { artist } from '../../constants/artist'


const Artists = () => {
  return (
    <div className='col-span-3'>
      <div className=' h-[700px] overflow-auto no-scrollbar' >
        <div className='flex gap-4'>
          <div className='font-medium'>Artist</div>
          <div className='text-gray-500 font-medium'>Photographer</div>
        </div>
        <div className='bg-transparent h-full my-4'>
          {artist.map((item, index) => (
            <ArtistCard key={index} postPicture={item.postImage} name={item.name} profilePicture={item.profilePicture} username={item.username} />
          ))}
        </div>
      </div>
      <div className='mt-2 text-xs text-gray-600 flex justify-end gap-8'>
        <div>Privacy</div>
        <div>Terms of Service</div>
        <div>Cookie Notice</div>
      </div>

    </div>
  )
}

export default Artists