export function gameCards(id, gamesArr){
    let div = document.getElementById(id);
    
    gamesArr.forEach(game => {
        let divCol = document.createElement('div');
        divCol.id = game.id;
        divCol.className = "col-md-6";
        div.appendChild(divCol);
    
        let h2 = document.createElement('h2');
        h2.innerText = game.titulo;
        divCol.appendChild(h2);

        let divCard = document.createElement('div');
        divCard.className = "card";
        divCard.style = "width: 90%; height: 90%";
        divCol.appendChild(divCard);

        let img = document.createElement('img');
        img.src = `../${game.img}`;
        img.className = "card-img-top";
        img.style = "background-color: black;";
        divCard.appendChild(img);

        let divCardBody = document.createElement('div');
        divCardBody.className = "card-body";
        divCard.appendChild(divCardBody);

        let p = document.createElement('p');
        p.className = "card-text"
        p.innerText = game.texto;
        divCardBody.appendChild(p);

        let a = document.createElement('a');
        a.className = "btn btn-secondary";
        a.href = game.url;
        a.target = "_blank";
        a.innerText = "Itch.io ->"
        divCardBody.appendChild(a);

    });
};

/*
<div class=" id=<%= games[i].id  %> col-md-6 " >
    <h2> <%= games[i].titulo %></h2>
    <div class="card " style="width: 90%; height: 90%;" >
        <img src=<%= games[i].img %> class="card-img-top" alt="..." style="background-color: black;" >
        <div class="card-body">
            <p class="card-text" ><%= games[i].texto %></p>
            <a class="btn btn-secondary" href=<%= games[i].url %> target="_blank" >Itch.io -></a>                    
        </div>
    </div>
</div>

*/