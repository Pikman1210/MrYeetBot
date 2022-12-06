// used to crop text correctly in canvas (primarily used in user.js and welcome response)

module.exports = async function applyText(canvas, text) {
    const context = canvas.getContext('2d');

    let fontSize = 70;

    do {
        context.font = `${fontSize -= 10}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);

    return context.font;
}  