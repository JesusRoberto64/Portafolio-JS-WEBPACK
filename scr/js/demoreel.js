export function demoReel(){
    const links = ["https://www.youtube.com/watch?v=41ToRUMsaD0","https://www.youtube.com/watch?v=gkT7NEdm38Y","https://www.youtube.com/watch?v=c_y6-7tqaz0", "https://www.youtube.com/shorts/Rk7KQpDR-I0"];
    //bitacora, demoreel, commodore,
    //"assets/narrativo0.png"
    let demoreel = document.getElementById('demoreel');
    for (let i = 0; i < links.length; i++) {

        let div = document.createElement('div');
        div.className = "imageDock mb-2 me-lg-2"
        div.style = "grid-column: 2;"

        demoreel.appendChild(div);

        let a = document.createElement('a');
        a.href = links[i];
        a.className = "imageIn";
        a.target = "_blank"
        
        div.appendChild(a);

        let img = document.createElement('img');
        img.src = `./assets/images/narrativo${i}.png`;
        
        a.appendChild(img);
    }
}