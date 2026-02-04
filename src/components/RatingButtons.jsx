export default function RatingButtons({ rating, onRate }) {
  return (
    <div className='flex justify-between'>
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;

        return (
          <button
            className={`rounded-full  w-10 h-10 font-bold cursor-pointer
              ${
                rating === value
                  ? 'bg-orange-500 text-grey-900'
                  : 'bg-grey-500/10 text-grey-500 hover:bg-white hover:text-grey-950'
              }`}
            key={value}
            aria-label={`Rating ${value}`}
            onClick={() => onRate(value)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
