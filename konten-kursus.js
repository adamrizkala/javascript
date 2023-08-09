const muteButton = document.getElementById("mute-audio")
const logoVolume = document.querySelectorAll(".fa-volume-high");
const judul = document.title;
const judulKursus = document.getElementById("judul-kursus")
const halamanKe = document.getElementById("halaman-ke");
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
const fiturAtasGrup = document.getElementById("fitur-atas-grup")
const waktuAudioBiru = document.querySelectorAll(".waktu-audio-biru")
const waktuAudioBackground = document.querySelectorAll(".waktu-audio-background")
const documentElement = document.documentElement;
const pembukaDaftarSubBabKursus = document.getElementById('pembuka-daftar-sub-bab-kursus')
const daftarSubBabKursus = document.getElementById('daftar-sub-bab-kursus-tutup')
const faSolidFaAngleDown = document.getElementsByClassName('fa-solid fa-angle-down')
const prosesAnak = document.querySelectorAll('.proses-anak')

//FITUR PROGRESS HALAMAN DI ATAS
  	
  	const proses = document.getElementById('proses')
	const perulanganIsiProses = function() {
  		let isiProses = '';
  		for (let prs = 0; prs < konten.length; prs++) {
    		isiProses += `<span class="proses-anak-back"><span class="proses-anak"></span></span></span>`;
  		}
  		return isiProses;
	};
	
	const perulanganStyleProses = function() {
  		let styleProses = '';
		for (let prs = 0; prs < konten.length; prs++) {
    		styleProses += "1fr ";
  		}
		return styleProses.trim();
	};


	proses.innerHTML = perulanganIsiProses()
	proses.style.gridTemplateColumns = perulanganStyleProses();
  	document.querySelectorAll('.proses-anak')[0].innerHTML = `<span class="proses-anak-panah"></span>`


// MUTE & UNMUTE AUDIO

muteButton.addEventListener('click', audioMute)

function muteAudioMateri(){
	for(let i = 0; i < audioMateri.length; i++){
    	audioMateri[i].muted = true;
    }
}
function unmuteAudioMateri(){
	for(let i = 0; i < audioMateri.length; i++){
    	audioMateri[i].muted = false;
    }
}

function audioMute() {
    if (logoVolume[0].className == "fa-solid fa-volume-high" ) {
        logoVolume[0].classList.remove("fa-volume-high");
        logoVolume[0].classList.add("fa-volume-xmark");
		muteAudioMateri();
    } else {
        logoVolume[0].classList.remove("fa-volume-xmark");
        logoVolume[0].classList.add("fa-volume-high");
        unmuteAudioMateri();
    }
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
	fiturAtasGrup.style.top = "20vh";
} else {
	konten[x].style.height = null;
	kepala.style.transform = null;
	luasin.className = "fa-solid fa-expand";
	fiturAtasGrup.style.top = null;
}
}

//NEXT & PREV DENGAN KLICK
    
halamanKe.innerHTML = "<p>" + (x+1) + "/" + konten.length + "</p>";
if (x == 1){
	audioMateri[1].play();
}
  
next.addEventListener("click", n);
prev.addEventListener("click", p);
  
if (x == 0){
	proses.childNodes[0].childNodes[0].style.width = "100%";
	proses.childNodes[0].childNodes[0].style.animation = "9s waktu-audio-biru linear";
}

function n() {
	if (x == y){
    	konten[x].style.display = "flex";
	} else {
    	suaraKlik.play();
      	if (x < (konten.length - 2)){
	  		audioMateri[x+1].play();
        }
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
      	proses.childNodes[x+1].childNodes[0].style.animation = "waktu-audio-biru linear";
      	proses.childNodes[x+1].childNodes[0].style.animationDuration = audioMateri[x+1].duration + "s";
      	proses.childNodes[x+1].childNodes[0].style.width = "100%";
      	proses.childNodes[x].childNodes[0].style.width = "100%";
		proses.childNodes[x].childNodes[0].style.animation = "";
      	proses.childNodes[x].childNodes[0].style.animationDuration = "";
      	document.querySelectorAll('.proses-anak')[x].innerHTML = `<span class=""></span>`
      	document.querySelectorAll('.proses-anak')[x+1].innerHTML = `<span class="proses-anak-panah"></span>`
    	x++;
	} 	
}

function p() {
	if (x == 0){
    	konten[x].style.display = "flex";
	} else {
    	suaraKlik.play();
      	if (x > 1) {
        	audioMateri[x-1].play();
        }
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
		proses.childNodes[x-1].childNodes[0].style.animation = "waktu-audio-biru linear";
      	proses.childNodes[x-1].childNodes[0].style.animationDuration = audioMateri[x-1].duration + "s";
      	proses.childNodes[x-1].childNodes[0].style.width = "100%";
      	if (x == 1){
			proses.childNodes[0].childNodes[0].style.width = "100%";
			proses.childNodes[0].childNodes[0].style.animation = "9s waktu-audio-biru linear";
		}
      	proses.childNodes[x].childNodes[0].style.width = "";
		proses.childNodes[x].childNodes[0].style.animation = "";
      	proses.childNodes[x].childNodes[0].style.animationDuration = "";
      	document.querySelectorAll('.proses-anak')[x].innerHTML = `<span class=""></span>`
      	document.querySelectorAll('.proses-anak')[x-1].innerHTML = `<span class="proses-anak-panah"></span>`
        x--;
	}
}

//KEYBOARD EVENT

document.addEventListener("keydown", (event) => {
	const namaKey = event.key
	const kodeKey = event.keyCode
    
	if (namaKey == "ArrowRight") {
      		n();
	} else if (namaKey == "ArrowLeft"){
      		p();
	} else if (kodeKey == 32){
		bukatutupdaftarisi();	
	} else if (namaKey == "Enter") {
		closePetunjuk();
	} else if (namaKey == "m") {
		audioMute();
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
