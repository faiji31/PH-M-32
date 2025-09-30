// console.log('Explore Api');

const person ={
    name:'liam',
    isStudent:true,
    friends:['ariful,rabiul,mustaq'],
    age:22

}
console.log(person , typeof person);

// JSON.stringfy  json format e convert kora jai

const personjason = JSON.stringify(person);
console.log(personjason , typeof personjason);