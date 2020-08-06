class Game {  
    // to consctruct var
    constructor(){} 
    getState() { 
    var getStateref= database.ref('gameState') 
    getStateref.on("value",function(data){
        gameState = data.val()
    }) 
    }  
    // to update player count
    update(state){ 
        database.ref('/').update({
            gameState:state
        })
    } 
    async start(){ 
        // to continue sinc of the playercount 
        if(gameState === 0 ){ 
            player = new Player();  
            var playerCountref = await database.ref('playerCount').once("value")  
            // to ref the playercount
            if(playerCountref.exists()){
                playerCount = playerCountref.val(); 
                player.getCount(); 
            } 
            // to make form
            form = new Form();  
            // to display
            form.display();

        }
    }  
    // to display the tittle of the game 
    play(){ 
        form.hide(); 
        textSize(20); 
        text("Race's Begins Now",120,100) 
        Player.getplayerinfo(); 
        
    }
}