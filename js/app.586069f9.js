(function(e){function t(t){for(var r,i,o=t[0],s=t[1],l=t[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-01fb4680":"2466f50e","chunk-1509901a":"d18da226","chunk-16ddca90":"f6c4f524","chunk-19802474":"6d7db811","chunk-43494ccd":"358322ab","chunk-465845b8":"3adf84aa","chunk-5fdaf628":"c706ea53","chunk-90d172e2":"64d82d42","chunk-bdc76826":"ecd05a36"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-01fb4680":1,"chunk-1509901a":1,"chunk-16ddca90":1,"chunk-19802474":1,"chunk-43494ccd":1,"chunk-465845b8":1,"chunk-5fdaf628":1,"chunk-90d172e2":1,"chunk-bdc76826":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-01fb4680":"883ea1f4","chunk-1509901a":"1b37a776","chunk-16ddca90":"30167ef3","chunk-19802474":"ec931150","chunk-43494ccd":"39105a50","chunk-465845b8":"e9cea69d","chunk-5fdaf628":"2da096f8","chunk-90d172e2":"3701f01c","chunk-bdc76826":"c07ad550"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete i[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",h.name="ChunkLoadError",h.type=r,h.request=i,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/aoetek.github.io/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0590":function(e,t,n){},"072a":function(e,t){e.exports={home:{consultationWindow:"お問い合わせ",switchLanguage:"言語の切り替え",productIntroduction:"キューベイの製品紹介",scan:"スキャン注文アプリ",head1:"お客様自身のスマートフォンを使って注文を行うことで、お店の人件費を削減し、調理に専念することができます。",head2:"安全な衛生的な無接触体験",virus:"ウイルス感染対策をしたい",eat:"お客様に安心感を与えたい",work:"従業員の安全と健康を確保したい",focus:"少人数でも効率のよい運営したい",placeAnOrder:"QRコードを読み取って、注文する",serve:"食事を準備・提供する",pick:"食事を楽しむ",characteristic:"Qbayの6つの特徴",characteristic_1_title:"ユーザーのプライバシーを保護する",characteristic_1_1:"１．メールアドレス登録に、実名認識は必要ない",characteristic_1_2:"可変QRコード技術は情報の安全を保障できる",characteristic_1_3:"３．位置情報は収集しない",characteristic_2_title:"接触を減らす",characteristic_2_1:"１．メニューに触れる必要がない",characteristic_2_2:"２．店員との接触を削減",characteristic_3_title:"最短3日間で投入可能",characteristic_3_1:"効率的情報入力と設備設置",characteristic_4_title:"プラットフォーム全体をカバーする",characteristic_4_1:"Apple iOS",characteristic_4_2:"Android",characteristic_4_3:"Web",characteristic_5_title:"放題メニュー対応",characteristic_5_1:"１．お客様は自分のスマホで注文することで、人工注文の口頭ミスを減らす",characteristic_5_2:"２．注文上限を設け、食べ物の無駄を減らす",characteristic_6_title:"多言語サポート",characteristic_6_1:"英語・中国語メニューに対応し",characteristic_6_2:"海外からのお客様も満足",technologicalProcess:"お店で操作の流れ",customer:"お客様",business:"お店",waiter:"配膳",technologicalProcess_1_title:"QRコードを読み取る",technologicalProcess_1_1:"QRコードを読み取る",technologicalProcess_2_title:"来店者自身で注文",technologicalProcess_2_1:"来店者自身で注文",technologicalProcess_3_title:"注文を受ける",technologicalProcess_3_1:"注文はキッチンプリンターへ届く",technologicalProcess_4_title:"テーブルにスタッフがお届け/カウンターに受け取り",technologicalProcess_5_title:"注文完了の確認",benefit:"Qbay導入のメリット",benefit_1_title:"コストを削減",benefit_1_1:"オーダーミスを減らす",benefit_1_2:"人手不足を解消、業務効率をアップ，多言語機能で訪日外国人も対応",benefit_2_title:"タブレット端末不要",benefit_2_1:"追加のスマート端末を購入する必要はない。お客様は自身のスマートフォンで操作できる",benefit_3_title:"ウイルス感染を防ぐ",benefit_3_1:"注文を受けて食事を準備する",benefit_4_title:"メニューはリニューアルタイムで更新される",benefit_4_1:"メニューはいつでもフォローでき、印刷コストを節約できる",onTrial:"Qbay春限定キャンペーン：導入費0、手数料0",activity:"限定キャンペーン",import:"導入費",charge:"手数料",spring:"春",exception:"設備賃貸料除外",time:"平日",company:"会社名",companytag:"会社名をご入力ください",name:"名前",nametag:"お名前をご入力ください",telephone:"連絡先携帯番号",telephonetag:"携帯番号をご入力ください",email:"メールアドレス",emailtag:"メールアドレスをご入力ください",detail:"相談内容",detailtag:"お問い合わせ内容をご入力ください",mytitle:"株式会社Qbay Technology",local:"住所",localdetail:"〒335-0001 埼玉県蕨市北町4丁目1-5-107",operationManual:"取扱説明書",reception:"お問い合わせ",submit:"相談する",contact:"お問い合わせ",message:"情報を充実させてください",app:"Appを開く"},common:{login:"ログイン",input:"メールアドレス/携帯電話番号",write:"アカウントを確認 ?",yes:"OK",no:"キャンセル",ok:"OK",return:"キャンセル",save:"ローカルに保存",center:"データセンター",name:"ユーザーネーム",out:"ログアウト",success:"成功",fail:"失敗",content:",内容を入力してください。",select:"選択してください",language:"言語",loginerr:"ログインに失敗しました",submit:"申し込む",networkErr:"ネットワークエラー",userErr:"メールが登録されました",emaillErr:"アクティベーションリンクが無効になりました。再送信してください。",upDatePassword:"パスワードを更新",expires:"アクティベーションリンクが無効になりました。再送信してください。",setpassword:"リンクが無効になりました。再送信してください"},Businesses:{errname:"メールボックスまたはユーザ名が登録されました"},Cash:{cash:"売上金",withdrawal:"振込申請",remark:"備考",creationtime:"提交时间",transferred:"振込先",agree:"同意する",following:"情報確認済み",withdrawalapplication:"提现申请",details:"詳細",store:"店舗",apply:"振込申請"},rules:{email:"メールアドレスを入力してください。",user:"ニックネームを入力してください",password:"パスワードを入力してください。",passwordmessage:"パスワードの文字数は8～16文字以内(半角英数记号)でお愿いします",usermessage:"パスワードの文字数は8～16文字以内(半角英数记号)でお愿いします",shopname:"お店の名前を入力してください。",name:"名前を入力してください。",phone:"携帯電話番号を入力してください。",checkphone:"正しい携帯番号を入力してください。",store:"店名を入力してください"},SliderCheck:{graphical:"画像認証",refresh:"更新",drag:"ピースを正しい場所に動かしてください",success:"認証成功",fail:"認証失敗、もう一度お試しください"}}},4260:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));n("99af"),n("a15b"),n("466d"),n("ac1f"),n("d3b7");function r(e){var t=[];for(var n in e)t.push("".concat(n,"=").concat(e[n]));return"?"+t.join("&")}function i(){var e=document.documentElement.clientHeight,t=document.querySelectorAll("div[anima]");Array.prototype.forEach.call(t,(function(t){var n=t.getAttributeNode("anima").nodeValue;if(""!=n){var r=t.getBoundingClientRect();r.bottom>=0&&r.top<e&&function(){t.classList.add("animate__animated"),t.classList.add(n),t.removeAttribute("anima")}()}}))}function a(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),n="iphone os"==e.match(/iphone os/i),r="midp"==e.match(/midp/i),i="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),a="ucweb"==e.match(/ucweb/i),c="android"==e.match(/android/i),o="windows ce"==e.match(/windows ce/i),s="windows mobile"==e.match(/windows mobile/i);return new Promise((function(e,l){n||r||i||a||c||o||s||t?e(!0):l(!1)}))}function c(){var e=navigator.userAgent.toLowerCase();return new Promise((function(t,n){-1!=e.indexOf("android")?t("安卓"):-1!=e.indexOf("iphone")&&n("ios")}))}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,c){var o=Object(r["N"])("router-view");return a.isRouterAlive?(Object(r["E"])(),Object(r["i"])(o,{key:0})):Object(r["j"])("",!0)}var a=n("761a"),c={data:function(){return{isRouterAlive:!0}},provide:function(){return{reload:this.reload}},setup:function(){var e=Object(a["a"])({locale:window.localStorage.getItem("language")||"jp",messages:{en:n("6212"),cn:n("622c"),jp:n("072a")}});console.log(e)},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},mounted:function(){this.$store.commit("changeView")}};n("bb55");c.render=i;var o=c,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l=[{path:"/",name:"top",component:function(){return n.e("chunk-bdc76826").then(n.bind(null,"726d"))},redirect:"/home",children:[{path:"home",name:"home",component:function(){return n.e("chunk-16ddca90").then(n.bind(null,"9960"))}},{path:"reception",name:"reception",component:function(){return n.e("chunk-465845b8").then(n.bind(null,"7307"))}},{path:"agreement",name:"agreement",component:function(){return n.e("chunk-5fdaf628").then(n.bind(null,"275b"))}}]},{path:"/mobile",name:"mobile",component:function(){return n.e("chunk-1509901a").then(n.bind(null,"cc49"))},children:[{path:"register",name:"register",component:function(){return n.e("chunk-90d172e2").then(n.bind(null,"10bc"))}},{path:"forget",name:"forget",component:function(){return n.e("chunk-43494ccd").then(n.bind(null,"44adb"))}},{path:"success",name:"success",component:function(){return n.e("chunk-19802474").then(n.bind(null,"e5dc"))}}]},{path:"/scancode",name:"scancode",component:function(){return n.e("chunk-01fb4680").then(n.bind(null,"c1b7"))}}],u=Object(s["a"])({history:Object(s["b"])("/aoetek.github.io/"),routes:l});u.beforeEach((function(e,t,n){document.documentElement.scrollTop=0,n()}));var h=u,d=n("5502"),p=n("4260"),m=Object(d["a"])({state:{viewListen:!1,oldListen:!1},mutations:{changeView:function(e){Object(p["c"])().then((function(t){console.log(t,"移动端"),e.viewListen=!0})).catch((function(t){console.log(t,"pc端"),e.viewListen=!1}))},switchPc:function(e){e.viewListen=!1},switchMobile:function(e){e.viewListen=!0},cover:function(e){e.oldListen=e.viewListen}},actions:{},modules:{}}),f=n("c1fb"),_=n("3fd4"),g=(n("7dd6"),n("77ed"),Object(r["h"])(o));g.use(_["c"]),g.config.globalProperties.$axios=f["a"],g.use(m).use(h).mount("#app")},6212:function(e,t){e.exports={home:{consultationWindow:"Click for Consultation",switchLanguage:"Switch Language",productIntroduction:"Product Introduction",scan:"Sweep Code Ordering APP",head1:"Directly order on phone,  ",head2:"Ordering and paying in one go, safe and hygienic non-contact experience",virus:"How to Prevent Virus Infection",eat:"How customers can enjoy their food",work:"How staffs can focus",focus:"Less staff, more concentration",placeAnOrder:"Open Qbay and order",serve:"Receive, Cook,  and Present",pick:"Get your food and just enjoy",characteristic:"6 distinguishing features within Qbay",characteristic_1_title:"Customers' Privacy Protection",characteristic_1_1:"Registration with email, no need for Real name authentication",characteristic_1_2:"Unique QR-Code, Protect your information",characteristic_1_3:"No need for location access",characteristic_2_title:"No need for physical contact",characteristic_2_1:"1. Ordering without physical menu",characteristic_2_2:"2. Paying without Cash",characteristic_3_title:"Safer Payment Channel",characteristic_3_1:"Using PAYPAY  with more than 33 millio users",characteristic_4_title:"Covering all platforms",characteristic_4_1:"IOS",characteristic_4_2:"Androids",characteristic_4_3:"Web",characteristic_5_title:"All you can eat",characteristic_5_1:"1. Quick and Accurate",characteristic_5_2:"2. No more waste",characteristic_6_title:"Multi-language support",characteristic_6_1:"Now we support English and Chinese",technologicalProcess:"Order Process",customer:"Customer",business:"Business",waiter:"Serve the dish",technologicalProcess_1_title:"Scan QR-Code",technologicalProcess_1_1:"Read",technologicalProcess_2_title:"Order",technologicalProcess_2_1:"Pay with APP",technologicalProcess_3_title:"Receive order and Cook",technologicalProcess_3_1:"When order received, you will be notified",technologicalProcess_3_2:"Let's start to prepare the dishes",technologicalProcess_4_title:"Serve the dish",technologicalProcess_5_title:"Confirm Order",benefit:"Why Qbay is your best choice",benefit_1_title:"Lower your cost",benefit_1_1:"Eliminate mistakes",benefit_1_2:"There is no communication barrier",benefit_2_title:"No additional device needed",benefit_2_1:"One simple phone is enough",benefit_3_title:"Lower the risk to get infected",benefit_3_1:"When order received, you will be notified",benefit_3_2:"Let's start to prepare the dishes",benefit_4_title:"Update menu easily",benefit_4_1:"don't need for physical menu",onTrial:"Free trail for an entire month",activity:"Limited time activities",import:"Import fee",charge:"Service Charge",spring:"spring",exception:"Except for loans",time:"Time",company:"Company",companytag:"Please Enter the name of your company",name:"Name",nametag:"Please Enter your fullname",telephone:"Telephone number",telephonetag:"Please Enter your telephone number",email:"Email",emailtag:"Please Enter your Email",detail:"Consultation content",detailtag:"please Enter Consultation content",mytitle:"Qbay Technology",local:"Location",localdetail:"〒335-0001 埼玉県蕨市北町4丁目1-5-107",operationManual:"Operation Manual",reception:"Reception",submit:"Submit",contact:"Contact Us",message:"Please complete the information",app:"Open App"},common:{login:"Log in",input:"E-mail / Phone number",write:"Are you sure to write off the account ?",yes:"Yes",no:"No",ok:"OK",return:"Return",save:"Save to local",center:"Data center",name:"User name",out:"Log out",start:"start",end:"end",success:"success",fail:"fail",content:"Please enter the content",select:"Please select",language:"language",loginerr:"Login failed",submit:"Submit application",networkErr:"Network error",expires:"registration activation link expires",userErr:"The mailbox has been registered",emaillErr:"The message has timed out. Please resend it",setpassword:"The password reset email has expired, please resend",upDatePassword:"Update password"},Businesses:{errname:"Email or user name is already registered"},rules:{email:"Please enter the correct email address",user:"Please enter your nickname",password:"Please enter password",passwordmessage:"Only 8-16 letters, numbers and underscores can be entered",usermessage:"Only 3-16 letters, numbers and underscores can be entered",shopname:"Please enter the shop name",name:"Please enter name",phone:"Please enter your mobile phone number",checkphone:"Please enter the correct mobile phone numbe",store:"Please enter the shop name"},SliderCheck:{graphical:"Graphic verification",refresh:"Refresh",drag:"Drag the left slider to complete the puzzle",success:"Verification successful",fail:"Verification failed. Please try again"}}},"622c":function(e,t){e.exports={home:{consultationWindow:"点击咨询",switchLanguage:"切换语言",productIntroduction:"产品介绍",scan:"扫码点餐APP",head1:"通过使用顾客自己的智能手机进行点餐，减轻店家压力，更好地专注于烹饪制作。",head2:"点餐与支付一气呵成，安全卫生的无接触体验",virus:"怎么防止病毒传染",eat:"让顾客安心的享用美食？",work:"让员工安心安全的工作?",focus:"解决人手不足，更好的集中精力",placeAnOrder:"打开Qbay扫描二维码，下单",serve:"接单制作，上菜",pick:"取餐完成，享用美食",characteristic:"Qbay6个特点",characteristic_1_title:"保护用户隐私",characteristic_1_1:"1. 邮箱注册，无需实名认证",characteristic_1_2:"“可变二维码”技术，保障信息安全",characteristic_1_3:"3. 不开启定位功能",characteristic_2_title:"减少接触",characteristic_2_1:"1. 不接触菜单",characteristic_2_2:"2. 减少与店员接触",characteristic_3_title:"3日内即可投入使用",characteristic_3_1:"信息录入快，设备安装高效。",characteristic_4_title:"全平台覆盖",characteristic_4_1:"苹果IOS",characteristic_4_2:"安卓android",characteristic_4_3:"网页版web",characteristic_5_title:"自助餐功能",characteristic_5_1:"1. 顾客通过智能手机自助点餐，减少人工点餐的口头失误",characteristic_5_2:"2. 设置订单上限减少失误浪费",characteristic_6_title:"多国语言支持",characteristic_6_1:"目前支持中文，英文界面",characteristic_6_2:"不再担心没办法对接外国人",technologicalProcess:"点餐流程",customer:"顾客",business:"商家",waiter:"服务员上菜",technologicalProcess_1_title:"扫描店内二维码",technologicalProcess_1_1:"读取餐桌上的二维码",technologicalProcess_2_title:"下单",technologicalProcess_2_1:"从应用程序下单",technologicalProcess_3_title:"接单制作",technologicalProcess_3_1:"让我们接受订单并准备制作。",technologicalProcess_4_title:"上菜/自取",technologicalProcess_5_title:"确认订单完成",benefit:"导入QBay会给店铺带来哪些好处",benefit_1_title:"降低运营成本",benefit_1_1:"消除了由于错误订单造成的损失。",benefit_1_2:"由于没有了点餐收银的工作，员工也提高了工作效率。而且不再担心与外国人的沟通。",benefit_2_title:"无需购买平板",benefit_2_1:"不需要额外购买智能终端设备，顾客自己的智能手机就可以完成操作。",benefit_3_title:"降低感染风险",benefit_3_1:"让我们接受订单并准备制作。",benefit_4_title:"菜单时时更新",benefit_4_1:"可随时变更菜单，还节省了新菜单的印刷成本。",onTrial:"正在流行的扫码点餐方式，现在免费试用一个月！",activity:"限定活动",import:"导入费",charge:"手续费",spring:"春日",exception:"贷款除外",time:"平日",company:"公司名称",companytag:"请输入公司名称",name:"您的名称",nametag:"请输入您的名称",telephone:"电话",telephonetag:"请输入电话",email:"邮箱",emailtag:"请输入邮箱",detail:"咨询内容",detailtag:"请输入咨询内容",mytitle:"元音科技",local:"地址",localdetail:"〒335-0001 埼玉県蕨市北町4丁目1-5-107",operationManual:"操作手册",reception:"咨询处",submit:"提交",contact:"联系我们",message:"请完善基本信息",app:"打开App"},common:{login:"登录",input:"邮箱 / 电话号码",write:"你确定要注销帐户吗 ?",yes:"确认",no:"取消",ok:"确认",return:"取消",save:"保存到本地",center:"数据中心",name:"用户名",out:"退出登录",success:"成功",fail:"失败",content:"请输入内容",select:"请选择",language:"语言",loginerr:"登录失败",submit:"提交申请",networkErr:"网络错误，请重试",userErr:"该邮箱已被注册",emaillErr:"邮件已超时，请重新发送",upDatePassword:"更新密码",expires:"注册链接已失效，请重新发送",setpassword:"重置密码邮件已失效，请重新发送"},Businesses:{errname:"邮箱或昵称已被注册"},rules:{email:"请输入正确的邮箱",user:"请输入昵称",password:"请输入密码",passwordmessage:"只能输入8-16个字母、数字和下划线",usermessage:"只能输入3-16个字母、数字和下划线",shopname:"请输入商铺的名字",name:"请输入姓名",phone:"请输入手机号",checkphone:"请输入正确的手机号",store:"请输入店铺名"},SliderCheck:{graphical:"图形验证",refresh:"刷新",drag:"拖动左边滑块完成上方拼图",success:"验证成功!",fail:"验证失败，请重试"}}},"761a":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7");var r=n("7a23"),i=function(e){return{locale:Object(r["J"])(e.locale),messages:e.messages,$t:function(e){return this.messages[this.locale.value][e]}}},a=Symbol();function c(e){var t=i(e);Object(r["G"])(a,t)}function o(){var e=Object(r["r"])(a);if(!e)throw new Error("No i18n provided!!!");return e}},bb55:function(e,t,n){"use strict";n("0590")},c1fb:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),i=n.n(r),a=(n("4260"),!0),c=i.a.create({baseURL:a?"https://jzk80vaqs7.execute-api.ap-northeast-1.amazonaws.com/dev/":"/api"});c.interceptors.request.use((function(e){return e.headers["3RD_SESSION"]=localStorage.getItem("token")||"",e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["a"]=c}});
//# sourceMappingURL=app.586069f9.js.map