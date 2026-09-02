import{R as oa,r as b,j as y,a as oe}from"./App-POHgf2pG.js";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Na(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function se(a){if(Array.isArray(a))return a}function le(a){if(Array.isArray(a))return Na(a)}function fe(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function ce(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,Yn(e.key),e)}}function ue(a,n,t){return n&&ce(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function ga(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Ba(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=Yn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function me(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function de(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(m){c=!0,r=m}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function f(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function xa(a,n){return se(a)||de(a,n)||Ba(a,n)||ge()}function O(a){return le(a)||me(a)||Ba(a)||ve()}function pe(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Yn(a){var n=pe(a,"string");return typeof n=="symbol"?n:n+""}function ha(a){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ha(a)}function Ba(a,n){if(a){if(typeof a=="string")return Na(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Na(a,n):void 0}}var fn=function(){},Va={},Xn={},Gn=null,Hn={mark:fn,measure:fn};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Gn=MutationObserver),typeof performance<"u"&&(Hn=performance)}catch{}var he=Va.navigator||{},cn=he.userAgent,un=cn===void 0?"":cn,D=Va,S=Xn,mn=Gn,ca=Hn;D.document;var L=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Bn=~un.indexOf("MSIE")||~un.indexOf("Trident/"),ua,be=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ye=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Vn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},xe={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},qn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],z="classic",sa="duotone",Kn="sharp",Jn="sharp-duotone",Qn="chisel",Zn="etch",at="graphite",nt="jelly",tt="jelly-duo",et="jelly-fill",rt="mosaic",it="notdog",ot="notdog-duo",st="pixel",lt="slab",ft="slab-duo",ct="slab-press",ut="slab-press-duo",mt="thumbprint",dt="utility",gt="utility-duo",vt="utility-fill",pt="vellum",ht="whiteboard",we="Classic",Se="Duotone",Ae="Sharp",ke="Sharp Duotone",Ie="Chisel",Pe="Etch",Ee="Graphite",ze="Jelly",Fe="Jelly Duo",je="Jelly Fill",Ce="Mosaic",Ne="Notdog",Oe="Notdog Duo",Te="Pixel",_e="Slab",Me="Slab Duo",Le="Slab Press",$e="Slab Press Duo",De="Thumbprint",Re="Utility",We="Utility Duo",Ue="Utility Fill",Ye="Vellum",Xe="Whiteboard",bt=[z,sa,Kn,Jn,Qn,Zn,at,nt,tt,et,rt,it,ot,st,lt,ft,ct,ut,mt,dt,gt,vt,pt,ht];ua={},g(g(g(g(g(g(g(g(g(g(ua,z,we),sa,Se),Kn,Ae),Jn,ke),Qn,Ie),Zn,Pe),at,Ee),nt,ze),tt,Fe),et,je),g(g(g(g(g(g(g(g(g(g(ua,rt,Ce),it,Ne),ot,Oe),st,Te),lt,_e),ft,Me),ct,Le),ut,$e),mt,De),dt,Re),g(g(g(g(ua,gt,We),vt,Ue),pt,Ye),ht,Xe);var Ge={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},He={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Be=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ve={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},yt=["fak","fa-kit","fakd","fa-kit-duotone"],dn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qe=["kit"],Ke="kit",Je="kit-duotone",Qe="Kit",Ze="Kit Duotone";g(g({},Ke,Qe),Je,Ze);var ar={kit:{"fa-kit":"fak"}},nr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tr={kit:{fak:"fa-kit"}},gn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ma,da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},er=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],rr="classic",ir="duotone",or="sharp",sr="sharp-duotone",lr="chisel",fr="etch",cr="graphite",ur="jelly",mr="jelly-duo",dr="jelly-fill",gr="mosaic",vr="notdog",pr="notdog-duo",hr="pixel",br="slab",yr="slab-duo",xr="slab-press",wr="slab-press-duo",Sr="thumbprint",Ar="utility",kr="utility-duo",Ir="utility-fill",Pr="vellum",Er="whiteboard",zr="Classic",Fr="Duotone",jr="Sharp",Cr="Sharp Duotone",Nr="Chisel",Or="Etch",Tr="Graphite",_r="Jelly",Mr="Jelly Duo",Lr="Jelly Fill",$r="Mosaic",Dr="Notdog",Rr="Notdog Duo",Wr="Pixel",Ur="Slab",Yr="Slab Duo",Xr="Slab Press",Gr="Slab Press Duo",Hr="Thumbprint",Br="Utility",Vr="Utility Duo",qr="Utility Fill",Kr="Vellum",Jr="Whiteboard";ma={},g(g(g(g(g(g(g(g(g(g(ma,rr,zr),ir,Fr),or,jr),sr,Cr),lr,Nr),fr,Or),cr,Tr),ur,_r),mr,Mr),dr,Lr),g(g(g(g(g(g(g(g(g(g(ma,gr,$r),vr,Dr),pr,Rr),hr,Wr),br,Ur),yr,Yr),xr,Xr),wr,Gr),Sr,Hr),Ar,Br),g(g(g(g(ma,kr,Vr),Ir,qr),Pr,Kr),Er,Jr);var Qr="kit",Zr="kit-duotone",ai="Kit",ni="Kit Duotone";g(g({},Qr,ai),Zr,ni);var ti={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ei={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ri=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(er,ri),ii=["solid","regular","light","thin","duotone","brands","semibold"],wt=[1,2,3,4,5,6,7,8,9,10],oi=wt.concat([11,12,13,14,15,16,17,18,19,20]),si=["aw","fw","pull-left","pull-right"],li=[].concat(O(Object.keys(ei)),ii,si,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",da.GROUP,da.SWAP_OPACITY,da.PRIMARY,da.SECONDARY]).concat(wt.map(function(a){return"".concat(a,"x")})).concat(oi.map(function(a){return"w-".concat(a)})),fi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",Ta=16,St="fa",At="svg-inline--fa",Y="data-fa-i2svg",_a="data-fa-pseudo-element",ci="data-fa-pseudo-element-pending",qa="data-prefix",Ka="data-icon",vn="fontawesome-i2svg",ui="async",mi=["HTML","HEAD","STYLE","SCRIPT"],kt=["::before","::after",":before",":after"],It=(function(){try{return!0}catch{return!1}})();function la(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[z]}})}var Pt=f({},Vn);Pt[z]=f(f(f(f({},{"fa-duotone":"duotone"}),Vn[z]),dn.kit),dn["kit-duotone"]);var di=la(Pt),Ma=f({},Ve);Ma[z]=f(f(f(f({},{duotone:"fad"}),Ma[z]),gn.kit),gn["kit-duotone"]);var pn=la(Ma),La=f({},Oa);La[z]=f(f({},La[z]),tr.kit);var Ja=la(La),$a=f({},ti);$a[z]=f(f({},$a[z]),ar.kit);la($a);var gi=be,Et="fa-layers-text",vi=ye,pi=f({},Ge);la(pi);var hi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ea=xe,bi=[].concat(O(qe),O(li)),ta=D.FontAwesomeConfig||{};function yi(a){var n=S.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function xi(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(S&&typeof S.querySelector=="function"){var wi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wi.forEach(function(a){var n=xa(a,2),t=n[0],e=n[1],r=xi(yi(t));r!=null&&(ta[e]=r)})}var zt={styleDefault:"solid",familyDefault:z,cssPrefix:St,replacementClass:At,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ta.familyPrefix&&(ta.cssPrefix=ta.familyPrefix);var q=f(f({},zt),ta);q.autoReplaceSvg||(q.observeMutations=!1);var d={};Object.keys(zt).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(t){q[a]=t,ea.forEach(function(e){return e(d)})},get:function(){return q[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){q.cssPrefix=n,ea.forEach(function(t){return t(d)})},get:function(){return q.cssPrefix}});D.FontAwesomeConfig=d;var ea=[];function Si(a){return ea.push(a),function(){ea.splice(ea.indexOf(a),1)}}var G=Ta,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ai(a){if(!(!a||!L)){var n=S.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=S.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return S.head.insertBefore(n,e),a}}var ki="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hn(){for(var a=12,n="";a-- >0;)n+=ki[Math.random()*62|0];return n}function J(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function Qa(a){return a.classList?J(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ft(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ii(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Ft(a[t]),'" ')},"").trim()}function wa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function Za(a){return a.size!==T.size||a.x!==T.x||a.y!==T.y||a.rotate!==T.rotate||a.flipX||a.flipY}function Pi(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Ei(a){var n=a.transform,t=a.width,e=t===void 0?Ta:t,r=a.height,i=r===void 0?Ta:r,o="";return Bn?o+="translate(".concat(n.x/G-e/2,"em, ").concat(n.y/G-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/G,"em), calc(-50% + ").concat(n.y/G,"em)) "),o+="scale(".concat(n.size/G*(n.flipX?-1:1),", ").concat(n.size/G*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var zi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function jt(){var a=St,n=At,t=d.cssPrefix,e=d.replacementClass,r=zi;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var bn=!1;function za(){d.autoAddCss&&!bn&&(Ai(jt()),bn=!0)}var Fi={mixout:function(){return{dom:{css:jt,insertCss:za}}},hooks:function(){return{beforeDOMElementCreation:function(){za()},beforeI2svg:function(){za()}}}},M=D||{};M[_]||(M[_]={});M[_].styles||(M[_].styles={});M[_].hooks||(M[_].hooks={});M[_].shims||(M[_].shims=[]);var N=M[_],Ct=[],Nt=function(){S.removeEventListener("DOMContentLoaded",Nt),ba=1,Ct.map(function(n){return n()})},ba=!1;L&&(ba=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),ba||S.addEventListener("DOMContentLoaded",Nt));function ji(a){L&&(ba?setTimeout(a,0):Ct.push(a))}function fa(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?Ft(a):"<".concat(n," ").concat(Ii(e),">").concat(i.map(fa).join(""),"</").concat(n,">")}function yn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Fa=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,l,c,m;for(e===void 0?(l=1,m=n[i[0]]):(l=0,m=e);l<o;l++)c=i[l],m=s(m,n[c],c,n);return m};function Ot(a){return O(a).length!==1?null:a.codePointAt(0).toString(16)}function xn(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Da(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=xn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(a,xn(n)):N.styles[a]=f(f({},N.styles[a]||{}),i),a==="fas"&&Da("fa",n)}var ia=N.styles,Ci=N.shims,Tt=Object.keys(Ja),Ni=Tt.reduce(function(a,n){return a[n]=Object.keys(Ja[n]),a},{}),an=null,_t={},Mt={},Lt={},$t={},Dt={};function Oi(a){return~bi.indexOf(a)}function Ti(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!Oi(r)?r:null}var Rt=function(){var n=function(i){return Fa(ia,function(o,s,l){return o[l]=Fa(s,i,{}),o},{})};_t=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Mt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Dt=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in ia||d.autoFetchSvg,e=Fa(Ci,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Lt=e.names,$t=e.unicodes,an=Sa(d.styleDefault,{family:d.familyDefault})};Si(function(a){an=Sa(a.styleDefault,{family:d.familyDefault})});Rt();function nn(a,n){return(_t[a]||{})[n]}function _i(a,n){return(Mt[a]||{})[n]}function U(a,n){return(Dt[a]||{})[n]}function Wt(a){return Lt[a]||{prefix:null,iconName:null}}function Mi(a){var n=$t[a],t=nn("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function R(){return an}var Ut=function(){return{prefix:null,iconName:null,rest:[]}};function Li(a){var n=z,t=Tt.reduce(function(e,r){return e[r]="".concat(d.cssPrefix,"-").concat(r),e},{});return bt.forEach(function(e){(a.includes(t[e])||a.some(function(r){return Ni[e].includes(r)}))&&(n=e)}),n}function Sa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?z:t,r=di[e][a];if(e===sa&&!a)return"fad";var i=pn[e][a]||pn[e][r],o=a in N.styles?a:null,s=i||o||null;return s}function $i(a){var n=[],t=null;return a.forEach(function(e){var r=Ti(d.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function wn(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var Sn=xt.concat(yt);function Aa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=wn(a.filter(function(p){return Sn.includes(p)})),o=wn(a.filter(function(p){return!Sn.includes(p)})),s=i.filter(function(p){return r=p,!qn.includes(p)}),l=xa(s,1),c=l[0],m=c===void 0?null:c,u=Li(i),v=f(f({},$i(o)),{},{prefix:Sa(m,{family:u})});return f(f(f({},v),Ui({values:a,family:u,styles:ia,config:d,canonical:v,givenPrefix:r})),Di(e,r,v))}function Di(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?Wt(r):{},o=U(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!ia.far&&ia.fas&&!d.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Ri=bt.filter(function(a){return a!==z||a!==sa}),Wi=Object.keys(Oa).filter(function(a){return a!==z}).map(function(a){return Object.keys(Oa[a])}).flat();function Ui(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,l=a.config,c=l===void 0?{}:l,m=t===sa,u=n.includes("fa-duotone")||n.includes("fad"),v=c.familyDefault==="duotone",p=e.prefix==="fad"||e.prefix==="fa-duotone";if(!m&&(u||v||p)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Ri.includes(t)){var w=Object.keys(s).find(function(A){return Wi.includes(A)});if(w||c.autoFetchSvg){var x=Be.get(t).defaultShortPrefixId;e.prefix=x,e.iconName=U(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=R()||"fas"),e}var Yi=(function(){function a(){fe(this,a),this.definitions={}}return ue(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Da(s,o[s]);var l=Ja[z][s];l&&Da(l,o[s]),Rt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,m=c[2];t[s]||(t[s]={}),m.length>0&&m.forEach(function(u){typeof u=="string"&&(t[s][u]=c)}),t[s][l]=c}),t}}])})(),An=[],B={},V={},Xi=Object.keys(V);function Gi(a,n){var t=n.mixoutsTo;return An=a,B={},Object.keys(V).forEach(function(e){Xi.indexOf(e)===-1&&delete V[e]}),An.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),ha(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){B[o]||(B[o]=[]),B[o].push(i[o])})}e.provides&&e.provides(V)}),t}function Ra(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=B[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function X(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=B[a]||[];r.forEach(function(i){i.apply(null,t)})}function W(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return V[a]?V[a].apply(null,n):void 0}function Wa(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||R();if(n)return n=U(t,n)||n,yn(Yt.definitions,t,n)||yn(N.styles,t,n)}var Yt=new Yi,Hi=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},Bi={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(X("beforeI2svg",n),W("pseudoElements2svg",n),W("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ji(function(){qi({autoReplaceSvgRoot:t}),X("watch",n)})}},Vi={icon:function(n){if(n===null)return null;if(ha(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:U(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Sa(n[0]);return{prefix:e,iconName:U(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(gi))){var r=Aa(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=R();return{prefix:i,iconName:U(i,n)||n}}}},F={noAuto:Hi,config:d,dom:Bi,parse:Vi,library:Yt,findIconDefinition:Wa,toHtml:fa},qi=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?S:t;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&L&&d.autoReplaceSvg&&F.dom.i2svg({node:e})};function ka(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return fa(e)})}}),Object.defineProperty(a,"node",{get:function(){if(L){var e=S.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function Ki(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(Za(o)&&t.found&&!e.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};r.style=wa(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ji(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:e}]}]}function Qi(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function tn(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,l=a.maskId,c=a.extra,m=a.watchable,u=m===void 0?!1:m,v=e.found?e:t,p=v.width,w=v.height,x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return c.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(c.classes).join(" "),A={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(w)})};!Qi(c.attributes)&&!c.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),u&&(A.attributes[Y]="");var k=f(f({},A),{},{prefix:r,iconName:i,main:t,mask:e,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),I=e.found&&t.found?W("generateAbstractMask",k)||{children:[],attributes:{}}:W("generateAbstractIcon",k)||{children:[],attributes:{}},E=I.children,$=I.attributes;return k.children=E,k.attributes=$,s?Ji(k):Ki(k)}function kn(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Y]="");var c=f({},i.styles);Za(r)&&(c.transform=Ei({transform:r,width:t,height:e}),c["-webkit-transform"]=c.transform);var m=wa(c);m.length>0&&(l.style=m);var u=[];return u.push({tag:"span",attributes:l,children:[n]}),u}function Zi(a){var n=a.content,t=a.extra,e=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=wa(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var ja=N.styles;function Ua(a){var n=a[0],t=a[1],e=a.slice(4),r=xa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ea.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ea.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ea.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var ao={found:!1,width:512,height:512};function no(a,n){!It&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Ya(a,n){var t=n;return n==="fa"&&d.styleDefault!==null&&(n=R()),new Promise(function(e,r){if(t==="fa"){var i=Wt(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&ja[n]&&ja[n][a]){var o=ja[n][a];return e(Ua(o))}no(a,n),e(f(f({},ao),{},{icon:d.showMissingIcons&&a?W("missingIconAbstract")||{}:{}}))})}var In=function(){},Xa=d.measurePerformance&&ca&&ca.mark&&ca.measure?ca:{mark:In,measure:In},na='FA "7.3.1"',to=function(n){return Xa.mark("".concat(na," ").concat(n," begins")),function(){return Xt(n)}},Xt=function(n){Xa.mark("".concat(na," ").concat(n," ends")),Xa.measure("".concat(na," ").concat(n),"".concat(na," ").concat(n," begins"),"".concat(na," ").concat(n," ends"))},en={begin:to,end:Xt},va=function(){};function Pn(a){var n=a.getAttribute?a.getAttribute(Y):null;return typeof n=="string"}function eo(a){var n=a.getAttribute?a.getAttribute(qa):null,t=a.getAttribute?a.getAttribute(Ka):null;return n&&t}function ro(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function io(){if(d.autoReplaceSvg===!0)return pa.replace;var a=pa[d.autoReplaceSvg];return a||pa.replace}function oo(a){return S.createElementNS("http://www.w3.org/2000/svg",a)}function so(a){return S.createElement(a)}function Gt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?oo:so:t;if(typeof a=="string")return S.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(Gt(o,{ceFn:e}))}),r}function lo(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var pa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Gt(r),t)}),t.getAttribute(Y)===null&&d.keepOriginalSource){var e=S.createComment(lo(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~Qa(t).indexOf(d.replacementClass))return pa.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return fa(s)}).join(`
`);t.setAttribute(Y,""),t.innerHTML=o}};function En(a){a()}function Ht(a,n){var t=typeof n=="function"?n:va;if(a.length===0)t();else{var e=En;d.mutateApproach===ui&&(e=D.requestAnimationFrame||En),e(function(){var r=io(),i=en.begin("mutate");a.map(r),i(),t()})}}var rn=!1;function Bt(){rn=!0}function Ga(){rn=!1}var ya=null;function zn(a){if(mn&&d.observeMutations){var n=a.treeCallback,t=n===void 0?va:n,e=a.nodeCallback,r=e===void 0?va:e,i=a.pseudoElementsCallback,o=i===void 0?va:i,s=a.observeMutationsRoot,l=s===void 0?S:s;ya=new mn(function(c){if(!rn){var m=R();J(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Pn(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&Pn(u.target)&&~hi.indexOf(u.attributeName))if(u.attributeName==="class"&&eo(u.target)){var v=Aa(Qa(u.target)),p=v.prefix,w=v.iconName;u.target.setAttribute(qa,p||m),w&&u.target.setAttribute(Ka,w)}else ro(u.target)&&r(u.target)})}}),L&&ya.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fo(){ya&&ya.disconnect()}function co(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function uo(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=Aa(Qa(a));return r.prefix||(r.prefix=R()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=_i(r.prefix,a.innerText)||nn(r.prefix,Ot(a.innerText))),!r.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function mo(a){var n=J(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function go(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=uo(a),e=t.iconName,r=t.prefix,i=t.rest,o=mo(a),s=Ra("parseNodeAttributes",{},a),l=n.styleParser?co(a):[];return f({iconName:e,prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vo=N.styles;function Vt(a){var n=d.autoReplaceSvg==="nest"?Fn(a,{styleParser:!1}):Fn(a);return~n.extra.classes.indexOf(Et)?W("generateLayersText",a,n):W("generateSvgReplacementMutation",a,n)}function po(){return[].concat(O(yt),O(xt))}function jn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var t=S.documentElement.classList,e=function(u){return t.add("".concat(vn,"-").concat(u))},r=function(u){return t.remove("".concat(vn,"-").concat(u))},i=d.autoFetchSvg?po():qn.concat(Object.keys(vo));i.includes("fa")||i.push("fa");var o=[".".concat(Et,":not([").concat(Y,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(Y,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var l=en.begin("onTree"),c=s.reduce(function(m,u){try{var v=Vt(u);v&&m.push(v)}catch(p){It||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise(function(m,u){Promise.all(c).then(function(v){Ht(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),l(),m()})}).catch(function(v){l(),u(v)})})}function ho(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vt(a).then(function(t){t&&Ht([t],n)})}function bo(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Wa(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Wa(r||{})),a(e,f(f({},t),{},{mask:r}))}}var yo=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?T:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,m=c===void 0?null:c,u=t.classes,v=u===void 0?[]:u,p=t.attributes,w=p===void 0?{}:p,x=t.styles,A=x===void 0?{}:x;if(n){var k=n.prefix,I=n.iconName,E=n.icon;return ka(f({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:t}),tn({icons:{main:Ua(E),mask:l?Ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:I,transform:f(f({},T),r),symbol:o,maskId:m,extra:{attributes:w,styles:A,classes:v}})})}},xo={mixout:function(){return{icon:bo(yo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=jn,t.nodeCallback=ho,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?S:e,i=t.callback,o=i===void 0?function(){}:i;return jn(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,c=e.maskId,m=e.extra;return new Promise(function(u,v){Promise.all([Ya(r,i),l.iconName?Ya(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var w=xa(p,2),x=w[0],A=w[1];u([t,tn({icons:{main:x,mask:A},prefix:i,iconName:r,transform:o,symbol:s,maskId:c,extra:m,watchable:!0})])}).catch(v)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=wa(s);l.length>0&&(r.style=l);var c;return Za(o)&&(c=W("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},wo={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return ka({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},So={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,l=e.styles,c=l===void 0?{}:l;return ka({type:"counter",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),Zi({content:t.toString(),extra:{attributes:s,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(O(i))}})})}}}},Ao={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?T:r,o=e.classes,s=o===void 0?[]:o,l=e.attributes,c=l===void 0?{}:l,m=e.styles,u=m===void 0?{}:m;return ka({type:"text",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),kn({content:t,transform:f(f({},T),i),extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Bn){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,kn({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},qt=new RegExp('"',"ug"),Cn=[1105920,1112319],Nn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),He),fi),nr),Ha=Object.keys(Nn).reduce(function(a,n){return a[n.toLowerCase()]=Nn[n],a},{}),ko=Object.keys(Ha).reduce(function(a,n){var t=Ha[n];return a[n]=t[900]||O(Object.entries(t))[0][1],a},{});function Io(a){var n=a.replace(qt,"");return Ot(O(n)[0]||"")}function Po(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(qt,""),r=e.codePointAt(0),i=r>=Cn[0]&&r<=Cn[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function Eo(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(Ha[t]||{})[r]||ko[t]}function On(a,n){var t="".concat(ci).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=J(a.children),o=i.filter(function(Q){return Q.getAttribute(_a)===n})[0],s=D.getComputedStyle(a,n),l=s.getPropertyValue("font-family"),c=l.match(vi),m=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return a.removeChild(o),e();if(c&&u!=="none"&&u!==""){var v=s.getPropertyValue("content"),p=Eo(l,m),w=Io(v),x=c[0].startsWith("FontAwesome"),A=Po(s),k=nn(p,w),I=k;if(x){var E=Mi(w);E.iconName&&E.prefix&&(k=E.iconName,p=E.prefix)}if(k&&!A&&(!o||o.getAttribute(qa)!==p||o.getAttribute(Ka)!==I)){a.setAttribute(t,I),o&&a.removeChild(o);var $=go(),j=$.extra;j.attributes[_a]=n,Ya(k,p).then(function(Q){var Ia=tn(f(f({},$),{},{icons:{main:Q,mask:Ut()},prefix:p,iconName:I,extra:j,watchable:!0})),Z=S.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(Z,a.firstChild):a.appendChild(Z),Z.outerHTML=Ia.map(function(Pa){return fa(Pa)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function zo(a){return Promise.all([On(a,"::before"),On(a,"::after")])}function Fo(a){return a.parentNode!==document.head&&!~mi.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(_a)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var jo=function(n){return!!n&&kt.some(function(t){return n.includes(t)})},Co=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(l){return l.trim()});e=e.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var r=ga(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(jo(o)){var s=kt.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){r.e(l)}finally{r.f()}return t};function Tn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(L){var t;if(n)t=a;else if(d.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=ga(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=ga(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,m=Co(c.selectorText),u=ga(m),v;try{for(u.s();!(v=u.n()).done;){var p=v.value;e.add(p)}}catch(x){u.e(x)}finally{u.f()}}}catch(x){s.e(x)}finally{s.f()}}catch(x){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(x.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(x){r.e(x)}finally{r.f()}if(!e.size)return;var w=Array.from(e).join(", ");try{t=a.querySelectorAll(w)}catch{}}return new Promise(function(x,A){var k=J(t).filter(Fo).map(zo),I=en.begin("searchPseudoElements");Bt(),Promise.all(k).then(function(){I(),Ga(),x()}).catch(function(){I(),Ga(),A()})})}}var No={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Tn,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?S:e;d.searchPseudoElements&&Tn(r)}}},_n=!1,Oo={mixout:function(){return{dom:{unwatch:function(){Bt(),_n=!0}}}},hooks:function(){return{bootstrap:function(){zn(Ra("mutationObserverCallbacks",{}))},noAuto:function(){fo()},watch:function(t){var e=t.observeMutationsRoot;_n?Ga():zn(Ra("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Mn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},To={mixout:function(){return{parse:{transform:function(t){return Mn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Mn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(m)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),p.path)}]}]}}}},Ca={x:0,y:0,width:"100%",height:"100%"};function Ln(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function _o(a){return a.tag==="g"?a.children:[a]}var Mo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?Aa(r.split(" ").map(function(o){return o.trim()})):Ut();return i.prefix||(i.prefix=R()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,m=i.icon,u=o.width,v=o.icon,p=Pi({transform:l,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:f(f({},Ca),{},{fill:"white"})},x=m.children?{children:m.children.map(Ln)}:{},A={tag:"g",attributes:f({},p.inner),children:[Ln(f({tag:m.tag,attributes:f(f({},m.attributes),p.path)},x))]},k={tag:"g",attributes:f({},p.outer),children:[A]},I="mask-".concat(s||hn()),E="clip-".concat(s||hn()),$={tag:"mask",attributes:f(f({},Ca),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,k]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:_o(v)},$]};return e.push(j,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(I,")")},Ca)}),{children:e,attributes:r}}}},Lo={provides:function(n){var t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},$o={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Do=[Fi,xo,wo,So,Ao,No,Oo,To,Mo,Lo,$o];Gi(Do,{mixoutsTo:F});F.noAuto;var K=F.config;F.library;F.dom;var Kt=F.parse;F.findIconDefinition;F.toHtml;var Ro=F.icon;F.layer;F.text;F.counter;function Wo(a){return a=a-0,a===a}function Jt(a){return Wo(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,t)=>t?t.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Uo=(a,n)=>oa.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Yo(a){return a.charAt(0).toUpperCase()+a.slice(1)}var H=new Map,Xo=1e3;function Go(a){if(H.has(a))return H.get(a);const n={};let t=0;const e=a.length;for(;t<e;){const r=a.indexOf(";",t),i=r===-1?e:r,o=a.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),c=o.slice(s+1).trim();if(l&&c){const m=Jt(l);n[m.startsWith("webkit")?Yo(m):m]=c}}}t=i+1}if(H.size===Xo){const r=H.keys().next().value;r&&H.delete(r)}return H.set(a,n),n}function Qt(a,n,t={}){if(typeof n=="string")return n;const e=(n.children||[]).map(u=>{let v=u;return("fill"in t||t.gradientFill)&&u.tag==="path"&&"fill"in u.attributes&&(v={...u,attributes:{...u.attributes,fill:void 0}}),Qt(a,v)}),r=n.attributes||{},i={};for(const[u,v]of Object.entries(r))switch(!0){case u==="class":{i.className=v;break}case u==="style":{i.style=Go(String(v));break}case u.startsWith("aria-"):case u.startsWith("data-"):{i[u.toLowerCase()]=v;break}default:i[Jt(u)]=v}const{style:o,role:s,"aria-label":l,gradientFill:c,...m}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),c){i.fill=`url(#${c.id})`;const{type:u,stops:v=[],...p}=c;e.unshift(a(u==="linear"?"linearGradient":"radialGradient",{...p,id:c.id},v.map(Uo)))}return a(n.tag,{...i,...m},...e)}var Ho=Qt.bind(null,oa.createElement),$n=(a,n)=>{const t=b.useId();return a||(n?t:void 0)},Bo=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},Vo="searchPseudoElementsFullScan"in K&&typeof K.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",qo=Number.parseInt(Vo)>=7,Ko=()=>qo,ra="fa",P={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},Jo={left:"fa-pull-left",right:"fa-pull-right"},Qo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Zo={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},C={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function as(a){const n=K.cssPrefix||K.familyPrefix||ra;return n===ra?a:a.replace(new RegExp(String.raw`(?<=^|\s)${ra}-`,"g"),`${n}-`)}function ns(a){const{beat:n,fade:t,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:m,inverse:u,border:v,flip:p,size:w,rotation:x,pull:A,swapOpacity:k,rotateBy:I,widthAuto:E,canvasSquare:$,canvasRoomy:j,flip360:Q,buzz:Ia,float:Z,jello:Pa,spinSnap:ne,spinSnap4:te,spinSnap8:ee,swing:re,wag:ie,className:sn}=a,h=[];return sn&&h.push(...sn.split(" ")),n&&h.push(P.beat),t&&h.push(P.fade),e&&h.push(P.beatFade),r&&h.push(P.bounce),i&&h.push(P.shake),o&&h.push(P.spin),l&&h.push(P.spinReverse),s&&h.push(P.spinPulse),c&&h.push(P.pulse),m&&h.push(C.fixedWidth),u&&h.push(C.inverse),v&&h.push(C.border),p===!0&&h.push(C.flip),(p==="horizontal"||p==="both")&&h.push(C.flipHorizontal),(p==="vertical"||p==="both")&&h.push(C.flipVertical),w!=null&&h.push(Zo[w]),x!=null&&x!==0&&h.push(Qo[x]),A!=null&&h.push(Jo[A]),k&&h.push(C.swapOpacity),Ko()?(I&&h.push(C.rotateBy),E&&h.push(C.widthAuto),$&&h.push(C.canvasSquare),j&&h.push(C.canvasRoomy),Q&&h.push(P.flip360),Ia&&h.push(P.buzz),Z&&h.push(P.float),Pa&&h.push(P.jello),ne&&h.push(P.spinSnap),te&&h.push(P.spinSnap4),ee&&h.push(P.spinSnap8),re&&h.push(P.swing),ie&&h.push(P.wag),(K.cssPrefix||K.familyPrefix||ra)===ra?h:h.map(as)):h}var ts=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Dn(a){if(a)return ts(a)?a:Kt.icon(a)}function es(a){return Object.keys(a)}var Rn=new Bo("FontAwesomeIcon"),Zt={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},rs=new Set(Object.keys(Zt)),on=oa.forwardRef((a,n)=>{const t={...Zt,...a},{icon:e,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:c}=t,m=$n(l,!!r),u=$n(s,!!o),v=Dn(e);if(!v)return Rn.error("Icon lookup is undefined",e),null;const p=ns(t),w=typeof c=="string"?Kt.transform(c):c,x=Dn(r),A=Ro(v,{...p.length>0&&{classes:p},...w&&{transform:w},...x&&{mask:x},symbol:i,title:o,titleId:u,maskId:m});if(!A)return Rn.error("Could not find icon",v),null;const{abstract:k}=A,I={ref:n};for(const E of es(t))rs.has(E)||(I[E]=t[E]);return Ho(k[0],I)});on.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var is={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"]},os={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},ss={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]};/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var ls={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},fs={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]};console.log(`%c
  __   __
  \\ \\ / /
   \\ V / 
    | |  
    |_|  

%c  Hey, curious one! Nice to see you poking around.
  Want to work together? yashpratapsolanky@gmail.com
`,"color: #000066; font-size: 16px; font-family: monospace; font-weight: bold;","color: #ff4017; font-size: 12px; font-family: monospace;");const aa=({children:a,delay:n=0})=>{const[t,e]=b.useState(!1);return b.useEffect(()=>{const r=setTimeout(()=>{e(!0)},n);return()=>clearTimeout(r)},[n]),y.jsx("div",{style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"},children:a})},cs=["Hogwarts","127.0.0.1","us-east-1","localhost:3000","Battlefield","Sparta","Santiago Bernabéu Stadium","Delhi, India","Gotham","Winterfell","Bloomington, IN","Grand Tetons","Grand Canyon National Park","Banff","Yosemite Valley","Box Box Box","Spa-Francorchamps"],us=()=>{const[a,n]=b.useState("Boston, Massachusetts"),[t,e]=b.useState(!1),r=b.useRef([]),i=b.useRef(0),o=b.useCallback(()=>{(r.current.length===0||i.current>=r.current.length)&&(r.current=[...cs].sort(()=>Math.random()-.5),i.current=0),e(!0),n(r.current[i.current]),i.current+=1,i.current>=r.current.length&&setTimeout(()=>{n("Boston, Massachusetts"),r.current=[],i.current=0},1500),setTimeout(()=>e(!1),300)},[]);return y.jsxs("button",{type:"button",className:`map-pin-animated${t?" glitch":""}`,onClick:o,title:"Where am I?",children:[y.jsx(on,{icon:fs,"aria-hidden":"true"}),y.jsx("span",{className:"map-pin-text",children:a})]})},ms=({text:a,speed:n=100,cursorDisappearDelay:t=1e3})=>{const[e,r]=b.useState(""),[i,o]=b.useState(0),[s,l]=b.useState(1);return b.useEffect(()=>{if(i<a.length){const c=setTimeout(()=>{r(m=>m+a[i]),o(m=>m+1)},n);return()=>clearTimeout(c)}else if(i===a.length&&s===1){const c=setTimeout(()=>{l(0)},t);return()=>clearTimeout(c)}},[i,a,n,t,s]),y.jsxs("span",{style:{position:"relative"},children:[e,y.jsx("span",{className:`typewriter-cursor${s===0?" cursor-hidden":""}`})]})},ae=()=>{var e;const a=document.documentElement.getAttribute("data-theme"),t=a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t==="dark"?"#0a0a0a":"#ffffff"),localStorage.setItem("theme",t)},ds=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),ae())},gs=[{href:"mailto:yashpratapsolanky@gmail.com",icon:ls,label:"Email"},{href:"https://x.com/yashsolanky",icon:ss,label:"Twitter"},{href:"https://www.linkedin.com/in/ysolanky",icon:os,label:"LinkedIn"},{href:"https://github.com/ysolanky",icon:is,label:"GitHub"}],vs=oa.memo(()=>y.jsx("ul",{className:"c-social",children:gs.map(({href:a,icon:n,label:t})=>y.jsx("li",{children:y.jsx("a",{target:"_blank",rel:"noreferrer",href:a,title:t,"aria-label":`${t} Profile`,className:"icon-link",children:y.jsx(on,{icon:n})})},t))})),Wn=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],ps=a=>{const n=b.useRef(0);b.useEffect(()=>{const t=e=>{e.key===Wn[n.current]?(n.current++,n.current===Wn.length&&(a(),n.current=0)):n.current=0};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a])},hs=(a,n)=>{const t=b.useRef("");b.useEffect(()=>{const e=r=>{r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||(t.current+=r.key.toLowerCase(),t.current.length>a.length&&(t.current=t.current.slice(-a.length)),t.current===a&&(n(),t.current=""))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a,n])},Un=()=>{const a=["#000066","#ff4017","#ff6a47","#e0e0e0","#4444ff"];for(let n=0;n<60;n++){const t=document.createElement("div");t.className="pixel-confetti",t.style.left=Math.random()*100+"vw",t.style.backgroundColor=a[Math.floor(Math.random()*a.length)],t.style.animationDuration=1.5+Math.random()*2+"s",t.style.animationDelay=Math.random()*.5+"s",document.body.appendChild(t),setTimeout(()=>t.remove(),4e3)}},bs=(a,n)=>{const t=b.useRef([]),e=b.useRef(0),r=b.useRef(null);b.useEffect(()=>{const i=()=>{const o=Date.now();t.current.push(o),t.current=t.current.filter(s=>o-s<500),t.current.length>=3&&(e.current+=1,clearTimeout(r.current),r.current=setTimeout(()=>{e.current=0},2e3),e.current>=3?(n(),e.current=0):a(),t.current=[])};return window.addEventListener("click",i),()=>{window.removeEventListener("click",i),clearTimeout(r.current)}},[a,n])},ys=(a,n=25)=>{const t=b.useRef({x:0,y:0,z:0});b.useEffect(()=>{const e=r=>{const{x:i,y:o,z:s}=r.accelerationIncludingGravity||{};if(i==null)return;const l=Math.abs(i-t.current.x)+Math.abs(o-t.current.y)+Math.abs(s-t.current.z);t.current={x:i,y:o,z:s},l>n&&a()};return window.addEventListener("devicemotion",e),()=>window.removeEventListener("devicemotion",e)},[a,n])},xs=(a=6e4)=>{const[n,t]=b.useState(!1),e=b.useRef(null),r=b.useCallback(()=>{n&&t(!1),clearTimeout(e.current),e.current=setTimeout(()=>t(!0),a)},[n,a]);return b.useEffect(()=>{e.current=setTimeout(()=>t(!0),a);const i=["mousemove","keydown","click","touchstart","scroll"];return i.forEach(o=>window.addEventListener(o,r)),()=>{clearTimeout(e.current),i.forEach(o=>window.removeEventListener(o,r))}},[r,a]),n},ws=()=>{const a=b.useRef(null),n=b.useRef({x:100,y:100}),t=b.useRef({dx:2,dy:1.5}),e=b.useRef(null);return b.useEffect(()=>{const r=()=>{const i=a.current;if(!i)return;const o=window.innerWidth-i.offsetWidth,s=window.innerHeight-i.offsetHeight;n.current.x+=t.current.dx,n.current.y+=t.current.dy,(n.current.x<=0||n.current.x>=o)&&(t.current.dx*=-1),(n.current.y<=0||n.current.y>=s)&&(t.current.dy*=-1),n.current.x=Math.max(0,Math.min(o,n.current.x)),n.current.y=Math.max(0,Math.min(s,n.current.y)),i.style.transform=`translate(${n.current.x}px, ${n.current.y}px)`,e.current=requestAnimationFrame(r)};return e.current=requestAnimationFrame(r),()=>cancelAnimationFrame(e.current)},[]),y.jsx("div",{className:"dvd-screensaver",ref:a,children:"Yash Pratap Solanky"})},Ss=()=>{const[a,n]=b.useState(null),t=xs(6e4),e=b.useCallback(()=>Un(),[]),r=b.useCallback(()=>{for(let i=0;i<5;i++)setTimeout(()=>Un(),i*150)},[]);return ps(e),bs(e,r),ys(e),hs("hello",b.useCallback(()=>{n("Hey there, nice find!"),setTimeout(()=>n(null),3e3)},[])),y.jsxs("div",{className:"app-container",children:[t&&y.jsx(ws,{}),a&&y.jsx("div",{className:"secret-message",role:"status","aria-live":"polite",children:a}),y.jsx("main",{children:y.jsxs("section",{className:"profile-section",children:[y.jsx(aa,{children:y.jsx("div",{className:"avatar-container",children:y.jsx("img",{className:"avatar",src:"/profile.jpeg",alt:"Yash Pratap Solanky",width:"160",height:"160"})})}),y.jsx(aa,{children:y.jsx("div",{className:"titlecard",onClick:ae,onKeyDown:ds,role:"button",tabIndex:0,"aria-label":"Toggle theme",title:"Toggle theme",children:y.jsx(ms,{text:"Yash Pratap Solanky",speed:80})})}),y.jsx(aa,{delay:250,children:y.jsx("div",{className:"map-pin",children:y.jsx(us,{})})}),y.jsx(aa,{delay:500,children:y.jsx("div",{className:"social-links-container",children:y.jsx(vs,{})})}),y.jsx(aa,{delay:750,children:y.jsxs("div",{className:"about-me",children:["Staff Software Engineer at"," ",y.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.agno.com/","aria-label":"Agno company website",children:"Agno"})]})})]})})]})};oe.createRoot(document.getElementById("root")).render(y.jsx(oa.StrictMode,{children:y.jsx(Ss,{})}));
