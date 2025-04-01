
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Eye, EyeOff } from 'lucide-react';
import { FormField } from './form/FormField';
import { useToast } from '@/hooks/use-toast';

const profileFormSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters').optional().or(z.literal('')),
  confirmPassword: z.string().optional().or(z.literal('')),
  description: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues: Partial<ProfileFormValues> = {
    username: 'admin',
    email: 'hr@nhi.sg',
    fullName: 'HR Administrator',
    password: '',
    confirmPassword: '',
    description: '',
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  async function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true);
    console.log('Profile data submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
    
    setIsSubmitting(false);
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
        <CardDescription>Update your account information and preferences</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              label="Username"
              placeholder="Enter username"
            />
            
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter email address"
              disabled={true}
            />
            
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter new password"
              type={showPassword ? 'text' : 'password'}
              rightElement={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="h-6 w-6"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              }
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm new password"
              type={showConfirmPassword ? 'text' : 'password'}
              rightElement={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="h-6 w-6"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              }
            />
            
            <FormField
              control={form.control}
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
            />
            
            <FormField
              control={form.control}
              name="description"
              label="Description"
              placeholder="Enter description (optional)"
              textarea={true}
              rows={4}
            />
          </CardContent>
          
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update Profile'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
