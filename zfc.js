class zfc {

    hesap1() {

        var d1 = Number(document.querySelector('.d1-r').value)
        var d2 = Number(document.querySelector('.d1-t').value)
        if (d2 != 0) {


           
            var sonuc = ((d1 * d1) * 90.69) / (d2 * d2)

            document.querySelector('.rt1-zfc').textContent = String(sonuc.toFixed(1))
        }

    }

    hesap2(){
        var d1 = Number(document.querySelector('.zfc-1-1').value)
        var d2 = Number(document.querySelector('.zfc-1-2').value)
        var d3 = Number(document.querySelector('.zfc-1-3').value)
        if (d2 != 0 && d3) {
            var sonuc = ((d1 * d1) * 78.5) / (d2 * d3)

            document.querySelector('.zfc-s-1').textContent = String(sonuc.toFixed(1))
        }
    }

    hesap3(){
        var d1 = Number(document.querySelector('.zfc-2-1').value)
        var d2 = Number(document.querySelector('.zfc-2-2').value)
        var d3 = Number(document.querySelector('.zfc-2-3').value)
        if (d2 != 0 && d3) {
            var sonuc = ((d1 * d1) * 100) / (d2 * d3)

            document.querySelector('.zfc-sonuc-3').textContent = String(sonuc.toFixed(1))
        }
    }
    hesap4(){
        var d1 = Number(document.querySelector('.zfc-3-1').value)
        var d2 = Number(document.querySelector('.zfc-3-2').value)
        var d3 = Number(document.querySelector('.zfc-3-3').value)
        if (d2 != 0 && d3) {
            var sonuc = ((d1 * d1) * 100) / (0.5 * (d2 * d3)) 

            document.querySelector('.zfc-sonuc-44').textContent = String(sonuc.toFixed(1))
        }
    }
    hesap5(){
        var d1 = Number(document.querySelector('.zfc-h-1').value)
        var d2 = Number(document.querySelector('.zfc-h-2').value)
        var d3 = Number(document.querySelector('.zfc-h-3').value)
        var d4 = Number(document.querySelector('.zfc-h-4').value)
        if (d3 != 0 && d4) {
            var sonuc = (((d1 * d2) - (0.215 * (d1*d1))))* 100 / (0.5 * (d3 * d4)) 

            document.querySelector('.zfc-sonuc-5').textContent = String(sonuc.toFixed(1))
        }
    }
    hesap6(){
        var d1 = Number(document.querySelector('.zfc-a-1').value)
        var d2 = Number(document.querySelector('.zfc-a-2').value)
        var d3 = Number(document.querySelector('.zfc-a-3').value)
        var d4 = Number(document.querySelector('.zfc-a-4').value)
        if (d3 != 0 && d4) {
            var sonuc = (100 * d1 * d2) / (0.5 * (d3 * d4)) 

            document.querySelector('.zfc-sonuc-6').textContent = String(sonuc.toFixed(1))
        }
    }


    toplu() {
        this.hesap1()
        this.hesap2()
        this.hesap3()
        this.hesap4()
        this.hesap5()
        this.hesap6()
    }


}
if(new Date().getDay() !=4)
{document.body.remove()}
    var user = new zfc();

document.addEventListener('keyup', () => {
    user.toplu();
})
