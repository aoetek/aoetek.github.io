(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6be213c6"],{"41e7":function(o,e,t){"use strict";t("f654")},c1b7:function(o,e,t){"use strict";t.r(e);var c=t("7a23"),n=Object(c["fb"])("data-v-b14d2a88"),i=n((function(o,e,t,n,i,r){return Object(c["E"])(),Object(c["i"])("div",{onClick:e[1]||(e[1]=function(){return r.jump&&r.jump.apply(r,arguments)})})})),r=t("4260"),d={data:function(){return{qrcode_id:""}},mounted:function(){var o=this;this.qrcode_id=this.$route.query.qrcode_id,this.$store.state.viewListen&&(console.log(this.$route.query),Object(r["b"])().then((function(e){console.log(e);try{window.location.href="qbaytek://www.qbaytek.com:80/app/customer/qrcode?qrcode_id="+o.qrcode_id}catch(t){window.location.href="https://play.google.com/store/apps/details?id=com.qbaytek.customer",console.log(t)}})).catch((function(e){console.log(e);try{window.location.href="Qbay://?qrcode_id="+o.qrcode_id}catch(t){console.log(t,"err"),window.location.href="https://apps.apple.com/cn/app/qbay/id1540223620",console.log("报错了")}})))},methods:{jump:function(){window.location.href="qbaytek://www.qbaytek.com:80/app/customer/qrcode?qrcode_id="+this.qrcode_id}}};t("41e7");d.render=i,d.__scopeId="data-v-b14d2a88";e["default"]=d},f654:function(o,e,t){}}]);
//# sourceMappingURL=chunk-6be213c6.befa7732.js.map