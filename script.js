window.onload = function(){
    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');
 
    // On Click Events
    buttons.addEventListener('click', function(e){
 
       if(e.target.nodeName === 'LI'){
 
          // Get Value of Button
          var v = e.target.innerHTML;
 
          if(v === '='){
             try{
                answer.innerHTML = eval(answer.innerHTML);
             }catch(e){
                answer.innerHTML = e.message;
             }
          } else {
             answer.innerHTML += v;
          }
       }
    });
    
    // Clear the Answer Field
    clear.addEventListener('click', function(e){
       answer.innerHTML = '';
    });
 }