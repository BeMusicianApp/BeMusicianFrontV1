export function animCA (image) {
    image.animate([
        { transform: 'translate(600px)' },
        { transform: 'translate(860px)' },
        { transform: 'translate(860px)' },
    ],);
    image.style.transform = 'translate(860px)'
};

export const animDA = (image) => {
    image.animate([
        { transform: 'translate(860px)' },
        { transform: 'translate(1560px)' },
        { transform: 'translate(1560px)' },
    ],);
    image.style.transform = 'translate(1560px)'
};
export const animBA = (image)=>{
    image.animate([
        { transform: 'translate(-360px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(0px)' },
    ],);
    image.style.transform = 'translate(0px)'
}
