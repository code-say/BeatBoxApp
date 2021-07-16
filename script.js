window.onload = () => {
    setButtons();
}

let musics = {
    "a": {
        music: "./assets/music1.wav",
        color: "#00fffe"
    },
    "s": {
        music: "./assets/music2.wav",
        color: "#00fffe"
    },
    "d": {
        music: "./assets/music3.wav",
        color: "#00fffe"
    },
    "f": {
        music: "./assets/music4.wav",
        color: "#FF00FF"
    },
    "g": {
        music: "./assets/music5.wav",
        color: "#FF00FF"
    },
    "h": {
        music: "./assets/music3.wav",
        color: "#FF00FF"
    },
    "j": {
        music: "./assets/music3.wav",
        color: "#FFFFFF"
    },
    "k": {
        music: "./assets/music3.wav",
        color: "#FFFFFF"
    },
    "l": {
        music: "./assets/music3.wav",
        color: "#FFFFFF"
    },
}

const setButtons = () => {
    for(let musicKey in musics) {
        let music = musics[musicKey];
        let element = document.getElementById(musicKey);
        element.style.borderColor = music.color;
        element.addEventListener("transitionend", ()=> {
            element.style.backgroundColor = "transparent";
            element.style.boxShadow = "none";
            console.log("transition done");
        })
    }
}

const onButtonPress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = musics[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px ${musics[buttonKey].color}`;
}

const playMusic = (buttonKey) => {

    let audioSrc = musics[buttonKey].music;
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
}



document.addEventListener('keydown', (event) => {
    playMusic(event.key);
    onButtonPress(event.key);
})