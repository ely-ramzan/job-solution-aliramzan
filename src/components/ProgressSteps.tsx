import { cn } from '../lib/utils';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  const steps = ['Personal Info', 'Address', 'Education & Skills'];

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center',
              currentStep > index + 1
                ? 'bg-green-500 text-white'
                : currentStep === index + 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-200 text-gray-600'
            )}
          >
            {index + 1}
          </div>
          <span
            className={cn(
              'text-xs mt-2',
              currentStep >= index + 1 ? 'text-primary' : 'text-gray-500'
            )}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;