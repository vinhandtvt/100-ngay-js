// CREATE VARIABLES 

const gLink = document.querySelector('#glink');
const btn = document.querySelector('#btn');
const downloadLink = document.querySelector("#download-link");



const generateLink = (e) => {
    e.preventDefault();
    // console.log(glink.value);
    // const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes('https://drive.google.com/file/d/');
    console.log(confirmLink);

    if (confirmLink == true) {
        const getDownloadLink = gLink.value
            .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "");

        downloadLink.value = getDownloadLink;

        console.log(getDownloadLink);

        function copyText(target) {
            if (target.value == "") {
                alert("Please generate download link")
            } else {
                target.select();
                document.execCommand("copy");
                alert("Link has been copied to clipboard!")

            }
        }

        const copy = document.querySelector(".copy");
        copy.addEventListener('click', () => {
            return copyText(downloadLink)
        })



        // EMBED AUDIO FUNCTION

        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        const embedAudio = document.getElementById('embed-audio');
        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
        // console.log(embedAudio.value);


        // COPY AUDIO EMBED CODE
        const copyAudio = document.querySelector('.copy-audio');
        copyAudio.addEventListener('click', () => {
            return copyText(embedAudio);
        })


        // EMBED VIDEO
        const getVideoLink = gLink.value.replace("/view?usp=sharing", "");

        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';

        const embedVideo = document.getElementById('embed-video');
        embedVideo.value = `${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector('.copy-video');
        copyVideo.addEventListener('click', () => {
            return copyText(embedVideo);
        })

    } else {
        alert("Please enter a Google Drive file link!")
    }
}

btn.addEventListener('click', generateLink);

