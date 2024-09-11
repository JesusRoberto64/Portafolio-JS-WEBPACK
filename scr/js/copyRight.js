export function copyRight(id){
    let span = document.getElementById(id);
    let date = new Date;
    let year = date.getFullYear();

    span.innerText = `${year} Todos los derechos reservados.`
}