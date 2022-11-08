const to24Hour = (time) => {
    let timeArr = time.split(':');
    let hours = timeArr[0];
    let minutes = timeArr[1];
    let seconds = timeArr[2];
    let period = timeArr[3];

    if (period === 'PM' && hours !== '12') {
        hours = Number(hours) + 12;
    }
    else if (period === 'AM' && hours === '12') {
        hours = '00';
    }
    return `${hours}:${minutes}:${seconds}`;
}
const add45MinAnd45Sec = (time) => {
    let timeArr = time.split(':');
    let hours = timeArr[0];
    let minutes = timeArr[1];
    let seconds = timeArr[2];

    console.log(hours, minutes, seconds);
    seconds = Number(seconds) + 45;
    if (seconds > 59) {
        seconds = seconds - 60;
        minutes = Number(minutes) + 1;
    }
    minutes = Number(minutes) + 45;
    if (minutes > 59) {
        minutes = minutes - 60;
        hours = Number(hours) + 1;
    }

    return `${hours}:${minutes}:${seconds}`;
}

// Driver code

const time = "12:34:30:AM";
const finalTime = to24Hour(time);
console.log(finalTime);
// add 45 min and 45 sec to the final time

const ans = add45MinAnd45Sec(finalTime);
console.log(ans)

