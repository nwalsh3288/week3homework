

      

        

           // Assignment Code (Given)
           var generateBtn = document.querySelector("#generate"); 

              // GivenCode
         function writePassword() {
           promptTest()
            var password = generatePassword;
            var passwordText = document.querySelector("#password");
            passwordText.value = password;

      }
            
           // Add event listener to generate button (Given)
        generateBtn.addEventListener("click", writePassword);
      
         
    // oject that stores decision of trueand false
         var criteriaDecision = {
            isUppercase: null,
            isLowercase: null,
            isNumber: null,
            isSymbol: null,
            length: 0,
          }
    
    
        var promptTest = function(){
            // How long do you want you password to be? (numerical)
            var passwordLength = prompt ("How long do you want your password to be? (min 15 characters");
            criteriaDecision.length = passwordLength;
           // Do you want uppercase letters?
             var uppercase = confirm ("Do you want uppercase letters?");
             criteriaDecision.isUppercase = uppercase;
           // Do you want lowercase letters?
             var lowercase = confirm ("Do you want lowercase letters?");
            criteriaDecision.isLowercase = lowercase;
           // Do you want to have numbers?
             var number = confirm ("Do you want numbers?");
             criteriaDecision.isNumber = number;
           // Do you want special characters?
             var symbol = confirm ("Do you want symbols?");
             criteriaDecision.isSymbol = symbol;
 // User data is now stored


    // Agnostically store data (array, object) - definitions
    var passwordData = {
      number: "0123456789",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      symbol:"!@#$%^&*()",
    
  }
    // How do we create a new deck from the user data?
   //    1. create a new deck varrible
  
  //    2. grab deck corresponding to user decision 
  

  var storeDeck = ""; {
// - once i get paper i analyze the responses
      //  if question marks yes for uppercase, pull passworddata.uppercase --> if no, move to next question
      if (criteriaDecision.isUppercase === true){
        storeDeck += passwordData.uppercase
      } 
  //  if question marks yes for lowercase, pull passworddata.lowercase --> if no, move to next question
      if (criteriaDecision.isLowercase === true){
        storeDeck += passwordData.lowercase
        
      }
  // if question marks yes for number, pull passworddata.number --> if no, move to next question
      if (criteriaDecision.isNumber === true){      
        storeDeck += passwordData.number
      }
  // if question marks yes for symbol, pull passworddata.symbol --> if no, move to next question
     if (criteriaDecision.isSymbol === true){
      storeDeck += passwordData.symbol
      }
      console.log(storeDeck);
      
  
  }
  // end step: generate/combine into new string from the user data

  // Now we have big string!

  // How are going to grab the letters from the string?
  //  1. now I need to exact a card from my big deck
  // How are we going to decide which card?
  //  use random funtion to set index

  
  var combinePassword = "";
      for (i = 0; i < criteriaDecision.length; i++) {
          var random = Math.floor(Math.random() * (storeDeck.length-1));
          combinePassword += storeDeck[random];
          console.log(combinePassword);
      }

  generatePassword= combinePassword



};
           
   
           
        
    
   

    



    //  var combinePassword = "";
    // for (i = 0; i < criteriaDecision.length; i++) {
    //     var random = Math.floor(Math.random() * 9);
    //     combinePassword += random;
    //     console.log(combinePassword);



          
            // numberRandom = Math.floor(Math.random() * 9);
            // upperRandom = passwordData.uppercase[Math.floor(Math.random() * 9)];
            // lowerRandom = passwordData.lowercase[Math.floor(Math.random() * 9)];
            // symbolRandom = passwordData.symbol[Math.floor(Math.random() * 9)];

            // console.log(lowerRandom);
        //    use the concat function within the forloop
        // accessing the string with square brakets
        // now saving to similar process - add it to a variable (not made)
        
    
    

    


    // show it in HTML
   


   
   

         
   
   
   
   