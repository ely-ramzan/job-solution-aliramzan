import { useForm } from '@tanstack/react-form';
import { useFormStore } from '../hooks/userFormStore';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Step3Form = () => {
  const { step3, updateStep3, resetForm, setCurrentStep } = useFormStore();

  const form = useForm({
    defaultValues: step3,
    onSubmit: async ({ value }) => {
      updateStep3(value);
      alert('Form submitted successfully!');
      resetForm();
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
        name="occupation"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Occupation</label>
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
        name="education"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Education</label>
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
        name="skills"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Skills (comma separated)</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value.join(', ')}
              onBlur={field.handleBlur}
              onChange={(e) =>
                field.handleChange(e.target.value.split(',').map(s => s.trim()))
              }
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
          onClick={() => setCurrentStep(2)}
        >
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Step3Form;