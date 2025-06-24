function fruits(value) {
    let nextIndex = 0

    return {
        next: function () {
            if (nextIndex < value.length)
                return {
                    value: value[nextIndex++],
                    done: false,
                }
            else
                return {
                    done: true
                }
        }
    }
}


const fruit = ["Apple", "Litchi", "Kiwi", "Orange"]
console.log(fruit)

const fruitIndex = fruits(fruit)
console.log(fruitIndex.next())
console.log(fruitIndex.next())
console.log(fruitIndex.next())
console.log(fruitIndex.next())
console.log(fruitIndex.next())