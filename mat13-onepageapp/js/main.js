function aboutClice() {
    //hidding home/contact section
    document.querySelector("#homeSection").classList.add("hidden")
    document.querySelector("#aboutSection").classList.remove("hidden")
    document.querySelector("#contactSection").classList.add("hidden")
}

function contactClice() {
    //hidding home/about section
    document.querySelector("#homeSection").classList.add("hidden")
    document.querySelector("#aboutSection").classList.add("hidden")
    document.querySelector("#contactSection").classList.remove("hidden")
}

function homeClice() {
    //hidding contact/about section
    document.querySelector("#homeSection").classList.remove("hidden")
    document.querySelector("#aboutSection").classList.add("hidden")
    document.querySelector("#contactSection").classList.add("hidden")
}