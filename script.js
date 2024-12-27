function indexOfIgnoreCase(s1, s2) {
	let s = s1.toLowerCase()
	let u = s2.toLowerCase()
	let ind = -1
	if(s.includes(u)){
		for(let i=0; i<s.length; i++){
			for(let j=i+1; j<=s.length; j++){
				let sub = s.slice(i,j)
				if(sub == u){
					ind = i
				}
			}
		}
		return ind
	}else{
		return ind
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

