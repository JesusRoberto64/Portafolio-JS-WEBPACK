export function loadHtml(filePath, containterId){
    return new Promise((resolve, reject) =>{

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);  
                };
                return response.text();
            })
            .then(data => {
                document.getElementById(containterId).innerHTML = data;
                resolve();
            })
            .catch(error => reject(error));
    });
    
};