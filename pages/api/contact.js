import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email, message, name } = req.body;
  const msg = {
    to: 'keimaxezi@gmail.com',
    from: 'keimaxezi@gmail.com',
    subject: 'A New Message From Contact Form! ' + email,
    name,
    text: `
        Email: ${email}
        Name: ${name}
        Message: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: `Email has been sent` });
  } catch (error) {
    console.log(error.response.body.errors);
    res.status(500).json({ error: 'Error sending email' });
  }
};
