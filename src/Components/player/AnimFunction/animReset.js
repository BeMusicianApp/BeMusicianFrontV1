export function animCA (image) {
    image.animate([
        { transform: 'translate(600px)' },
        { transform: 'translate(860px)' },
        { transform: 'translate(860px)' },
    ], 200);
    image.style.transform = 'translate(860px)'
};

export const animDA = (image) => {
    image.animate([
        { transform: 'translate(860px)' },
        { transform: 'translate(1560px)' },
        { transform: 'translate(1560px)' },
    ], 200);
    image.style.transform = 'translate(1560px)'
};