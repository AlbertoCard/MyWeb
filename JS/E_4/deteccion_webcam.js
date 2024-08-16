const d = document,
    n = navigator;

export default function webCam(id) {
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch(err => {
                $video.insertAdjacentHTML("beforebegin", `<p>¡Sucedió el siguiente error!: <b>${err}</b></p>`);
                console.log(`¡Sucedió el siguiente error!: ${err}`);
            });
    }
}