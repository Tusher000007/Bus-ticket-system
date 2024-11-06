
// Connecting "Buy Ticket" button with ticket section
function scrollDown(){
    // const source = document.getElementById("buyTicket");
    // source.addEventListener("click", function(){

    // })
    document.addEventListener("DOMContentLoaded", function(){
        const source = document.getElementById("buyTicket");
        source.addEventListener("click", function(){
            const target = document.getElementById("ticketSection");
            target.scrollIntoView({behavior: "smooth"});
        })
    })
}

scrollDown();

// Creating a function to change color onClick to a seat
// This function will also change the available seats

let count = 0

function changeColor(elementId){
    const selectedButton = document.getElementById(elementId);
    selectedButton.addEventListener("click", function select(){
        count++;

        if(count > 4){
            return "You can't select more";
        }

        selectedButton.style.backgroundColor = "#1DD100";
        

        function reduceSeat(){
            let seatAvailable = document.getElementById("availableSeat");
            let seatText = seatAvailable.innerText;
            let converted = parseInt(seatText);
            converted--;

            seatAvailable.innerText = converted;
        }
        reduceSeat();

        function addSeat(){
            let countSeat = document.getElementById("seatCount");
            let seatText = countSeat.innerText;
            let converted = parseInt(seatText);
            converted++;

            // Adding restriction to select seat above 4
            if(converted > 4){
                return "Error";
            }

            countSeat.innerText = converted;
        }
        addSeat();
    })
}

changeColor("A1");
changeColor("A2");
changeColor("A3");
changeColor("A4");
changeColor("B1");
changeColor("B2");
changeColor("B3");
changeColor("B4");

price("A1");
price("A2");
price("A3")
price("A4")
price("B1")
price("B2")
price("B3")
price("B4")



function price(elementId){
    let element = document.getElementById(elementId);
    element.addEventListener("click", function(){
        let elementText = element.innerText;

    let ul = document.createElement("ul");
    
    let liOne = document.createElement("li");
    liOne.innerText = elementText;

    let liTwo = document.createElement("li");
    liTwo.innerText = "Economy";

    let liThree = document.createElement("li");
    let priceOfTicket = document.getElementById("ticketPrice");
    let priceNumber = priceOfTicket.innerText;
    liThree.innerText = parseInt(priceNumber);

    ul.appendChild(liOne);
    ul.appendChild(liTwo);
    ul.appendChild(liThree);

    let target = document.getElementById("modifiedUl");
    target.appendChild(ul);

    let priceCount = document.getElementById("priceCount")
    let priceCountText = priceCount.innerText;
    let priceCountNumber = parseInt(priceCountText);
    priceCountNumber = priceCountNumber + parseInt(priceNumber);

    if(count > 4){
        target.removeChild(ul);
    }

    // Setting restriction for adding more than 4 seats
    if(priceCountNumber > 2200){
        return "Can't add more than four seats"
    }

    priceCount.innerText = priceCountNumber;

    let grandTotal = document.getElementById("totalPrice");
    grandTotal.innerText = priceCountNumber;

    let finalCoupon = document.getElementById("addCoupon");
    finalCoupon.addEventListener("click", function(){
        let firstCouponSelect = document.getElementById("firstCoupon");
    let secondCouponSelect = document.getElementById("secondCoupon");

    let firstCoupon = firstCouponSelect.innerText;
    let secondCoupon = secondCouponSelect.innerText;

    let couponTarget = document.getElementById("couponAdd");
    let couponValue = couponTarget.value;

    if(couponValue === firstCoupon){
        let discount = (priceCountNumber * 15 / 100);
        let priceAfterDiscount = priceCountNumber - discount;
        grandTotal.innerText = priceAfterDiscount;

        let couponSection = document.getElementById("couponSection");
        couponSection.classList.add("hidden");
    }
    else if(couponValue === secondCoupon){
        let discount = (priceCountNumber * 20 / 100);
        let priceAfterDiscount = priceCountNumber - discount;
        grandTotal.innerText = priceAfterDiscount;

        let couponSection = document.getElementById("couponSection");
        couponSection.classList.add("hidden");
    }

    })
    })
}
