const Display = document.querySelector("input"),
      Button = document.querySelector("button"),
      CopyBtn = document.querySelector("span.far"),
      CopyActive = document.querySelector("span.fas")


let Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="

Button.onclick = () => {
    let i, RandomPassword = ""
    CopyBtn.style.display = "block"
    CopyActive.style.display = "none"
    for (i = 0 ; i < 16 ; i++) {
        RandomPassword += Characters.charAt(
            Math.floor(Math.random() * Characters.length)
        )
    }
    Display.value = RandomPassword
}

function Copy() {
    CopyBtn.style.display = "none"
    CopyActive.style.display = "block"
    Display.select()
    document.execCommand("copy")
}