export function card(id, imagePath, title, text, link, button){
    let element = document.getElementById(id);

    let customCard = document.createElement('div');
    customCard.className = "customCard";

    element.appendChild(customCard);

    let imageContainer = document.createElement('div');
    imageContainer.className = "imageContainer"

    customCard.appendChild(imageContainer);

    let img = document.createElement('img');
    img.className = "imageCard";
    img.src = imagePath;

    imageContainer.appendChild(img);
    //
    let div = document.createElement('div');
    customCard.appendChild(div);
    //
    let h5 = document.createElement('h5');
    h5.className = "my-2";
    h5.innerText = title;

    div.appendChild(h5);

    let p = document.createElement('p');
    p.innerText = text;

    div.appendChild(p);

    let a = document.createElement('a');
    a.href = link;
    a.className = "btn btn-secondary mb-2";
    a.target = "_blank";
    a.innerText = button;

    div.appendChild(a);
}

/*
    <div class="customCard">
        <div class="imageContainer">
            <img  alt="..." class="imageCard" src=<%= imagePath %>>
        </div>
        <div >
            <h5  class="my-2"><%= title  %></h5>
            <p> <%= text  %> </p>
            <a href=<%= link %> class="btn btn-secondary mb-2" target="_blank" > <%= button  %></a>
        </div>
    </div>
*/