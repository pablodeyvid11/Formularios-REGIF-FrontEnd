import React from 'react';
import Swal from 'sweetalert2';

function handleClickContato() {
    Swal.fire({
        title: 'Entre em contato conosco',
        icon: 'info',
        html:
            'Email: <a target="_blank" href="mailto:regif@escolar.ifrn.edu.br">regif@escolar.ifrn.edu.br</a><br/>' +
            'Instagram: <a target="_blank" href="http://www.instagram.com/regif_ifrn">@regif_ifrn</a>',
        focusConfirm: false,
        confirmButtonText: 'Ótimo!'
    })
}

export default handleClickContato;