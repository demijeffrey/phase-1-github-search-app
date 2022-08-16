const form = document.getElementById('github-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        const userList = document.getElementById('user-list')
        response.items.forEach(item => {
            const li = document.createElement('li')
            const h2 = document.createElement('h2')
            h2.innerText = item.login
            const img = document.createElement('img')
            img.src = item.avatar_url
        })
    })
})