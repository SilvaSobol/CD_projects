<!DOCTYPE html>
<head>
    <title>Pacman Demo</title>
    <style type = "text/css">
        body{
            background-color: black;
        }
        div.row div{
            width:20px;
            height:20px;
            border: 1px solid black;
            display: inline-block;
        }
        div.brick{
            background-color: blue;
        }
        div.empty{
            background: black;
           
        }
        div.coin{
            background: url(oinspin.gif);
            background-repeat: no-repeat;
            background-position: center;
            background-size:cover;
        }
        div.pacman{
            background: url(pacman.gif);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

        }

        
    
    </style>

</head>
<body>

    <div id ='world'></div>

    to do list

    1) Have JS display the world of brick/coin etc
    2) Have the pacman move up and down

   <script>
    
    var world = [
       [2,2,2,2,2,2,2,2,2,2,2],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,1,1,1,1,1,1,1,1,1,1],
       [2,2,2,2,2,2,2,2,2,2,2]
   ];

   function displayWorld(){
       var output = '';

       for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>";
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2)
            output += "\n\t<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "\n\t<div class='coin'></div>";
            if(world[i][j] == 0)
            output += "\n\t<div class='empty'></div>";
        }
        output += "\n</div>";

    }
    console.log(output);
    document.getElementById('world').innerHTML = output;

   }
   
   </script>
    
</body>
</html>
