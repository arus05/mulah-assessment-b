const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const queryString = createQueryString(formData)
    const searchParams = new URLSearchParams(queryString)
    window.location.href = "/register.html?" + searchParams.toString()
})

function createQueryString(formData) {
    queryString = "?"
    for (const pair of formData.entries()) {
        queryString += `${pair[0]}=${pair[1]}&`
    }
    return queryString
}