// testimonials section
const dot = document.querySelectorAll(".controller__dot");
const activeDot = "controller__dot--active";
let isUpdated = false;

const toggleMobileNav = (elem) => {
    document.querySelector('.'+elem).classList.toggle('d-block');
}


const dotButton = (elem) => {
        for(let i=0; i<dot.length; i++){
            dot[i].classList.remove(activeDot); 
        }  
        dot[elem].classList.add(activeDot);
        
        if (!isUpdated){
            isUpdated = true;
            card(elem);
        }
        isUpdated = false;
}

const customerCard = document.querySelectorAll(".customers__card");
const activeCard = "customers__card--active";

const card = (elem) => {
    for(let i=0; i<customerCard.length; i++){
        customerCard[i].classList.remove(activeCard); 
    }  
    customerCard[elem].classList.add(activeCard);

    if (!isUpdated){
        isUpdated = true;
        dotButton(elem);
    }
    isUpdated = false;
}

const nextButton = () => {
    let isNext = false;
    for(let i=0; i < customerCard.length; i++){    
        if(i != customerCard.length - 1){
            if(isNext){
                //if the button was pressed finish the loop
                continue;
            } else {
                if(customerCard[i].classList.contains(activeCard) && i != customerCard.length){
                    customerCard[i].classList.remove(activeCard);
                    card(i+1);
                    isNext = true;
                } 
            }
        }else{
            isNext = false;
        }     
    }
}

const prevButton = () => {
    let isPrev= false;
    for(let i=0; i < customerCard.length; i++){    
        if(i != customerCard.length){
            if(isPrev){
                //if the button was pressed finish the loop
                continue;
            } else {
                if(customerCard[i].classList.contains(activeCard) && i != 0){
                    customerCard[i].classList.remove(activeCard);
                    card(i-1);
                    isPrev = true;
                } 
            }
        }else{
            isPrev = false;
        }     
    }
}
