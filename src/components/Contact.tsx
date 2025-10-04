import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const toEmail = 'tanyabhatnagar022003@gmail.com';
    const subject = `Message from ${formData.name || 'Website Visitor'}`;
    const bodyLines = [
      `Name: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      '',
      `Message:`,
      formData.message || '-',
    ];
    const body = bodyLines.join('\n');

    // Gmail compose URL (opens in browser)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      toEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // mailto fallback
    const mailtoUrl = `mailto:${encodeURIComponent(
      toEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Try to open Gmail compose in new tab. If browser blocks popup, user can click fallback link.
    try {
      const opened = window.open(gmailUrl, '_blank');
      // If window.open returns null (popup blocked) or closed quickly, open mailto as fallback
      if (!opened) {
        // fallback to mailto
        window.location.href = mailtoUrl;
      }
    } catch (err) {
      // on error fallback to mailto
      window.location.href = mailtoUrl;
    }

    // Optionally clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4">
          <span className="text-cyan-400">03.</span>{' '}
          <span className="text-white">Get In</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Let's discuss how we can
          work together to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 text-xl font-mono mb-6">&lt;contact_info&gt;</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm font-mono">
                    "tanyabhatnagar022003@gmail.com"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm font-mono">
                    "+91 9039641171"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm font-mono">
                    "Gwalior, MP"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/tanya-bhatnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
                    title="GitHub"
                  >
                    <Github className="text-cyan-400" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanya-bhatnagar-763726261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="text-cyan-400" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-cyan-400 text-xl font-mono mt-6">&lt;/contact_info&gt;</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 text-xl font-mono mb-6">&lt;send_message&gt;</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-lg px-4 py-3 text-white outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-lg px-4 py-3 text-white outline-none transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-cyan-500 rounded-lg px-4 py-3 text-white outline-none transition-all resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <div className="flex space-x-4">
                {/* Send opens Gmail compose (or mailto fallback) */}
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-all"
                >
                  Send
                </button>

                {/* Direct links for GitHub and LinkedIn */}
                <a
                  href="https://github.com/tanya-bhatnagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tanya-bhatnagar-763726261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </form>

            <p className="text-cyan-400 text-xl font-mono mt-6">&lt;/send_message&gt;</p>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 Tanya Bhatnagar. Built with passion and code.</p>
        </div>
      </div>
    </section>
  );
}
