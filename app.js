const reviews = [
  {
    id:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU",
    name:"ricky bhai",
    job:"breathing",
    info:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
  },
  {
    id:2,
    img:"https://www.beano.com/wp-content/uploads/2022/07/gorilla-black.jpeg?w=485&strip=all&quality=85",
    name:"real boss",
    job:"banana",
    info:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain." 
  },
  {
    id:3,
    img:'https://i.pinimg.com/236x/3f/6f/ce/3f6fce74c41bac39c628f733df5b8330.jpg',
    name:"heh",
    job:"heh",
    info:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
]

const img = document.getElementById("img");
const username = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const surpriseBtn = document.getElementById("surprise-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
 showContent()
})


function showContent(){
  let item = reviews[currentItem]
  img.src = item.img;
  username.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  
  showContent();
})


prevBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1
  }
  showContent();
})

surpriseBtn.addEventListener("click",function(){
  currentItem = Math.floor(Math.random()*reviews.length)
  console.log(currentItem)
  showContent();
  })