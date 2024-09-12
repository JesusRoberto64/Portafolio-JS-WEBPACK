/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scr/js/copyRight.js":
/*!*****************************!*\
  !*** ./scr/js/copyRight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyRight: () => (/* binding */ copyRight)\n/* harmony export */ });\nfunction copyRight(id) {\n  var span = document.getElementById(id);\n  var date = new Date();\n  var year = date.getFullYear();\n  span.innerText = \"\".concat(year, \" Todos los derechos reservados.\");\n}\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/copyRight.js?");

/***/ }),

/***/ "./scr/js/demoreel.js":
/*!****************************!*\
  !*** ./scr/js/demoreel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   demoReel: () => (/* binding */ demoReel)\n/* harmony export */ });\nfunction demoReel() {\n  var links = [\"https://www.youtube.com/watch?v=41ToRUMsaD0\", \"https://www.youtube.com/watch?v=gkT7NEdm38Y\", \"https://www.youtube.com/watch?v=c_y6-7tqaz0\", \"https://www.youtube.com/shorts/Rk7KQpDR-I0\"];\n  //bitacora, demoreel, commodore,\n  //\"assets/narrativo0.png\"\n  var demoreel = document.getElementById('demoreel');\n  for (var i = 0; i < links.length; i++) {\n    var div = document.createElement('div');\n    div.className = \"imageDock mb-2 me-lg-2\";\n    div.style = \"grid-column: 2;\";\n    demoreel.appendChild(div);\n    var a = document.createElement('a');\n    a.href = links[i];\n    a.className = \"imageIn\";\n    a.target = \"_blank\";\n    div.appendChild(a);\n    var img = document.createElement('img');\n    img.src = \"./assets/images/narrativo\".concat(i, \".png\");\n    a.appendChild(img);\n  }\n}\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/demoreel.js?");

/***/ }),

/***/ "./scr/js/gameCards.js":
/*!*****************************!*\
  !*** ./scr/js/gameCards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameCards: () => (/* binding */ gameCards)\n/* harmony export */ });\nfunction gameCards(id, gamesArr) {\n  var div = document.getElementById(id);\n  gamesArr.forEach(function (game) {\n    var divCol = document.createElement('div');\n    divCol.id = game.id;\n    divCol.className = \"col-md-6\";\n    div.appendChild(divCol);\n    var h2 = document.createElement('h2');\n    h2.innerText = game.titulo;\n    divCol.appendChild(h2);\n    var divCard = document.createElement('div');\n    divCard.className = \"card\";\n    divCard.style = \"width: 90%; height: 90%\";\n    divCol.appendChild(divCard);\n    var img = document.createElement('img');\n    img.src = \"../\".concat(game.img);\n    img.className = \"card-img-top\";\n    img.style = \"background-color: black;\";\n    divCard.appendChild(img);\n    var divCardBody = document.createElement('div');\n    divCardBody.className = \"card-body\";\n    divCard.appendChild(divCardBody);\n    var p = document.createElement('p');\n    p.className = \"card-text\";\n    p.innerText = game.texto;\n    divCardBody.appendChild(p);\n    var a = document.createElement('a');\n    a.className = \"btn btn-secondary\";\n    a.href = game.url;\n    a.target = \"_blank\";\n    a.innerText = \"Itch.io ->\";\n    divCardBody.appendChild(a);\n  });\n}\n;\n\n/*\r\n<div class=\" id=<%= games[i].id  %> col-md-6 \" >\r\n    <h2> <%= games[i].titulo %></h2>\r\n    <div class=\"card \" style=\"width: 90%; height: 90%;\" >\r\n        <img src=<%= games[i].img %> class=\"card-img-top\" alt=\"...\" style=\"background-color: black;\" >\r\n        <div class=\"card-body\">\r\n            <p class=\"card-text\" ><%= games[i].texto %></p>\r\n            <a class=\"btn btn-secondary\" href=<%= games[i].url %> target=\"_blank\" >Itch.io -></a>                    \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n*/\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/gameCards.js?");

/***/ }),

/***/ "./scr/js/loader.js":
/*!**************************!*\
  !*** ./scr/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHtml: () => (/* binding */ loadHtml)\n/* harmony export */ });\nfunction loadHtml(filePath, containterId) {\n  return new Promise(function (resolve, reject) {\n    fetch(filePath).then(function (response) {\n      if (!response.ok) {\n        throw new Error(\"HTTP error! Status: \".concat(response.status));\n      }\n      ;\n      return response.text();\n    }).then(function (data) {\n      document.getElementById(containterId).innerHTML = data;\n      resolve();\n    })[\"catch\"](function (error) {\n      return reject(error);\n    });\n  });\n}\n;\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/loader.js?");

/***/ }),

/***/ "./scr/js/main.js":
/*!************************!*\
  !*** ./scr/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ \"./scr/js/loader.js\");\n/* harmony import */ var _partials_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/number.js */ \"./scr/js/partials/number.js\");\n/* harmony import */ var _partials_workHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/workHeader.js */ \"./scr/js/partials/workHeader.js\");\n/* harmony import */ var _partials_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/card.js */ \"./scr/js/partials/card.js\");\n/* harmony import */ var _partials_tabController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/tabController.js */ \"./scr/js/partials/tabController.js\");\n/* harmony import */ var _demoreel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demoreel.js */ \"./scr/js/demoreel.js\");\n/* harmony import */ var _gameCards_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameCards.js */ \"./scr/js/gameCards.js\");\n/* harmony import */ var _partials_contactNumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/contactNumber.js */ \"./scr/js/partials/contactNumber.js\");\n/* harmony import */ var _copyRight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copyRight.js */ \"./scr/js/copyRight.js\");\n/* harmony import */ var _models_sumarioDb_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/sumarioDb.js */ \"./scr/js/models/sumarioDb.js\");\n/* harmony import */ var _models_codeData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/codeData.js */ \"./scr/js/models/codeData.js\");\n/* harmony import */ var _models_gamesDb_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/gamesDb.js */ \"./scr/js/models/gamesDb.js\");\n\n\n\n\n\n\n\n\n\n\n//Models db\n\n\n\n(0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/hero.html', 'hero').then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/sumario.html', 'sumario');\n}).then(function () {\n  //content sumario \n  for (var index = 0; index < _models_sumarioDb_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].length; index++) {\n    var element = _models_sumarioDb_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"][index];\n    (0,_partials_number_js__WEBPACK_IMPORTED_MODULE_1__.setNumber)(\"sumarioCont\".concat(index + 1), \"\".concat(index + 1), element.link, element.title, element.content);\n  }\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/audiovisual.html', 'audioVisual');\n}).then(function () {\n  (0,_partials_workHeader_js__WEBPACK_IMPORTED_MODULE_2__.workHeader)(\"workHeader1\", \"Narrativo Audiovisual\", \"Mi enfoque combina medios digitales con un estilo influido por el “underground”. Aunque trabajo con herramientas modernas, la narración siempre es el corazón de mis proyectos. A través de ilustraciones hechas a mano, busco expresar historias de manera genuina, dejando que la técnica siga la expresión en lugar de dictarla.\");\n  (0,_demoreel_js__WEBPACK_IMPORTED_MODULE_5__.demoReel)();\n  (0,_partials_card_js__WEBPACK_IMPORTED_MODULE_3__.card)(\"card1\", \"./assets/images/microbusero2.png\", \"El Microbusero 2\", \"\", \"https://www.webtoons.com/es/canvas/el-microbusero-2/la-revelaci%C3%B3n/viewer?title_no=742802&episode_no=1\", \"Webtoon ->\");\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/frontend.html', 'frontEnd');\n}).then(function () {\n  (0,_partials_workHeader_js__WEBPACK_IMPORTED_MODULE_2__.workHeader)(\"workHeader2\", \"FrontEnd\", \"Utilizo herramientas como <i>Node.js, CSS, HTML, Bootstrap</i> y otras librerías para crear páginas estáticas y dinámicas.\");\n  (0,_partials_tabController_js__WEBPACK_IMPORTED_MODULE_4__.SetTabController)(_models_codeData_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"], 'myTab', 'myTabContent');\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/backend.html', 'backEnd');\n}).then(function () {\n  (0,_partials_workHeader_js__WEBPACK_IMPORTED_MODULE_2__.workHeader)(\"workHeader3\", \"BackEnd\", \"Utilizo diversas tecnologías para explorar y evaluar diferentes opciones. Mis herramientas incluyen <i>C# con ASP.NET y SQL Server</i> para bases de datos, así como Node.js junto con Express y WebSocket.\");\n  (0,_partials_card_js__WEBPACK_IMPORTED_MODULE_3__.card)(\"pomoTempo\", \"./assets/images/ptschema.png\", \"PomoTempo API\", \"Una aplicación de productividad que gestiona tiempos de descanso y trabajo. Utilizando una API en ASP.NET y SQL Server para almacenar datos de PomoTempo. En el lado del cliente, usé el motor GODOT para enviar solicitudes HTTP a la API.\", \"https://github.com/JesusRoberto64/PomoTempo-app\", \"Github ->\");\n  (0,_partials_card_js__WEBPACK_IMPORTED_MODULE_3__.card)(\"wsGodot\", \"./assets/images/ws-godotimg.png\", \"WS-GODOT WIP\", \"Esta es una solución usando websocket para videojuegos que requieren chatrooms antes de las partidas o que incluyen mecánicas de turnos. El backend está creado en Node.js utilizando la librería WebSocket, en combinación con el motor GODOT en el cliente.\", \"https://github.com/JesusRoberto64/WS-godot\", \"Github ->\");\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/disenoJuegos.html', 'disenoJuegos');\n}).then(function () {\n  (0,_partials_workHeader_js__WEBPACK_IMPORTED_MODULE_2__.workHeader)(\"workHeader4\", \"Diseño de Juegos\", \"Estos juegos nacieron al experimentar con tecnologías y mecánicas. En algunos me quise centrarme en la narrativa, en otros me centré en aspectos visuales que salieran de lo convencional. Les presento algunos de esos intentos creativos.\");\n  (0,_gameCards_js__WEBPACK_IMPORTED_MODULE_6__.gameCards)(\"gameCards\", _models_gamesDb_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/acercademi.html', 'acercaDeMi');\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/contacto.html', 'contacto');\n}).then(function () {\n  (0,_partials_contactNumber_js__WEBPACK_IMPORTED_MODULE_7__.contactNumber)(\"contactNumber1\", 1, \"mailto: gamerslive20@gmail.com\", \"gamerslive20@gmail.com\");\n  (0,_partials_contactNumber_js__WEBPACK_IMPORTED_MODULE_7__.contactNumber)(\"contactNumber2\", 2, \"https://www.youtube.com/@chuyFonseca64\", \"YouTube\");\n}).then(function () {\n  return (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.loadHtml)('./views/customFooter.html', \"customFooter\");\n}).then(function () {\n  (0,_copyRight_js__WEBPACK_IMPORTED_MODULE_8__.copyRight)(\"copyRight\");\n});\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/main.js?");

/***/ }),

/***/ "./scr/js/models/codeData.js":
/*!***********************************!*\
  !*** ./scr/js/models/codeData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = [{\n  id: 'tab1',\n  title: 'index.ejs',\n  isActive: true,\n  content: \"\\n        \\n        <pre><code class=\\\"language-html\\\" \\\">\\n    &lt!-- Todas las secciones principales de la p\\xE1gina --&gt;\\n    &lt;body&gt;\\n        &lt%- include('hero.ejs') %&gt;    \\n        \\n        &ltsection id=\\\"sumario\\\"&gt;\\n            &lt%- include('sumario.ejs') %&gt;\\n        &lt/section&gt;\\n\\n        &ltsection id=\\\"acercaDeMi\\\"&gt;\\n            &lt%- include('about.ejs') %&gt;\\n        &lt/section&gt;\\n\\n        &ltsection id=\\\"trabajos\\\"&gt;\\n            &lt%- include('works.ejs') %&gt;\\n        &lt/section&gt;\\n\\n        &ltsection id=\\\"contacto\\\"&gt;\\n            &lt%- include('contacto.ejs') %&gt;\\n        &lt/section&gt;\\n\\n        &lt%- include('footer.ejs')  %&gt;\\n    &ltbody&gt;\\n          </code></pre>\\n        \"\n}, {\n  id: 'tab2',\n  title: 'sumario.ejs',\n  isActive: false,\n  content: \"  \\n        \\n        <pre><code class=\\\"language-html\\\">\\n    &lt!-- Setear los paramatros del \\\"componente\\\" number.ejs --&gt;\\n    &ltdiv class=\\\"container px-4 mt-4\\\"&gt;\\n        &lth1 class=\\\"row px-1\\\"&gt;Proyectos&lt/h1&gt; \\n        &ltdiv class=\\\" row row-md-6\\\"&gt;\\n            &ltdiv class=\\\"col-md-6\\\"&gt;\\n                &lt!-- colocar los parametros --&gt;\\n                &lt%- include('partials/number.ejs', { \\n                    number: 1, \\n                    title: \\\"Narrativo Audiovisual\\\", \\n                    items: [\\\"Edici\\xF3 Y Animaci\\xF3n\\\", \\\"El microbusero 2 (c\\xF3mic)\\\"] \\n                }) %&gt;  \\n                &lt%- include('partials/number.ejs', { \\n                    number: 2,\\n                    title: \\\"Backend\\\",\\n                    items: [\\\"Pomocrono API\\\", \\\"Websocket en Godot\\\"] \\n                }) %&gt;  \\n            &lt/div&gt;\\n\\n            &ltdiv class=\\\"col-md-6\\\"&gt; \\n                &lt%- include('partials/number.ejs', { \\n                    number: 3,\\n                    title: \\\"FrontEnd\\\",\\n                    items: [\\\"Landing page CSS + Bootstrap + EJS\\\"] \\n                }) %&gt;  \\n                &lt%- include('partials/number.ejs', { \\n                    number: 4,\\n                    title: \\\"Dise\\xF1o de Juegos\\\", \\n                    items: [\\\"PROTECTOR\\\", \\\"Amor y Pizza\\\"] \\n                }) %&gt; \\n            &lt/div&gt;\\n        &lt/div&gt; \\n    &lt/div&gt;\\n            </code></pre> \\n        \"\n}, {\n  id: 'tab3',\n  title: 'number.ejs',\n  isActive: false,\n  content: \"<pre><code class=\\\"language-html\\\">\\n    &lt!-- Componente number.ejs --&gt;\\n    &ltdiv class=\\\"row px-1\\\"&gt;\\n        &ltdiv class=\\\"number\\\"&gt;\\n            &ltp>&lt%= number %&gt;&lt/p&gt;\\n        &lt/div&gt;\\n        \\n        &ltdiv class=\\\"col-10 pb-4\\\"&gt;\\n            &ltdiv class=\\\"category\\\"&gt;\\n                &ltp>&lt%= title %&gt;&lt/p&gt;\\n            &lt/div&gt;\\n            \\n            &lt% items.forEach(item => { %&gt;\\n                &ltp class=\\\"pt-4\\\"&gt;> &lt%= item %>&lt/p&gt;\\n            &lt% }); %&gt; \\n        &lt/div&gt;\\n    &lt/div&gt;  \\n        </code></pre> \\n        \"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/models/codeData.js?");

/***/ }),

/***/ "./scr/js/models/gamesDb.js":
/*!**********************************!*\
  !*** ./scr/js/models/gamesDb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar games = [{\n  titulo: \"Protector\",\n  texto: \"Protégete mientras proteges a los demás. Protector un juego arcade inspirado en los juegos LCD de antaño.\",\n  url: \"https://sconin.itch.io/protector\",\n  img: \"assets/images/PROTECTOR_GAMEPLAY_SCREEN.png\",\n  id: \"protector\"\n}, {\n  titulo: \"Sentaitir Defender\",\n  texto: \"Ramiro es un oficinista que intenta sobrevivir, pero su vida cambiara en un santiamén.\",\n  url: \"https://sconin.itch.io/sentaitir-defender\",\n  img: \"assets/images/sentaitir.png\",\n  id: \"sentaitir\"\n}, {\n  titulo: \"Plank Asteros\",\n  texto: \"WIP tomas el control de un Plankton en un mundo deslizante.\",\n  url: \"https://sconin.itch.io/plank-asteros\",\n  img: \"assets/images/plnkasteros.png\",\n  id: \"plank\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (games);\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/models/gamesDb.js?");

/***/ }),

/***/ "./scr/js/models/sumarioDb.js":
/*!************************************!*\
  !*** ./scr/js/models/sumarioDb.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar section = [{\n  title: \"Narrativo Audiovisual\",\n  link: \"#audioVisual\",\n  content: [{\n    subTitle: \"Edición Y Animación\",\n    link: \"#edicionAnimacion\"\n  }, {\n    subTitle: \"El microbusero 2 (cómic)\",\n    link: \"#elMicro\"\n  }]\n}, {\n  title: \"FrontEnd\",\n  link: \"#frontEnd\",\n  content: [{\n    subTitle: \"Landing page CSS + Bootstrap + EJS\",\n    link: \"#cssBootEjs\"\n  }]\n}, {\n  title: \"Backend\",\n  link: \"#backend\",\n  content: [{\n    subTitle: \"Pomocrono API\",\n    link: \"#pomoTempo\"\n  }, {\n    subTitle: \"Websocket en Godot\",\n    link: \"#wsGodot\"\n  }]\n}, {\n  title: \"Diseño de Juegos\",\n  link: \"#disenoJuegos\",\n  content: [{\n    subTitle: \"Protector\",\n    link: \"#protector\"\n  }, {\n    subTitle: \"Sentaitir Defender\",\n    link: \"#sentaitir\"\n  }, {\n    subTitle: \"Plank Asteros\",\n    link: \"#plank\"\n  }]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (section);\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/models/sumarioDb.js?");

/***/ }),

/***/ "./scr/js/partials/card.js":
/*!*********************************!*\
  !*** ./scr/js/partials/card.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   card: () => (/* binding */ card)\n/* harmony export */ });\nfunction card(id, imagePath, title, text, link, button) {\n  var element = document.getElementById(id);\n  var customCard = document.createElement('div');\n  customCard.className = \"customCard\";\n  element.appendChild(customCard);\n  var imageContainer = document.createElement('div');\n  imageContainer.className = \"imageContainer\";\n  customCard.appendChild(imageContainer);\n  var img = document.createElement('img');\n  img.className = \"imageCard\";\n  img.src = imagePath;\n  imageContainer.appendChild(img);\n  //\n  var div = document.createElement('div');\n  customCard.appendChild(div);\n  //\n  var h5 = document.createElement('h5');\n  h5.className = \"my-2\";\n  h5.innerText = title;\n  div.appendChild(h5);\n  var p = document.createElement('p');\n  p.innerText = text;\n  div.appendChild(p);\n  var a = document.createElement('a');\n  a.href = link;\n  a.className = \"btn btn-secondary mb-2\";\n  a.target = \"_blank\";\n  a.innerText = button;\n  div.appendChild(a);\n}\n\n/*\r\n    <div class=\"customCard\">\r\n        <div class=\"imageContainer\">\r\n            <img  alt=\"...\" class=\"imageCard\" src=<%= imagePath %>>\r\n        </div>\r\n        <div >\r\n            <h5  class=\"my-2\"><%= title  %></h5>\r\n            <p> <%= text  %> </p>\r\n            <a href=<%= link %> class=\"btn btn-secondary mb-2\" target=\"_blank\" > <%= button  %></a>\r\n        </div>\r\n    </div>\r\n*/\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/partials/card.js?");

/***/ }),

/***/ "./scr/js/partials/contactNumber.js":
/*!******************************************!*\
  !*** ./scr/js/partials/contactNumber.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactNumber: () => (/* binding */ contactNumber)\n/* harmony export */ });\nfunction contactNumber(id, number, link, contact) {\n  var div = document.getElementById(id);\n  var divNumber = document.createElement('div');\n  divNumber.className = \"number\";\n  div.appendChild(divNumber);\n  var p = document.createElement('p');\n  p.innerText = number;\n  divNumber.appendChild(p);\n  var divCol = document.createElement('div');\n  divCol.className = \"col-10\";\n  div.appendChild(divCol);\n  var divLink = document.createElement('div');\n  divLink.className = \"contactLink\";\n  divCol.appendChild(divLink);\n  var a = document.createElement('a');\n  a.href = link;\n  a.target = \"_blank\";\n  divLink.appendChild(a);\n  var pLink = document.createElement('p');\n  pLink.innerText = contact;\n  a.appendChild(pLink);\n}\n;\n\n/*\r\n<div class=\"number\">\r\n    <p><%= number %></p>\r\n</div>\r\n<div class=\"col-10\">\r\n    <div class=\"contactLink\">\r\n        <a href=<%= link %> target=\"_blank\">\r\n            <p><%= contact  %></p>\r\n        </a>\r\n    </div>\r\n</div>\r\n*/\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/partials/contactNumber.js?");

/***/ }),

/***/ "./scr/js/partials/number.js":
/*!***********************************!*\
  !*** ./scr/js/partials/number.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setNumber: () => (/* binding */ setNumber)\n/* harmony export */ });\nfunction setNumber(id, number, link, title, items) {\n  var div = document.getElementById(id);\n  var _numberHtml = \"<div class=\\\"number\\\">\\n                            <p>\".concat(number, \"</p>\\n                        </div>\");\n  var _contentDiv = document.createElement('div');\n  _contentDiv.className = \"col-10 pb-4\";\n  var aElment = document.createElement('a');\n  aElment.href = link;\n  var categoryDiv = document.createElement('div');\n  categoryDiv.className = \"category\";\n  var pElement = document.createElement('p');\n  pElement.textContent = title;\n  categoryDiv.appendChild(pElement);\n  aElment.appendChild(categoryDiv);\n  _contentDiv.appendChild(aElment);\n  items.forEach(function (item) {\n    var a = document.createElement('a');\n    a.href = item.link;\n    var p = document.createElement('p');\n    p.className = 'pt-4';\n    p.innerHTML = \"> \".concat(item.subTitle);\n    a.appendChild(p);\n    _contentDiv.appendChild(a);\n  });\n  div.innerHTML = _numberHtml;\n  div.appendChild(_contentDiv);\n}\n;\n\n/*\r\n <div class=\"number\">\r\n        <p><%= number %></p>\r\n    </div>\r\n    \r\n    <div class=\"col-10 pb-4\">\r\n        <a href=<%= link  %>>\r\n            <div class=\"category\">\r\n                <p><%= title %></p>\r\n            </div>\r\n        </a>\r\n        <% items.forEach(item => { %>\r\n            <a href=<%= item.link %>>\r\n                <p class=\"pt-4\">> <%= item.subTitle %></p>\r\n            </a>\r\n        <% }); %> \r\n    </div>\r\n*/\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/partials/number.js?");

/***/ }),

/***/ "./scr/js/partials/tabController.js":
/*!******************************************!*\
  !*** ./scr/js/partials/tabController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetTabController: () => (/* binding */ SetTabController)\n/* harmony export */ });\n//TabController.js\n\nfunction SetTabController(data, tabListId, tabContentId) {\n  var tabList = document.getElementById(tabListId);\n  var tabContent = document.getElementById(tabContentId);\n  data.forEach(function (tab, index) {\n    //crear pestaña\n    var tabItem = document.createElement('li');\n    tabItem.className = 'nav-item';\n    var tabLink = document.createElement('a');\n    tabLink.className = tab.isActive ? 'nav-link active' : 'nav-link';\n    tabLink.id = \"\".concat(tab.id, \"-tab\");\n    tabLink.textContent = tab.title;\n    tabLink.setAttribute('role', 'tab');\n    tabLink.addEventListener('click', function () {\n      return activeTab(index, data);\n    });\n    tabItem.appendChild(tabLink);\n    tabList.appendChild(tabItem);\n\n    //contenido de pestañas\n    var tabPane = document.createElement('div');\n    tabPane.className = tab.isActive ? 'tab-pane fade show active' : 'tab-pane fade';\n    tabPane.id = tab.id;\n    tabPane.setAttribute('role', 'tabpanel');\n    tabPane.setAttribute('aria-labelledby', \"\".concat(tab.id, \"-tab\"));\n    tabPane.innerHTML = tab.content;\n    tabContent.appendChild(tabPane);\n    Prism.highlightAllUnder(tabPane);\n  });\n}\nfunction activeTab(index, db) {\n  deactivateTabs(db);\n  var selecteTab = db[index];\n  var selecteTabLink = document.getElementById(\"\".concat(selecteTab.id, \"-tab\"));\n  selecteTabLink.className = 'nav-link active';\n  document.getElementById(selecteTab.id).className = 'tab-pane fade show active';\n}\nfunction deactivateTabs(db) {\n  db.forEach(function (tab) {\n    document.getElementById(\"\".concat(tab.id, \"-tab\")).className = 'nav-link';\n    document.getElementById(tab.id).className = 'tab-pane fade';\n  });\n}\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/partials/tabController.js?");

/***/ }),

/***/ "./scr/js/partials/workHeader.js":
/*!***************************************!*\
  !*** ./scr/js/partials/workHeader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   workHeader: () => (/* binding */ workHeader)\n/* harmony export */ });\nfunction workHeader(id, title, text) {\n  var div = document.getElementById(id);\n  var h1 = document.createElement('h1');\n  h1.className = \"display-5 fw-bold text-body-emphasis lh-1 mb-3\";\n  h1.innerText = title;\n  div.appendChild(h1);\n  var p = document.createElement('p');\n  p.className = \"lead\";\n  p.innerHTML = text;\n  div.appendChild(p);\n}\n;\n\"<h1 class=\\\"display-5 fw-bold text-body-emphasis lh-1 mb-3\\\">\\n    <%= title %>\\n</h1>\\n<p class=\\\"lead\\\"> <%- text  %> </p>\";\n\n//# sourceURL=webpack://portafolio-js-webpack/./scr/js/partials/workHeader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scr/js/main.js");
/******/ 	
/******/ })()
;