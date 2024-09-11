const tabs = [
    {id: 'tab1', title: 'index.ejs', isActive: true, content: 
        `
        
        <pre><code class="language-html" ">
    &lt!-- Todas las secciones principales de la página --&gt;
    &lt;body&gt;
        &lt%- include('hero.ejs') %&gt;    
        
        &ltsection id="sumario"&gt;
            &lt%- include('sumario.ejs') %&gt;
        &lt/section&gt;

        &ltsection id="acercaDeMi"&gt;
            &lt%- include('about.ejs') %&gt;
        &lt/section&gt;

        &ltsection id="trabajos"&gt;
            &lt%- include('works.ejs') %&gt;
        &lt/section&gt;

        &ltsection id="contacto"&gt;
            &lt%- include('contacto.ejs') %&gt;
        &lt/section&gt;

        &lt%- include('footer.ejs')  %&gt;
    &ltbody&gt;
          </code></pre>
        `

    },
    {id: 'tab2', title: 'sumario.ejs', isActive: false, content: 
        `  
        
        <pre><code class="language-html">
    &lt!-- Setear los paramatros del "componente" number.ejs --&gt;
    &ltdiv class="container px-4 mt-4"&gt;
        &lth1 class="row px-1"&gt;Proyectos&lt/h1&gt; 
        &ltdiv class=" row row-md-6"&gt;
            &ltdiv class="col-md-6"&gt;
                &lt!-- colocar los parametros --&gt;
                &lt%- include('partials/number.ejs', { 
                    number: 1, 
                    title: "Narrativo Audiovisual", 
                    items: ["Edició Y Animación", "El microbusero 2 (cómic)"] 
                }) %&gt;  
                &lt%- include('partials/number.ejs', { 
                    number: 2,
                    title: "Backend",
                    items: ["Pomocrono API", "Websocket en Godot"] 
                }) %&gt;  
            &lt/div&gt;

            &ltdiv class="col-md-6"&gt; 
                &lt%- include('partials/number.ejs', { 
                    number: 3,
                    title: "FrontEnd",
                    items: ["Landing page CSS + Bootstrap + EJS"] 
                }) %&gt;  
                &lt%- include('partials/number.ejs', { 
                    number: 4,
                    title: "Diseño de Juegos", 
                    items: ["PROTECTOR", "Amor y Pizza"] 
                }) %&gt; 
            &lt/div&gt;
        &lt/div&gt; 
    &lt/div&gt;
            </code></pre> 
        `
    },
    {id: 'tab3', title: 'number.ejs', isActive: false, content:
        `<pre><code class="language-html">
    &lt!-- Componente number.ejs --&gt;
    &ltdiv class="row px-1"&gt;
        &ltdiv class="number"&gt;
            &ltp>&lt%= number %&gt;&lt/p&gt;
        &lt/div&gt;
        
        &ltdiv class="col-10 pb-4"&gt;
            &ltdiv class="category"&gt;
                &ltp>&lt%= title %&gt;&lt/p&gt;
            &lt/div&gt;
            
            &lt% items.forEach(item => { %&gt;
                &ltp class="pt-4"&gt;> &lt%= item %>&lt/p&gt;
            &lt% }); %&gt; 
        &lt/div&gt;
    &lt/div&gt;  
        </code></pre> 
        `
    }
]


export default tabs


