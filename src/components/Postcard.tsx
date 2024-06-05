import { BsThreeDotsVertical } from "react-icons/bs";
type Action = {
    icon: string;
    label: string;
};
type Props = {
    profilePicture: string
    username: string
    handle: string
    description: string
    postPicture: string
    actions: Action[]
}
const PostCard = ({ profilePicture, username, handle, description, postPicture, actions }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 relative">
            <div className="flex items-center justify-between mb-4">
                <div className='flex items-center'>
                    <img src={profilePicture} alt={`${username}'s profile`} className="w-12 h-12 rounded-lg mr-4" />
                    <div >
                        <div className="font-semibold text-xl">{username}</div>
                        <div className="text-gray-500">{handle}</div>
                    </div>
                </div>
                <BsThreeDotsVertical className='text-2xl text-[rgba(0,0,0,0.7)]' />
            </div>
            <div className="mb-4 text-sm">{description}<span className="text-sm text-red-400"> Read More</span></div>
            {postPicture && <img src={postPicture} alt="Post" className="w-full rounded-lg" />}
            <div className="border mt-10 w-[655px] left-0 bottom-20 absolute"></div>
            <div className="flex justify-start gap-6 mt-16 text-xl font-semibold">
                {actions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <img src={action.icon} alt={action.label} className="w-5 h-5" />
                        <span>{action.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostCard;
