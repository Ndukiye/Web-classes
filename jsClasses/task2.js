let output = "";
for (let i=1; i < 100; i++){
   if (i % 3 == 0){
      output += "fizz, "
   } else if (i % 5 == 0){
      i = 100 ? console.log("buzz.") : console.log(`buzz, `)
   }else{
      output += `${i}, `;
   };
};console.log(output);