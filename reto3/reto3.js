const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

distributeGifts = (packOfGifts, reindeers) => {
    const gifts = packOfGifts.reduce((previous,current) => previous+current.length, 0);
    const reind = reindeers.reduce((previous,current) => previous+current.length*2, 0);
    return (Math.floor(reind/gifts));
}

distributeGifts(packOfGifts, reindeers) // 2