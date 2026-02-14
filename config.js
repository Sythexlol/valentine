// ============================================
// 💝 CUSTOM VALENTINE CONFIG (PHOTO VERSION) 💝
// ============================================

const CONFIG = {

    valentineName: "Onela",

    pageTitle: "Will You Be My Valentine? 💝",

    // 💕 Background Settings (YOUR PHOTO)
    background: {
        image: "YOUR_IMAGE_FILE_NAME.png", // ⚠️ Replace with your actual file name if different
        size: "cover",
        position: "center center",
        repeat: "no-repeat",
        overlayColor: "rgba(255, 105, 180, 0.35)", // soft romantic pink
        blur: 4,        // makes text readable
        brightness: 0.85 // slightly darker for contrast
    },

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸']
    },

    questions: {
        first: {
            text: "Do you love me?",
            yesBtn: "Yes 💖",
            noBtn: "No 😢",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "Tjaoooooooooooo! 🚀💝",
        normal: "AUUUUUUUUU! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Ec hajdeeeeeeee! 💕",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff4d6d",
        buttonHover: "#ff758f",
        textColor: "#ffffff"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;

// Automatically apply background to ALL pages
document.addEventListener("DOMContentLoaded", () => {

    const bg = CONFIG.background;

    document.body.style.backgroundImage = `url(${bg.image})`;
    document.body.style.backgroundSize = bg.size;
    document.body.style.backgroundPosition = bg.position;
    document.body.style.backgroundRepeat = bg.repeat;

    document.body.style.filter = `brightness(${bg.brightness})`;

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = bg.overlayColor;
    overlay.style.backdropFilter = `blur(${bg.blur}px)`;
    overlay.style.zIndex = "-1";

    document.body.appendChild(overlay);
});
