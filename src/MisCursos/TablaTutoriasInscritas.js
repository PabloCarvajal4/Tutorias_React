import React from 'react';
import RegistroTutorias from './RegistroTutorias'

function TablaTutoriasInscritas (props){
    const tutorias = props.tutorias;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id_Tutoria</th>
                        <th scope="col">Clase</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Usuario</th>
                    </tr>
                </thead>
                <tbody>          
                {tutorias.map(
          (curso,index)=> <RegistroTutorias num={index+1} tutorias={curso} />)}
                <tr>
                    
                </tr>
                </tbody>
            </table>
    </div>);
}

export default TablaTutoriasInscritas;