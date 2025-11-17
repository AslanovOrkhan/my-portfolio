// Contact form data interface
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// API response interface
export interface ContactApiResponse {
  success: boolean;
  message: string;
}

// Backend API URL
const API_URL = 'http://localhost:5000/api/contact';

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
