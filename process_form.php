<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'h.mohidawan984@gmail.com';

// Set the email subject
$subject = 'New message from website IT_Mind_Labs';

// Build the email content
$body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

// Send the email
mail($to, $subject, $body);

// Redirect the user to a thank-you page
header('Location: thank_you.php');