import { useFormStore } from '../hooks/userFormStore';
import ProgressSteps from './ProgressSteps';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';
import { Button } from './ui/button';

const FormWrapper = () => {
  const { currentStep } = useFormStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Form />;
      case 2:
        return <Step2Form />;
      case 3:
        return <Step3Form />;
      default:
        return <Step1Form />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Form Wizard</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="space-y-6">
          <ProgressSteps currentStep={currentStep} />
          {renderStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormWrapper;