import React from 'react';
import Tutoria from './tutoria'
function TablaTutorias (props){
    const tutorias = props.tutorias;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id_Tutoría</th>
                        <th scope="col">Clase</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Registrar</th>
                    </tr>
                </thead>
                <tbody>          
                {tutorias.map(
          (tutoria,index)=> <Tutoria indice={index+1} tutorias={tutoria} abrirRegistrarTutoria={props.abrirRegistrarTutoria} />)}
                
                </tbody>
            </table>
    </div>);
}

export default TablaTutorias;