import { loadHtml } from './loader.js';

import { setNumber } from './partials/number.js';
import { workHeader } from './partials/workHeader.js'
import { card } from './partials/card.js';
import { SetTabController } from './partials/tabController.js';
import { demoReel } from './demoreel.js';
import { gameCards } from './gameCards.js';
import { contactNumber } from './partials/contactNumber.js';
import { copyRight } from './copyRight.js';

//Models db
import section from './models/sumarioDb.js';
import tabs from './models/codeData.js';
import games from './models/gamesDb.js';

loadHtml('./views/hero.html', 'hero')
    .then( ()=> loadHtml('./views/sumario.html', 'sumario'))
    .then( ()=>{
        //content sumario 
        for (let index = 0; index < section.length; index++) {
            const element = section[index];
            setNumber(`sumarioCont${index + 1}`, `${index + 1}`, element.link, element.title, element.content);
        }
    })
    .then( () => loadHtml('./views/audiovisual.html', 'audioVisual'))
    .then( () => {
        workHeader("workHeader1", "Narrativo Audiovisual", "Mi enfoque combina medios digitales con un estilo influido por el “underground”. Aunque trabajo con herramientas modernas, la narración siempre es el corazón de mis proyectos. A través de ilustraciones hechas a mano, busco expresar historias de manera genuina, dejando que la técnica siga la expresión en lugar de dictarla.");
        demoReel();
        card("card1", "./assets/images/microbusero2.png", "El Microbusero 2", "", "https://www.webtoons.com/es/canvas/el-microbusero-2/la-revelaci%C3%B3n/viewer?title_no=742802&episode_no=1", "Webtoon ->");
    })
    .then( () => loadHtml('./views/frontend.html', 'frontEnd'))
    .then( ()=>{
        workHeader("workHeader2", "FrontEnd", "Utilizo herramientas como <i>Node.js, CSS, HTML, Bootstrap</i> y otras librerías para crear páginas estáticas y dinámicas.");
        SetTabController(tabs, 'myTab', 'myTabContent');
    })
    .then( ()=> loadHtml('./views/backend.html', 'backEnd'))
    .then( ()=> {
        workHeader("workHeader3", "BackEnd", "Utilizo diversas tecnologías para explorar y evaluar diferentes opciones. Mis herramientas incluyen <i>C# con ASP.NET y SQL Server</i> para bases de datos, así como Node.js junto con Express y WebSocket.");
        
        card("pomoTempo", "./assets/images/ptschema.png", "PomoTempo API", "Una aplicación de productividad que gestiona tiempos de descanso y trabajo. Utilizando una API en ASP.NET y SQL Server para almacenar datos de PomoTempo. En el lado del cliente, usé el motor GODOT para enviar solicitudes HTTP a la API.", "https://github.com/JesusRoberto64/PomoTempo-app", "Github ->" );
        
        card("wsGodot", "./assets/images/ws-godotimg.png", "WS-GODOT WIP", "Esta es una solución usando websocket para videojuegos que requieren chatrooms antes de las partidas o que incluyen mecánicas de turnos. El backend está creado en Node.js utilizando la librería WebSocket, en combinación con el motor GODOT en el cliente.", "https://github.com/JesusRoberto64/WS-godot", "Github ->" );
    })
    .then( ()=> loadHtml('./views/disenoJuegos.html', 'disenoJuegos'))
    .then( ()=> {
        workHeader("workHeader4", "Diseño de Juegos", "Estos juegos nacieron al experimentar con tecnologías y mecánicas. En algunos me quise centrarme en la narrativa, en otros me centré en aspectos visuales que salieran de lo convencional. Les presento algunos de esos intentos creativos.");
        gameCards("gameCards", games);
    })
    .then( ()=> loadHtml('./views/acercademi.html', 'acercaDeMi'))
    .then( ()=> loadHtml('./views/contacto.html', 'contacto'))
    .then( ()=>{
        contactNumber("contactNumber1",1,"mailto: gamerslive20@gmail.com", "gamerslive20@gmail.com");
        contactNumber("contactNumber2",2,"https://www.youtube.com/@chuyFonseca64", "YouTube");
    })
    .then( ()=> loadHtml('./views/customFooter.html', "customFooter"))
    .then( ()=> {
        copyRight("copyRight");
    })


  
