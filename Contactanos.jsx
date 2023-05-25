<script src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script>
  // Configuración de EmailJS
  emailjs.init('TU_USER_ID');

  // Función para enviar el formulario
  function sendForm() {
    event.preventDefault();
    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', '#contact-form')
      .then(function(response) {
        console.log('Formulario enviado con éxito', response.status, response.text);
        alert('Formulario enviado con éxito');
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.error('Error al enviar el formulario', error);
        alert('Error al enviar el formulario');
      });
  }

  // Escucha del evento submit del formulario
  document.getElementById('contact-form').addEventListener('submit', sendForm);
</script>