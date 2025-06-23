const form = document.querySelector("form")
console.log(form)
    
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    console.log(height, weight);

    if((height === 0 || isNaN(height) ||height < 0 || height === "")&&(weight === 0 || isNaN(weight) || weight < 0 || weight === "")) {
        result.innerHTML = "Please enter valid values for height and weight.";
        }

    else if(weight === 0 || isNaN(weight) || weight < 0 || weight === "") {
        result.innerHTML = "Please enter valid values for weight.";
        
    }
    else if(height === 0 || isNaN(height) || height < 0 || height === "") {
        result.innerHTML = "Please enter valid values for height.";
        
    }
    else if (height > 300 || weight > 500 || height < 30 || weight < 20) {
        result.innerHTML = "Please enter realistic values for height and weight.";
        
    }
    else{
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}.</span><br>`;

        if (bmi < 18.5) {
            result.innerHTML += "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML += "You are overweight.";
        } else {
            result.innerHTML += "You are obese.";
        }
    }
})