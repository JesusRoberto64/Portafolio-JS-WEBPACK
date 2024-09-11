export function workHeader(id, title, text){
    let div = document.getElementById(id);
    let h1 = document.createElement('h1');
    h1.className = "display-5 fw-bold text-body-emphasis lh-1 mb-3";
    h1.innerText = title;
    
    div.appendChild(h1);

    let p = document.createElement('p');
    p.className = "lead";
    p.innerHTML = text;

    div.appendChild(p);
};
`<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
    <%= title %>
</h1>
<p class="lead"> <%- text  %> </p>`