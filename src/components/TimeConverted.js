import React from 'react'

function TimeConverted({sec}) {
    let hours   = Math.floor(sec / 3600);
    let min = Math.floor((sec - (hours * 3600)) / 60);
    let s = sec - (hours * 3600) - (min * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (min < 10) {min = "0"+min;}
    if (s < 10) {s = "0"+s;}
    



    return (
        
            <h1> {hours}:{min}:{s} </h1> 
        
    )
}
export default TimeConverted


