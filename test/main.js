var onscreen = false;


$("#btn").click(function(e){
    e.preventDefault();
    if(!onscreen)
    {   

        onscreen = true;
        console.log(onscreen)
    $("#game").append( '<div id="thegame">' +
        '<div class="webgl-content">' + 
    '<div id="gameContainer" style="width: 960px; height: 600px"></div>' +
    '<div class="footer">' +
      '<div class="webgl-logo"></div>'+
      '<div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div>' +
      '<div class="title">Stick_game</div>' +
    '</div>' +
 '</div>' +
 '<script src="TemplateData/UnityProgress.js"></script> ' +
 ' <script src="Build/UnityLoader.js"></script>' +
  '<script>' +
 '   var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Stick Adventure Test Build.json", {onProgress: UnityProgress});' +
 ' </script>' +
        '</div>');
    }
    else
    {       
        onscreen = false;
        console.log(onscreen)
        $("#thegame").remove();   
    }
})