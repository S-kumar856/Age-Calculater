const dateInput = document.querySelector(".date-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageResult = document.querySelector(".result");

calculatebtn.addEventListener("click", () => {
    if(dateInput.value === ""){
        alert("Please enter your date of birth");
    }else{
        // console.log(dateInput.value);
        const dob = new Date(dateInput.value);
        // console.log(dob)
        const dob_year = dob.getFullYear()
        // console.log(dob_year)
        
        //current date 
        const current_year = new Date().getFullYear();
        // console.log(current_year)

        const age = current_year - dob_year;
        console.log(age)

        ageResult.innerHTML = `Your current age is ${age} years`;
    }
});

// const dateInput = document.querySelector(".date-input");
// const calculatebtn = document.querySelector(".calculate-btn");
// const ageResult = document.querySelector(".result");

// calculatebtn.addEventListener("click", () => {
//     if(dateInput.value === ""){
//         alert("Please enter your date of birth");
//     }
// });

