function subscribeButton(){
    event.preventDefault();
    let input=document.querySelectorAll("#email")
    let inputValue=console.log(input.value);
    alert("Thank you for subscribing and will send you our best accesssories new to the market");
    }

    const formSubmit=document.querySelector("form");
    
    formSubmit.addEventListener("submit",subscribeButton);

