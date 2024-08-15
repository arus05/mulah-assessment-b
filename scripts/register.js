const searchParams = new URLSearchParams(window.location.search)

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const queryString = createQueryString(formData)
    const newSearchParams = new URLSearchParams(queryString)

    newSearchParams.forEach((val, key) => {
        searchParams.append(key, val)
    })
    
    window.location.href = "/result.html?" + searchParams.toString()
})

function createQueryString(formData) {
    queryString = "?"
    for (const pair of formData.entries()) {
        queryString += `${pair[0]}=${pair[1]}&`
    }
    return queryString
}