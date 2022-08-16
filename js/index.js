const form = document.getElementById('github-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        const userList = document.getElementById('user-list')
        response.items.map(item => {
            const li = document.createElement('li')
            const h1 = document.createElement('h1')
            h1.innerText = item.login
            h1.addEventListener('click', () => userRepositories(item.login))
            const img = document.createElement('img')
            img.src = item.avatar_url

            li.append(h1, img)
            userList.append(li)
        })
    })
})

function userRepositories (login) {
    const repoList = document.getElementById('repos-list')
    repoList.innerHTML = ''
    fetch(`https://api.github.com/users/${login}/repos`)
    .then(response => response.json())
    .then(response => response.map(repository => {
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        h2.innerText = repository.name
        li.append(h2)
        repoList.append(li)
    }))
}