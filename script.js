var score = 0;
var scoretampil = document.getElementById('score')
function end() {
    
}
function demo() {
    document.getElementById("utama").style.display = "block"       
}
const startingMinutes = 2 ; 
let time = startingMinutes * 60;

const countdownE1 = document.getElementById('cooldown1');

const hitungmundur = setInterval (updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownE1.innerHTML = `${minutes}:${seconds}`; 
    time--;

    if( time == 0 ) {
        clearInterval(hitungmundur);
        countdownE1.innerHTML = 'Waktu anda Habis';
        location.href = 'index.html';
        alert("WAKTU ANDA HABIS,SILAHKAN MULAI DARI AWAL");
    } 
}

//soal pertama tebak gambar//
function demo1() {
    document.getElementById('salah1').style.display = "none"
}
function demo1() {
    document.getElementById('benar1').style.display = "none"
}

function lobby1 () {
    var silang1 = confirm("yakin mau ulang?")

    if (silang1)  {
        window.location = "index.html";
    }  else {
        }
}
score = 5
function demo1 ()  {
    let search1 =   document.querySelector('.search1')
if   (search1.value.trim() == 'kerajaan mataram') {
    document.getElementById('benar1').style.display = "block"
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            text: 'gampang kan..',
            footer: '<a href="soal2.html">Lanjut</a>',

})  
}
else {
    document.getElementById("salah1").innerHTML = "Masa gitu doang ga bisa jawab, cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah1').style.display = "block"
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah1 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    }
}
//soal kedua tebak gambar//
function demo2() {
    document.getElementById('salah2').style.display = "none"
}
function demo2() {
    document.getElementById('benar2').style.display = "none"
}
function lobby2 () {
    var silang2 = confirm("YAKIN MAU ULANG?")

    if (silang2)  {
        window.location = "index.html";
    }  else {
        }
}
function demo2 ()  {
    let search2 =   document.querySelector('.search2')
if   (search2.value.trim() == 'teori waisya') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal3.html">Lanjut</a>'
        
    
})  
}
else {
    document.getElementById("salah2").innerHTML = "Masa gitu doang ga bisa jawab, cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah2').style.display = "block"
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah2 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    }
}
//soal ketiga tebak gambar//
function demo3() {
    document.getElementById('salah3').style.display = "none"
}
function demo3() {
    document.getElementById('benar3').style.display = "none"
}
function lobby3 () {
    var silang3 = confirm("YAKIN MAU ULANG?")

    if (silang3)  {
        window.location = "index.html";
    }  else {
        }
}
function demo3 ()  {
    let search3 =   document.querySelector('.search3')
if   (search3.value.trim() == 'teori arus balik') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal4.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah3").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah3').style.display = "block"
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah3 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    }
}
// Soal Keempat //
function demo4() {
    document.getElementById('salah4').style.display = "none"
}
function demo4() {
    document.getElementById('benar4').style.display = "none"
}
function lobby4 () {
    var silang4 = confirm("YAKIN MAU ULANG?")

    if (silang4)  {
        window.location = "index.html";
    }  else {
        }
}
function demo4 ()  {
    let search4 =   document.querySelector('.search4')
if   (search4.value.trim() == 'sunan kalijaga') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal5.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah4").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah4').style.display = "block"
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah4 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    }
}
 // soal kelima // 
 function demo5() {
    document.getElementById('salah5').style.display = "none"
}
function demo5() {
    document.getElementById('benar5').style.display = "none"
}  
 function lobby5 () {
    var silang5 = confirm("YAKIN MAU ULANG?")

    if (silang5)  {
        window.location = "index.html";
    }  else {
        }
}
function demo5 ()  {
    let search5 =   document.querySelector('.search5')
if   (search5.value.trim() == 'kenduri') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal6.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah5").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah5').style.display = "block"
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah5 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    }
}
// soal keenam //
function demo6() {
    document.getElementById('salah6').style.display = "none"
}
function demo6() {
    document.getElementById('benar6').style.display = "none"
}  
function lobby6 () {
    var silang6 = confirm("YAKIN MAU ULANG?")

    if (silang6)  {
        window.location = "index.html";
    }  else {
        }
}
function demo6 ()  {
    let search6 = document.querySelector('.search6')
if   (search6.value.trim() == 'kerajaan sriwijaya') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal7.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah6").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah6').style.display = "block"
    
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah6 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    
    }
}
// soal ketujuh //
function demo7() {
    document.getElementById('salah7').style.display = "none"
}
function demo7() {
    document.getElementById('benar7').style.display = "none"
}  
function lobby7() {
    var silang7 = confirm("YAKIN MAU ULANG?")

    if (silang7)  {
        window.location = "index.html";
    }  else {
        }
}
function demo7()  {
    let search7 =   document.querySelector('.search7')
if   (search7.value.trim() == 'sunan drajat') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal8.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah7").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah7').style.display = "block"
    
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah7 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    
    }
}
// soal delapan //
function demo8() {
    document.getElementById('salah8').style.display = "none"
}
function demo8() {
    document.getElementById('benar8').style.display = "none"
}  
function lobby8 () {
    var silang8 = confirm("YAKIN MAU ULANG?")

    if (silang8)  {
        window.location = "index.html";
    }  else {
        }
}
function demo8 ()  {
    let search8 =   document.querySelector('.search8')
if   (search8.value.trim() == 'abdul muhyi') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal9.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah8").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah8').style.display = "block"
    
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah8 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    
    }
}
// Soal Kesembilan //
function demo9() {
    document.getElementById('salah9').style.display = "none"
}
function demo9() {
    document.getElementById('benar9').style.display = "none"
} 
function lobby9 () {
    var silang9 = confirm("YAKIN MAU ULANG?")

    if (silang9)  {
        window.location = "index.html";
    }  else {
        }
}
function demo9 ()  {
    let search9 =   document.querySelector('.search9')
if   (search9.value.trim() == 'sultan suriansyah') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="soal10.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah9").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah9').style.display = "block"
    
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah9 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    
    }
}
// soal kesepuluh //
function demo10() {
    document.getElementById('salah10').style.display = "none"
}
function demo10() {
    document.getElementById('benar10').style.display = "none"
} 
function lobby10 () {
    var silang10 = confirm("YAKIN MAU ULANG?")

    if (silang10)  {
        window.location = "index.html";
    }  else {
        }
}
function demo10 ()  {
    let search10 =   document.querySelector('.search10')
if   (search10.value.trim() == 'siddharta gautama') {
        Swal.fire ({
            icon: 'success',
            title: 'Jawaban Anda benar',
            footer: '<a href="end.html">Lanjut</a>'
    
})  
}
else {
    document.getElementById("salah10").innerHTML = "Masa gitu doang ga bisa jawab,cemen huuu..";
    score -= 1
    document.getElementById('score').innerHTML = score
    document.getElementById('salah10').style.display = "block"
    
    Swal.fire ({
        icon: 'error',
        title: 'Jawaban Anda Salah/Harus Diisi',
        text: 'Coba Lagi',

        })
        if ( score == 0) {
            window.location.href = 'index.html'
            var salah10 = alert("ANDA SUDAH KALAH,SILAHKAN MULAI DARI AWAL LAGI *CUPU")
         }
    
    }
}