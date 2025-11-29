// Contact form data interface
import type { ContactFormData, ContactApiResponse } from "../types/contactApi";

// Backend API URL
const API_URL = 'https://my-portfolio-k299.onrender.com/api/contact';

// Send contact form to backend
export const sendContactForm = async (
  formData: ContactFormData
): Promise<ContactApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    return {
      success: true,
      message: data.message || 'Message sent successfully!',
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message',
    };
  }
};
