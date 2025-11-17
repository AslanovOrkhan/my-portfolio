const nodemailer = require('nodemailer');

// Email göndərmə funksiyası
exports.sendEmail = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation - hamısı doldurulubmu?
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Zəhmət olmasa bütün xanaları doldurun.'
      });
    }

    // Email konfiqurasiyası
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email məzmunu
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Özünə göndərirsən
      replyTo: email, // Cavab verəndə müştərinin emaili açılır
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>Yeni mesaj portfolio-dan 📧</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Göstərilməyib'}</p>
        <p><strong>Mövzu:</strong> ${subject}</p>
        <h3>Mesaj:</h3>
        <p>${message}</p>
      `
    };

    // Email göndər
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Mesajınız uğurla göndərildi! 🚀'
    });

  } catch (error) {
    console.error('Email göndərmə xətası:', error);
    res.status(500).json({
      success: false,
      message: 'Mesaj göndərilərkən xəta baş verdi.'
    });
  }
};