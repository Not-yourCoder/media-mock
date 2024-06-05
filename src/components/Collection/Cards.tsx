import { collections } from '../../constants/collection';

const Cards = () => {
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <svg key={i} className='w-4 h-4 text-yellow-500 fill-current' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.573-.955L10 .25l2.938 5.704 6.573.955-4.755 4.635L15.878 18z' />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className='overflow-auto no-scrollbar p-4'>
      <div className='flex'>
        {collections.map((item, index) => (
          <div key={index} className=' flex-shrink-0 w-64 mr-4'>
            <img src={item.wallart} alt="wallart" className='w-full h-40 object-cover rounded-lg' />
            <div className='p-4'>
              <div className='font-semibold text-xs mb-2'>{item.label}</div>
              <div className='flex justify-between items-center'>
                <div className='font-semibold font-barlow text-2xl'>{item.price}</div>
                <div className='text-yellow-500 flex items-center'>
                  {renderStars(parseInt(item.stars))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
