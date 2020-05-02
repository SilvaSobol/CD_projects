$(document).ready(function(){
    $('.btn').click(function(){
        alert("It's super nice to see you!")
    })
    $('.slideToggle').click(function(){
        $("#slideToggle").slideToggle()
    })
    $('.hide').click(function(){
        $(".hide").hide()
    })
    $('.show').click(function(){
        $(".hide").show()
    })
    $('.slideDown').click(function(){
       $(".hidden").slideDown()
    })
    $('.slideUp').click(function(){
        $("p").slideUp()
    })
    $('.fadeIn').click(function(){
        $("#fadeIn").fadeIn()
    })
    $('.fadeOut').click(function(){
        $("#fadeOut").fadeOut()
    })
    $('.addClass').click(function(){
        $("#addClass").addClass()
    })
    $('.before').click(function(){
        $("#before").before("<h3>Yay, it's working! </h3>")
    })
    $('.after').click(function(){
        $("#after").after("<h3>Oh, Hello there!<h3>")
    })
    $('.append').click(function(){
        $("#append").append("<span>  I am a span tag!!! </span>")
    })
    $('.prepend').click(function(){
        $("#prepend").prepend("<span>  I am a span tag!!! </span>")
    })
    $('.html').click(function(){
        $("#html").html("<h1>Overruled!</h1>")
    })
    $('.attr').click(function(){
        var classVal = $("#attr").attr("class")
         $('#attr').append(classVal)
    })
    $('.attr2').click(function(){
        $("#attr").attr("class", "CHOCOLATE")
    })
    $('.val').click(function(){
        console.log($("#val").val())
    })
    $('.val2').click(function(){
        $('#val').val("Pretty cool!")
    })
    $('.text').click(function(){
        $("#text").text("This is easy")
    })
    var ele = $("#data")
		$.data(ele, "Phrase", " WE ARE ALL DONE!")
		$('.data').click(function(){
			var value = $.data(ele,"Phrase")
			$("#data").after(value)
		})

})


