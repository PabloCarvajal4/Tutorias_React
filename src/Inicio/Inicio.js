import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';


function Inicio(props){
 
    return <div >
<div> 
<header>
		<div class="flex-container">
			<div class="logo">Tutorías y Cursos</div>		
			<nav className="">
 
      <Link  to="/Inicio">Inicio</Link>
				<Link  to="/Tutorias">Tutorías</Link>
				<Link  to="/Cursos">Cursos Disponibles</Link>
				<Link  to="/Profesionales">Profesionales</Link>
        <Link class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /*to="/Inscrito"*/>Mis Tutorías</Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/TutoriasInscritas">Tutorias</Link>
          <Link class="dropdown-item" to="/Inscrito">Cursos</Link>
          <Link class="dropdown-item" to="/PersonalizadasInscritas">Tutorias Personalizadas</Link>
        </div>
        
      </Link>    
        <Link  to="/Contacto">Contacto</Link> 
			</nav>
      
		</div>
	</header>

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  
</div>
<hr/>
<br/>

<div class="text-center">
  <h2 >¿Quienes Somos?</h2>
  
  <div class="row">
      <div class="col-sm-12 col-lg-4">
      <img class="CentrarImagen" src="/img/unnamed.png" width="200px" height="200px" alt="Microsoft"/>
      </div>
 
<div class="col-sm-12 col-lg-8"> 
  <p className="texto">Somos una empresa que tiene afilaciones con docentes certificados para dar una clase. Nuestro objetivo es brindar soluciones puntuales y a la medida dentro del campo educativo, te ofrecemos tutorias 100% personalizadas o podrías acoplarte en alguno de nuestros horarios predeterminados, también contamos/ofrecemos distintos cursos a su totalidad. Contamos con profesionales especializados en diferentes campos de la educación y tecnología, todo con el fin de atender tus necesidades más específicas.
   </p> <br/>  <br/> 
  </div>
  </div>
  </div>

<div>
  <div> 
  <br/>
  <br/>  
  <div class="container">
    <hr/>
  <div class="card-deck">
    <div class="card">
      <img src="img/online_edu.jpg" class="card-img-top" width="250px" height="250px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" className="texto">Nuestros Servicios</h5>
<br/>     
          <li> Tutorías</li>
          <li> Cursos Online </li>             
      </div>

      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    <div class="card">
      <img src="https://image.freepik.com/vector-gratis/lider-empresarial-pie-flecha-sosteniendo-bandera-ilustracion-vectorial-plana-gente-dibujos-animados-entrenando-haciendo-plan-negocios-concepto-liderazgo-victoria-desafio_74855-9812.jpg" class="card-img-top" alt="..." width="250px" height="250px"/>
      <div class="card-body">
        <h5 class="card-title">Objetivo</h5>
        <p class="card-text">Te impulsamos a lograr tus metas y así puedas tener un concepto más amplio en distintas facetas educativas que podrás emplear en el mundo laboral.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    <div class="card">
      <img src="img/programacion.jpg" class="card-img-top" alt="..." width="250px" height="250px"/>
      <div class="card-body">
        <h5 class="card-title" >Recuerda</h5>
        <p class="card-text">“Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”.</p><h4 >-Albert Einstein.</h4>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
  </div>
  <hr/>
</div>
</div>
<hr/>
</div>
<br/>

    <div className="text-center">
    <footer >
 <h7 >Elaborado por el Grupo#1. Programación IV 2021 <i class="bi bi-facebook footer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg></i><i class="bi bi-twitter footer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg></i><i class="bi bi-google footer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg></i></h7> 
      </footer>
    </div>
    </div>;
}
export default Inicio ;