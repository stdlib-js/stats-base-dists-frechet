// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,h,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=isNaN,E=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,a,o,f,c,s,p,l,h,y,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,h=e.width,y=e.padRight,v=void 0,(v=h-l.length)<0?l:l=y?l+w(v):w(v)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){var n,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[T(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return S.apply(null,n)}var I=Object.prototype,x=I.toString,F=I.__defineGetter__,V=I.__defineSetter__,O=I.__lookupGetter__,$=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,n)||$.call(r,n)?(e=r.__proto__,r.__proto__=I,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,n,t.get),o&&V&&V.call(r,n,t.set),r};function M(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function P(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return r!=r}var L=Math.floor,W=Math.ceil;function C(r){return r<0?W(r):L(r)}var R=Number,Z=R.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr,tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var n,t,e,i,a;if(null==r)return tr.call(r);t=r[ar],a=ar,n=null!=(i=r)&&er.call(i,a);try{r[ar]=void 0}catch(n){return tr.call(r)}return e=tr.call(r),n?r[ar]=t:delete r[ar],e}:function(r){return tr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,pr=nr,lr="function"==typeof Float64Array,hr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr,gr=sr,dr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,256,257]),t=n,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr,Nr=vr,Ar="function"==typeof Uint16Array,Er="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,t;if("function"!=typeof Er)return!1;try{n=new Er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Sr,kr={uint16:wr,uint8:Nr};(Sr=new kr.uint16(1))[0]=4660;var Ur,Tr,jr=52===new kr.uint8(Sr.buffer)[0];!0===jr?(Ur=1,Tr=0):(Ur=0,Tr=1);var Ir={HIGH:Ur,LOW:Tr},xr=new gr(1),Fr=new pr(xr.buffer),Vr=Ir.HIGH,Or=Ir.LOW;function $r(r,n,t,e){return xr[0]=r,n[e]=Fr[Vr],n[e+t]=Fr[Or],n}function Gr(r){return $r(r,[0,0],1,0)}P(Gr,"assign",$r);var Mr,Pr,Hr=!0===jr?1:0,Lr=new gr(1),Wr=new pr(Lr.buffer);function Cr(r){return Lr[0]=r,Wr[Hr]}!0===jr?(Mr=1,Pr=0):(Mr=0,Pr=1);var Rr={HIGH:Mr,LOW:Pr},Zr=new gr(1),qr=new pr(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,n){return qr[Xr]=r,qr[Yr]=n,Zr[0]}var Br=[0,0];function Dr(r,n){var t,e;return Gr.assign(r,Br,1,0),t=Br[0],t&=K,e=Cr(n),zr(t|=e&=J,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function rn(r,n,t,e){return H(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<Jr?(n[e]=r*Qr,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=2146435072,tn=2220446049250313e-31,en=2148532223,an=[0,0],on=[0,0];function un(r,n){var t,e;return 0===n||0===r||H(r)||D(r)?r:(rn(r,an,1,0),r=an[0],n+=an[1],n+=function(r){var n=Cr(r);return(n=(n&nn)>>>20)-X|0}(r),n<B?Dr(0,r):n>Y?r<0?Z:q:(n<=z?(n+=52,e=tn):e=1,Gr.assign(r,on,1,0),t=on[0],t&=en,e*zr(t|=n+X<<20,on[1])))}var fn=.6931471803691238,cn=1.9082149292705877e-10,sn=1.4426950408889634,pn=709.782712893384,ln=-745.1332191019411,hn=1/(1<<28),yn=-hn;function vn(r){var n;return H(r)||r===q?r:r===Z?0:r>pn?q:r<ln?0:r>yn&&r<hn?1+r:function(r,n,t){var e,i,a,o;return un(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(n=C(r<0?sn*r-.5:sn*r+.5))*fn,n*cn,n)}function gn(r){return L(r)===r}function dn(r){return gn(r/2)}function bn(r){return dn(r>0?r-1:r+1)}var mn=Math.sqrt,wn=!0===jr?0:1,Nn=new gr(1),An=new pr(Nn.buffer);function En(r,n){return Nn[0]=r,An[wn]=n>>>0,Nn[0]}function _n(r){return 0|r}var Sn=1072693247,kn=1e300,Un=1e-300,Tn=!0===jr?1:0,jn=new gr(1),In=new pr(jn.buffer);function xn(r,n){return jn[0]=r,In[Tn]=n>>>0,jn[0]}var Fn=1048575,Vn=1048576,On=1072693248,$n=536870912,Gn=524288,Mn=20,Pn=9007199254740992,Hn=.9617966939259756,Ln=.9617967009544373,Wn=-7.028461650952758e-9,Cn=[1,1.5],Rn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8],qn=1.4426950408889634,Xn=1.4426950216293335,Yn=1.9259629911266175e-8,zn=.6931471805599453,Bn=1048575,Dn=1048576,Jn=1071644672,Kn=20,Qn=.6931471824645996,rt=-1.904654299957768e-9,nt=1072693247,tt=1105199104,et=1139802112,it=1083179008,at=1072693248,ot=1083231232,ut=3230714880,ft=31,ct=1e300,st=1e-300,pt=8008566259537294e-32,lt=[0,0],ht=[0,0];function yt(r,n){var t,e,i,a,o,u,f,c,s,p,l,h,y,v;if(H(r)||H(n))return NaN;if(Gr.assign(n,lt,1,0),o=lt[0],0===lt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mn(r);if(-.5===n)return 1/mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if(Gr.assign(r,lt,1,0),a=lt[0],0===lt[1]){if(0===a)return function(r,n){return n===Z?q:n===q?0:n>0?bn(n)?r:0:bn(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&bn(n))return-1;if(D(r))return r===Z?yt(-0,-n):n<0?0:q}if(r<0&&!1===gn(n))return(r-r)/(r-r);if(i=Kr(r),t=a&K|0,e=o&K|0,f=o>>>ft|0,u=(u=a>>>ft|0)&&bn(n)?-1:1,e>tt){if(e>et)return function(r,n){return(Cr(r)&K)<=Sn?n<0?kn*kn:Un*Un:n>0?kn*kn:Un*Un}(r,n);if(t<nt)return 1===f?u*ct*ct:u*st*st;if(t>at)return 0===f?u*ct*ct:u*st*st;l=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Yn-a*qn)-((e=En(e=(o=Xn*i)+u,0))-o),r[0]=e,r[1]=t,r}(ht,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,h,y,v,g,d,b,m,w,N,A,E;return w=0,t<Vn&&(w-=53,t=Cr(n*=Pn)),w+=(t>>Mn)-X|0,t=(N=t&Fn|0)|On|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=Vn),o=En(i=(b=(n=xn(n,t))-(c=Cn[A]))*(m=1/(n+c)),0),e=(t>>1|$n)+Gn,f=xn(0,e+=A<<18),d=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=En(f=3+(a=o*o)+(d+=(u=m*(b-o*f-o*(n-(f-c))))*(o+i)),0),p=En(p=(b=o*f)+(m=u*f+(d-(f-3-a))*i),0),l=Ln*p,v=(h=Wn*p+(m-(p-b))*Hn+Zn[A])-((y=En(y=l+h+(s=Rn[A])+(g=w),0))-g-s-l),r[0]=y,r[1]=v,r}(ht,i,t);if(h=(p=(n-(c=En(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Gr.assign(h,lt,1,0),y=_n(lt[0]),v=_n(lt[1]),y>=it){if(0!=(y-it|v))return u*ct*ct;if(p+pt>h-s)return u*ct*ct}else if((y&K)>=ot){if(0!=(y-ut|v))return u*st*st;if(p<=h-s)return u*st*st}return h=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&K|0)>>Kn)-X|0,c=0,s>Jn&&(i=xn(0,((c=r+(Dn>>p+1)>>>0)&~(Bn>>(p=((c&K)>>Kn)-X|0)))>>>0),c=(c&Bn|Dn)>>Kn-p>>>0,r<0&&(c=-c),n-=i),r=_n(r=Cr(f=1-((f=(a=(i=En(i=t+n,0))*Qn)+(o=(t-(i-n))*zn+i*rt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Kn>>>0)>>Kn<=0?un(f,c):xn(f,r)}(y,s,p),u*h}function vt(r,n,t,e){return H(r)||H(n)||H(t)||H(e)||n<=0||t<=0?NaN:r<=e?0:vn(-yt((r-e)/t,-n))}function gt(r){return function(){return r}}function dt(r,n,t){G(r,n,{configurable:!1,enumerable:!1,get:t})}function bt(r){return"number"==typeof r}P(vt,"factory",(function(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?gt(NaN):function(e){return H(e)?NaN:e<=t?0:vn(-yt((e-t)/n,-r))}}));var mt=R.prototype.toString,wt=rr();function Nt(r){return"object"==typeof r&&(r instanceof R||(wt?function(r){try{return mt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function At(r){return bt(r)||Nt(r)}function Et(r){return bt(r)&&r>0}function _t(r){return Nt(r)&&r.valueOf()>0}function St(r){return Et(r)||_t(r)}P(At,"isPrimitive",bt),P(At,"isObject",Nt),P(St,"isPrimitive",Et),P(St,"isObject",_t);var kt=.6931471803691238,Ut=1.9082149292705877e-10,Tt=0x40000000000000,jt=.3333333333333333,It=1048575,xt=2146435072,Ft=1048576,Vt=1072693248;function Ot(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Z:H(r)||r<0?NaN:(a=0,(t=Cr(r))<Ft&&(a-=54,t=Cr(r*=Tt)),t>=xt?r+r:(a+=(t>>20)-X|0,a+=(f=614244+(t&=It)&1048576|0)>>20|0,u=(r=xn(r,t|f^Vt))-1,(It&2+t)<3?0===u?0===a?0:a*kt+a*Ut:(o=u*u*(.5-jt*u),0===a?u-o:a*kt-(o-a*Ut-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*kt-(n-(s*(n+o)+a*Ut)-u)):0===a?u-s*(u-o):a*kt-(s*(u-o)-a*Ut-u))))}var $t=.5772156649015329;function Gt(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:1+$t/r+$t+Ot(n/r)}function Mt(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}var Pt=-.16666666666666632,Ht=.00833333333332249,Lt=-.0001984126982985795,Wt=27557313707070068e-22,Ct=-2.5050760253406863e-8,Rt=1.58969099521155e-10;function Zt(r,n){var t,e,i;return t=Ht+(i=r*r)*(Lt+i*Wt)+i*(i*i)*(Ct+i*Rt),e=i*r,0===n?r+e*(Pt+i*t):r-(i*(.5*n-e*t)-n-e*Pt)}var qt=!0===jr?0:1,Xt=new gr(1),Yt=new pr(Xt.buffer);function zt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Bt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Dt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Jt=16777216,Kt=5.960464477539063e-8,Qt=zt(20),re=zt(20),ne=zt(20),te=zt(20);function ee(r,n,t,e,i,a,o,u,f){var c,s,p,l,h,y,v,g,d;for(l=a,d=e[t],g=t,h=0;g>0;h++)s=Kt*d|0,te[h]=d-Jt*s|0,d=e[g-1]+s,g-=1;if(d=un(d,i),d-=8*L(.125*d),d-=v=0|d,p=0,i>0?(v+=h=te[t-1]>>24-i,te[t-1]-=h<<24-i,p=te[t-1]>>23-i):0===i?p=te[t-1]>>23:d>=.5&&(p=2),p>0){for(v+=1,c=0,h=0;h<t;h++)g=te[h],0===c?0!==g&&(c=1,te[h]=16777216-g):te[h]=16777215-g;if(i>0)switch(i){case 1:te[t-1]&=8388607;break;case 2:te[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=un(1,i)))}if(0===d){for(g=0,h=t-1;h>=a;h--)g|=te[h];if(0===g){for(y=1;0===te[a-y];y++);for(h=t+1;h<=t+y;h++){for(f[u+h]=Bt[o+h],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(h-g)];e[h]=s}return ee(r,n,t+=y,e,i,a,o,u,f)}}if(0===d)for(t-=1,i-=24;0===te[t];)t-=1,i-=24;else(d=un(d,-i))>=Jt?(s=Kt*d|0,te[t]=d-Jt*s|0,i+=24,te[t+=1]=s):te[t]=0|d;for(s=un(1,i),h=t;h>=0;h--)e[h]=s*te[h],s*=Kt;for(h=t;h>=0;h--){for(s=0,y=0;y<=l&&y<=t-h;y++)s+=Dt[y]*e[h+y];ne[t-h]=s}for(s=0,h=t;h>=0;h--)s+=ne[h];for(n[0]=0===p?s:-s,s=ne[0]-s,h=1;h<=t;h++)s+=ne[h];return n[1]=0===p?s:-s,7&v}function ie(r,n,t,e){var i,a,o,u,f,c,s;for((a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)Qt[f]=c<0?0:Bt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Qt[o+(f-c)];re[f]=i}return ee(r,n,4,re,u,4,a,o,Qt)}var ae=Math.round,oe=.6366197723675814,ue=1.5707963267341256,fe=6077100506506192e-26,ce=6077100506303966e-26,se=20222662487959506e-37,pe=20222662487111665e-37,le=84784276603689e-45,he=2047;function ye(r,n,t){var e,i,a,o,u;return a=r-(e=ae(r*oe))*ue,o=e*fe,u=n>>20|0,t[0]=a-o,u-(Cr(t[0])>>20&he)>16&&(o=e*se-((i=a)-(a=i-(o=e*ce))-o),t[0]=a-o,u-(Cr(t[0])>>20&he)>49&&(o=e*le-((i=a)-(a=i-(o=e*pe))-o),t[0]=a-o)),t[1]=a-t[0]-o,e}var ve=0,ge=16777216,de=1.5707963267341256,be=6077100506506192e-26,me=2*be,we=3*be,Ne=4*be,Ae=598523,Ee=1072243195,_e=1073928572,Se=1074752122,ke=1074977148,Ue=1075183036,Te=1075388923,je=1075594811,Ie=1094263291,xe=[0,0,0],Fe=[0,0];function Ve(r,n){var t,e,i,a,o,u,f;if((i=Cr(r)&K|0)<=Ee)return n[0]=r,n[1]=0,0;if(i<=Se)return(i&Bn)===Ae?ye(r,i,n):i<=_e?r>0?(f=r-de,n[0]=f-be,n[1]=f-n[0]-be,1):(f=r+de,n[0]=f+be,n[1]=f-n[0]+be,-1):r>0?(f=r-2*de,n[0]=f-me,n[1]=f-n[0]-me,2):(f=r+2*de,n[0]=f+me,n[1]=f-n[0]+me,-2);if(i<=je)return i<=Ue?i===ke?ye(r,i,n):r>0?(f=r-3*de,n[0]=f-we,n[1]=f-n[0]-we,3):(f=r+3*de,n[0]=f+we,n[1]=f-n[0]+we,-3):i===Te?ye(r,i,n):r>0?(f=r-4*de,n[0]=f-Ne,n[1]=f-n[0]-Ne,4):(f=r+4*de,n[0]=f+Ne,n[1]=f-n[0]+Ne,-4);if(i<Ie)return ye(r,i,n);if(i>=nn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Xt[0]=r,Yt[qt]}(r),f=zr(i-((e=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)xe[o]=0|f,f=(f-xe[o])*ge;for(xe[2]=f,a=3;xe[a-1]===ve;)a-=1;return u=ie(xe,Fe,e,a),r<0?(n[0]=-Fe[0],n[1]=-Fe[1],-u):(n[0]=Fe[0],n[1]=Fe[1],u)}var Oe=1072243195,$e=1045430272,Ge=[0,0],Me=3.141592653589793,Pe=2.5066282746310007,He=143.01608;function Le(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=vn(r),t=r>He?(e=yt(r,.5*r-.25))*(e/t):yt(r,r-.5)/t,Pe*t*n}function We(r,n){return n/((1+$t*r)*r)}function Ce(r){var n,t,e,i;if(gn(r)&&r<0||r===Z||H(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Z}(r)?Z:q;if(r>171.61447887182297)return q;if(r<-170.5674972726612)return 0;if((t=Kr(r))>33)return r>=0?Le(r):(n=0==(1&(e=L(t)))?-1:1,(i=t-e)>.5&&(i=t-(e+=1)),i=t*function(r){var n;if(n=Cr(r),(n&=K)<=Oe)return n<$e?r:Zt(r,0);if(n>=nn)return NaN;switch(3&Ve(r,Ge)){case 0:return Zt(Ge[0],Ge[1]);case 1:return Mt(Ge[0],Ge[1]);case 2:return-Zt(Ge[0],Ge[1]);default:return-Mt(Ge[0],Ge[1])}}(Me*i),n*Me/(Kr(i)*Le(t)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return We(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return We(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Re(r,n,t){var e,i,a,o;return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:r<=4?q:(i=Ce(1-1/r),a=Ce(1-2/r),o=Ce(1-3/r),e=(Ce(1-4/r)-4*o*i+3*a*a)/yt(a-i*i,2),e-=6)}function Ze(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:r<=1?q:t+n*Ce(1-1/r)}function qe(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:t+n*yt(zn,-1/r)}function Xe(r,n,t){var e;return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:t+n*yt(1+(e=1/r),-e)}function Ye(r,n,t){var e,i,a;return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:r<=3?q:(e=(i=Ce(1-1/r))*i,a=Ce(1-2/r),(Ce(1-3/r)-3*a*i+2*e*i)/yt(a-e,1.5))}function ze(r,n,t){var e,i;return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:r<=2?q:(e=Ce(1-1/r),i=Ce(1-2/r),n*mn(i-e*e))}function Be(r,n,t){var e;return H(r)||H(n)||H(t)||r<=0||n<=0?NaN:r<=2?q:(e=Ce(1-1/r),n*n*(Ce(1-2/r)-e*e))}function De(r,n,t,e){return H(r)||H(n)||H(t)||H(e)||n<=0||t<=0?NaN:r<=e?Z:-yt((r-e)/t,-n)}function Je(r,n,t,e){var i;return H(r)||H(n)||H(t)||H(e)||n<=0||t<=0?NaN:r<=e?Z:(i=(r-e)/t,Ot(n/t)-(1+n)*Ot(i)-yt(i,-n))}function Ke(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?gt(NaN):function(e){var i;return H(e)?NaN:e<=t?Z:(i=(e-t)/n,Ot(r/n)-(1+r)*Ot(i)-yt(i,-r))}}function Qe(r,n,t,e){return H(r)||H(n)||H(t)||H(e)||n<=0||t<=0?NaN:vn(Je(r,n,t,e))}function ri(r,n,t,e){return H(r)||H(n)||H(t)||H(e)||r<0||r>1||n<=0||t<=0?NaN:e+t*yt(-Ot(r),-1/n)}function ni(){var r,n,t;if(!(this instanceof ni))return 0===arguments.length?new ni:new ni(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(n=arguments[1],t=arguments[2],!Et(r=arguments[0]))throw new TypeError(j("invalid argument. Shape parameter must be a positive number. Value: `%s`.",r));if(!Et(n))throw new TypeError(j("invalid argument. Scale parameter must be a number. Value: `%s`.",n));if(!bt(t)||H(t))throw new TypeError(j("invalid argument. Location parameter must be a number. Value: `%s`.",t))}else r=1,n=1,t=0;return G(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Et(n))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),G(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Et(r))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),G(this,"m",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!bt(r)||H(r))throw new TypeError(j("invalid assignment. Must be a number. Value: `%s`.",r));t=r}}),this}P(De,"factory",(function(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?gt(NaN):function(e){return H(e)?NaN:e<=t?Z:-yt((e-t)/n,-r)}})),P(Je,"factory",Ke),P(Qe,"factory",(function(r,n,t){var e;return H(r)||H(n)||H(t)||r<=0||n<=0?gt(NaN):(e=Ke(r,n,t),function(i){return H(i)?NaN:vn(e(i,r,n,t))})})),P(ri,"factory",(function(r,n,t){return H(r)||H(n)||H(t)||r<=0||n<=0?gt(NaN):function(e){return H(e)||e<0||e>1?NaN:t+n*yt(-Ot(e),-1/r)}})),dt(ni.prototype,"entropy",(function(){return Gt(this.alpha,this.s,this.m)})),dt(ni.prototype,"kurtosis",(function(){return Re(this.alpha,this.s,this.m)})),dt(ni.prototype,"mean",(function(){return Ze(this.alpha,this.s,this.m)})),dt(ni.prototype,"median",(function(){return qe(this.alpha,this.s,this.m)})),dt(ni.prototype,"mode",(function(){return Xe(this.alpha,this.s,this.m)})),dt(ni.prototype,"skewness",(function(){return Ye(this.alpha,this.s,this.m)})),dt(ni.prototype,"stdev",(function(){return ze(this.alpha,this.s,this.m)})),dt(ni.prototype,"variance",(function(){return Be(this.alpha,this.s,this.m)})),P(ni.prototype,"cdf",(function(r){return vt(r,this.alpha,this.s,this.m)})),P(ni.prototype,"logcdf",(function(r){return De(r,this.alpha,this.s,this.m)})),P(ni.prototype,"logpdf",(function(r){return Je(r,this.alpha,this.s,this.m)})),P(ni.prototype,"pdf",(function(r){return Qe(r,this.alpha,this.s,this.m)})),P(ni.prototype,"quantile",(function(r){return ri(r,this.alpha,this.s,this.m)}));var ti={};return M(ti,"cdf",vt),M(ti,"Frechet",ni),M(ti,"entropy",Gt),M(ti,"kurtosis",Re),M(ti,"logcdf",De),M(ti,"logpdf",Je),M(ti,"mean",Ze),M(ti,"median",qe),M(ti,"mode",Xe),M(ti,"pdf",Qe),M(ti,"quantile",ri),M(ti,"skewness",Ye),M(ti,"stdev",ze),M(ti,"variance",Be),ti},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).frechet=n();
//# sourceMappingURL=browser.js.map
