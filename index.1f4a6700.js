!function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,m=e.closeTrigger,f=void 0===m?"data-micromodal-close":m,h=e.openClass,v=void 0===h?"is-open":h,p=e.disableScroll,g=void 0!==p&&p,y=e.disableFocus,b=void 0!==y&&y,w=e.awaitCloseAnimation,k=void 0!==w&&w,E=e.awaitOpenAnimation,L=void 0!==E&&E,S=e.debugMode,x=void 0!==S&&S;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:x,disableScroll:g,openTrigger:u,closeTrigger:f,openClass:v,onShow:s,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:L,disableFocus:b},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i;return i=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}],e(o.prototype,i),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o,n,r,l=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),c=t(document.querySelectorAll("[".concat(l.openTrigger,"]"))),d=(o=c,n=l.openTrigger,r=[],o.forEach((function(e){var t=e.attributes[n].value;void 0===r[t]&&(r[t]=[]),r[t].push(e)})),r);if(!0!==l.debugMode||!1!==s(c,d))for(var u in d){var m=d[u];l.targetModal=u,l.triggers=t(m),a=new i(l)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);var c=function(e){p[e].addEventListener("click",(function(){if(g[e].classList.contains("active"))g[e].classList.remove("active"),y[e].style.maxHeight="0px",setTimeout((function(){y[e].style.display="none",y[e].style.maxHeight=""}),300);else{g[e].classList.add("active"),y[e].style.display="block";var t=y[e].offsetHeight;y[e].style.maxHeight="0px",setTimeout((function(){y[e].style.maxHeight=t+"px"}))}}))};l.init({disableScroll:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0});var d=document.querySelector("#scrollToTop"),u=document.querySelector("#scroll-button"),m=document.querySelector(".hero").offsetHeight;d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),u.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var f,h,v=document.querySelector("#progress-bar");window.addEventListener("scroll",(function(){f=document.body.clientHeight-window.innerHeight,h=window.MSInputMethodContext&&document.documentMode?Math.floor(window.pageYOffset):Math.floor(window.scrollY);var e=Math.round(h/(.01*f));v.style.width=e+"%",h>m?u.classList.add("active"):u.classList.remove("active")}));for(var p=document.querySelectorAll(".faq-tab-head"),g=document.querySelectorAll(".faq-tab-head__toggle"),y=document.querySelectorAll(".faq-tab-body"),b=0;b<p.length;b++)c(b);var w,k=document.querySelector(".contact-popup-button.desktop"),E=document.querySelector(".contact-popup-button.mobile"),L=document.querySelector(".contact-popup");w=navigator.userAgent||navigator.vendor||window.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(w)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(w.substr(0,4))?k.style.display="none":(E.style.display="none",k.addEventListener("click",(function(){k.classList.contains("active")?(k.classList.remove("active"),L.classList.remove("active"),setTimeout((function(){L.style.display="none"}),200)):(k.classList.remove("not-clicked"),k.classList.add("active"),L.style.display="flex",setTimeout((function(){L.classList.add("active")})))})));var S=document.querySelector(".contact-form form"),x=document.querySelector(".contact-form--success"),M=document.querySelector(".contact-form form input[type=text]"),q=document.querySelector(".contact-form form input[type=tel]"),A=document.querySelector(".contact-popup-form"),T=document.querySelector(".contact-popup-form--success"),C=document.querySelector(".contact-form form input[type=tel]");A.addEventListener("submit",(function(e){e.preventDefault();var t={phone:C.value};C.value&&fetch("mail.php",{method:"post",headers:{"Content-type":'application/json; charset="utf-8"'},body:JSON.stringify(t)}).then((function(e){e.ok&&(A.reset(),A.style.display="none",T.style.display="block",setTimeout((function(){T.style.opacity="1"})))}))})),S.addEventListener("submit",(function(e){e.preventDefault();var t={name:M.value,phone:q.value};M.value&&q.value&&fetch("mail.php",{method:"post",headers:{"Content-type":'application/json; charset="utf-8"'},body:JSON.stringify(t)}).then((function(e){e.ok&&(S.reset(),S.style.display="none",x.style.display="block",setTimeout((function(){x.style.opacity="1"})))}))}));for(var j=document.querySelectorAll("input[type=tel]"),O=0;O<j.length;O++)j[O].addEventListener("input",(function(e){var t=e.target.value.replace(/(?!^\+)\D/g,"");-1!==t.indexOf("+")?e.target.value=t.slice(0,12):e.target.value=t.slice(0,11)}))}();
//# sourceMappingURL=index.1f4a6700.js.map