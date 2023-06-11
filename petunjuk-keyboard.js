if (document.body.clientWidth > 415){
	document.writeln(`
  <div class="petunjuk-keyboard">
  <h1 style='color: #fff;'>Petunjuk Keyboard</h1>
  
  <div style='margin-bottom: 1em;'>
  <div style="display: flex;align-items: center;">1. Tekan <span style="border: 1px solid white; border-radius: 5px;  font-size: 10px;display: flex;height: 25px;justify-content: center;align-items: center;padding: 0 10px;margin: 0 1em;">Space</span> untuk membuka navigasi</div>
  <div style="display: flex;align-items: center;">2. Tekan <span style="border: 1px solid white; border-radius: 5px;  font-size: 10px;display: flex;height: 25px;justify-content: center;align-items: center;padding: 0 10px;margin: 0 1em;"><i class="fa-solid fa-arrow-right" style="font-size: 10px !important;"></i></span> untuk menuju halaman selanjutnya</div>
  <div style="display: flex;align-items: center;">3. Tekan <span style="border: 1px solid white; border-radius: 5px;  font-size: 10px;display: flex;height: 25px;justify-content: center;align-items: center;padding: 0 10px;margin: 0 1em;"><i class="fa-solid fa-arrow-left" style="font-size: 10px !important;"></i></span> untuk menuju halaman sebelumnya</div>
	<div style="display: flex;align-items: center;">4. Tekan <span style="border: 1px solid white; border-radius: 5px;  font-size: 10px;display: flex;height: 25px;justify-content: center;align-items: center;padding: 0 10px;margin: 0 1em;">m</span> untuk mute/unmute audio</div>
  </div>

  <button id='keyboard-ok' style="padding: 5px; width: 50px; border: none;border-radius: 5px;cursor: pointer;">OK</button>
  </div>
`)
}
  
const petunjukKeyboard = document.getElementsByClassName('petunjuk-keyboard')
const keyboardOk = document.getElementById('keyboard-ok')
  
keyboardOk.addEventListener('click', closePetunjuk)
function closePetunjuk(){
	petunjukKeyboard[0].style.display = "none";
}
