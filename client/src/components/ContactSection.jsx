import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContactForm } from "../hooks/use-portfolio-data.js";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { Badge } from "./ui/badge.jsx";
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Phone,
  Send,
  MessageSquare,
  User,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Sparkles
} from "lucide-react";
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const { submitContact, isSubmitting, isSuccess, isError, error, reset } = useContactForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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

    try {
      // Simulate email sending for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      submitContact({ name: formData.name, email: formData.email, message: formData.message });
    } catch (error) {
      console.error("Error sending email:", error);
      reset();
      setErrors({ submit: "Failed to send message. Please try again later." });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bsse1320@iit.du.ac.bd",
      link: "mailto:bsse1320@iit.du.ac.bd",
      color: "from-blue-500 to-purple-600",
      description: "Drop me a line anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-green-500 to-teal-600",
      description: "Available for remote work"
    },
    {
      icon: Globe,
      title: "Website",
      value: "portfolio.dev",
      color: "from-purple-500 to-pink-600",
      description: "Check out my work"
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/MdMostafizurRahaman",
      color: "from-gray-700 to-gray-900",
      username: "@MdMostafizurRahaman"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mdmostafizurrahaman",
      color: "from-blue-600 to-blue-800",
      username: "mdmostafizurrahaman"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/mdmostafizur",
      color: "from-sky-400 to-blue-600",
      username: "@mdmostafizur"
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block relative"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get In Touch
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to chat? Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 relative">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="flex items-center space-x-4 relative z-10">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <info.icon size={20} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {info.description}
                          </p>
                          {info.link ? (
                            <motion.a
                              href={info.link}
                              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                              whileHover={{ scale: 1.05 }}
                            >
                              {info.value}
                            </motion.a>
                          ) : (
                            <p className="font-medium text-gray-900 dark:text-white">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 dark:text-white">
                    <Heart className="mr-2 text-red-500" size={20} />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <social.icon size={18} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {social.username}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="glass-effect backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden">
              <CardHeader className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <CardTitle className="flex items-center text-xl font-bold text-gray-900 dark:text-white relative z-10">
                  <MessageSquare className="mr-2 text-blue-500" size={24} />
                  Send Me a Message
                  <motion.div
                    className="ml-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="text-yellow-500" size={16} />
                  </motion.div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                  >
                    <motion.div
                      className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="text-green-500" size={32} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={reset}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {(isError || errors.submit) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                      >
                        <div className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                          <p className="text-red-700 dark:text-red-300 text-sm">
                            {error || errors.submit}
                          </p>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Name Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        <User className="inline mr-2" size={16} />
                        Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 transition-all duration-300 ${
                          errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}
                        placeholder="Your amazing name"
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    {/* Email Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        <Mail className="inline mr-2" size={16} />
                        Email
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 transition-all duration-300 ${
                          errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}
                        placeholder="your.email@awesome.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    {/* Message Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        <MessageSquare className="inline mr-2" size={16} />
                        Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="5"
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 transition-all duration-300 resize-none ${
                          errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}
                        placeholder="Tell me about your amazing project ideas..."
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [-100, 300] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        />
                        
                        <div className="flex items-center justify-center relative z-10">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 animate-spin" size={20} />
                              Sending Magic...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2" size={20} />
                              Send Message
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-yellow-500" size={20} />
            </motion.div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Let's build something amazing together!
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}