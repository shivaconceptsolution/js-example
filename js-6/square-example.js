p=120000
r=8.5
t=10
n=12
r=r/100
total = p*(Math.pow((1+r/n),(n*t)));
console.log('total interest is ',total-p)
