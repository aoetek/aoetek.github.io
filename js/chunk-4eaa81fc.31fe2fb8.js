(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eaa81fc"],{"80d0":function(o,t,e){},c1b7:function(o,t,e){"use strict";e.r(t);var c=e("7a23"),n=Object(c["fb"])("data-v-63ad6589"),i=n((function(o,t,e,n,i,r){return Object(c["E"])(),Object(c["i"])("div",{onClick:t[1]||(t[1]=function(){return r.jump&&r.jump.apply(r,arguments)})})})),r=e("4260"),d={data:function(){return{qrcode_id:"",to:!1}},mounted:function(){var o=this;this.qrcode_id=this.$route.query.qrcode_id,this.$store.state.viewListen&&(console.log(this.$route.query),Object(r["b"])().then((function(t){console.log(t);try{window.location.href="qbaytek://www.qbaytek.com:80/app/customer/qrcode?qrcode_id="+o.qrcode_id,setTimeout((function(){throw new Error("没有成功拉起androi!")}),500)}catch(e){o.to=!0,console.log(e)}})).catch((function(t){console.log(t);try{window.location.href="Qbay://?qrcode_id="+o.qrcode_id,setTimeout((function(){throw new Error("没有成功拉起androi!")}),500)}catch(e){o.to=!0}}))),setTimeout((function(){o.to&&(window.location.href="https://order.qbaytek.com/#/about?qrcode_id=".concat(o.qrcode_id))}),5e3)},methods:{jump:function(){window.location.href="qbaytek://www.qbaytek.com:80/app/customer/qrcode?qrcode_id="+this.qrcode_id}}};e("fd2b");d.render=i,d.__scopeId="data-v-63ad6589";t["default"]=d},fd2b:function(o,t,e){"use strict";e("80d0")}}]);
//# sourceMappingURL=chunk-4eaa81fc.31fe2fb8.js.map