
type Props = {
    postPicture: string, name: string, username: string, profilePicture: string
}

const ArtistCard = ({ postPicture, name, username, profilePicture }: Props) => {
    return (
        <div className='h-[160px] mb-10 rounded-lg relative overflow-hidden'>
            <img src={postPicture} alt="Post" className="absolute inset-0 w-full h-full object-cover" />
            <div className='flex gap-4 absolute bottom-0 p-3'>
                <img src={profilePicture} className='rounded-lg w-[50px]' />
                <div className='flex flex-col text-white'>
                    <div className='font-medium'>{name}</div>
                    <div className='text-white'>{username}</div>
                </div>
            </div>
        </div>
    )
}

export default ArtistCard