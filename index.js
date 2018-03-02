var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Jesus" + i,
            email: "j" + i + "@gmail.com",
            salary: (i + 100000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
    var lastPerson;
    lastPerson = {
        name: "Jesus",
        email: "email.com",
        salary: 2000,
        active: true
    };
    //Agregar un email feo
    people.push(lastPerson);
}
// function 
function validate() {
    people.forEach(function (element) {
        var banderaemail = false;
        var a = element.email.split('');
        for (var i = 0; i < a.length; i++) {
            if (a[i] == '@')
                banderaemail = true;
        }
        if (element.active && banderaemail)
            console.log(element);
    });
}
createPeople();
validate();
