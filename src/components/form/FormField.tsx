
import React from 'react';
import { FormControl, FormDescription, FormField as ShadcnFormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  disabled?: boolean;
  textarea?: boolean;
  rows?: number;
  rightElement?: React.ReactNode;
}

export function FormField({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  disabled = false,
  textarea = false,
  rows = 3,
  rightElement
}: FormFieldProps) {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              {textarea ? (
                <Textarea 
                  placeholder={placeholder} 
                  {...field} 
                  disabled={disabled} 
                  rows={rows}
                  className="resize-none"
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  type={type}
                  disabled={disabled}
                  {...field}
                />
              )}
              {rightElement && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {rightElement}
                </div>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
