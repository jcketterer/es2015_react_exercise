// Getting Random Fruit

const choice = items => {
  const fruit = Math.floor(Math.random() * items.length)
  return items[fruit]
}

//returns copy of array without the first apperance of item. If not found returns undefined

const remove = (item, items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)]
    }
  }
}

export { choice, remove }
