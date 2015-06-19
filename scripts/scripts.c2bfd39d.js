"use strict";angular.module("contextMenuApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("contextMenuApp").directive("contextMenu",["$document","$window",function(a,b){return{restrict:"A",link:function(c,d,e){function f(){var a=document.createDocumentFragment();j=document.createElement("ul"),k=$(j),j.setAttribute("id","context-menu"),j.setAttribute("class","custom-context-menu"),c[t].forEach(function(b){var d=document.createElement("li");d.innerHTML="<a>"+b.label+"</a>",b.action&&b.active&&d.addEventListener("click",function(){return"function"!=typeof c[b.action]?!1:void c[b.action](e)},!1),b.active||d.setAttribute("class","disabled"),a.appendChild(d)}),j.appendChild(a),document.body.appendChild(j),l=k.outerWidth(!0),m=k.outerHeight(!0)}function g(){$(".custom-context-menu").remove()}function h(a){k.attr("class","custom-context-menu"),k.addClass(a)}function i(a,b,c){p=b||a.pageX,q=c-r.scrollTop()||a.pageY-r.scrollTop(),window.innerWidth-p<l&&window.innerHeight-q>m?(p-=l,h(s.topRight)):window.innerWidth-p>l&&window.innerHeight-q>m?h(s.topLeft):m>o-q&&n-p>l?(q-=m,h(s.bottomLeft)):m>o-q&&l>n-p&&(q-=m,p-=l,h(s.bottomRight)),k.css({left:p,top:q}).addClass("context-caret shown")}var j,k,l,m,n=window.innerWidth,o=window.innerHeight,p=0,q=0,r=$(b),s={topRight:"context-caret-top-right",topLeft:"context-caret-top-left",bottomRight:"context-caret-bottom-right",bottomLeft:"context-caret-bottom-left"},t=e.menuItems;d.on("contextmenu.dirContextMenu",function(a){if(a.preventDefault(),g(),f(),e.pointerNode){var b=$(this).find(e.pointerNode);p=b.offset().left+b.outerWidth(!0)/2,q=b.offset().top+b.outerHeight(!0),i(a,p,q)}else i(a);r.on("keydown.dirContextMenu",function(a){27===a.keyCode&&g()})}),a.off("click.dirContextMenu").on("click.dirContextMenu",function(a){$(a.target).is(".custom-context-menu")||$(a.target).parents().is(".custom-context-menu")||g()}),r.off("scroll.dirContextMenu").on("scroll.dirContextMenu",function(){g()}),r.on("resize.dirContextMenu",function(){n=window.innerWidth,o=window.innerHeight,g()})}}}]),angular.module("contextMenuApp").controller("MainCtrl",["$scope",function(a){a.items=[];for(var b=1;20>=b;b++)a.items.push({name:"Name ",address:"Address "});a.menus=[{label:"View",action:"callView",active:!0},{label:"Delete",action:"deleteItem",active:!0},{label:"Send",action:"sendItem",active:!1},{label:"Share",action:"",active:!0},{label:"Active",action:"deactivate",active:!1}],a.buttonMenu=[{label:"View Large",action:"callView",active:!0},{label:"Delete this item",action:"deleteItem",active:!0}],a.deleteItem=function(a){console.warn("deleted ...")},a.callView=function(a){console.info("View Call, another method")}}]);