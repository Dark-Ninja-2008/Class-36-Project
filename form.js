class Form{
    constructor(){
     
    }

    display(){
      var title=createElement('h2');  
      title.html('Car Race Game');
      title.position(250,100);
      var input=createInput("Name...")
      input.position(250,200);
      var button=createButton("Play")
      button.position(250,300);
      var greeting=createElement('h2');
      //greeting.position(250,300)
    }
}