function insert(num){
    var isibar = document.getElementById('isibar')
    isibar.value += num;
}

function hapussemua(){
    var isibar = document.getElementById('isibar')
    isibar.value = "";
}

function hapussatu(){
    var isibar = document.getElementById('isibar')
    var hapus = isibar.value
    var satu = hapus.substring(0, hapus.length-1)
    isibar.value = satu;

}

function hasil(){
    var isibar = document.getElementById('isibar')
    var hasil = eval(isibar.value)
    isibar.value = hasil;
}