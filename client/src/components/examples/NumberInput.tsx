import NumberInput from '../NumberInput'

export default function NumberInputExample() {
  const handleNavigateToNumber = (number: number | string) => {
    console.log('Navigate to number:', number);
  };

  const handleRandomNumber = () => {
    console.log('Random number clicked');
  };

  return (
    <NumberInput
      onNavigateToNumber={handleNavigateToNumber}
      onRandomNumber={handleRandomNumber}
      maxNumber={1400000000}
    />
  );
}