import React from 'react';
import Profesionales from './Profesional'

function TablaProfesionales (props){
    const profesionales = props.profesionales;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre del Docente</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Descripción</th>
                    </tr>
                </thead>
                <tbody>          
                {profesionales.map(
          (docente,index)=> <Profesionales indice={index+1} profesionales={docente} />)}
                <tr>
                    
                </tr>
                </tbody>
            </table>
    </div>);
}

export default TablaProfesionales;