export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const trimTextBaseOnScreenSize = (text: string) => {
    if (text.length === 0)
        return "This card has no explanation, just enjoy the image. Thank you!"
    const { width } = getWindowDimensions();
    let trimmedString;
    if (width < 768) {
        if (text.length < 250) return text;
        trimmedString = text.substring(0, 250);

        trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...';

    }
    else if (width > 768 && width < 1440) {
        if (text.length < 350) return text;
        trimmedString = text.substring(0, 350);

        trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...';

    }
    else {
        trimmedString = text;
    }
    
    return trimmedString;
}
export const generateClones = (button:HTMLAnchorElement) => {
    let clones = 5;

    for (let it = 1; it <= clones; it++) {
        let clone = button.querySelector("svg")!.cloneNode(true), size = randomInt(20, 36).toString();
        //size = randomInt(5, 16).toString();

        button.appendChild(clone);
        (clone as HTMLElement).setAttribute("width", size);
        (clone as HTMLElement).setAttribute("height", size);
        (clone as HTMLElement).style.position = "absolute";
        (clone as HTMLElement).style.transition =
            "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";

        let animTimeout = setTimeout(function () {
            clearTimeout(animTimeout);
            (clone as HTMLElement).style.transform =
                "translate3d(" +
                (plusOrMinus() * randomInt(25, 50)) +
                "px," +
                (plusOrMinus() * randomInt(25, 50)) +
                "px,0)";
            (clone as HTMLElement).style.opacity = '0';
        }, 1);


        let removeNodeTimeout = setTimeout(function () {

            it - 1 != 0 && button.children[it - 1] && button.removeChild(button.children[it - 1]);

            clearTimeout(removeNodeTimeout);
        }, 2000);

    }
}

export const plusOrMinus = () => {
    return Math.random() < 0.5 ? -1 : 1;
}

export const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}