import React from 'react';

function Tutorias(props){
    const tutorias = props.tutorias;
    const num = props.num;

    return (
        <tr>
          <th scope="row">{num}</th>
          <td>{tutorias.id_tutoria}</td>
          <td>{tutorias.clase}</td>
          <td>{tutorias.hora}</td>
          <td>{tutorias.fecha}</td>         
          <td>{tutorias.docente}</td>
          <td>{tutorias.usuario}</td>         
        </tr>
            
      );
}

export default Tutorias;