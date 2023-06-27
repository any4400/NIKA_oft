function getRemBase (windowWidth) {
    let remBase = windowWidth * 0.01;

    if (windowWidth < 468) {
        remBase *= 3.125;
    } else if (windowWidth < 668) {
        remBase *= 2.137;
    } else if (windowWidth < 1024) {
        remBase *= 1.497;
    } else if (windowWidth < 1500) {
        remBase *= 0.977;
    } else {
        remBase *= 0.667;
    }

    return remBase;
}
