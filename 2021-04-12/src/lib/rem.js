// var pcClient = undefined;

(function (doc, win,) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=850){
                    docEl.style.fontSize = '100px';
                    // pcClient = true;
                    // console.log(pcClient);
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                    // pcClient = false;
                    // console.log(pcClient);
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
