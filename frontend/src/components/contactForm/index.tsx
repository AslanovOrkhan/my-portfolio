import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    form: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !formData.email.includes("@"),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
      form: false,
    };

    if (newErrors.name || newErrors.email || newErrors.subject || newErrors.message) {
      newErrors.form = true;
      setErrors(newErrors);
      return;
    }

    // Form valid - burada API çağırılacaq
    console.log("Form submitted:", formData);
    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
      form: false,
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false, form: false }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.form && (
        <p className="text-cyan-400 text-sm">
          One or more fields have an error. Please check and try again.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent border ${
              errors.name ? "border-cyan-400" : "border-gray-700"
            } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
          />
          {errors.name && (
            <p className="text-cyan-400 text-xs mt-1">This field is required.</p>
          )}
        </div>

        <div>
          <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-transparent border ${
            errors.email ? "border-cyan-400" : "border-gray-700"
          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
        />
        {errors.email && (
          <p className="text-cyan-400 text-xs mt-1">This field is required.</p>
        )}
      </div>

      <div>
        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full bg-transparent border ${
            errors.subject ? "border-cyan-400" : "border-gray-700"
          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors`}
        />
        {errors.subject && (
          <p className="text-cyan-400 text-xs mt-1">This field is required.</p>
        )}
      </div>

      <div>
        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={8}
          className={`w-full bg-transparent border ${
            errors.message ? "border-cyan-400" : "border-gray-700"
          } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
        />
        {errors.message && (
          <p className="text-cyan-400 text-xs mt-1">This field is required.</p>
        )}
      </div>

      {errors.form && (
        <p className="text-cyan-400 text-sm">
          One or more fields have an error. Please check and try again.
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-wider"
      >
        Send Message
      </button>
    </form>
  );
}
