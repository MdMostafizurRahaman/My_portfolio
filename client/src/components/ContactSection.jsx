import { useState } from "react";
import { useContactForm } from "../hooks/use-portfolio-data.js";
import { Loader2, CheckCircle, AlertCircle, Mail, MapPin, Share2, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolio-data.js";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const {
    submitContact,
    isSubmitting,
    isSuccess,
    isError,
    error,
    emailConfigured,
    reset,
  } = useContactForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await submitContact(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800 dark:text-gray-100">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind or want to chat? Send me a message!
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">{personalInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Share2 className="h-6 w-6 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" aria-label="GitHub">
                        <Github className="h-6 w-6" />
                      </a>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href={`mailto:${personalInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" aria-label="Email">
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Send Me a Message
            </h3>
            
            {isSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">Message sent successfully!</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={reset}
                      className="text-sm text-green-600 dark:text-green-400 underline mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {isError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                      <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                    </div>
                  </div>
                )}
                
                {errors.submit && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                      <p className="text-red-700 dark:text-red-300 text-sm">{errors.submit}</p>
                    </div>
                  </div>
                )}

                {!emailConfigured && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md p-4 mb-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                      <p className="text-amber-800 dark:text-amber-300 text-sm">
                        The contact form is not yet configured with an email service. In the meantime,
                        reach me directly at{" "}
                        <a href={`mailto:${personalInfo.email}`} className="underline font-medium">
                          {personalInfo.email}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                      errors.name ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                      errors.email ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                      errors.message ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}