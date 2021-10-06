function sendMail(mail_from, mail_to, subject, content) {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      key: 'favorites',
      message: {
        from_email: mail_from,
        to: [
          {
            email: mail_to,
            name: 'Dear client!',
            type: 'to',
          },
        ],
        autotext: 'true',
        subject: subject,
        html: content,
      },
    },
  }).done(function (response) {
    return response; // if you're into that sorta thing
  });
}

export default sendMail;
