$(function(){
    var rights=document.getElementsByClassName("h-right");
    var lefts=document.getElementsByClassName("h-left");
    $(window).on("scroll",function(){

        var scrolltop = window.pageYOffset;
        var height=$(window).height();
        var center=height/2+scrolltop;


        //alert("scroll");
        for(i=0;i<lefts.length;i++){

            var x =$(rights[i]).position();
            var halfx=$(rights[i]).height()/2;
            var alter=200 - center/ (x.top+halfx)*200;
            if(x.top-scrolltop>height*1.5 || scrolltop- x.top>height*1.5)continue;
            //alert(center+' '+ x.top)
            if(alter >50)alter=50;
            else if(alter<0)alter=0;

            rights[i].style.left = alter + '%';
            lefts[i].style.right=alter+'%';

        }
    })


});


