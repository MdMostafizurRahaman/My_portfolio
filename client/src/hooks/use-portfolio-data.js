import { useState } from 'react';
import emailjs from 'emailjs-com';
import { personalInfo } from '../data/portfolio-data.js';

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
    // If EmailJS is not configured, open the visitor's mail client with the
    // message pre-filled so the form still delivers the message.
    if (!emailConfigured) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus({ isSubmitting: false, isSuccess: true, isError: false, error: null, viaMailto: true });
      return;
    }

    setStatus({ isSubmitting: true, isSuccess: false, isError: false, error: null, viaMailto: false });

    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ isSubmitting: false, isSuccess: true, isError: false, error: null, viaMailto: false });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        error: "Failed to send message. Please try again or contact directly via email.",
        viaMailto: false
      });
    }
  };

  const reset = () => {
    setStatus({ isSubmitting: false, isSuccess: false, isError: false, error: null, viaMailto: false });
  };

  return {
    submitContact,
    isSubmitting: status.isSubmitting,
    isSuccess: status.isSuccess,
    isError: status.isError,
    error: status.error,
    viaMailto: status.viaMailto,
    emailConfigured,
    reset
  };
}