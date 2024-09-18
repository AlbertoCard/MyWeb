const d = document,
        $main = d.querySelector("main"),
        $files = d.getElementById("file");

const uploader = (file) =>{
    const xhr = new XMLHttpRequest(),
        formData = new FormData();
    
    formData.append("file",file);

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            console.log(json)
        } else {
            let message = xhr.statusText || "Ocurrio un error";
            console.log(`Error ${xhr}:${message}`);
        }
    });

    xhr.open("POST", "uploader.php");
    //xhr.setRequestHeader("enc-type", "multipart/form-data");
    xhr.send(formData);
}

const progressUpload = (file) => {
    const $progress = d.createElement("progress"),
        $span = d.createElement("span");
    
    $progress.value = 0;
    $progress.max = 100;

    $main.insertAdjacentElement("beforeend", $progress);
    $main.insertAdjacentElement("beforeend", $span);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("progress", e =>{
        let progress = parseInt((e.loaded*100)/e.total);
        $progress.value = progress;
        $span.innerHTML = `<b> ${file.name} - ${progress}% </b>`;
    });

    fileReader.addEventListener("loadend", e =>{});
}

d.addEventListener("change", e =>{
    if(e.target === $files){
            const files =  Array.from(e.target.files);
            files.forEach(el => progressUpload(el));
    }
});