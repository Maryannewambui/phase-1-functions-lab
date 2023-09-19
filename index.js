// Code your solution in this file!
function distanceFromHqInBlocks(pin) {
    const hq = 42;

    const distance = Math.abs(pin - hq);

  return distance;
}

function distanceFromHqInFeet(pin) {
    const ft = 264;
    const blocks = distanceFromHqInBlocks(pin);
    const feet = blocks * ft;

    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const ft = 264;

    const travelDistance = Math.abs(destination - start) * ft;

    return travelDistance;
}

function calculatesFarePrice (start, destination) {
    const travelDistance = distanceTravelledInFeet(start, destination );

    if (travelDistance <= 400) {
        return 0;
    } else if (travelDistance > 400 && travelDistance <= 2000) {
        return (travelDistance - 400) * 0.02;
    } else if (travelDistance > 2000 && travelDistance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
