const judul = document.title;
const judulKursus = document.getElementById("judul-kursus")
const halamanKe = document.getElementById("halaman-ke");
const subMenu = document.getElementById("sub-menu-tutup");
const pembukaSubMenu = document.getElementById("pembuka-sub-menu");
const penutupSubMenu = document.getElementById("penutup-sub-menu");
const kepala = document.getElementById("kepala");
const kepalaAnak = document.getElementById("kepala-anak");
const logo = document.getElementById("logo");
const navigasi = document.getElementById("navigasi");
const luasin = document.getElementById("luasin");
const konten = document.querySelectorAll(".konten-kursus")
const audioMateri = document.querySelectorAll(".audio-materi")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const suaraKlik = document.getElementById("suara-klik")
let x = 0
const y = konten.length - 1
const dikt = document.getElementById("daftar-isi-kursus-tutup")
const bdi = document.getElementById("buka-daftar-isi")
const pdi = document.getElementById("penutup-daftar-isi")

judulKursus.innerHTML = "<p>" + judul + "</p>"

//Buka Tutup Sub-Menu

pembukaSubMenu.addEventListener("click", submenubuka);
function submenubuka() {
	subMenu.id = "sub-menu-buka";
}
penutupSubMenu.addEventListener("click", submenututup);
function submenututup() {
	subMenu.id = "sub-menu-tutup";
}
  
//Luasin & Sempitin

luasin.addEventListener("click", sempitin);
  
//Ubah CSS Bawaaan
 
  
function sempitin() {
if (luasin.className == "fa-solid fa-down-left-and-up-right-to-center") {
	konten[x].style.height = "80vh";
	kepala.style.transform = "scaleY(1)";
	luasin.style.top = null;
	luasin.className = "fa-solid fa-up-right-and-down-left-from-center";
  	halamanKe.style.top = null;
	judulKursus.style.top = null;
} else {
	konten[x].style.height = null;
	kepala.style.transform = null;
	luasin.style.top = "2.5vh";
	luasin.className = "fa-solid fa-down-left-and-up-right-to-center";
  	halamanKe.style.top = "2.5vh";
	judulKursus.style.top = "2.5vh"; 
}
}

//Next & Prev
    
halamanKe.innerHTML = "<p>" + (x+1) + "/" + konten.length + "</p>";
if (x == 1){
	audioMateri[1].play();
}
  
next.addEventListener("click", n);
prev.addEventListener("click", p);

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

//Buka Tutup Daftar Isi
  
bdi.addEventListener("click", bukatutupdaftarisi)
pdi.addEventListener("click", bukatutupdaftarisi)
  
function bukatutupdaftarisi(){
	if (dikt.id == "daftar-isi-kursus-tutup"){
    	dikt.id = "daftar-isi-kursus-buka"
	} else {
    	dikt.id = "daftar-isi-kursus-tutup"
	}
}
