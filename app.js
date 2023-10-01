const nav = document.querySelector("#jsmain");
const ham = document.querySelector(".end");



function navbar() {
    const div = document.querySelector('#jsmain')
    div.innerHTML = `
    <ul class="js-nav">
                    <li class="js-list"><a href="#" class="js-list">Home</a></li>
                    <li class="js-list"><a href="#" class="js-list">About</a></li>
                    <li class="js-list"><a href="#" class="js-list">Gallery</a></li>
                    <li class="js-list"><a href="#" class="js-list">Blog</a></li>
                    <li class="js-list"><a href="#" class="js-list">Contact Us</a></li>
                                    </ul>`;
    if (div.style.display === "none") {
        div.style.display = "block";
    }
    else {
        div.style.display = "block";
        div.style.display = "none"

    }

}