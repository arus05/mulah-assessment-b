const searchParams = new URLSearchParams(window.location.search)

const countryCode = searchParams.get("country-code") ?? ""
const mobile = searchParams.get("mobile") ?? ""
const username = searchParams.get("name") ?? ""
const day = searchParams.get("day") ?? ""
const month = searchParams.get("month") ?? ""
const year = searchParams.get("year") ?? ""
const email = searchParams.get("email") ?? "N/A"

if (
    !countryCode ||
    !mobile ||
    !username ||
    !day ||
    !month ||
    !year ||
    !email
) {
    window.location.href = "/index.html"
}

const phoneNumber = countryCode + mobile
const bday = `${day}-${month}-${year}`

const phoneValueEl = document.getElementById("phone-container").querySelector(".info-value")
const nameValueEl = document.getElementById("name-container").querySelector(".info-value")
const bdayValueEl = document.getElementById("bday-container").querySelector(".info-value")
const emailValueEl = document.getElementById("email-container").querySelector(".info-value")

phoneValueEl.textContent = phoneNumber
nameValueEl.textContent = username
bdayValueEl.textContent = bday
emailValueEl.textContent = email
