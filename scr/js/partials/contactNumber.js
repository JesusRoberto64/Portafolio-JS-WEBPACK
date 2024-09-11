export function contactNumber(id, number, link, contact){
    let div = document.getElementById(id);

    let divNumber = document.createElement('div');
    divNumber.className = "number";
    div.appendChild(divNumber);

    let p = document.createElement('p');
    p.innerText = number;
    divNumber.appendChild(p);

    let divCol = document.createElement('div');
    divCol.className = "col-10";
    div.appendChild(divCol);

    let divLink = document.createElement('div');
    divLink.className = "contactLink";
    divCol.appendChild(divLink);

    let a = document.createElement('a');
    a.href = link;
    a.target = "_blank";
    divLink.appendChild(a);

    let pLink = document.createElement('p');
    pLink.innerText = contact;
    a.appendChild(pLink);
};

/*
<div class="number">
    <p><%= number %></p>
</div>
<div class="col-10">
    <div class="contactLink">
        <a href=<%= link %> target="_blank">
            <p><%= contact  %></p>
        </a>
    </div>
</div>
*/