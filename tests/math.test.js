const {caculateTip,ctoF,ftoC,add}=require('../src/math')
test('should calcualte',() => {
    const total=caculateTip(10, .3)
    expect(total).toBe(13)
})
test('default test',()=>{
    const total=caculateTip(10)
    expect(total).toBe(12.5)
})
test('check celsius',()=>{
    const celsius=ftoC(32)
    expect(celsius).toBe(0)
})

test("check Fahrenheit",()=>{
    const Fahrenheit=ctoF(0)
    expect(Fahrenheit).toBe(32)
})

// test('Async demo',(done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     })
//     },2000)
   
 test('Should add two number',(done)=>{
     add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()
     })
 })   

 