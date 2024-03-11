document.addEventListener('DOMContentLoaded', function () {
    const detallesButtons = document.querySelectorAll('.detalles');
    
    detallesButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            
            // Obtener el ID del popup correspondiente al botón
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId); // Seleccionar el popup por su ID
            
            popup.style.display = 'block'; // Mostrar el popup
        });
    });

    // Asignar eventos de clic para cerrar todos los popups
    const closeButton = document.querySelectorAll('.cerrar-popup');
    closeButton.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.popup');
            popup.style.display = 'none'; // Ocultar el popup
        });
    });
});
z