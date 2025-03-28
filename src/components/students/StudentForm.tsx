import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';

type StudentFormData = {
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  role: string;
  password: string;
  confirmPassword: string;
  enrolledCourses: string[];
};

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const form = useForm<StudentFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      isActive: true,
      role: 'student',
      password: '',
      confirmPassword: '',
      enrolledCourses: [],
    },
  });

  const onSubmit = (data: StudentFormData) => {
    console.log('Estudiante guardado:', data);
    
    // Aquí se integraría con una API real
    setTimeout(() => {
      toast.success(
        isEditing ? 'Estudiante actualizado con éxito' : 'Estudiante creado con éxito'
      );
      navigate('/students');
    }, 500);
  };

  const mockCourses = [
    { id: '1', title: 'Introducción a React' },