
// Replacing Images in index.html
function productPage () {
    fetch("http://localhost:3000/products_fetch")
        .then(res => res.json())
        .then(data => {
            console.log("The products acquired data from the server response is  " , data);
            data.forEach(product => {
                let element = document.getElementById(`${product.id}`);
                console.log(element + "\n") // Debug 
                let element_sale = document.getElementById(`sale` + `${product.id}` );
                element.innerHTML = ''; // Making the insides empty
                element.innerHTML = `
                    <a class="aa-product-img" href="#"><img src="${product.image}" alt="polo shirt img"></a>'
                <a class="aa-add-card-btn"href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                    <figcaption>
                      <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
                      <span class="aa-product-price">$ ${product.price}</span><span class="aa-product-price"><del>$65.50</del></span>
                      <p class="aa-product-descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus facere iusto, autem soluta amet sapiente ratione inventore nesciunt a, maxime quasi consectetur, rerum illum.</p>
                    </figcaption> `; 
                  
              
                console.log(element + " image  successfull") // Debug 
            element_sale.innerHTML = `${product.sale_status}`;
            //console.log(`The type of tag id is ${typeof(element)} & tag is ${element_sale}`); //Debugging counter
            });
        })
        .catch(err =>{console.log(err)})
      }

//Fetch the carouel Images
function loadcarousel () {
    fetch("http://localhost:3000/carousel")
        .then(res => res.json())
        .then(data => {
            console.log("The carousel data from the server response is  " , data);
            data.forEach(carousel => {
                let car = document.getElementById(`carousel` + `${carousel.id}` );
                car.src = `${carousel.image}`
            });
        })
        .catch(err =>{console.log(err)})
      }
 

//Fetch the promo banner Images
function loadPban () {
    fetch("http://localhost:3000/promo_banner")
        .then(res => res.json())
        .then(data => {
            console.log("The promo banner data from the server response is  " , data);
            data.forEach(pban => {
                let pbanner = document.getElementById(`pban` + `${pban.id}` );
                pbanner.src = `${pban.image}`
            });
        })
        .catch(err =>{console.log(err)})
      }

//Displays the single banner at the lower region in the middle of the page 
function loadBanner () {
    fetch("http://localhost:3000/banner")
        .then(res => res.json())
        .then(data => {
            console.log("The promo banner data from the server response is  " , data);
            document.getElementById(`banner-1`).src = `${data.image}`;
        })
        .catch(err =>{console.log(err)})
      }

//Fetch the Blog Images
function loadBlog () {
    fetch("http://localhost:3000/blog")
        .then(res => res.json())
        .then(data => {
            console.log("The carousel data from the server response is  " , data);
            data.forEach(blog => {
                let bloImg = document.getElementById(`blog` + `${blog.id}` + `img` ); console.log(bloImg + "\t")
                let bloTile = document.getElementById(`blog` + `${blog.id}` + `title`); console.log(bloTile + "\t")
                let bloDesc = document.getElementById(`blog` + `${blog.id}` + `desc`); console.log(bloDesc + "\t")
                bloImg.src = `${blog.image}`
                bloTile.innerHTML = ``
                bloDesc.innerHTML = ``
                bloTile.innerHTML = `${blog.title}`
                bloDesc.innerHTML = `${blog.desc}`
            });
        })
        .catch(err =>{console.log(err)})
      }

function changeTitle (){
  fetch("http:/localhost:3000/page-title")
    .then(res => res.json())
    .then(data => {
      document.querySelector('title').textContent = data.title ;
    })
}


function ExecAll(){
   productPage()
   loadcarousel()
   loadPban ()
   loadBanner ()
   loadBlog ()
   changeTitle ()
}

ExecAll()
//setTimeout(ExecAll, 4500)
