function check() {

  var ff=bgs
  var arr=['opacity-0','opacity-100','translate-x-10','invisible']
  arr.map((val)=>{
    ff.classList.remove(val)
  })
  // ff.classList.toggle('hidden')
  var ele = document.getElementsByName('person');
    if(ele[0].checked){
      var rp=99
      
    }
    else{
      rp=649
    
    }
    
      var rtp=document.getElementsByName('room')
    if(rtp[0].checked){
      rp=rp+1599
      tp=rp
      warn.innerHTML = ' ‎ '

    }
    
    else if(rtp[1].checked){
      rp=rp+999
      tp=rp
      warn.innerHTML = ' ‎ '

    }
      
    else if(rtp[2].checked) {
      rp=rp+1299
      tp=rp
      warn.innerHTML = '‎  '
    }
    else{
      warn.innerHTML = 'Please select room type'
    }
    var brf=bf
    if(brf.checked){
     bffd.innerHTML=`Total Price including breakfase`
      rp=rp+499
    }
     else{
       rp=rp;
       bffd.innerHTML = `Total Price <span class='text-red-600'>excluding</span>  breakfase`
     }
     
    rprice.innerHTML=`Room Price <span class='text-2xl font-bold'>&#x20B9; ${tp}</span> `
    total.innerHTML = `<span class='text-2xl font-bold'>&#x20B9; ${rp}</span>`
}