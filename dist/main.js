(()=>{"use strict";function e(e,n,t,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void t(e)}c.done?n(i):Promise.resolve(i).then(r,o)}console.log("js added"),document.getElementById("artURL");var n=function(){var n,t=(n=regeneratorRuntime.mark((function e(){var n,t,r,o,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},console.log("Enter sendURLToServer fucntion"),e.next=5,fetch(n,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return r=e.sent,e.prev=6,e.next=9,r.json();case 9:o=e.sent,console.log(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})),function(){var t=this,r=arguments;return new Promise((function(o,a){var s=n.apply(t,r);function c(n){e(s,o,a,c,i,"next",n)}function i(n){e(s,o,a,c,i,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();artProcess.addEventListener("click",(function(e){e.preventDefault();var t,r=artURL.value;""==r?console.log("Enter a URL"):(t=r,console.log("Validate URL: ",t),new RegExp("^((ft|htt)ps?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)?(console.log("value entered",r),n("/artProcess",{arturl:r})):console.log("Please enter a valid URL"))})),alert("I exist"),console.log("New index file used as entry point")})();
//# sourceMappingURL=main.js.map