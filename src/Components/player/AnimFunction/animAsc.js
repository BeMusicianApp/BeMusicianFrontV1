export function animAB(image){
    image.animate([
        { transform: 'translate(0px)' },
        { transform: 'translate(-25%)' },
        { transform: 'translate(-25%)' },
    ], 1500);
    image.style.transform = 'translate(-25%)';
    image.style.opacity = '1'
    image.style.transition = 'opacity 1s'
};

export function animBC(image){
    image.animate([
        { transform: 'translate(-360px)' },
        { transform: 'translate(-620px)' },
        { transform: 'translate(-620px)' },
    ], 1500);
    image.style.transform = 'translate(-620px)'
};
export function animCD(image){
    image.animate([
        { transform: 'translate(-620px)' },
        { transform: 'translate(-980px)' },
        { transform: 'translate(-980px)' },
    ], 2000);
    image.style.transform = 'translate(-980px)'
    image.style.opacity = '0'
    image.style.transition = 'opacity 1s'
};
