import React from 'react';
import RegistroTutoriaPersonalizada from './RegistroTutoriaPersonalizada'

function TablaTutoriasPersonalizadas (props){
    const personalizada = props.personalizada;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Clase</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Docente</th>
                    </tr>
                </thead>
                <tbody>          
                {personalizada.map(
          (curso,index)=> <RegistroTutoriaPersonalizada num={index+1} personalizada={curso} />)}
                <tr>
                    
                </tr>
                </tbody>
            </table>
    </div>);
}

export default TablaTutoriasPersonalizadas;