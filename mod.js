// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,h=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,w,"$1e"),e=l.call(e,b,"e"),e=l.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,h,"e+0$1"),e=l.call(e,v,"e-0$1"),r.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+N(e):N(e)+r}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function k(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,a,o,c,s,p,l;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=k(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,_(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,t,e,i;for(t=[],i=0,e=I.exec(r);e;)(n=r.slice(i,I.lastIndex-e[0].length)).length&&t.push(n),t.push(j(e)),i=I.lastIndex,e=I.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function x(r){return"string"==typeof r}function F(r){var n,t,e;if(!x(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=T(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return U.apply(null,t)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,M=V.__lookupGetter__,P=V.__lookupSetter__;var H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,t.get),o&&G&&G.call(r,n,t.set),r};function L(r,n,t){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function W(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return r!=r}var R=Math.floor,Z=Math.ceil;function q(r){return r<0?Z(r):R(r)}var X=Number,Y=X.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY;function B(r){return r===z||r===Y}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof rr?rr.toStringTag:"";var tr=J()?function(r){var n,t,e,i,a;if(null==r)return K.call(r);t=r[nr],a=nr,n=null!=(i=r)&&Q.call(i,a);try{r[nr]=void 0}catch(n){return K.call(r)}return e=K.call(r),n?r[nr]=t:delete r[nr],e}:function(r){return K.call(r)},er="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===tr(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,fr="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var sr,pr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,n,t;if("function"!=typeof cr)return!1;try{n=new cr([1,3.14,-3.14,NaN]),t=n,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===tr(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr=sr,hr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var yr,gr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===tr(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr=yr,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var mr,Nr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===tr(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,Er={uint16:mr,uint8:dr};(Ar=new Er.uint16(1))[0]=4660;var _r,Sr,kr=52===new Er.uint8(Ar.buffer)[0];!0===kr?(_r=1,Sr=0):(_r=0,Sr=1);var Ur={HIGH:_r,LOW:Sr},Ir=new lr(1),jr=new ur(Ir.buffer),Tr=Ur.HIGH,xr=Ur.LOW;function Fr(r,n,t,e){return Ir[0]=r,n[e]=jr[Tr],n[e+t]=jr[xr],n}function Vr(r){return Fr(r,[0,0],1,0)}W(Vr,"assign",Fr);var Or,$r,Gr=!0===kr?1:0,Mr=new lr(1),Pr=new ur(Mr.buffer);function Hr(r){return Mr[0]=r,Pr[Gr]}!0===kr?(Or=1,$r=0):(Or=0,$r=1);var Lr={HIGH:Or,LOW:$r},Wr=new lr(1),Cr=new ur(Wr.buffer),Rr=Lr.HIGH,Zr=Lr.LOW;function qr(r,n){return Cr[Rr]=r,Cr[Zr]=n,Wr[0]}var Xr=[0,0];function Yr(r,n){var t,e;return Vr.assign(r,Xr,1,0),t=Xr[0],t&=2147483647,e=Hr(n),qr(t|=e&=2147483648,Xr[1])}function zr(r){return Math.abs(r)}function Br(r,n,t,e){return C(r)||B(r)?(n[e]=r,n[e+t]=0,n):0!==r&&zr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Dr=[0,0],Jr=[0,0];function Kr(r,n){var t,e;return 0===n||0===r||C(r)||B(r)?r:(Br(r,Dr,1,0),n+=Dr[1],n+=function(r){var n=Hr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Dr[0]),n<-1074?Yr(0,r):n>1023?r<0?Y:z:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Vr.assign(r,Jr,1,0),t=Jr[0],t&=2148532223,e*qr(t|=n+1023<<20,Jr[1])))}function Qr(r){var n;return C(r)||r===z?r:r===Y?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,a,o;return Kr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=q(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function rn(r){return R(r)===r}function nn(r){return rn(r/2)}function tn(r){return nn(r>0?r-1:r+1)}var en=Math.sqrt,an=!0===kr?0:1,on=new lr(1),un=new ur(on.buffer);function fn(r,n){return on[0]=r,un[an]=n>>>0,on[0]}function cn(r){return 0|r}var sn=!0===kr?1:0,pn=new lr(1),ln=new ur(pn.buffer);function hn(r,n){return pn[0]=r,ln[sn]=n>>>0,pn[0]}var vn=[1,1.5],yn=[0,.5849624872207642],gn=[0,1.350039202129749e-8];var dn=.6931471805599453;var bn=1e300,wn=1e-300,mn=[0,0],Nn=[0,0];function An(r,n){var t,e,i,a,o,u,f,c,s,p,l,h,v,y;if(C(r)||C(n))return NaN;if(Vr.assign(n,mn,1,0),o=mn[0],0===mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return en(r);if(-.5===n)return 1/en(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(B(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:zr(r)<1==(n===z)?0:z}(r,n)}if(Vr.assign(r,mn,1,0),a=mn[0],0===mn[1]){if(0===a)return function(r,n){return n===Y?z:n===z?0:n>0?tn(n)?r:0:tn(n)?Yr(z,r):z}(r,n);if(1===r)return 1;if(-1===r&&tn(n))return-1;if(B(r))return r===Y?An(-0,-n):n<0?0:z}if(r<0&&!1===rn(n))return(r-r)/(r-r);if(i=zr(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&tn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Hr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*bn*bn:u*wn*wn;if(t>1072693248)return 0===f?u*bn*bn:u*wn*wn;l=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=fn(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Nn,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,h,v,y,g,d,b,w,m,N,A,E;return m=0,t<1048576&&(m-=53,t=Hr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=1048576),o=fn(i=(b=(n=hn(n,t))-(c=vn[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=hn(0,e+=A<<18),d=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=fn(f=3+(a=o*o)+(d+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),y=(h=-7.028461650952758e-9*(p=fn(p=(b=o*f)+(w=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(w-(p-b))+gn[A])-((v=fn(v=(l=.9617967009544373*p)+h+(s=yn[A])+(g=m),0))-g-s-l),r[0]=v,r[1]=y,r}(Nn,i,t);if(h=(p=(n-(c=fn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Vr.assign(h,mn,1,0),v=cn(mn[0]),y=cn(mn[1]),v>=1083179008){if(0!=(v-1083179008|y))return u*bn*bn;if(p+8008566259537294e-32>h-s)return u*bn*bn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|y))return u*wn*wn;if(p<=h-s)return u*wn*wn}return h=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,h;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=a=hn(0,e)),r=cn(r=Hr(c=1-((c=(o=.6931471824645996*(a=fn(a=t+n,0)))+(u=(t-(a-n))*dn+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(h=a)?.16666666666666602:.16666666666666602+h*(h*(6613756321437934e-20+h*(4.1381367970572385e-8*h-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Kr(c,s):hn(c,r)}(v,s,p),u*h}function En(r,n,t,e){return C(r)||C(n)||C(t)||C(e)||n<=0||t<=0?NaN:r<=e?0:Qr(-An((r-e)/t,-n))}function _n(r){return function(){return r}}function Sn(r,n,t){H(r,n,{configurable:!1,enumerable:!1,get:t})}function kn(r){return"number"==typeof r}W(En,"factory",(function(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?_n(NaN):function(e){if(C(e))return NaN;if(e<=t)return 0;return Qr(-An((e-t)/n,-r))}}));var Un=X.prototype.toString;var In=J();function jn(r){return"object"==typeof r&&(r instanceof X||(In?function(r){try{return Un.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function Tn(r){return kn(r)||jn(r)}function xn(r){return kn(r)&&r>0}function Fn(r){return jn(r)&&r.valueOf()>0}function Vn(r){return xn(r)||Fn(r)}W(Tn,"isPrimitive",kn),W(Tn,"isObject",jn),W(Vn,"isPrimitive",xn),W(Vn,"isObject",Fn);var On=.6931471803691238,$n=1.9082149292705877e-10;function Gn(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?Y:C(r)||r<0?NaN:(a=0,(t=Hr(r))<1048576&&(a-=54,t=Hr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=hn(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*On+a*$n:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*On-(o-a*$n-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*On-(n-(s*(n+o)+a*$n)-u)):0===a?u-s*(u-o):a*On-(s*(u-o)-a*$n-u))))}var Mn=.5772156649015329;function Pn(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:1+Mn/r+Mn+Gn(n/r)}function Hn(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}var Ln=-.16666666666666632;function Wn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(Ln+i*t):r-(i*(.5*n-e*t)-n-e*Ln)}var Cn=!0===kr?0:1,Rn=new lr(1),Zn=new ur(Rn.buffer);function qn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Xn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Yn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],zn=5.960464477539063e-8,Bn=qn(20),Dn=qn(20),Jn=qn(20),Kn=qn(20);function Qn(r,n,t,e,i,a,o,u,f){var c,s,p,l,h,v,y,g,d;for(l=a,d=e[t],g=t,h=0;g>0;h++)s=zn*d|0,Kn[h]=d-16777216*s|0,d=e[g-1]+s,g-=1;if(d=Kr(d,i),d-=8*R(.125*d),d-=y=0|d,p=0,i>0?(y+=h=Kn[t-1]>>24-i,Kn[t-1]-=h<<24-i,p=Kn[t-1]>>23-i):0===i?p=Kn[t-1]>>23:d>=.5&&(p=2),p>0){for(y+=1,c=0,h=0;h<t;h++)g=Kn[h],0===c?0!==g&&(c=1,Kn[h]=16777216-g):Kn[h]=16777215-g;if(i>0)switch(i){case 1:Kn[t-1]&=8388607;break;case 2:Kn[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=Kr(1,i)))}if(0===d){for(g=0,h=t-1;h>=a;h--)g|=Kn[h];if(0===g){for(v=1;0===Kn[a-v];v++);for(h=t+1;h<=t+v;h++){for(f[u+h]=Xn[o+h],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(h-g)];e[h]=s}return Qn(r,n,t+=v,e,i,a,o,u,f)}}if(0===d)for(t-=1,i-=24;0===Kn[t];)t-=1,i-=24;else(d=Kr(d,-i))>=16777216?(s=zn*d|0,Kn[t]=d-16777216*s|0,i+=24,Kn[t+=1]=s):Kn[t]=0|d;for(s=Kr(1,i),h=t;h>=0;h--)e[h]=s*Kn[h],s*=zn;for(h=t;h>=0;h--){for(s=0,v=0;v<=l&&v<=t-h;v++)s+=Yn[v]*e[h+v];Jn[t-h]=s}for(s=0,h=t;h>=0;h--)s+=Jn[h];for(n[0]=0===p?s:-s,s=Jn[0]-s,h=1;h<=t;h++)s+=Jn[h];return n[1]=0===p?s:-s,7&y}function rt(r,n,t,e){var i,a,o,u,f,c,s;for(4,(a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)Bn[f]=c<0?0:Xn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Bn[o+(f-c)];Dn[f]=i}return 4,Qn(r,n,4,Dn,u,4,a,o,Bn)}var nt=Math.round;function tt(r,n,t){var e,i,a,o,u;return a=r-1.5707963267341256*(e=nt(.6366197723675814*r)),o=6077100506506192e-26*e,u=n>>20|0,t[0]=a-o,u-(Hr(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((i=a)-(a=i-(o=6077100506303966e-26*e))-o),t[0]=a-o,u-(Hr(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((i=a)-(a=i-(o=20222662487111665e-37*e))-o),t[0]=a-o)),t[1]=a-t[0]-o,e}var et=1.5707963267341256,it=6077100506506192e-26,at=2*it,ot=4*it,ut=[0,0,0],ft=[0,0];function ct(r,n){var t,e,i,a,o,u,f;if((i=2147483647&Hr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?tt(r,i,n):i<=1073928572?r>0?(f=r-et,n[0]=f-it,n[1]=f-n[0]-it,1):(f=r+et,n[0]=f+it,n[1]=f-n[0]+it,-1):r>0?(f=r-2*et,n[0]=f-at,n[1]=f-n[0]-at,2):(f=r+2*et,n[0]=f+at,n[1]=f-n[0]+at,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?tt(r,i,n):r>0?(f=r-3*et,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*et,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===i?tt(r,i,n):r>0?(f=r-4*et,n[0]=f-ot,n[1]=f-n[0]-ot,4):(f=r+4*et,n[0]=f+ot,n[1]=f-n[0]+ot,-4);if(i<1094263291)return tt(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Rn[0]=r,Zn[Cn]}(r),f=qr(i-((e=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)ut[o]=0|f,f=16777216*(f-ut[o]);for(ut[2]=f,a=3;0===ut[a-1];)a-=1;return u=rt(ut,ft,e,a),r<0?(n[0]=-ft[0],n[1]=-ft[1],-u):(n[0]=ft[0],n[1]=ft[1],u)}var st=[0,0];var pt=3.141592653589793;function lt(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Qr(r),2.5066282746310007*(t=r>143.01608?(e=An(r,.5*r-.25))*(e/t):An(r,r-.5)/t)*n}function ht(r,n){return n/((1+Mn*r)*r)}function vt(r){var n,t,e,i;if(rn(r)&&r<0||r===Y||C(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Y}(r)?Y:z;if(r>171.61447887182297)return z;if(r<-170.5674972726612)return 0;if((t=zr(r))>33)return r>=0?lt(r):(n=0==(1&(e=R(t)))?-1:1,(i=t-e)>.5&&(i=t-(e+=1)),i=t*function(r){var n;if(n=Hr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Wn(r,0);if(n>=2146435072)return NaN;switch(3&ct(r,st)){case 0:return Wn(st[0],st[1]);case 1:return Hn(st[0],st[1]);case 2:return-Wn(st[0],st[1]);default:return-Hn(st[0],st[1])}}(pt*i),n*pt/(zr(i)*lt(t)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ht(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ht(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function yt(r,n,t){var e,i,a,o;return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:r<=4?z:(i=vt(1-1/r),a=vt(1-2/r),o=vt(1-3/r),e=(vt(1-4/r)-4*o*i+3*a*a)/An(a-i*i,2),e-=6)}function gt(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:r<=1?z:t+n*vt(1-1/r)}function dt(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:t+n*An(dn,-1/r)}function bt(r,n,t){var e;return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:t+n*An(1+(e=1/r),-e)}function wt(r,n,t){var e,i,a;return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:r<=3?z:(e=(i=vt(1-1/r))*i,a=vt(1-2/r),(vt(1-3/r)-3*a*i+2*e*i)/An(a-e,1.5))}function mt(r,n,t){var e,i;return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:r<=2?z:(e=vt(1-1/r),i=vt(1-2/r),n*en(i-e*e))}function Nt(r,n,t){var e;return C(r)||C(n)||C(t)||r<=0||n<=0?NaN:r<=2?z:(e=vt(1-1/r),n*n*(vt(1-2/r)-e*e))}function At(r,n,t,e){return C(r)||C(n)||C(t)||C(e)||n<=0||t<=0?NaN:r<=e?Y:-An((r-e)/t,-n)}function Et(r,n,t,e){var i;return C(r)||C(n)||C(t)||C(e)||n<=0||t<=0?NaN:r<=e?Y:(i=(r-e)/t,Gn(n/t)-(1+n)*Gn(i)-An(i,-n))}function _t(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?_n(NaN):function(e){var i;if(C(e))return NaN;if(e<=t)return Y;return i=(e-t)/n,Gn(r/n)-(1+r)*Gn(i)-An(i,-r)}}function St(r,n,t,e){return C(r)||C(n)||C(t)||C(e)||n<=0||t<=0?NaN:Qr(Et(r,n,t,e))}function kt(r,n,t,e){return C(r)||C(n)||C(t)||C(e)||r<0||r>1||n<=0||t<=0?NaN:e+t*An(-Gn(r),-1/n)}function Ut(){var r,n,t;if(!(this instanceof Ut))return 0===arguments.length?new Ut:new Ut(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(n=arguments[1],t=arguments[2],!xn(r=arguments[0]))throw new TypeError(F("invalid argument. Shape parameter must be a positive number. Value: `%s`.",r));if(!xn(n))throw new TypeError(F("invalid argument. Scale parameter must be a number. Value: `%s`.",n));if(!kn(t)||C(t))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",t))}else r=1,n=1,t=0;return H(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!xn(n))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),H(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!xn(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),H(this,"m",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!kn(r)||C(r))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",r));t=r}}),this}W(At,"factory",(function(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?_n(NaN):function(e){if(C(e))return NaN;if(e<=t)return Y;return-An((e-t)/n,-r)}})),W(Et,"factory",_t),W(St,"factory",(function(r,n,t){var e;return C(r)||C(n)||C(t)||r<=0||n<=0?_n(NaN):(e=_t(r,n,t),function(i){if(C(i))return NaN;return Qr(e(i,r,n,t))})})),W(kt,"factory",(function(r,n,t){return C(r)||C(n)||C(t)||r<=0||n<=0?_n(NaN):function(e){if(C(e)||e<0||e>1)return NaN;return t+n*An(-Gn(e),-1/r)}})),Sn(Ut.prototype,"entropy",(function(){return Pn(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"kurtosis",(function(){return yt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"mean",(function(){return gt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"median",(function(){return dt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"mode",(function(){return bt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"skewness",(function(){return wt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"stdev",(function(){return mt(this.alpha,this.s,this.m)})),Sn(Ut.prototype,"variance",(function(){return Nt(this.alpha,this.s,this.m)})),W(Ut.prototype,"cdf",(function(r){return En(r,this.alpha,this.s,this.m)})),W(Ut.prototype,"logcdf",(function(r){return At(r,this.alpha,this.s,this.m)})),W(Ut.prototype,"logpdf",(function(r){return Et(r,this.alpha,this.s,this.m)})),W(Ut.prototype,"pdf",(function(r){return St(r,this.alpha,this.s,this.m)})),W(Ut.prototype,"quantile",(function(r){return kt(r,this.alpha,this.s,this.m)}));var It={};L(It,"cdf",En),L(It,"Frechet",Ut),L(It,"entropy",Pn),L(It,"kurtosis",yt),L(It,"logcdf",At),L(It,"logpdf",Et),L(It,"mean",gt),L(It,"median",dt),L(It,"mode",bt),L(It,"pdf",St),L(It,"quantile",kt),L(It,"skewness",wt),L(It,"stdev",mt),L(It,"variance",Nt);export{Ut as Frechet,En as cdf,It as default,Pn as entropy,yt as kurtosis,At as logcdf,Et as logpdf,gt as mean,dt as median,bt as mode,St as pdf,kt as quantile,wt as skewness,mt as stdev,Nt as variance};
//# sourceMappingURL=mod.js.map
