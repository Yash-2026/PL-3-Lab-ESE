function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function addLikes() {
    // Retrieve the current cart count from localStorage
    let cartCount = localStorage.getItem('cartCount') || 0;

    // Increment the cart count
    cartCount++;

    // Update the cart count in localStorage
    localStorage.setItem('cartCount', cartCount);

    // Update the cart count display on the page
    document.getElementById('cartCount').textContent = cartCount;
}

