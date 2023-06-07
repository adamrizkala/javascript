const muteButton = document.querySelectorAll(".mute-audio")
const logoVolume = document.querySelectorAll(".fa-volume-high");
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
const fiturAtas = document.getElementById("fitur-atas")
const waktuAudioBiru = document.querySelectorAll(".waktu-audio-biru")
const waktuAudioBackground = document.querySelectorAll(".waktu-audio-background")
const documentElement = document.documentElement;
const pembukaDaftarSubBabKursus = document.getElementById('pembuka-daftar-sub-bab-kursus')
const daftarSubBabKursus = document.getElementById('daftar-sub-bab-kursus-tutup')
const faSolidFaAngleDown = document.getElementsByClassName('fa-solid fa-angle-down')

// MUTE UNMUTE AUDIO

for (let k = 0; k < muteButton.length; k++){
muteButton[k].addEventListener('click', function() {
    if (logoVolume[x].className == "fa-solid fa-volume-high" ) {
        logoVolume[x].classList.remove("fa-volume-high");
        logoVolume[x].classList.add("fa-volume-xmark");
        audioMateri[x].muted = true;
    } else {
        logoVolume[x].classList.remove("fa-volume-xmark");
        logoVolume[x].classList.add("fa-volume-high");
        audioMateri[x].muted = false;
    }
});
}

// BUKA TUTUP DAFTAR SUB-BAB

pembukaDaftarSubBabKursus.addEventListener('click', bukatutupdaftarsubbab)
  
function bukatutupdaftarsubbab(){
	if (daftarSubBabKursus.id == "daftar-sub-bab-kursus-tutup"){
    	daftarSubBabKursus.id = "daftar-sub-bab-kursus-buka"
		faSolidFaAngleDown[0].style.transform = "rotate(-180deg)"
	} else {
    	daftarSubBabKursus.id = "daftar-sub-bab-kursus-tutup"
		faSolidFaAngleDown[0].style.transform = "rotate(0deg)"
	}
}

//JUDUL KURSUS

judulKursus.innerHTML = "<p>" + judul + "</p>"

//BUKA TUTUP SUB-MENU

pembukaSubMenu.addEventListener("click", submenubuka);
function submenubuka() {
	subMenu.id = "sub-menu-buka";
}
penutupSubMenu.addEventListener("click", submenututup);
function submenututup() {
	subMenu.id = "sub-menu-tutup";
}
  
//FULLSCREEN
  
luasin.addEventListener("click", sempitin);

function sempitin() {
if (luasin.className == "fa-solid fa-expand") {
  	if (documentElement.requestFullscreen) {
    	documentElement.requestFullscreen();
  	} else if (documentElement.webkitRequestFullscreen) { /* Safari */
    	documentElement.webkitRequestFullscreen();
  	} else if (documentElement.msRequestFullscreen) { /* IE11 */
    	documentElement.msRequestFullscreen();
  	}
	luasin.className = "fa-solid fa-down-left-and-up-right-to-center"; 
} else if (luasin.className == "fa-solid fa-down-left-and-up-right-to-center") {
  	if (document.exitFullscreen) {
    	document.exitFullscreen();
  	} else if (document.webkitExitFullscreen) { /* Safari */
    	document.webkitExitFullscreen();
  	} else if (document.msExitFullscreen) { /* IE11 */
    	document.msExitFullscreen();
  	}
	konten[x].style.height = "80vh";
	kepala.style.transform = "scaleY(1)";
	luasin.className = "fa-solid fa-up-right-and-down-left-from-center";
	fiturAtas.style.top = "22vh";
} else {
	konten[x].style.height = null;
	kepala.style.transform = null;
	luasin.className = "fa-solid fa-expand";
	fiturAtas.style.top = null;
}
}

//NEXT & PREV DENGAN KLICK
    
halamanKe.innerHTML = "<p>" + (x+1) + "/" + konten.length + "</p>";
if (x == 1){
	audioMateri[1].play();
}
  
next.addEventListener("click", n);
prev.addEventListener("click", p);

function n() {
	if (x == y){
    	konten[x].style.display = "flex";
      	waktuAudioBackground[x].style.display = "grid";
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
      	waktuAudioBackground[x].style.display = "none";
      	waktuAudioBackground[x+1].style.display = "grid";
    	halamanKe.innerHTML = "<p>" + (x+2) + "/" + konten.length + "</p>";
      	waktuAudioBiru[x+1].style.animationDuration = audioMateri[x+1].duration + "s"
    	x++;
	} 	
}

function p() {
	if (x == 0){
    	konten[x].style.display = "flex";
      	waktuAudioBackground[x].style.display = "grid";
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
      	waktuAudioBackground[x].style.display = "none";
      	waktuAudioBackground[x-1].style.display = "grid";
        halamanKe.innerHTML = "<p>" + x + "/" + konten.length + "</p>";
		waktuAudioBiru[x-1].style.animationDuration = audioMateri[x-1].duration + "s"
        x--;
	}
}

//NEXT & PREV DENGAN KEYBOARD

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
      n();
    } else if (event.key == "ArrowLeft"){
      p();
    }
});

//BUKA TUTUP DAFTAR ISI/BAB KURSUS
  
bdi.addEventListener("click", bukatutupdaftarisi)
pdi.addEventListener("click", bukatutupdaftarisi)
  
function bukatutupdaftarisi(){
	if (dikt.id == "daftar-isi-kursus-tutup"){
    	dikt.id = "daftar-isi-kursus-buka"
	} else {
    	dikt.id = "daftar-isi-kursus-tutup"
	}
}
