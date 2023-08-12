var perfumes = {
  greatSummit: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  dilDilPakistan: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  voyager: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  superStar: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  london: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  jahangirKhan: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  allRounder: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
  sherDil: {
    rate: 0,
    quantity: 0,
    price: 0,
  },
};

cartItems = document.getElementById("table-body");
clearCart=document.getElementById("clear-cart-btn")
orderNow=document.getElementById("order-now-btn")

clearCart.addEventListener("click",clearCartFunction)
function clearCartFunction(){
  cartItems.innerHTML=""

  for (const perfume in perfumes) {
    perfumes[perfume].quantity = 0;
    perfumes[perfume].price = 0;
  }
  totalPrice=0;
  totalPriceDiv=document.getElementById("total-price-container");
  totalPriceDiv.innerHTML="<hr style:'width:100%;color:white;'>Total Price: "+totalPrice;

}



function addToBag(perfumeName, perfumeRate) {
  console.log(perfumeName, perfumeRate);
  if (!perfumes[perfumeName].rate) {
    console.log("Here");
    perfumes[perfumeName].rate = parseInt(perfumeRate);
  }

  perfumes[perfumeName].quantity++;
  perfumes[perfumeName].price =
    perfumes[perfumeName].rate * perfumes[perfumeName].quantity;
  // console.log("Here",perfumes[perfumeName])

  console.log(perfumes);
  displayCart();
}

function displayCart() {
  totalPrice = 0;
  cartItems.innerHTML = "";
  if (perfumes["greatSummit"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Great Summit</td><td style='text-align:center;'>" +
      perfumes["greatSummit"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["greatSummit"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["greatSummit"].price +
      "<td></td></td></tr>";
    totalPrice += perfumes["greatSummit"].price;
  }
  if (perfumes["dilDilPakistan"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Dil Dil Pakistan</td><td style='text-align:center;'>" +
      perfumes["dilDilPakistan"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["dilDilPakistan"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["dilDilPakistan"].price +
      "<td></td></td></tr>";
    totalPrice += perfumes["dilDilPakistan"].price;
  }
  if (perfumes["voyager"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Voyager</td><td style='text-align:center;'>" +
      perfumes["voyager"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["voyager"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["voyager"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["voyager"].price;
    }
    if (perfumes["superStar"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Super Star</td><td style='text-align:center;'>" +
      perfumes["superStar"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["superStar"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["superStar"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["superStar"].price;
    }
    if (perfumes["london"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>London</td><td style='text-align:center;'>" +
      perfumes["london"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["london"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["london"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["london"].price;
    }
    if (perfumes["jahangirKhan"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Jahangir Khan</td><td style='text-align:center;'>" +
      perfumes["jahangirKhan"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["jahangirKhan"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["jahangirKhan"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["jahangirKhan"].price;
    }
    if (perfumes["allRounder"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>All Rounder</td><td style='text-align:center;'>" +
      perfumes["allRounder"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["allRounder"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["allRounder"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["allRounder"].price;
    }
    if (perfumes["sherDil"].quantity) {
    cartItems.innerHTML +=
      "<tr><td></td><td style='text-align:center;'>Sher Dil</td><td style='text-align:center;'>" +
      perfumes["sherDil"].rate +
      "</td><td style='text-align:center;'>" +
      perfumes["sherDil"].quantity +
      "</td><td style='text-align:center;'>" +
      perfumes["sherDil"].price +
      "<td></td></td></tr>";
      totalPrice += perfumes["sherDil"].price;
  }
  totalPriceDiv=document.getElementById("total-price-container");
  totalPriceDiv.innerHTML="<hr style:'width:100%;color:white;'>Total Price: "+totalPrice;
}



$(document).ready(function () {
  alert("WELCOME TO FAKE JJ");

  $(".shopping-bag").click(function (event) {
    $(".cart").slideToggle();

    // Add or remove 'dimmed' class from background elements
    $(".background-elements").toggleClass("dimmed");

    event.stopPropagation();
  });

  $(".cart-container").click(function (event) {
    event.stopPropagation();
  });

  $(document).click(function () {
    $(".cart").slideUp();
    $(".background-elements").removeClass("dimmed");
  });

  $(".custom-btn").click(function (event) {
    $(".cart").slideToggle();

    // Add or remove 'dimmed' class from background elements
    $(".background-elements").toggleClass("dimmed");

    event.stopPropagation();
  });
  
  $("#order-now-btn").click(function (event) {
    clearCartFunction();
    $(".cart").slideUp(
      function(){
        // Add or remove 'dimmed' class from background elements
        $(".background-elements").removeClass("dimmed");
    
        alert("Thank You for Ordering!")
      }
    );


    event.stopPropagation();
  });


});
