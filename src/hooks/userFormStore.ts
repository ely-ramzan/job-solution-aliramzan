import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateStep1, updateStep2, updateStep3, setCurrentStep, resetForm } from '../store/formSlice';

export const useFormStore = () => {
  const dispatch = useDispatch();
  const { step1, step2, step3, currentStep } = useSelector((state: RootState) => state.form);

  return {
    step1,
    step2,
    step3,
    currentStep,
    updateStep1: (data: typeof step1) => dispatch(updateStep1(data)),
    updateStep2: (data: typeof step2) => dispatch(updateStep2(data)),
    updateStep3: (data: typeof step3) => dispatch(updateStep3(data)),
    setCurrentStep: (step: number) => dispatch(setCurrentStep(step)),
    resetForm: () => dispatch(resetForm()),
  };
};