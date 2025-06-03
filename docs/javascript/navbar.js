const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav id="nav" class="fixed top-0 left-0 w-full transition-all duration-500 z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a data-aos="fade-right" href="./index.html" class="flex items-center justify-center lg:justify-start">
                <img src="./docs/assets/images/logo.png" class="md:h-20 h-14" alt="logo">
            </a>
            <div class="flex items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul data-aos="fade-left" class="md:flex  hidden items-center text-zinc-300 gap-10">
  <li><a href="./index.html" class="hover:text-[#e7cf2d] font-medium transition-all duration-500">Home</a></li>
  <li><a href="/about.html" class="hover:text-[#e7cf2d] font-medium transition-all duration-500">About</a></li>

  <li class="relative ">
    <button id="dropdownToggle"
      class="hover:text-[#c99b39] cursor-pointer flex items-center gap-2 tracking-wide font-medium transition-all duration-500">
      Domains
      <i class="fa-solid fa-angle-down transition-transform duration-500" id="dropdownIcon"></i>
    </button>
    <div id="dropdownMenu"
      class="absolute fadeIn hidden w-52 top-10 pt-2 left-0 bg-[#080909] z-30 flex-col">
      <a href="/feature.html" class="p-5 hover:bg-[#c99b39] hover:text-white text-nowrap transition-all duration-500 block">Ainuko</a>
      <a href="/grandmaster.html" class="p-5 hover:bg-[#c99b39] hover:text-white text-nowrap transition-all duration-500 block">Grandmaster</a>
      <a href="/mardagamra.html" class="p-5 hover:bg-[#c99b39] hover:text-white text-nowrap transition-all duration-500 block">MardAgamra</a>
    </div>
  </li>

  <li><a href="/feature.html" class="hover:text-[#e7cf2d] font-medium transition-all duration-500">Features</a></li>
</ul>

                </div>
                <a data-aos="fade-left" href="/contact.html"
                    class="relative cursor-pointer py-4 px-8 text-center md:inline-flex hidden justify-center text-base uppercase text-zinc-300 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
                    <span class="relative z-20">Inquiry</span>
                    <span
                        class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span
                        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-zinc-500 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                </a>
            </div>

            <i id="mobileMenuBtn" data-aos="fade-left"
                class="fa-solid text-gray-300 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-black max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-[#f5f5f5] text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-gray-300 flex-col gap-7">
                <li><a href="./index.html"
                        class="hover:text-[#e7cf2d] mobileMenuCloseBtn text-nowrap transition-all duration-500">Home</a>
                </li>
                <li><a href="/about.html"
                        class="hover:text-[#e7cf2d] mobileMenuCloseBtn text-nowrap transition-all duration-500">About</a>
                </li>
                <li class="">
                    <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center">
                        <p class="text-nowrap">Domains</p>
                        <i id="icon-1"
                            class="fa-solid fa-angle-down text-gray-300 transition-transform duration-300"></i>
                    </button>
                    <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5">
                            <ul class="space-y-6 pl-3 pt-6 text-gray-400">
                                <li><a class="text-nowrap" href="/grandmaster.html">Grandmaster</a></li>
                                <li><a class="text-nowrap" href="/feature.html">Ainuko</a></li>
                                <li><a class="text-nowrap" href="/mardagamra.html">MardAgamra</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="/feature.html"
                        class="hover:text-[#e7cf2d] mobileMenuCloseBtn text-nowrap transition-all duration-500">Features</a>
                </li>
            </ul>
            <a href="/contact.html"
                class="text-center block mobileMenuCloseBtn w-full p-3 border text-gray-300 text-nowrap border-zinc-700 mt-5 rounded-lg cursor-pointer">Inquiry</a>
        </div>
    </div>
`

const toggleBtn = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownIcon = document.getElementById('dropdownIcon');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180');
});

// Optional: Close the dropdown if clicked outside
document.addEventListener('click', (event) => {
    const isClickInside = toggleBtn.contains(event.target) || dropdownMenu.contains(event.target);
    if (!isClickInside) {
        dropdownMenu.classList.add('hidden');
        dropdownIcon.classList.remove('rotate-180');
    }
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#1c1b19";
            dropdownMenu.style.backgroundColor = "#1c1b19";
        } else {
            nav.style.backgroundColor = "transparent";
            dropdownMenu.style.backgroundColor = "#080909";
        }
    });
});

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180')
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180')
    }
}