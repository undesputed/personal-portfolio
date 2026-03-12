import emailjs from '@emailjs/browser';
import { CONTACT } from '@/config/site';

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USER_MESSAGE_SUCCESS =
  'Thank you for your message! I will get back to you as soon as possible.';
const USER_MESSAGE_GENERIC_ERROR =
  'An unexpected error occurred. Please try again later.';

function extractErrorMessage(error: unknown): string {
  if (error && typeof error === 'object') {
    const obj = error as Record<string, unknown>;
    if (typeof obj.text === 'string') return obj.text;
    if (typeof obj.message === 'string') return obj.message;
    if (typeof obj.status === 'number') {
      return `Email service error (Status: ${obj.status})`;
    }
  }
  if (typeof error === 'string') return error;
  return USER_MESSAGE_GENERIC_ERROR;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<EmailResponse> {
  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return {
      success: false,
      message:
        'Email service is not configured. Please try again later or contact directly.',
    };
  }

  const { name, email, subject, message } = formData;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { success: false, message: 'All fields are required.' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  const templateParams = {
    from_name: name.trim(),
    from_email: email.trim(),
    to_email: CONTACT.email,
    reply_to: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    sent_date: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }),
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: USER_MESSAGE_SUCCESS };
    }
    return {
      success: false,
      message: `Failed to send email. Status: ${response.status}`,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: extractErrorMessage(error),
    };
  }
}
