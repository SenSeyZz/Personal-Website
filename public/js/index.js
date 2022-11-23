
$(".toggle").click(function(){

    $(".slide").slideToggle("slow")
    console.log($(".toggle").text)

    if($(".this").text === "See CV"){
        $("this").text("Unshow CV")
        console.log("workede")
    }else{
        $("this").text("See CV")
    }
})
