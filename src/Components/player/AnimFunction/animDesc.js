export function animDC(image){
    image.animate([
        { transform: 'translate(-980px)' },
        { transform: 'translate(-620px)' },
        { transform: 'translate(-620px)' },
    ], 1000);
    image.style.transform = 'translate(-620px)'
    image.style.opacity = '1'
    image.style.transition = 'opacity 1s'
};

export function animCB(image){
    image.animate([
        { transform: 'translate(-620px)' },
        { transform: 'translate(-360px)' },
        { transform: 'translate(-360px)' },
    ], 1000);
    image.style.transform = 'translate(-360px)'
};

export function animBA(image){
    image.animate([
        { transform: 'translate(-360px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(0px)' },
    ], 1500);
    image.style.transform = 'translate(0px)'
    image.style.opacity = '0'
    image.style.transition = 'opacity 1s'
};