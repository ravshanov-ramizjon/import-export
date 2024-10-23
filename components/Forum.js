function Forum(item) {
    const name = document.createElement('h1')
    const spanDiv = document.createElement('div')
    const age = document.createElement('span')
    const num = document.createElement('span')
    
    name.innerHTML = people.name
    age.innerHTML = 'Age'
    num.innerHTML = people.age

    spanDiv.classList.add('span')

    num.style.color = 'black'

    box.append(name, spanDiv)
    spanDiv.append(age, num)

}
export {Forum}