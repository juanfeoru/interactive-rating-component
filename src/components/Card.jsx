import { useState } from 'react';
import RatingCard from './RatingCard';
import ThankUCard from './ThankUCard';
export default function Card() {
  const [rating, setRating] = useState(null);
  const [step, setStep] = useState('rating');

  return (
    <>
      {step === 'rating' && (
        <RatingCard rating={rating} setStep={setStep} onRate={setRating} />
      )}

      {step === 'thanks' && <ThankUCard rating={rating} />}
    </>
  );
}
