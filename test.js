class A {
	constructor(prop){
		this.p1= 's',
		this.name= prop.name,
		this.age= prop.age
	}
	static fuc(){
		console.log(this.name)
	}
	fuc1(){
	
		console.log('a')
	}
	
}

class B extends A {
	fuc1(){
		console.log('B')
	}
	fuc2(){
		return super.fuc1
	
	}
}

s = new B({name:'55',age:5})
