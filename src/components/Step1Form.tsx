import { useForm } from '@tanstack/react-form';
import { useFormStore } from '../hooks/userFormStore';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Step1Form = () => {
  const { step1, updateStep1, setCurrentStep } = useFormStore();

  const form = useForm({
    defaultValues: step1,
    onSubmit: async ({ value }) => {
      updateStep1(value);
      setCurrentStep(2);
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
        name="firstName"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>First Name</label>
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
        name="lastName"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Last Name</label>
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
        name="email"
        children={(field) => (
          <div className="space-y-2">
            <label htmlFor={field.name}>Email</label>
            <Input
              id={field.name}
              name={field.name}
              type="email"
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
      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Step1Form;