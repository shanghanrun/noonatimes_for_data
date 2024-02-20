a =[
    {t: {age: 1}, 
     s:2 }, 
    {t: {age: 2,},
     s:3 }
]

b =[{t: { age: 1}}]

// [[]]  배열이 이중으로 겹쳤을 경우
c =[[{t: 1}]]
d =[[{t:{age: 1}}]]


console.log(a.map(el => el.t.age +2).join(''))
console.log(b.map(el => el.t.age +2).join(''))

console.log(c.map(el => el.t +2).join(''))   // NaN
console.log(d.map(el => el.t.age +2).join(''))  
//TypeError: Cannot read properties of undefined (reading 'age')
// at Array.map (<anonymous>)



