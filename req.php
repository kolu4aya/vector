<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 

require 'assets/PHPMailer/src/Exception.php';
require 'assets/PHPMailer/src/PHPMailer.php';
require 'assets/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
		$name=$_POST['name'];
	$email=$_POST['email'];
	$topic=$_POST['topic'];
	$message=$_POST['message'];
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.mkvektor55.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'info@mkvektor55.ru';                     //SMTP username
    $mail->Password   = 'sJ5qR7kP3m';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('kolu4aya20111@yandex.ru', 'Mailer');
    $mail->addAddress('kolu4aya20111@yandex.ru', 'Вектор');     //Add a recipient
    $mail->addAddress('kolu4aya20111@yandex.ru');               //Name is optional
    $mail->addReplyTo('kolu4aya20111@yandex.ru', 'Вектор');
    $mail->addCC('kolu4aya20111@yandex.ru');
    $mail->addBCC('kolu4aya20111@yandex.ru');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заявка с сайта';
    $mail->Body    = "<b>Заявка с сайта</b><br>Имя: ".$name.". <br> E-mail: ".$email.". <br> Тема: ".$topic.". <br> Сообщение: ".$message;
    $mail->AltBody = "Заявка с сайта. Имя: ".$name.". E-mail: ".$email.". Тема: ".$topic.". Сообщение: ".$message;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


// if ($_POST['name']){
// 	$name=$_POST['name'];
// 	$email=$_POST['email'];
// 	$topic=$_POST['topic'];
// 	$message=$_POST['message'];
// 	echo mail("kolu4aya201111@yandex.ru", "Заявка с сайта", "Имя: ".$name.". <br> E-mail: ".$email.". <br> Тема: ".$topic.". <br> Сообщение: ".$message ,"From: example2@mail.ru \r\n");
// 	echo "ok";
// }
?> 