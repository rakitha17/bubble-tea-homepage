// element
const navbar = document.querySelector(".navbar")
// const form = document.querySelector(".form-data")

//variables
let scrollHeight = navbar.clientHeight

//functionality
window.addEventListener("scroll", (event) => {
  if (this.scrollY > scrollHeight) {
    navbar.classList.add("scroller-set")
  } else if (this.screenY === 0) {
    navbar.classList.remove("scroller-set")
  }
})

/* form.addEventListener("submit", (e) => {
  // console.log(e)
  e.preventDefault()
  const formData = new FormData(form)

  for (val of formData) {
    console.log(val[0], val[1])
  }

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
}) */
