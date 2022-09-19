//let's get this shit done


//hands of the clock
const hour_hand = document.querySelector('[data-hour]');
const minute_hand = document.querySelector('[data-minute]');
const second_hand = document.querySelector('[data-second]');

//time function named setclock()
let setclock = () => {
    let curent = new Date();
    let second_ratio = curent.getSeconds() / 60;
    let minute_ratio = (second_ratio + curent.getMinutes()) / 60;
    let hour_ratio = (minute_ratio + curent.getHours()) / 12;
    rotation(second_hand , second_ratio);
    rotation(minute_hand , minute_ratio);
    rotation(hour_hand , hour_ratio);
}

setInterval(setclock, 1000);
//rotation 

let rotation = (element , rotation_ratio) => {
    element.style.setProperty('--rotation' , rotation_ratio * 360);
}

setclock();