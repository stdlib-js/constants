// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).constants=e()}(this,(function(){"use strict";function r(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty;var i=function(r){return"number"==typeof r};function o(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}var a=function(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+o(i):o(i)+r,t&&(r="-"+r)),r},u=i,f=a,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;var s=function(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!u(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=f(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=f(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n};var p=function(r){return"string"==typeof r},_=i,E=Math.abs,v=String.prototype.toLowerCase,N=String.prototype.toUpperCase,S=String.prototype.replace,I=/e\+(\d)$/,d=/e-(\d)$/,A=/^(\d+)$/,g=/^(\d+)e/,T=/\.0$/,h=/\.0*e/,y=/(\..*[^0])0*e/;function w(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var M=s,m=p,b=function(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!_(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":E(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=S.call(n,y,"$1e"),n=S.call(n,h,"e"),n=S.call(n,T,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=S.call(n,I,"e+0$1"),n=S.call(n,d,"e-0$1"),r.alternate&&(n=S.call(n,A,"$1."),n=S.call(n,g,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===N.call(r.specifier)?N.call(n):v.call(n)},O=function(r,e,n){var t=e-r.length;return t<0?r:r=n?r+w(t):w(t)+r},L=a,R=String.fromCharCode,P=isNaN,F=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}var X=function(r){var e,n,t,i,o,a,u,f,c;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(t=r[f],m(t))a+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,P(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,P(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=M(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!P(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=P(o)?String(t.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=L(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=O(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a},B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}var D=X,H=function(r){var e,n,t,i;for(n=[],i=0,t=B.exec(r);t;)(e=r.slice(i,B.lastIndex-t[0].length)).length&&n.push(e),n.push(C(t)),i=B.lastIndex,t=B.exec(r);return(e=r.slice(i)).length&&n.push(e),n},Y=function(r){return"string"==typeof r};var k=function r(e){var n,t,i;if(!Y(e))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",e));for(n=H(e),(t=new Array(arguments.length))[0]=n,i=1;i<t.length;i++)t[i]=arguments[i];return D.apply(null,t)},x=k,G=Object.prototype,j=G.toString,W=G.__defineGetter__,V=G.__defineSetter__,Q=G.__lookupGetter__,$=G.__lookupSetter__;var K=t,Z=function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Q.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=G,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&W&&W.call(r,e,n.get),a&&V&&V.call(r,e,n.set),r},z=n()?K:Z;var q,J,rr,er,nr=function(r,e,n){z(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})};var tr=nr,ir={};tr(ir,"MAX_ARRAY_LENGTH",J?q:(J=1,q=4294967295)),tr(ir,"MAX_TYPED_ARRAY_LENGTH",er?rr:(er=1,rr=9007199254740991));var or,ar,ur=ir;var fr={};nr(fr,"NUM_BYTES",ar?or:(ar=1,or=8));var cr,lr,sr=fr;var pr={};nr(pr,"NUM_BYTES",lr?cr:(lr=1,cr=16));var _r,Er,vr,Nr,Sr,Ir,dr,Ar,gr,Tr,hr,yr,wr,Mr,mr,br,Or,Lr,Rr,Pr,Fr,Ur,Xr,Br,Cr,Dr,Hr,Yr,kr,xr,Gr=pr;function jr(){return Mr?wr:(Mr=1,wr=Number)}function Wr(){if(br)return mr;br=1;var r=jr();return mr=r}var Vr=nr,Qr={};Vr(Qr,"CBRT_EPS",Er?_r:(Er=1,_r=.09921256574801247)),Vr(Qr,"EPS",Nr?vr:(Nr=1,vr=.0009765625)),Vr(Qr,"EXPONENT_BIAS",Ir?Sr:(Ir=1,Sr=15)),Vr(Qr,"MAX",Ar?dr:(Ar=1,dr=65504)),Vr(Qr,"MAX_SAFE_INTEGER",Tr?gr:(Tr=1,gr=2047)),Vr(Qr,"MIN_SAFE_INTEGER",yr?hr:(yr=1,hr=-2047)),Vr(Qr,"NINF",function(){if(Lr)return Or;Lr=1;var r=Wr().NEGATIVE_INFINITY;return Or=r}()),Vr(Qr,"NUM_BYTES",Pr?Rr:(Pr=1,Rr=2)),Vr(Qr,"PINF",function(){if(Ur)return Fr;Ur=1;var r=Wr().POSITIVE_INFINITY;return Fr=r}()),Vr(Qr,"PRECISION",Br?Xr:(Br=1,Xr=11)),Vr(Qr,"SMALLEST_NORMAL",Dr?Cr:(Dr=1,Cr=6103515625e-14)),Vr(Qr,"SMALLEST_SUBNORMAL",Yr?Hr:(Yr=1,Hr=5.960464477539063e-8)),Vr(Qr,"SQRT_EPS",xr?kr:(xr=1,kr=.03125));var $r,Kr,Zr,zr,qr,Jr,re,ee,ne,te,ie,oe,ae,ue,fe,ce,le,se,pe,_e,Ee,ve,Ne,Se,Ie,de,Ae,ge,Te,he,ye,we,Me,me,be,Oe,Le,Re,Pe,Fe,Ue,Xe,Be,Ce,De,He,Ye,ke,xe,Ge,je,We,Ve,Qe,$e,Ke,Ze,ze,qe,Je,rn,en,nn,tn,on,an,un,fn,cn,ln,sn,pn,_n,En,vn,Nn,Sn,In,dn,An,gn,Tn,hn,yn,wn,Mn,mn,bn,On,Ln,Rn=Qr;function Pn(){if(Jr)return qr;Jr=1;var r=zr?Zr:(zr=1,Zr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")});return qr=r}function Fn(){if(te)return ne;te=1;var r=function(){if(ee)return re;ee=1;var r=Pn()();return re=function(){return r&&"symbol"==typeof Symbol.toStringTag}}();return ne=r}function Un(){if(oe)return ie;oe=1;var r=Object.prototype.toString;return ie=r}function Xn(){if(se)return le;se=1;var r=function(){if(ce)return fe;ce=1;var r=Object.prototype.hasOwnProperty;return fe=function(e,n){return null!=e&&r.call(e,n)}}();return le=r}function Bn(){if(ve)return Ee;ve=1;var r=Xn(),e=function(){if(_e)return pe;_e=1;var r="function"==typeof Symbol?Symbol.toStringTag:"";return pe=r}(),n=Un();return Ee=function(t){var i,o,a;if(null==t)return n.call(t);o=t[e],i=r(t,e);try{t[e]=void 0}catch(r){return n.call(t)}return a=n.call(t),i?t[e]=o:delete t[e],a}}function Cn(){if(Se)return Ne;Se=1;var r,e=Fn(),n=function(){if(ue)return ae;ue=1;var r=Un();return ae=function(e){return r.call(e)}}(),t=Bn();return r=e()?t:n,Ne=r}function Dn(){if(ge)return Ae;ge=1;var r=function(){if(de)return Ie;de=1;var r=Cn(),e="function"==typeof Float32Array;return Ie=function(n){return e&&n instanceof Float32Array||"[object Float32Array]"===r(n)}}();return Ae=r}function Hn(){if(me)return Me;me=1;var r=Dn(),e=function(){if(he)return Te;he=1;var r=Number.POSITIVE_INFINITY;return Te=r}(),n=function(){if(we)return ye;we=1;var r="function"==typeof Float32Array?Float32Array:null;return ye=r}();return Me=function(){var t,i;if("function"!=typeof n)return!1;try{i=new n([1,3.14,-3.14,5e40]),t=r(i)&&1===i[0]&&3.140000104904175===i[1]&&-3.140000104904175===i[2]&&i[3]===e}catch(r){t=!1}return t}}function Yn(){if(Xe)return Ue;Xe=1;var r,e=function(){if(Oe)return be;Oe=1;var r=Hn();return be=r}(),n=function(){if(Re)return Le;Re=1;var r="function"==typeof Float32Array?Float32Array:void 0;return Le=r}(),t=Fe?Pe:(Fe=1,Pe=function(){throw new Error("not implemented")});return r=e()?n:t,Ue=r}function kn(){if(Ce)return Be;Ce=1;var r=new(Yn())(1);return Be=function(e){return r[0]=e,r[0]}}function xn(){if(He)return De;He=1;var r=function(){if(Kr)return $r;Kr=1;var r="function"==typeof Math.fround?Math.fround:null;return $r=r}(),e=kn();return"function"!=typeof r&&(r=e),De=r}function Gn(){if(en)return rn;en=1;var r=function(){if(Je)return qe;Je=1;var r=Cn(),e="function"==typeof Uint32Array;return qe=function(n){return e&&n instanceof Uint32Array||"[object Uint32Array]"===r(n)}}();return rn=r}function jn(){if(fn)return un;fn=1;var r=Gn(),e=tn?nn:(tn=1,nn=4294967295),n=function(){if(an)return on;an=1;var r="function"==typeof Uint32Array?Uint32Array:null;return on=r}();return un=function(){var t,i;if("function"!=typeof n)return!1;try{i=new n(i=[1,3.14,-3.14,e+1,e+2]),t=r(i)&&1===i[0]&&3===i[1]&&i[2]===e-2&&0===i[3]&&1===i[4]}catch(r){t=!1}return t}}function Wn(){if(Nn)return vn;Nn=1;var r,e=function(){if(ln)return cn;ln=1;var r=jn();return cn=r}(),n=function(){if(pn)return sn;pn=1;var r="function"==typeof Uint32Array?Uint32Array:void 0;return sn=r}(),t=En?_n:(En=1,_n=function(){throw new Error("not implemented")});return r=e()?n:t,vn=r}var Vn=nr,Qn={};Vn(Qn,"CBRT_EPS",function(){if(ke)return Ye;ke=1;var r=xn()(.004921566601151848);return Ye=r}()),Vn(Qn,"EPS",function(){if(Ge)return xe;Ge=1;var r=xn()(1.1920928955078125e-7);return xe=r}()),Vn(Qn,"EXPONENT_BIAS",We?je:(We=1,je=127)),Vn(Qn,"MAX",Qe?Ve:(Qe=1,Ve=34028234663852886e22)),Vn(Qn,"MAX_SAFE_INTEGER",Ke?$e:(Ke=1,$e=16777215)),Vn(Qn,"MIN_SAFE_INTEGER",ze?Ze:(ze=1,Ze=-16777215)),Vn(Qn,"NINF",function(){if(In)return Sn;In=1;var r,e=Yn(),n=Wn(),t=new e(1);return new n(t.buffer)[0]=4286578688,r=t[0],Sn=r}()),Vn(Qn,"NUM_BYTES",An?dn:(An=1,dn=4)),Vn(Qn,"PINF",function(){if(Tn)return gn;Tn=1;var r,e=Yn(),n=Wn(),t=new e(1);return new n(t.buffer)[0]=2139095040,r=t[0],gn=r}()),Vn(Qn,"PRECISION",yn?hn:(yn=1,hn=24)),Vn(Qn,"SMALLEST_NORMAL",Mn?wn:(Mn=1,wn=11754943508222875e-54)),Vn(Qn,"SMALLEST_SUBNORMAL",bn?mn:(bn=1,mn=1401298464324817e-60)),Vn(Qn,"SQRT_EPS",function(){if(Ln)return On;Ln=1;var r=xn()(.0003452669770922512);return On=r}());var $n,Kn,Zn,zn,qn,Jn,rt,et,nt,tt,it,ot,at,ut,ft,ct,lt,st,pt,_t,Et,vt,Nt,St,It,dt,At,gt,Tt,ht,yt,wt,Mt,mt,bt,Ot,Lt,Rt,Pt,Ft,Ut,Xt,Bt,Ct,Dt,Ht,Yt,kt,xt,Gt,jt,Wt,Vt,Qt,$t,Kt,Zt,zt,qt,Jt,ri,ei,ni,ti,ii,oi,ai,ui,fi,ci,li,si,pi,_i,Ei,vi,Ni,Si,Ii,di,Ai,gi,Ti,hi,yi,wi,Mi,mi,bi,Oi,Li,Ri,Pi,Fi,Ui,Xi,Bi,Ci,Di,Hi,Yi,ki,xi,Gi,ji,Wi,Vi,Qi,$i,Ki,Zi,zi,qi,Ji,ro,eo,no=Qn;var to=nr,io={};to(io,"APERY",Kn?$n:(Kn=1,$n=1.2020569031595942)),to(io,"CATALAN",zn?Zn:(zn=1,Zn=.915965594177219)),to(io,"CBRT_EPS",Jn?qn:(Jn=1,qn=60554544523933395e-22)),to(io,"E",et?rt:(et=1,rt=2.718281828459045)),to(io,"EPS",tt?nt:(tt=1,nt=2220446049250313e-31)),to(io,"EULERGAMMA",ot?it:(ot=1,it=.5772156649015329)),to(io,"EXPONENT_BIAS",ut?at:(ut=1,at=1023)),to(io,"FOURTH_PI",ct?ft:(ct=1,ft=.7853981633974483)),to(io,"FOURTH_ROOT_EPS",st?lt:(st=1,lt=.0001220703125)),to(io,"GAMMA_LANCZOS_G",_t?pt:(_t=1,pt=10.900511)),to(io,"GLAISHER",vt?Et:(vt=1,Et=1.2824271291006226)),to(io,"HALF_LN2",St?Nt:(St=1,Nt=.34657359027997264)),to(io,"HALF_PI",dt?It:(dt=1,It=1.5707963267948966)),to(io,"HIGH_WORD_EXPONENT_MASK",gt?At:(gt=1,At=2146435072)),to(io,"HIGH_WORD_SIGNIFICAND_MASK",ht?Tt:(ht=1,Tt=1048575)),to(io,"LN_HALF",wt?yt:(wt=1,yt=-.6931471805599453)),to(io,"LN_PI",mt?Mt:(mt=1,Mt=1.1447298858494002)),to(io,"LN_SQRT_TWO_PI",Ot?bt:(Ot=1,bt=.9189385332046728)),to(io,"LN10",Rt?Lt:(Rt=1,Lt=2.302585092994046)),to(io,"LN2",Ft?Pt:(Ft=1,Pt=.6931471805599453)),to(io,"LN_TWO_PI",Xt?Ut:(Xt=1,Ut=1.8378770664093456)),to(io,"LOG2E",Ct?Bt:(Ct=1,Bt=1.4426950408889634)),to(io,"LOG10E",Ht?Dt:(Ht=1,Dt=.4342944819032518)),to(io,"MAX",kt?Yt:(kt=1,Yt=17976931348623157e292)),to(io,"MAX_BASE2_EXPONENT",Gt?xt:(Gt=1,xt=1023)),to(io,"MAX_BASE2_EXPONENT_SUBNORMAL",Wt?jt:(Wt=1,jt=-1023)),to(io,"MAX_BASE10_EXPONENT",Qt?Vt:(Qt=1,Vt=308)),to(io,"MAX_BASE10_EXPONENT_SUBNORMAL",Kt?$t:(Kt=1,$t=-308)),to(io,"MAX_LN",zt?Zt:(zt=1,Zt=709.782712893384)),to(io,"MAX_SAFE_FIBONACCI",Jt?qt:(Jt=1,qt=8944394323791464)),to(io,"MAX_SAFE_INTEGER",ei?ri:(ei=1,ri=9007199254740991)),to(io,"MAX_SAFE_LUCAS",ti?ni:(ti=1,ni=7639424778862807)),to(io,"MAX_SAFE_NTH_FIBONACCI",oi?ii:(oi=1,ii=78)),to(io,"MAX_SAFE_NTH_LUCAS",ui?ai:(ui=1,ai=76)),to(io,"MIN_BASE2_EXPONENT",ci?fi:(ci=1,fi=-1022)),to(io,"MIN_BASE2_EXPONENT_SUBNORMAL",si?li:(si=1,li=-1074)),to(io,"MIN_BASE10_EXPONENT",_i?pi:(_i=1,pi=-308)),to(io,"MIN_BASE10_EXPONENT_SUBNORMAL",vi?Ei:(vi=1,Ei=-324)),to(io,"MIN_LN",Si?Ni:(Si=1,Ni=-708.3964185322641)),to(io,"MIN_SAFE_INTEGER",di?Ii:(di=1,Ii=-9007199254740991)),to(io,"NINF",function(){if(gi)return Ai;gi=1;var r=Wr().NEGATIVE_INFINITY;return Ai=r}()),to(io,"NUM_BYTES",hi?Ti:(hi=1,Ti=8)),to(io,"PHI",wi?yi:(wi=1,yi=1.618033988749895)),to(io,"PI",mi?Mi:(mi=1,Mi=3.141592653589793)),to(io,"PI_SQUARED",Oi?bi:(Oi=1,bi=9.869604401089358)),to(io,"PINF",function(){if(Ri)return Li;Ri=1;var r=Number.POSITIVE_INFINITY;return Li=r}()),to(io,"PRECISION",Fi?Pi:(Fi=1,Pi=53)),to(io,"SMALLEST_NORMAL",Xi?Ui:(Xi=1,Ui=22250738585072014e-324)),to(io,"SMALLEST_SUBNORMAL",Ci?Bi:(Ci=1,Bi=5e-324)),to(io,"SQRT_EPS",Hi?Di:(Hi=1,Di=1.4901161193847656e-8)),to(io,"SQRT_HALF",ki?Yi:(ki=1,Yi=.7071067811865476)),to(io,"SQRT_HALF_PI",Gi?xi:(Gi=1,xi=1.2533141373155003)),to(io,"SQRT_PHI",Wi?ji:(Wi=1,ji=1.272019649514069)),to(io,"SQRT_PI",Qi?Vi:(Qi=1,Vi=1.772453850905516)),to(io,"SQRT_THREE",Ki?$i:(Ki=1,$i=1.7320508075688772)),to(io,"SQRT_TWO",zi?Zi:(zi=1,Zi=1.4142135623730951)),to(io,"SQRT_TWO_PI",Ji?qi:(Ji=1,qi=2.5066282746310007)),to(io,"TWO_PI",eo?ro:(eo=1,ro=6.283185307179586));var oo,ao,uo,fo,co,lo,so=io;var po=nr,_o={};po(_o,"MAX",ao?oo:(ao=1,oo=127)),po(_o,"MIN",fo?uo:(fo=1,uo=-128)),po(_o,"NUM_BYTES",lo?co:(lo=1,co=1));var Eo,vo,No,So,Io,Ao,go=_o;var To=nr,ho={};To(ho,"MAX",vo?Eo:(vo=1,Eo=32767)),To(ho,"MIN",So?No:(So=1,No=-32768)),To(ho,"NUM_BYTES",Ao?Io:(Ao=1,Io=2));var yo,wo,Mo,mo,bo,Oo,Lo=ho;var Ro=nr,Po={};Ro(Po,"MAX",wo?yo:(wo=1,yo=2147483647)),Ro(Po,"MIN",mo?Mo:(mo=1,Mo=-2147483648)),Ro(Po,"NUM_BYTES",Oo?bo:(Oo=1,bo=4));var Fo=Po,Uo="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Xo(){throw new Error("setTimeout has not been defined")}function Bo(){throw new Error("clearTimeout has not been defined")}var Co=Xo,Do=Bo;function Ho(r){if(Co===setTimeout)return setTimeout(r,0);if((Co===Xo||!Co)&&setTimeout)return Co=setTimeout,setTimeout(r,0);try{return Co(r,0)}catch(e){try{return Co.call(null,r,0)}catch(e){return Co.call(this,r,0)}}}"function"==typeof Uo.setTimeout&&(Co=setTimeout),"function"==typeof Uo.clearTimeout&&(Do=clearTimeout);var Yo,ko=[],xo=!1,Go=-1;function jo(){xo&&Yo&&(xo=!1,Yo.length?ko=Yo.concat(ko):Go=-1,ko.length&&Wo())}function Wo(){if(!xo){var r=Ho(jo);xo=!0;for(var e=ko.length;e;){for(Yo=ko,ko=[];++Go<e;)Yo&&Yo[Go].run();Go=-1,e=ko.length}Yo=null,xo=!1,function(r){if(Do===clearTimeout)return clearTimeout(r);if((Do===Bo||!Do)&&clearTimeout)return Do=clearTimeout,clearTimeout(r);try{Do(r)}catch(e){try{return Do.call(null,r)}catch(e){return Do.call(this,r)}}}(r)}}function Vo(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];ko.push(new Qo(r,e)),1!==ko.length||xo||Ho(Wo)}function Qo(r,e){this.fun=r,this.array=e}Qo.prototype.run=function(){this.fun.apply(null,this.array)};var $o="browser",Ko="browser",Zo={},zo=[],qo={},Jo={},ra={};function ea(){}var na=ea,ta=ea,ia=ea,oa=ea,aa=ea,ua=ea,fa=ea;function ca(r){throw new Error("process.binding is not supported")}function la(){return"/"}function sa(r){throw new Error("process.chdir is not supported")}function pa(){return 0}var _a=Uo.performance||{},Ea=_a.now||_a.mozNow||_a.msNow||_a.oNow||_a.webkitNow||function(){return(new Date).getTime()};function va(r){var e=.001*Ea.call(_a),n=Math.floor(e),t=Math.floor(e%1*1e9);return r&&(n-=r[0],(t-=r[1])<0&&(n--,t+=1e9)),[n,t]}var Na=new Date;function Sa(){return(new Date-Na)/1e3}var Ia,da,Aa,ga,Ta,ha,ya,wa,Ma,ma,ba,Oa,La,Ra,Pa,Fa,Ua,Xa,Ba={nextTick:Vo,title:$o,browser:true,env:Zo,argv:zo,version:"",versions:qo,on:na,addListener:ta,once:ia,off:oa,removeListener:aa,removeAllListeners:ua,emit:fa,binding:ca,cwd:la,chdir:sa,umask:pa,hrtime:va,platform:Ko,release:Jo,config:ra,uptime:Sa},Ca=r(Object.freeze({__proto__:null,addListener:ta,argv:zo,binding:ca,browser:true,chdir:sa,config:ra,cwd:la,default:Ba,emit:fa,env:Zo,hrtime:va,nextTick:Vo,off:oa,on:na,once:ia,platform:Ko,release:Jo,removeAllListeners:ua,removeListener:aa,title:$o,umask:pa,uptime:Sa,version:"",versions:qo}));function Da(){if(ga)return Aa;ga=1;var r=function(){if(da)return Ia;da=1;var r=Ca.platform;return Ia=r}();return Aa=r}function Ha(){if(ha)return Ta;ha=1;var r=Da();return Ta="win32"===r}function Ya(){if(wa)return ya;wa=1;return ya=";"}function ka(){if(ma)return Ma;ma=1;return Ma=":"}function xa(){if(Ra)return La;Ra=1;return La="\\"}function Ga(){if(Fa)return Pa;Fa=1;return Pa="/"}var ja=nr,Wa={};ja(Wa,"DELIMITER",function(){if(Oa)return ba;Oa=1;var r=Ha(),e=Ya(),n=ka();return ba=r?e:n}()),ja(Wa,"DELIMITER_POSIX",ka()),ja(Wa,"DELIMITER_WIN32",Ya()),ja(Wa,"SEP",function(){if(Xa)return Ua;Xa=1;var r=Ha(),e=xa(),n=Ga();return Ua=r?e:n}()),ja(Wa,"SEP_POSIX",Ga()),ja(Wa,"SEP_WIN32",xa());var Va,Qa,$a,Ka,Za,za,qa,Ja,ru,eu,nu,tu,iu,ou,au,uu,fu,cu,lu,su,pu,_u,Eu,vu,Nu,Su,Iu,du,Au,gu,Tu=Wa;var hu=nr,yu={};hu(yu,"HOURS_IN_DAY",Qa?Va:(Qa=1,Va=24)),hu(yu,"HOURS_IN_WEEK",Ka?$a:(Ka=1,$a=168)),hu(yu,"MILLISECONDS_IN_DAY",za?Za:(za=1,Za=864e5)),hu(yu,"MILLISECONDS_IN_HOUR",Ja?qa:(Ja=1,qa=36e5)),hu(yu,"MILLISECONDS_IN_MINUTE",eu?ru:(eu=1,ru=6e4)),hu(yu,"MILLISECONDS_IN_SECOND",tu?nu:(tu=1,nu=1e3)),hu(yu,"MILLISECONDS_IN_WEEK",ou?iu:(ou=1,iu=6048e5)),hu(yu,"MINUTES_IN_DAY",uu?au:(uu=1,au=1440)),hu(yu,"MINUTES_IN_HOUR",cu?fu:(cu=1,fu=60)),hu(yu,"MINUTES_IN_WEEK",su?lu:(su=1,lu=10080)),hu(yu,"MONTHS_IN_YEAR",_u?pu:(_u=1,pu=12)),hu(yu,"SECONDS_IN_DAY",vu?Eu:(vu=1,Eu=86400)),hu(yu,"SECONDS_IN_HOUR",Su?Nu:(Su=1,Nu=3600)),hu(yu,"SECONDS_IN_MINUTE",du?Iu:(du=1,Iu=60)),hu(yu,"SECONDS_IN_WEEK",gu?Au:(gu=1,Au=604800));var wu,Mu,mu,bu,Ou=yu;var Lu=nr,Ru={};Lu(Ru,"MAX",Mu?wu:(Mu=1,wu=255)),Lu(Ru,"NUM_BYTES",bu?mu:(bu=1,mu=1));var Pu,Fu,Uu,Xu,Bu=Ru;var Cu=nr,Du={};Cu(Du,"MAX",Fu?Pu:(Fu=1,Pu=65535)),Cu(Du,"NUM_BYTES",Xu?Uu:(Xu=1,Uu=2));var Hu,Yu,ku,xu,Gu=Du;var ju=nr,Wu={};ju(Wu,"MAX",Yu?Hu:(Yu=1,Hu=4294967295)),ju(Wu,"NUM_BYTES",xu?ku:(xu=1,ku=4));var Vu,Qu,$u,Ku,Zu=Wu;var zu=nr,qu={};zu(qu,"MAX",Qu?Vu:(Qu=1,Vu=1114111)),zu(qu,"MAX_BMP",Ku?$u:(Ku=1,$u=65535));var Ju=qu,rf={};return nr(rf,"array",ur),nr(rf,"complex64",sr),nr(rf,"complex128",Gr),nr(rf,"float16",Rn),nr(rf,"float32",no),nr(rf,"float64",so),nr(rf,"int8",go),nr(rf,"int16",Lo),nr(rf,"int32",Fo),nr(rf,"path",Tu),nr(rf,"time",Ou),nr(rf,"uint8",Bu),nr(rf,"uint16",Gu),nr(rf,"uint32",Zu),nr(rf,"unicode",Ju),rf}));
//# sourceMappingURL=index.js.map
