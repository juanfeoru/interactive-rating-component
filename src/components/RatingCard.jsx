import RatingButtons from './RatingButtons';
import iconStart from '../assets/icons/icon-star.svg';

export default function RatingCard({ rating, setStep, onRate }) {
  const handleRating = () => {
    if (!rating) return;
    setStep('thanks');
  };

  return (
    <div className='bg-grey-900 rounded-2xl p-6 flex flex-col m-4 max-w-90 shadow-md h-96'>
      <header>
        <div className='inline-block items-center justify-center p-2 mb-4 bg-grey-500/10 rounded-full'>
          <img src={iconStart} width='17' height='16' alt='Star icon' />
        </div>
      </header>

      <div className='flex flex-col gap-6'>
        <h1 className='text-white text-2xl font-bold'>How did we do?</h1>
        <p className='text-grey-500 text-sm'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <RatingButtons rating={rating} onRate={onRate} />

        <button
          className=' bg-orange-500 uppercase py-2 w-full font-bold tracking-[1px] rounded-full cursor-pointer hover:bg-white mt-auto'
          aria-label='Submit rating'
          onClick={handleRating}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
