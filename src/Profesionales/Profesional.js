import React from 'react';

function Profesional(props){
    const profesionales = props.profesionales;
    const indice = props.indice;

    return (
        <tr>
          <th scope="row">{indice}</th>
          <td>{profesionales.nombre}</td>
          <td>{profesionales.carrera}</td>
          <td>{profesionales.edad}</td>
          <td>{profesionales.descripcion}</td>         
        </tr>
            
      );
}

export default Profesional;