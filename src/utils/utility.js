function shuffle(array) {
    let temp;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j]
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

export default shuffle;