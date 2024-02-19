fetch('http://tmp.enred.cl/var/www/html/kc/rest/get_user_id.php?nombreFuncion=buscarUsuarioPorRut&rut_us=12345678')
            .then(response => response.json())
            .then(data => {
                // Obtener el div donde se mostrarán los datos
                const datosUsuarioDiv = document.getElementById('datosUsuario');

                // Verificar si la respuesta fue exitosa
                if (data.success) {
                    // Crear una cadena HTML con los datos del usuario
                    const usuarioHTML = `
                        <h2>Datos del Usuario</h2>
                        <p><strong>RUT:</strong> ${data.data.rut_us}</p>
                        <p><strong>DV:</strong> ${data.data.dv_us}</p>
                        <p><strong>Nombre:</strong> ${data.data.nom_us}</p>
                        <p><strong>Apellido Paterno:</strong> ${data.data.ap_pat_us}</p>
                        <p><strong>Apellido Materno:</strong> ${data.data.ap_mat_us}</p>
                        <p><strong>Dirección:</strong> ${data.data.dir_us}</p>
                        <p><strong>Teléfono:</strong> ${data.data.tel_us}</p>
                        <p><strong>Correo Electrónico:</strong> ${data.data.mail_us}</p>
                    `;

                    // Actualizar el contenido del div con los datos del usuario
                    datosUsuarioDiv.innerHTML = usuarioHTML;
                } else {
                    // Mostrar un mensaje de error si no se encontró ningún usuario
                    datosUsuarioDiv.innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });