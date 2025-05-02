import { useForm } from '@tanstack/react-form';
import { useFormStore } from '../hooks/userFormStore';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Step2Form = () => {
  const { step2, updateStep2, setCurrentStep } = useFormStore();

  const form = useForm({
    defaultValues: step2,
    onSubmit: async ({ value }) => {
      updateStep2(value);
      setCurrentStep(3);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field
        name="address"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Address</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors && (
              <p className="text-red-500 text-sm">
                {field.state.meta.errors.join(', ')}
              </p>
            )}
          </div>
        )}
      />
      <form.Field
        name="city"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>City</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors && (
              <p className="text-red-500 text-sm">
                {field.state.meta.errors.join(', ')}
              </p>
            )}
          </div>
        )}
      />
      <form.Field
        name="country"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Country</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors && (
              <p className="text-red-500 text-sm">
                {field.state.meta.errors.join(', ')}
              </p>
            )}
          </div>
        )}
      />
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Step2Form;