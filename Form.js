class Form {
    constructor(){
         this.input = createInput("name"); 
        this.button = createButton("play"); 
        this.greting = createElement('h3');
    } 
    hide(){ 
        this.greting.hide(); 
        this.button.hide(); 
        this.input.hide(); 
    }
        display(){ 
            this.tittle = createElement('h4'); 
            this.tittle.html("Race begins");
            this.tittle.position(130,0);
            
            this.input.position(130,160); 
            
            this.button.position(250,200); 
            this.button.mousePressed(()=> {
                this.input.hide(); 
                this.button.hide(); 
                player.name = this.input.value(); 
                playerCount = playerCount+1 ; 
                player.index = playerCount; 

                player.update();
                player.updateCount(playerCount); 
                
                this.greting.html("Hello,BE Redy"+player.name); 
               this.greting.position(130,160);
            }) 
        }
    
}