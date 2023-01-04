const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts);

function wrapping(gifts) {

  return gifts.map((gift) => {
    const a = "*".repeat(gift.length + 2);
    return `${a}\n*${gift}*\n${a}`
  })
}
