import thankUIcon from '../assets/icons/illustration-thank-you.svg';

export default function ThankUCard({ rating  }) {
  return (
    <div className='bg-grey-900 rounded-2xl p-6 flex flex-col max-w-90 shadow-md items-center justify-center gap-6 h-96'>
      <div>
        <img
          src={thankUIcon}
          alt='Thank you illustration'
          width='162'
          height='108'
        />
      </div>

      <p className='bg-grey-500/10 text-orange-500/90 py-2 px-3 rounded-full text-sm'>{`You selected ${rating} of 5`}</p>

      <h2 className='text-2xl font-bold text-white'>Thank you!</h2>

      <p className='text-grey-500 text-sm text-center'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
