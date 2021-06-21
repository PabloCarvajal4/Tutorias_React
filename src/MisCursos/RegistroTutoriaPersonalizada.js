import React from 'react';

function RegistroTutoriaPersonalizada(props){
    const personalizada = props.personalizada;
    const num = props.num;

    return (
        <tr>
          <th scope="row">{num}</th>
          <td>{personalizada.id_tutoria}</td>
          <td>{personalizada.usuario}</td>
          <td>{personalizada.nombre}</td>
          <td>{personalizada.apellido}</td>
          <td>{personalizada.clase}</td>         
          <td>{personalizada.fecha}</td>
          <td>{personalizada.hora}</td>  
          <td>{personalizada.docente}</td>        
        </tr>
            
      );
}

export default RegistroTutoriaPersonalizada;