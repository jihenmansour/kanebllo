export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

    <h1 style="color: #34d399; margin: 0;">Verify Your Email</h1>

  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #50A8A2;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 7 days for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Happy organizing,<br>Kanban Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>`;

export const WELCOME_EMAIL = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

    <h1 style="color: #34d399; margin: 0;">Welcome To Kanbello!</h1>
    <img src={imageSRC} alt="Welcome to Kanbello" style="max-width: 100%; height: auto; margin-top: 20px;">

  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hi {userName},</p>
    <p>Welcome to Kanbello! We’re thrilled to have you on board and excited to help you stay organized, prioritize your tasks, and achieve your goals with ease.</p>
    <p>With Kanbello, you can effortlessly track your projects and visualize your progress in real-time. Whether you're managing a personal to-do list or working on long-term projects, our intuitive Kanban boards will simplify your workflow and keep everything in check.</p>
    <p>To get started, simply log in and start creating your boards. If you need any assistance, our support team is always here to help!</p>
     <div style="text-align: center; margin: 20px 0;">
      <a href={loginURL} style="background-color: #34d399; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Login</a>
    </div>
   <p>Happy organizing,<br>Kanban Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>`;
