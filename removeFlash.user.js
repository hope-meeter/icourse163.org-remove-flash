// ==UserScript==
// @name         中国大学MOOC禁用Flash课件换用H5
// @namespace    hope-meeter-viewer
// @version      0.1
// @description  插件用于隐藏中国大学MOOC的Flash课件显示模块，并换用H5来显示。
// @author       hope-meeter
// @match        *.icourse163.org/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// ==/UserScript==
(function() {
    var $ = window.jQuery;
    var documentAddress;
    var getAddress = setInterval(function() {
        if(documentAddress != $(".j-downpdf").attr("href") && $(".j-downpdf").attr("href") != undefined){
            documentAddress = $(".j-downpdf").attr("href");
            $(".hope-meeter-viewer").remove();
            $(".m-learnunitUI").prepend('<iframe class="hope-meeter-viewer" width="100%" height="800px" src="https://ias.ioeplus.cn/pdf/web/viewer.html?file=' + encodeURIComponent(documentAddress) + '"></iframe>');
            $(".j-unitctBox").hide();
            sendMessage();
        }
    }, 1000);
    function sendMessage(){
        var unitId = getQueryVariable(window.location.href, "&", "cid");
        $.post("https://www.icourse163.org/web/j/courseBean.saveMocContentLearn.rpc?csrfKey=" + getQueryVariable(document.cookie, ";", " NTESSTUDYSI"),
               "dto=" + JSON.stringify({
            unitId: unitId,
            pageNum: 1,
            finished: true,
            contentType: 3
        }));
    }
    function getQueryVariable(query, char, variable){
        var vars = query.split(char);
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
})();
