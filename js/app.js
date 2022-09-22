// TweenMax.from('#cell84000',1, {
//     x:-screen.width*1.5,width:200,autoAlpha:0,ease:Power2.easeOut
// })
const animate2 = () => {
    TweenMax.fromTo('#cell84000',2, {
        x:-200,ease:Power2.easeIn
    },{
        x:screen.width*1.5,ease:"power4.out"
    })
    TweenMax.fromTo('#cell840000000000',2, {
        x:200,ease:Power2.easeIn
    },{
        x:-screen.width*1.5,ease:"power4.out"
    })
}
TweenMax.fromTo('#cell84000',2, {
    x:-screen.width*1.5,ease:Power4.easeOut,height:300,width:500
},{
    x:-200,ease:"slow(0.7, 0.7, true)"
})
TweenMax.fromTo('#cell840000000000',2, {
    x:screen.width*1.5,ease:Power4.easeOut,height:300,width:500
},{
    x:200,ease:"slow(0.7, 0.7, true)"
})
setTimeout(animate2, 2000);
const main = () => {
    const cancerEaten = new Date(document.getElementById('cancerEaten').value)
    const underDevelopment = new Date(document.getElementById('underDevelopment').value)
    var birth = new Date(document.getElementById('birth').value)
    const snap = [birth,underDevelopment,cancerEaten]
    const domain = snap.map(i => {
        return (i.getTime() - birth.getTime()) / (1000 * 3600 * 24)
    })
    // console.log(domain)
    const customDate = new Date(document.getElementById('customDate').value)
    const customCell = document.getElementById('customCell').value
    const diffDate = (customDate.getTime() - birth.getTime()) / (1000 * 3600 * 24)
    // console.log(diffDate)
    console.log(domain)
    yscaleLinear = d3.scaleLinear().domain(domain).range([0,84000,840000000000]).clamp(true)
    yscaleSqrt = d3.scaleSqrt().domain(domain).range([0,84000,840000000000]).clamp(true)
    yscalePow = d3.scalePow().domain(domain).range([0,84000,840000000000]).clamp(true)
    yscaleLog = d3.scaleLog().domain(domain).range([0,84000,840000000000])
    document.getElementById('scaleLinear').innerText = `${parseInt(yscaleLinear(diffDate))}`
    document.getElementById('scaleSqrt').innerText = `${parseInt(yscaleSqrt(diffDate))}`
    document.getElementById('scalePow').innerText = `${parseInt(yscalePow(diffDate))}`
    document.getElementById('scaleLog').innerText = `${parseInt(parseFloat(yscaleLog(diffDate)))}`
    var tempDate1 = new Date(document.getElementById('birth').value)
    var tempDate2 = new Date(document.getElementById('birth').value)
    var tempDate3 = new Date(document.getElementById('birth').value)
    var tempDate4 = new Date(document.getElementById('birth').value)
    // console.log(result)
    tempDate1.setDate(tempDate1.getDate() + parseInt(yscaleLinear.invert(customCell)))
    tempDate2.setDate(tempDate2.getDate() + parseInt(yscaleSqrt.invert(customCell)))
    tempDate3.setDate(tempDate3.getDate() + parseInt(yscalePow.invert(customCell)))
    tempDate4.setDate(tempDate4.getDate() + parseInt(yscaleLog.invert(customCell)))
    // console.log(result)

    document.getElementById('scaleLinearInvert').innerText = `${tempDate1.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}`
    document.getElementById('scaleSqrtInvert').innerText = `${tempDate2.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}`
    document.getElementById('scalePowInvert').innerText = `${tempDate3.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}`
    document.getElementById('scaleLogInvert').innerText = `${tempDate4.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}`
}
setTimeout(main, 3000);
const toDatePicker = ['birth','underDevelopment','cancerEaten','customDate']
toDatePicker.map(i => {
    $(`#${i}`).datepicker();
})