import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validate environment variables
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('All fields are required.');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address.');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'eirracyu12@gmail.com', // Your email address
      reply_to: formData.email, // For reply-to functionality
      subject: formData.subject,
      message: formData.message,
      sent_date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      })
    };

    // Send email using EmailJS
    console.log('Sending email with params:', templateParams);
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('Template ID:', EMAILJS_TEMPLATE_ID);
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS Response:', response);

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! I will get back to you as soon as possible.'
      };
    } else {
      throw new Error(`Failed to send email. Status: ${response.status}`);
    }

  } catch (error: unknown) {
    console.error('EmailJS Error Details:', error);
    console.error('Error type:', typeof error);
    console.error('Error keys:', Object.keys(error || {}));
    
    // Extract error message from EmailJS error object
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    
    if (error && typeof error === 'object') {
      const errorObj = error as Record<string, unknown>;
      // EmailJS errors often have a 'text' property
      if (typeof errorObj.text === 'string') {
        errorMessage = errorObj.text;
      } else if (typeof errorObj.message === 'string') {
        errorMessage = errorObj.message;
      } else if (typeof errorObj.status === 'number') {
        errorMessage = `Email service error (Status: ${errorObj.status})`;
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    console.error('Extracted error message:', errorMessage);
    
    return {
      success: false,
      message: errorMessage
    };
  }
};
