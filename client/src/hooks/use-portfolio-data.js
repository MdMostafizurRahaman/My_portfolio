import { useState } from 'react';
import emailjs from 'emailjs-com';

// Hook for submitting contact form data using EmailJS
export function useContactForm() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailConfigured = Boolean(serviceId && templateId && publicKey);

  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    error: null
  });

  const submitContact = async (data) => {
    if (!emailConfigured) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        error: "Email service is not configured yet. Please contact directly via email."
      });
      return;
    }

    setStatus({ isSubmitting: true, isSuccess: false, isError: false, error: null });

    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ isSubmitting: false, isSuccess: true, isError: false, error: null });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        error: "Failed to send message. Please try again or contact directly via email."
      });
    }
  };

  const reset = () => {
    setStatus({ isSubmitting: false, isSuccess: false, isError: false, error: null });
  };

  return {
    submitContact,
    isSubmitting: status.isSubmitting,
    isSuccess: status.isSuccess,
    isError: status.isError,
    error: status.error,
    emailConfigured,
    reset
  };
}