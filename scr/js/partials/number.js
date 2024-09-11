export function setNumber(id, number, link, title, items){
    let div = document.getElementById(id);
    
    let _numberHtml = `<div class="number">
                            <p>${number}</p>
                        </div>`;
    
    let _contentDiv = document.createElement('div');
    _contentDiv.className = "col-10 pb-4"
    
    let aElment = document.createElement('a');
    aElment.href = link;

    let categoryDiv = document.createElement('div');
    categoryDiv.className = "category";

    let pElement = document.createElement('p');
    pElement.textContent = title;

    categoryDiv.appendChild(pElement);
    aElment.appendChild(categoryDiv);
    _contentDiv.appendChild(aElment);
    
    items.forEach(item => {
        let a = document.createElement('a');
        a.href = item.link
        let p = document.createElement('p');
        p.className = 'pt-4';
        p.innerHTML = `> ${item.subTitle}`;
        
        a.appendChild(p);
        _contentDiv.appendChild(a);
    });

    div.innerHTML = _numberHtml;
    div.appendChild(_contentDiv)
};

/*
 <div class="number">
        <p><%= number %></p>
    </div>
    
    <div class="col-10 pb-4">
        <a href=<%= link  %>>
            <div class="category">
                <p><%= title %></p>
            </div>
        </a>
        <% items.forEach(item => { %>
            <a href=<%= item.link %>>
                <p class="pt-4">> <%= item.subTitle %></p>
            </a>
        <% }); %> 
    </div>
*/