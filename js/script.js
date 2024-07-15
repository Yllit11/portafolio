
document.getElementById('formcontacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const mensaje = document.getElementById('message').value;

    const mailtoLink = `mailto:programmerssolutions@gmail.com?subject=Contacto de ${nombre}&body=Nombre: ${nombre}%0AEmail: ${email}%0ATeléfono: ${telefono}%0AMensaje: ${mensaje}`;
    window.location.href = mailtoLink;
});

document.getElementById('whatsappButton').addEventListener('click', function() {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const mensaje = document.getElementById('message').value;

    const whatsappMessage = `Hola, mi nombre es ${nombre}. Email: ${email}, Teléfono: ${telefono}, Mensaje: ${mensaje}`;
    const whatsappLink = `https://wa.me/573143746444?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
});
