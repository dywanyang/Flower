(function(){
    //1.调用选项卡
    tab();
})();

function tab(){
    var allLis = $("tab_header").getElementsByTagName("li");
    var doms=$("tab_content").getElementsByClassName("dom");
    var lastOne = 0;

    for(var i=0;i<allLis.length;i++){
        var li = allLis[i];
        (function(i){
            li.onmouseover = function(){
                allLis[lastOne].className="";
                doms[lastOne].style.display = "none";

                this.className = "current";
                doms[i].style.display = "block";

                lastOne=i;
            }
        })(i);
    }
}
function $(id){
     return typeof id ==="string"?document.getElementById(id):null;
}