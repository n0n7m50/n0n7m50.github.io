<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$data = json_decode(file_get_contents('php://input'), true);

if ($data['name']) {
  $name = $data['name'];
  $phone = $data['phone'];
  $message = 'Имя:' . $name . '<br>' . 'Телефон:' . $phone;
  $altMessage = 'Имя:' . $name . '\r\n' . 'Телефон:' . $phone;
} else {
  $phone = $data['phone'];
  $message = 'Телефон:' . $phone;
  $altMessage = 'Телефон:' . $phone;
}

$mail = new PHPMailer(true);

// ----------SMTP----------
// try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->Username   = 'user@example.com';                     //SMTP username
//     $mail->Password   = 'secret';                               //SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
//     $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
//         $mail->setLanguage('ru', 'PHPmailer/language/phpmailer.lang-ru');
//         $mail->CharSet = "utf-8";

//     //Recipients
//     $mail->setFrom('from@example.com', 'Mailer');
//     $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
//     $mail->addReplyTo('info@example.com', 'Information');

//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
// ==========SMTP==========

// ----------MAIL----------
try {
  $mail->setLanguage('ru', 'PHPmailer/language/phpmailer.lang-ru');
  $mail->CharSet = "utf-8";

  //Recipients
  $mail->setFrom('himchistka-ekb@mail.com', 'himchistka-ekb');
  $mail->addAddress('mr.deskot@mail.ru'); //Add a recipient
  $mail->addReplyTo('info@example.com', 'Information');

  //Content
  $mail->isHTML(true);
  $mail->Subject = 'Заявка с himchistka-ekb';
  $mail->Body    = $message;
  $mail->AltBody = $altMessage;

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
// ==========MAIL==========