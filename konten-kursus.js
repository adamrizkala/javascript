const judul = document.title;
const judulKursus = document.getElementById("judul-kursus")

judulKursus.innerHTML = "<p>" + judul + "</p>"

const halamanKe = document.getElementById("halaman-ke");
  
//Buka Tutup Sub-Menu
  
const subMenu = document.getElementById("sub-menu-tutup");
const pembukaSubMenu = document.getElementById("pembuka-sub-menu");
const penutupSubMenu = document.getElementById("penutup-sub-menu");

pembukaSubMenu.addEventListener("click", submenubuka);
function submenubuka() {
	subMenu.id = "sub-menu-buka";
}
penutupSubMenu.addEventListener("click", submenututup);
function submenututup() {
	subMenu.id = "sub-menu-tutup";
}
  
//Luasin & Sempitin

const kepala = document.getElementById("kepala");
const kepalaAnak = document.getElementById("kepala-anak");
const logo = document.getElementById("logo");
const navigasi = document.getElementById("navigasi");
const luasin = document.getElementById("luasin");
luasin.addEventListener("click", sempitin);
  
function sempitin() {
	if (luasin.className == "fa-solid fa-up-right-and-down-left-from-center") {
		konten[x].style.height = "100vh";
		kepala.style.transform = "scaleY(0)";
		kepala.style.transformOrigin = "top";
		kepalaAnak.style.transform = "scaleY(0)";
		kepalaAnak.style.transformOrigin = "top";
		logo.style.transform = "scale(0)";
		logo.style.transformOrigin = "top";
		navigasi.style.transform = "scale(0)";
		navigasi.style.transformOrigin = "top";
		luasin.style.top = "2.5vh";
		luasin.className = "fa-solid fa-down-left-and-up-right-to-center";
      	halamanKe.style.top = "2.5vh";
      	judulKursus.style.top = "2.5vh";
	} else {
		konten[x].style.height = null;
		kepala.style.transform = null;
		kepalaAnak.style.transform = null;
		logo.style.transform = null;
		navigasi.style.transform = null;
		luasin.style = null;
		luasin.className = "fa-solid fa-up-right-and-down-left-from-center";
      	halamanKe.style.top = null;
      	judulKursus.style.top = null;
	}
}

//Next & Prev

	let konten = document.querySelectorAll(".konten-kursus")
    let audioMateri = document.querySelectorAll(".audio-materi")
    let next = document.getElementById("next")
    let prev = document.getElementById("prev")
    let suaraKlik = document.getElementById("suara-klik")
    let x = 0
    let y = konten.length - 1
    
    halamanKe.innerHTML = "<p>" + (x+1) + "/" + konten.length + "</p>";
    if (x == 1){
    	audioMateri[1].play();
    }
  
    next.addEventListener("click", n);
    function n() {
		if (x == y){
            konten[x].style.display = "flex";
        } else {
            suaraKlik.play();
          	audioMateri[x+1].play();
          	audioMateri[x].pause();
          	audioMateri[x].currentTime = 0;
          	if (konten[x].style.height == "100vh") {
                konten[x+1].style.height = "100vh"
           	} else {
           		konten[x+1].style.height = null
           	}
            konten[x].style.display = "none";
            konten[x+1].style.display = "flex";
          	halamanKe.innerHTML = "<p>" + (x+2) + "/" + konten.length + "</p>";
          	x++;
        } 	
    }
    
    prev.addEventListener("click", p);
    function p() {
        if (x == 0){
            konten[x].style.display = "flex";
        } else {
            suaraKlik.play();
          	audioMateri[x-1].play();
          	audioMateri[x].pause();
          	audioMateri[x].currentTime = 0;
          	if (konten[x].style.height == "100vh") {
            	konten[x-1].style.height = "100vh"
            } else {
            	konten[x-1].style.height = null
            }
            konten[x].style.display = "none";
            konten[x-1].style.display = "flex";
            halamanKe.innerHTML = "<p>" + x + "/" + konten.length + "</p>";
          	x--;
        }
    }