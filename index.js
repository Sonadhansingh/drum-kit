
var buttonNumber = document.querySelectorAll(".drum").length;

for(var i=0; i<buttonNumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

function makeSound (key){
        switch (key) {
            case "1":
                var sound1= new Audio("audio/sound1.mp3");
                sound1.play();
                break;

            case "2":
                var sound1= new Audio("audio/sound2.mp3");
                sound1.play();
                break;

            case "3":
                var sound1= new Audio("audio/sound3.mp3");
                sound1.play();
                break;
            
            case "4":
                var sound1= new Audio("audio/sound6.mp3");
                sound1.play();
                break;

            case "5":
                var sound1= new Audio("audio/sound7.mp3");
                sound1.play();
                break;

            case "6":
                var sound1= new Audio("audio/sound8.mp3");
                sound1.play();
                break;
    
            case "7":
                var sound1= new Audio("audio/sound5.mp3");
                sound1.play();
                break;
    
            case "8":
                var sound1= new Audio("audio/sound4.mp3");
                sound1.play();
                break;
                
            case "9":
                var sound1= new Audio("audio/sound9.mp3");
                sound1.play();
                break;
    
            default: console.log(buttonInnerHTML);
                break;
        }
}

function buttonAnimation (currentKey){

    var activeButton= document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.add("pressed");
    },100);

}
