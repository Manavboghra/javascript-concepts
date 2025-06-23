const map = new Map()
map.set("KIWI","Fruit")
map.set("VADAPAV","FF")
map.set("DOOR","Furniture")
map.set("KIWI","Fruit")

console.log(map)

for (const key of map) {
    // console.log(key )
}

for (const [key,value] of map) {
    console.log(key+":"+ value )
}

