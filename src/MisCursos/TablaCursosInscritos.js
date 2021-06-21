import React from 'react';
import RegistroCursos from './RegistroCursos'

function TablaCursosInscritos (props){
    const cursos = props.cursos;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id_Curso</th>
                        <th scope="col">Fecha de Inicio</th>
                        <th scope="col">Fecha Final</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Usuario</th>
                    </tr>
                </thead>
                <tbody>          
                {cursos.map(
          (curso,index)=> <RegistroCursos indice={index+1} cursos={curso} />)}
                <tr>
                    
                </tr>
                </tbody>
            </table>
    </div>);
}

export default TablaCursosInscritos;