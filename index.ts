interface Person{
    name:string;
    email:string;
    salary:number;
    active:boolean;
}

var people = Array<Person>();

function createPeople():void{
    let newPerson:any;
    for(let i =0; i<10;i++){
        newPerson ={
            name :`Jesus${i}`,
            email:`j${i}@gmail.com`,
            salary:(i+100000),
            active: i%2==0?true:false
        }
        people.push(newPerson);
    }
    let lastPerson:any;
    lastPerson ={
        name:`Jesus`,
        email:`email.com`,
        salary:2000,
        active:true
    }
    //Agregar un email feo
    people.push(lastPerson);
}

// function 
function validate():void{

    people.forEach(element => {
         let banderaemail:boolean=false; 
         var a = element.email.split('');
         for(var i=0;i<a.length;i++){
             if(a[i]=='@')banderaemail=true;
         }
         if(element.active && banderaemail)
         console.log(element);
    });

}

createPeople();
validate();



