export function animAB(image, screen){
    if(screen>480){
        image.animate([
            { transform: 'translate(0px)' },
            { transform: 'translate(-360px)' },
            { transform: 'translate(-360px)' },
        ], 1500);
        image.style.transform = 'translate(-360px)';
        image.style.opacity = '1';
        image.style.transition = 'opacity 1s';
    }else{
        image.animate([
            { transform: 'translate(0px)' },
            { transform: 'translate(-300px)' },
            { transform: 'translate(-300px)' },
        ], 1500);
        image.style.transform = 'translate(-300px)';
        image.style.opacity = '1';
        image.style.transition = 'opacity 1s';
    }
};

export function animBC(image, screen){
    if(screen>480){
        image.animate([
            { transform: 'translate(-360px)' },
            { transform: 'translate(-620px)' },
            { transform: 'translate(-620px)' },
        ], 1500);
        image.style.transform = 'translate(-620px)'
    }else{
        image.animate([
            { transform: 'translate(-300px)' },
            { transform: 'translate(-480px)' },
            { transform: 'translate(-480px)' },
        ], 1500);
        image.style.transform = 'translate(-480px)';
    }
};
export function animCD(image, screen){
    if(screen>480){
        image.animate([
            { transform: 'translate(-620px)' },
            { transform: 'translate(-980px)' },
            { transform: 'translate(-980px)' },
        ], 2000);
        image.style.transform = 'translate(-980px)'
        image.style.opacity = '0'
        image.style.transition = 'opacity 1s'
    }else{
        image.animate([
            { transform: 'translate(-480px)' },
            { transform: 'translate(-630px)' },
            { transform: 'translate(-630px)' },
        ], 2000);
        image.style.transform = 'translate(-630px)'
        image.style.opacity = '0'
        image.style.transition = 'opacity 1s'
    }
};
