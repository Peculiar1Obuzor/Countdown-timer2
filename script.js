const countdownDate = new
Date("2024-03-01T00:00:00") .getTime();

const updateTimer = ()=> {
    const now = new Date() .getTime();
    const distance = countdownDate - now;

    const days= Maths.floor(distance / (1000*60*60*24));
    const hours = Maths.floor((distance %(1000*60*60*24)) / (1000*60*60));
    const minutes = Maths.floor((distance %(1000*60*60)) / (1000*60));
    const seconds = Maths.floor((distance %(1000*60)) /1000);

    document.getElementById("timer").innerHTML="EXPIRED";
}
};
