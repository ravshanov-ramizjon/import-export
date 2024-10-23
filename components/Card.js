function Card(item) {
    const div = document.createElement('div')
    const poster = document.createElement('img')
    const title = document.createElement('span')

    poster.src = item.poster
    poster.alt = item.title

    title.innerHTML = item.title


    div.append(poster, title)

    div.classList.add('card')

    return div
}


export { Card }