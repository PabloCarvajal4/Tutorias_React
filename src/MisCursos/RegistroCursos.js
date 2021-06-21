import React from 'react';

function Cursos(props){
    const cursos = props.cursos;
    const indice = props.indice;

    return (
        <tr>
          <th scope="row">{indice}</th>
          <td>{cursos.id_cursos}</td>
          <td>{cursos.fecha_Inicio}</td>
          <td>{cursos.fecha_final}</td>
          <td>{cursos.horario}</td>         
          <td>{cursos.curso}</td>
          <td>{cursos.docente}</td>
          <td>{cursos.usuario}</td>         
        </tr>
            
      );
}

export default Cursos;