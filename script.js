fetch('http://tmp.enred.cl/kc/rest/get_usuarios.php')
    .then(response => response.json())
    .then(data => {
        // Obtener el div donde se mostrarán los datos
        const datosUsuarioDiv = document.getElementById('datosUsuario');

        // Verificar si la respuesta fue exitosa
        if (data.length > 0) {
            // Crear una cadena HTML con los datos de los usuarios
            let usuariosHTML = '<h2>Datos de los Usuarios</h2>';
            data.forEach(usuario => {
                usuariosHTML += `
                    <div>
                        <h3>Datos del Usuario</h3>
                        <p><strong>RUT:</strong> ${usuario.rut_us}</p>
                        <p><strong>DV:</strong> ${usuario.dv_us}</p>
                        <p><strong>Nombre:</strong> ${usuario.nom_us}</p>
                        <p><strong>Apellido Paterno:</strong> ${usuario.ap_pat_us}</p>
                        <p><strong>Apellido Materno:</strong> ${usuario.ap_mat_us}</p>
                        <p><strong>Dirección:</strong> ${usuario.dir_us}</p>
                        <p><strong>Teléfono:</strong> ${usuario.tel_us}</p>
                        <p><strong>Correo Electrónico:</strong> ${usuario.mail_us}</p>
                    </div>
                `;
            });

            // Actualizar el contenido del div con los datos de los usuarios
            datosUsuarioDiv.innerHTML = usuariosHTML;
        } else {
            // Mostrar un mensaje de error si no se encontró ningún usuario
            datosUsuarioDiv.innerHTML = '<p>No se encontraron usuarios.</p>';
        }
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });
