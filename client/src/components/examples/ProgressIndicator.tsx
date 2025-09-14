import ProgressIndicator from '../ProgressIndicator'

export default function ProgressIndicatorExample() {
  const handlePrevious = () => console.log('Previous clicked');
  const handleNext = () => console.log('Next clicked');
  const handleReset = () => console.log('Reset clicked');

  return (
    <ProgressIndicator
      currentNumber={0}
      totalNumbers={50}
      currentIndex={0}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onReset={handleReset}
      hasNext={true}
      hasPrevious={false}
    />
  );
}