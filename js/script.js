/*
function Product(brend,price,discount){
  this.brend = brend;
  this.price = price;
  this.discount = discount;

}

Product.prototype.getPriceWithDiscount = function(){
  return (this.price * (100 - this.discount)) /100;
}
const apple = new Product('apple', 100,15);
const samsung = new Product('samsung',200,25);
console.log(apple);
console.log(samsung)
*/
/*
const protoforobj = {
  sayhello(){
    return 'hello';
  }
}
let obj = Object.create(protoforobj,{
  firstname:{
    value:'deni',
}
});

function User(firstname,lastname){
  this.firstname = firstname;
  this.lastname = lastname

}
User.prototype.getFullname = function(){
  return `${this.firstname} ${this.lastname}`
}
User.prototype.sayhello = function(){
  return `hello ${this.firstname} ${this.lastname}`
}
const user = new User('deni', 'webeqooo')

function Customer(firstname,lastname,membrship){
  User.apply(this,arguments);
}
Customer.prototype = Object.create(User.prototype);
const customer = new Customer('ivan','meschenko','basic');
*/

//const { builtinModules } = require("module");


/*
class ProductES{
    constructor(brend,price,discount){
      this.brend = brend;
      this.price = price;
      this.discount = discount;

    }
    getPriceWithDiscount(){
      return (this.price * (100 - this.discount)) /100;
    }
    setPrice(newPrice){
      this.price = newPrice;
    }
}
const newProduct = new ProductES('samsung',200,10)
*/
/*
const btn = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-post')
const container = document.querySelector('.container');
function getPost(cb){
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.addEventListener("load", () => {
  const response = JSON.parse(xhr.responseText);
  cb(response);
});
xhr.addEventListener('error', () =>{
  console.log('error');
});
xhr.send();
}
btn.addEventListener('click',e => {
  getPost(response =>{
    console.log(response)
  });
});


function createPost(body,cb){
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.addEventListener("load", () => {
  const response = JSON.parse(xhr.responseText);
  cb(response);
});
xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');
xhr.addEventListener('error', () =>{
  console.log('error');
});
xhr.send(JSON.stringify(body));
}

function renderPosts(response){

}
btn.addEventListener('click', e => {
  getPost(renderPosts);
});
btnAddPost.addEventListener('click', e => {
  const newPost = {
    name: 'deni',
    age: 25,
    userId: 1,
  };
  createPost(newPost,response =>{
    console.log(response);
  });
});
*/



//DOM---

//const title = document.querySelector('h1');
//console.log(link.closest(".content"));
//console.log(link.parentElement)
//link.setAttribute('id', 'myid')
//link.removeAttribute("id")
//link.getAttribute("id")
//link.hasAttribute("id")
//const title = document.querySelector('h1');
//title.innerHTML += '<span>new text</spam>';
//const span = title.querySelector('span')
//console.log(span);
//title.innerHTML += '<span>new text 2</span>';
//span.textContent = 'asdase'
//title.textContent = 'new text';

//const span = document.createElement('span')
//span.textContent = "kolya";
//span.classList.add("myclass")
//console.log(span)
//title.appendChild(span) ekranin ereva kolyan
//div.appendChild(span)


//DELETE
//title.remove() jnjuma class
//title.parentElement.removeChild(title)

/*
const span = document.querySelector('span');
const spanParent = document.querySelector('.another-div');


function isParent(parent,child){
  let curentParent = child.parentElement; //parent-3
  let isParent = false;

  while (curentParent) {
    isParent = parent === curentParent; //false,false,true
    if(isParent){
      curentParent = null;
    }else {
      curentParent = curentParent.parentElement;//parent-2,parent-1
    }
  }
  return isParent;
}
//console.log(isParent(spanParent,span));
const p = document.querySelector('p');
const [...childNodes] = p.childNodes;
childNodes.forEach(node => {
  if(node.nodeType ===3){
    node.textContent = '-text-'
  }

});
*/
//console.log(childNodes);


//const ul = document.querySelector('ul');
//const counts = 4;
///const totalCounts = ul.children.length + counts;

//for(let i = ul.children.length + 1; i < totalCounts; i++){
//  const li = document.createElement('li');
//  li.classList.add('new-item')
//  li.textContent = `item ${i}`;
//  ul.appendChild(li);
//}
/*
window.addEventListener("DOMContentLoaded", () =>{
    const body = document.querySelector('body');
  function recursy(element){
    element.childNodes.forEach(node =>{
      console.log(node);
      if(element.childNodes.length > 1){
        recursy(node)
      }
    })
  }
  recursy(body);
});
*/
/*
const btn = document.querySelector('button');
const link = document.querySelector('a')

btn.addEventListener('click', (e) =>{
    console.log(this)
    console.log(e)
})
function clickhandel(e){
  e.preventDefault()
  console.log(this);
  console.log('click')
}
link.addEventListener('click', clickhandel);
*/
const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  const div = document.createElement('div');
  const btn = document.createElement('button')
  div.textContent = Math.random();
  container.appendChild(div)
});

btn.addEventListener('click', e =>{
  e.dtopPropagation()
  console.log('click')
})
