// 1.array at//
let arr=["s",8,"r",9];
let index=2;
console.log(`using index ${index} the value is ${arr.at(index)}`);
// 2.concat//
let arr2=["i",10,"d","e","v","i"];
console.log(arr.concat(arr2));
//3.array copywith//
console.log(arr2.copyWithin(1,3,4));
//4.entries//
let arr3=arr2.entries();
console.log(arr3.next().value);
console.log(arr3.next().value);
//5.every method//
let one=[60,80,60,56,22,142];
let ans=one.every(function(chk)
{
	return chk>20;
});
console.log(ans);
//6.fill//
console.log(one.fill(5,2));
//7.filter method//
let name=["sri","sahana","swetha"];
let names=name.filter(function(you)
{
	return you.length>3;
});
console.log(names);
//8.find method//
let two=[30,20,40,150];
let fnans=two.find(function(fval)
{
	return fval>100;
});
console.log(fnans);
//9.findIndex//
let find=two.findIndex(function(mval)
{
	 return mval>30;
}
);
console.log(find);
//10.find last//
let fla=two.findLast(function(fav)

{
	  return fav<100;
});
console.log(fla);
//11.find last index//
let flai=two.findLastIndex(function(flaiv)
{
	 return flaiv<100;
});
console.log(flai);
//12.flat//
let  farray1=[2,6,4,[[[8,9]]]];
console.log(farray1.flat(2));
//13.flat map//
let flampv=[7,8,4,3,6]
let flmans=flampv.flatMap(function(mapv)
{
	 console.log(mapv,mapv*2);
	
});

//14.foreach//
let fordata=[5,7,8,9];
fordata.forEach(element=> console.log(element));
//15.form//
console.log(Array.from('4,5,6,2'));




// for each//
 let array1=["s",5,2];
 let ansaa=array1.forEach(function(elea)
 {
	 console.log(elea);
 });
 
 // filter method//
 let myname=["saha","swetha","saina"];
 let ansname=myname.filter(function(namval)
 {
	  return namval.length>4
 });
 console.log(ansname);
 //every//
 let evval=[3,1,5];
 let ansev=evval.every(function(myvale)
 {
	 return (myvale>2)
 });
 console.log(ansev);
 // 16.incled()//
 let iarr=[7,56,4,7];
 console.log(iarr.includes(56));
 console.log(iarr.includes(8));
 //17.indexOf//
 console.log(iarr.indexOf(4));
 //18.isArray()//
 // console.log(iarr.isArray(3));
 //19.join()//
 let jarr=["sai","sara","saha","sai"];
 console.log(jarr.join("-"));
 //20.keys//
 let keysj=jarr.keys();
 for(let key of keysj)
 {
	 console.log(key);
 }
 //21.last indexof//
 console.log(jarr.lastIndexOf('sai'));
 //22.map method()//
 let marr=[9,8,5,3];
 let maans=marr.map((mdata)=>mdata*2);
 console.log(maans);
 //23.pop methos()//
 console.log(marr.pop());
 //24.push()//
 console.log(marr.push(90));
 console.log(marr);
 //25.reduce()//
 //reduce method//
  let age=[16,22,19,2,10,20,89,90,78];
  let redage=age.reduce(function(previousval,currentval)
	{
		return previousval+currentval;
	},0);
	console.log("the age of return:"+redage);
 //26.reduce right()//
 //27.reverce//
 console.log(marr.reverse());
 //28.shift method//
 console.log(marr.shift());
 //29.slice method//
 slarry=["apple","orange","banana","lemon","papaya"];
 console.log(slarry.slice(2));
 console.log(slarry.slice());
 console.log(slarry.slice(2,3));
 //30.some()//
 let smans=marr.some((svalue)=>svalue>8);
 console.log(smans);
 //31.sort method//
 let sno=[90,43,22,12,3,0,224];
 console.log(sno.sort());
 //32.splice//
let splicedate=["tomato","potato","brinjal","chilly"];
splicedate.splice(1,0,"carrot");
console.log(splicedate);
splicedate.splice(2,1,"caps");
console.log(splicedate);
//33.toString()//
console.log(splicedate.toString());//
//34.unshift//
console.log(splicedate.unshift("money","man"));
console.log(splicedate);
//35.values//
let valsarr=[9,5,4,5];
let valits=valsarr.values();
for(let myans of valits)
{
	 console.log(myans);
}
