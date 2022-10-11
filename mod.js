// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,f.get),p&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var p=Math.floor,h=Math.ceil;function v(r){return r<0?h(r):p(r)}var y=Number,g=y.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY;function b(r){return r===d||r===g}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return w&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var E="function"==typeof Symbol?Symbol.toStringTag:"";var _=m()?function(r){var t,n,e,i,a;if(null==r)return N.call(r);n=r[E],a=E,t=null!=(i=r)&&A.call(i,a);try{r[E]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[E]=n:delete r[E],e}:function(r){return N.call(r)},S="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null;var U,I="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(S&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var j=U,T="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var F,V="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),n=t,r=(T&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var O=F,$="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var M,P="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=($&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var H=M,L="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var C,R="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof W)return!1;try{t=new W(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Z,q={uint16:C,uint8:H};(Z=new q.uint16(1))[0]=4660;var X,Y,z=52===new q.uint8(Z.buffer)[0];!0===z?(X=1,Y=0):(X=0,Y=1);var B={HIGH:X,LOW:Y},D=new O(1),J=new j(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,t){return D[0]=t,r[0]=J[K],r[1]=J[Q],r}function tr(r,t){return 1===arguments.length?rr([0,0],r):rr(r,t)}var nr,er,ir=!0===z?1:0,ar=new O(1),or=new j(ar.buffer);function ur(r){return ar[0]=r,or[ir]}!0===z?(nr=1,er=0):(nr=0,er=1);var fr={HIGH:nr,LOW:er},cr=new O(1),sr=new j(cr.buffer),lr=fr.HIGH,pr=fr.LOW;function hr(r,t){return sr[lr]=r,sr[pr]=t,cr[0]}var vr=[0,0];function yr(r,t){var n,e;return tr(vr,r),n=vr[0],n&=2147483647,e=ur(t),hr(n|=e&=2147483648,vr[1])}function gr(r){return Math.abs(r)}function dr(r,t){return l(t)||b(t)?(r[0]=t,r[1]=0,r):0!==t&&gr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var br=[0,0],wr=[0,0];function mr(r,t){var n,e;return 0===t||0===r||l(r)||b(r)?r:(function(r,t){1===arguments.length?dr([0,0],r):dr(r,t)}(br,r),t+=br[1],t+=function(r){var t=ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),t<-1074?yr(0,r):t>1023?r<0?g:d:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,tr(wr,r),n=wr[0],n&=2148532223,e*hr(n|=t+1023<<20,wr[1])))}function Nr(r){var t;return l(r)||r===d?r:r===g?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return mr(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=v(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Ar(r){return p(r)===r}function Er(r){return Ar(r/2)}function _r(r){return Er(r>0?r-1:r+1)}var Sr=Math.sqrt,kr=!0===z?0:1,Ur=new O(1),Ir=new j(Ur.buffer);function jr(r,t){return Ur[0]=r,Ir[kr]=t>>>0,Ur[0]}function Tr(r){return 0|r}var xr=!0===z?1:0,Fr=new O(1),Vr=new j(Fr.buffer);function Or(r,t){return Fr[0]=r,Vr[xr]=t>>>0,Fr[0]}var $r=[1,1.5],Gr=[0,.5849624872207642],Mr=[0,1.350039202129749e-8];var Pr=.6931471805599453;var Hr=1e300,Lr=1e-300,Wr=[0,0],Cr=[0,0];function Rr(r,t){var n,e,i,a,o,u,f,c,s,p,h,v,y,w;if(l(r)||l(t))return NaN;if(tr(Wr,t),o=Wr[0],0===Wr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Sr(r);if(-.5===t)return 1/Sr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(b(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:gr(r)<1==(t===d)?0:d}(r,t)}if(tr(Wr,r),a=Wr[0],0===Wr[1]){if(0===a)return function(r,t){return t===g?d:t===d?0:t>0?_r(t)?r:0:_r(t)?yr(d,r):d}(r,t);if(1===r)return 1;if(-1===r&&_r(t))return-1;if(b(r))return r===g?Rr(-0,-t):t<0?0:d}if(r<0&&!1===Ar(t))return(r-r)/(r-r);if(i=gr(r),n=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&_r(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&ur(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*Hr*Hr:u*Lr*Lr;if(n>1072693248)return 0===f?u*Hr*Hr:u*Lr*Lr;h=function(r,t){var n,e,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=jr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=n,r}(Cr,i)}else h=function(r,t,n){var e,i,a,o,u,f,c,s,l,p,h,v,y,g,d,b,w,m,N,A,E;return m=0,n<1048576&&(m-=53,n=ur(t*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=1048576),o=jr(i=(b=(t=Or(t,n))-(c=$r[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=Or(0,e+=A<<18),d=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=jr(f=3+(a=o*o)+(d+=(u=w*(b-o*f-o*(t-(f-c))))*(o+i)),0),y=(h=-7.028461650952758e-9*(l=jr(l=(b=o*f)+(w=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Mr[A])-((v=jr(v=(p=.9617967009544373*l)+h+(s=Gr[A])+(g=m),0))-g-s-p),r[0]=v,r[1]=y,r}(Cr,i,n);if(p=(t-(c=jr(t,0)))*h[0]+t*h[1],s=c*h[0],tr(Wr,v=p+s),y=Tr(Wr[0]),w=Tr(Wr[1]),y>=1083179008){if(0!=(y-1083179008|w))return u*Hr*Hr;if(p+8008566259537294e-32>v-s)return u*Hr*Hr}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|w))return u*Lr*Lr;if(p<=v-s)return u*Lr*Lr}return v=function(r,t,n){var e,i,a,o,u,f,c,s,l,p,h;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(e=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),t-=a=Or(0,e)),r=Tr(r=ur(c=1-((c=(o=.6931471824645996*(a=jr(a=n+t,0)))+(u=(n-(a-t))*Pr+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(h=a)?.16666666666666602:.16666666666666602+h*(h*(6613756321437934e-20+h*(4.1381367970572385e-8*h-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?mr(c,s):Or(c,r)}(y,s,p),u*v}function Zr(r,t,n,e){return l(r)||l(t)||l(n)||l(e)||t<=0||n<=0?NaN:r<=e?0:Nr(-Rr((r-e)/n,-t))}function qr(r){return function(){return r}}function Xr(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function Yr(r){return"number"==typeof r}s(Zr,"factory",(function(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?qr(NaN):function(e){if(l(e))return NaN;if(e<=n)return 0;return Nr(-Rr((e-n)/t,-r))}}));var zr=y.prototype.toString;var Br=m();function Dr(r){return"object"==typeof r&&(r instanceof y||(Br?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function Jr(r){return Yr(r)||Dr(r)}function Kr(r){return Yr(r)&&r>0}function Qr(r){return Dr(r)&&r.valueOf()>0}function rt(r){return Kr(r)||Qr(r)}s(Jr,"isPrimitive",Yr),s(Jr,"isObject",Dr),s(rt,"isPrimitive",Kr),s(rt,"isObject",Qr);var tt=.6931471803691238,nt=1.9082149292705877e-10;function et(r){var t,n,e,i,a,o,u,f,c,s,p,h;return 0===r?g:l(r)||r<0?NaN:(a=0,(n=ur(r))<1048576&&(a-=54,n=ur(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Or(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*tt+a*nt:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*tt-(o-a*nt-u)):(f=n-398458|0,c=440401-n|0,i=(p=(h=(s=u/(2+u))*s)*h)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=h*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*tt-(t-(s*(t+o)+a*nt)-u)):0===a?u-s*(u-o):a*tt-(s*(u-o)-a*nt-u))))}var it=.5772156649015329;function at(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:1+it/r+it+et(t/r)}function ot(r,t){var n,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*e-r*t))}var ut=-.16666666666666632;function ft(r,t){var n,e,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===t?r+e*(ut+i*n):r-(i*(.5*t-e*n)-t-e*ut)}var ct=!0===z?0:1,st=new O(1),lt=new j(st.buffer);function pt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var ht=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yt=5.960464477539063e-8,gt=pt(20),dt=pt(20),bt=pt(20),wt=pt(20);function mt(r,t,n,e,i,a,o,u,f){var c,s,l,h,v,y,g,d,b;for(h=a,b=e[n],d=n,v=0;d>0;v++)s=yt*b|0,wt[v]=b-16777216*s|0,b=e[d-1]+s,d-=1;if(b=mr(b,i),b-=8*p(.125*b),b-=g=0|b,l=0,i>0?(g+=v=wt[n-1]>>24-i,wt[n-1]-=v<<24-i,l=wt[n-1]>>23-i):0===i?l=wt[n-1]>>23:b>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=wt[v],0===c?0!==d&&(c=1,wt[v]=16777216-d):wt[v]=16777215-d;if(i>0)switch(i){case 1:wt[n-1]&=8388607;break;case 2:wt[n-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=mr(1,i)))}if(0===b){for(d=0,v=n-1;v>=a;v--)d|=wt[v];if(0===d){for(y=1;0===wt[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=ht[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];e[v]=s}return mt(r,t,n+=y,e,i,a,o,u,f)}}if(0===b)for(n-=1,i-=24;0===wt[n];)n-=1,i-=24;else(b=mr(b,-i))>=16777216?(s=yt*b|0,wt[n]=b-16777216*s|0,i+=24,wt[n+=1]=s):wt[n]=0|b;for(s=mr(1,i),v=n;v>=0;v--)e[v]=s*wt[v],s*=yt;for(v=n;v>=0;v--){for(s=0,y=0;y<=h&&y<=n-v;y++)s+=vt[y]*e[v+y];bt[n-v]=s}for(s=0,v=n;v>=0;v--)s+=bt[v];for(t[0]=0===l?s:-s,s=bt[0]-s,v=1;v<=n;v++)s+=bt[v];return t[1]=0===l?s:-s,7&g}function Nt(r,t,n,e){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)gt[f]=c<0?0:ht[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*gt[o+(f-c)];dt[f]=i}return 4,mt(r,t,4,dt,u,4,a,o,gt)}var At=Math.round;function Et(r,t,n){var e,i,a,o,u;return a=r-1.5707963267341256*(e=At(.6366197723675814*r)),o=6077100506506192e-26*e,u=t>>20|0,n[0]=a-o,u-(ur(n[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((i=a)-(a=i-(o=6077100506303966e-26*e))-o),n[0]=a-o,u-(ur(n[0])>>20&2047)>49&&(o=84784276603689e-45*e-((i=a)-(a=i-(o=20222662487111665e-37*e))-o),n[0]=a-o)),n[1]=a-n[0]-o,e}var _t=1.5707963267341256,St=6077100506506192e-26,kt=2*St,Ut=4*St,It=[0,0,0],jt=[0,0];function Tt(r,t){var n,e,i,a,o,u,f;if((i=2147483647&ur(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Et(r,i,t):i<=1073928572?r>0?(f=r-_t,t[0]=f-St,t[1]=f-t[0]-St,1):(f=r+_t,t[0]=f+St,t[1]=f-t[0]+St,-1):r>0?(f=r-2*_t,t[0]=f-kt,t[1]=f-t[0]-kt,2):(f=r+2*_t,t[0]=f+kt,t[1]=f-t[0]+kt,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Et(r,i,t):r>0?(f=r-3*_t,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*_t,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===i?Et(r,i,t):r>0?(f=r-4*_t,t[0]=f-Ut,t[1]=f-t[0]-Ut,4):(f=r+4*_t,t[0]=f+Ut,t[1]=f-t[0]+Ut,-4);if(i<1094263291)return Et(r,i,t);if(i>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return st[0]=r,lt[ct]}(r),f=hr(i-((e=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)It[o]=0|f,f=16777216*(f-It[o]);for(It[2]=f,a=3;0===It[a-1];)a-=1;return u=Nt(It,jt,e,a),r<0?(t[0]=-jt[0],t[1]=-jt[1],-u):(t[0]=jt[0],t[1]=jt[1],u)}var xt=[0,0];var Ft=3.141592653589793;function Vt(r){var t,n,e;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),n=Nr(r),2.5066282746310007*(n=r>143.01608?(e=Rr(r,.5*r-.25))*(e/n):Rr(r,r-.5)/n)*t}function Ot(r,t){return t/((1+it*r)*r)}function $t(r){var t,n,e,i;if(Ar(r)&&r<0||r===g||l(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===g}(r)?g:d;if(r>171.61447887182297)return d;if(r<-170.5674972726612)return 0;if((n=gr(r))>33)return r>=0?Vt(r):(t=0==(1&(e=p(n)))?-1:1,(i=n-e)>.5&&(i=n-(e+=1)),i=n*function(r){var t;if(t=ur(r),(t&=2147483647)<=1072243195)return t<1045430272?r:ft(r,0);if(t>=2146435072)return NaN;switch(3&Tt(r,xt)){case 0:return ft(xt[0],xt[1]);case 1:return ot(xt[0],xt[1]);case 2:return-ft(xt[0],xt[1]);default:return-ot(xt[0],xt[1])}}(Ft*i),t*Ft/(gr(i)*Vt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Ot(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Ot(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/n)}(r-=2)}function Gt(r,t,n){var e,i,a,o;return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:r<=4?d:(i=$t(1-1/r),a=$t(1-2/r),o=$t(1-3/r),e=($t(1-4/r)-4*o*i+3*a*a)/Rr(a-i*i,2),e-=6)}function Mt(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:r<=1?d:n+t*$t(1-1/r)}function Pt(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:n+t*Rr(Pr,-1/r)}function Ht(r,t,n){var e;return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:n+t*Rr(1+(e=1/r),-e)}function Lt(r,t,n){var e,i,a;return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:r<=3?d:(e=(i=$t(1-1/r))*i,a=$t(1-2/r),($t(1-3/r)-3*a*i+2*e*i)/Rr(a-e,1.5))}function Wt(r,t,n){var e,i;return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:r<=2?d:(e=$t(1-1/r),i=$t(1-2/r),t*Sr(i-e*e))}function Ct(r,t,n){var e;return l(r)||l(t)||l(n)||r<=0||t<=0?NaN:r<=2?d:(e=$t(1-1/r),t*t*($t(1-2/r)-e*e))}function Rt(r,t,n,e){return l(r)||l(t)||l(n)||l(e)||t<=0||n<=0?NaN:r<=e?g:-Rr((r-e)/n,-t)}function Zt(r,t,n,e){var i;return l(r)||l(t)||l(n)||l(e)||t<=0||n<=0?NaN:r<=e?g:(i=(r-e)/n,et(t/n)-(1+t)*et(i)-Rr(i,-t))}function qt(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?qr(NaN):function(e){var i;if(l(e))return NaN;if(e<=n)return g;return i=(e-n)/t,et(r/t)-(1+r)*et(i)-Rr(i,-r)}}function Xt(r,t,n,e){return l(r)||l(t)||l(n)||l(e)||t<=0||n<=0?NaN:Nr(Zt(r,t,n,e))}function Yt(r,t,n,e){return l(r)||l(t)||l(n)||l(e)||r<0||r>1||t<=0||n<=0?NaN:e+n*Rr(-et(r),-1/t)}function zt(r){return"number"==typeof r}function Bt(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function Dt(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+Bt(i):Bt(i)+r,e&&(r="-"+r)),r}s(Rt,"factory",(function(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?qr(NaN):function(e){if(l(e))return NaN;if(e<=n)return g;return-Rr((e-n)/t,-r)}})),s(Zt,"factory",qt),s(Xt,"factory",(function(r,t,n){var e;return l(r)||l(t)||l(n)||r<=0||t<=0?qr(NaN):(e=qt(r,t,n),function(i){if(l(i))return NaN;return Nr(e(i,r,t,n))})})),s(Yt,"factory",(function(r,t,n){return l(r)||l(t)||l(n)||r<=0||t<=0?qr(NaN):function(e){if(l(e)||e<0||e>1)return NaN;return n+t*Rr(-et(e),-1/r)}}));var Jt=String.prototype.toLowerCase,Kt=String.prototype.toUpperCase;function Qt(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!zt(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=Dt(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=Dt(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===Kt.call(r.specifier)?Kt.call(n):Jt.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function rn(r){return"string"==typeof r}var tn=Math.abs,nn=String.prototype.toLowerCase,en=String.prototype.toUpperCase,an=String.prototype.replace,on=/e\+(\d)$/,un=/e-(\d)$/,fn=/^(\d+)$/,cn=/^(\d+)e/,sn=/\.0$/,ln=/\.0*e/,pn=/(\..*[^0])0*e/;function hn(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!zt(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":tn(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=an.call(n,pn,"$1e"),n=an.call(n,ln,"e"),n=an.call(n,sn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=an.call(n,on,"e+0$1"),n=an.call(n,un,"e-0$1"),r.alternate&&(n=an.call(n,fn,"$1."),n=an.call(n,cn,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===en.call(r.specifier)?en.call(n):nn.call(n)}function vn(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function yn(r,t,n){var e=t-r.length;return e<0?r:r=n?r+vn(e):vn(e)+r}var gn=String.fromCharCode,dn=isNaN,bn=Array.isArray;function wn(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function mn(r){var t,n,e,i,a,o,u,f,c;if(!bn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(rn(e=r[f]))o+=e;else{if(t=void 0!==e.precision,!(e=wn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,dn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,dn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=Qt(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!dn(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=dn(a)?String(e.arg):gn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=hn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Dt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=yn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Nn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function An(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function En(r){var t,n,e,i;for(n=[],i=0,e=Nn.exec(r);e;)(t=r.slice(i,Nn.lastIndex-e[0].length)).length&&n.push(t),n.push(An(e)),i=Nn.lastIndex,e=Nn.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function _n(r){return"string"==typeof r}function Sn(r){var t,n,e;if(!_n(r))throw new TypeError(Sn("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=En(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return mn.apply(null,n)}function kn(){var r,t,n;if(!(this instanceof kn))return 0===arguments.length?new kn:new kn(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!Kr(r=arguments[0]))throw new TypeError(Sn("invalid argument. Shape parameter must be a positive number. Value: `%s`.",r));if(!Kr(t))throw new TypeError(Sn("invalid argument. Scale parameter must be a number. Value: `%s`.",t));if(!Yr(n)||l(n))throw new TypeError(Sn("invalid argument. Location parameter must be a number. Value: `%s`.",n))}else r=1,t=1,n=0;return f(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Kr(t))throw new TypeError(Sn("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),f(this,"s",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!Kr(r))throw new TypeError(Sn("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),f(this,"m",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Yr(r)||l(r))throw new TypeError(Sn("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),this}Xr(kn.prototype,"entropy",(function(){return at(this.alpha,this.s,this.m)})),Xr(kn.prototype,"kurtosis",(function(){return Gt(this.alpha,this.s,this.m)})),Xr(kn.prototype,"mean",(function(){return Mt(this.alpha,this.s,this.m)})),Xr(kn.prototype,"median",(function(){return Pt(this.alpha,this.s,this.m)})),Xr(kn.prototype,"mode",(function(){return Ht(this.alpha,this.s,this.m)})),Xr(kn.prototype,"skewness",(function(){return Lt(this.alpha,this.s,this.m)})),Xr(kn.prototype,"stdev",(function(){return Wt(this.alpha,this.s,this.m)})),Xr(kn.prototype,"variance",(function(){return Ct(this.alpha,this.s,this.m)})),s(kn.prototype,"cdf",(function(r){return Zr(r,this.alpha,this.s,this.m)})),s(kn.prototype,"logcdf",(function(r){return Rt(r,this.alpha,this.s,this.m)})),s(kn.prototype,"logpdf",(function(r){return Zt(r,this.alpha,this.s,this.m)})),s(kn.prototype,"pdf",(function(r){return Xt(r,this.alpha,this.s,this.m)})),s(kn.prototype,"quantile",(function(r){return Yt(r,this.alpha,this.s,this.m)}));var Un={};c(Un,"cdf",Zr),c(Un,"Frechet",kn),c(Un,"entropy",at),c(Un,"kurtosis",Gt),c(Un,"logcdf",Rt),c(Un,"logpdf",Zt),c(Un,"mean",Mt),c(Un,"median",Pt),c(Un,"mode",Ht),c(Un,"pdf",Xt),c(Un,"quantile",Yt),c(Un,"skewness",Lt),c(Un,"stdev",Wt),c(Un,"variance",Ct);export{kn as Frechet,Zr as cdf,Un as default,at as entropy,Gt as kurtosis,Rt as logcdf,Zt as logpdf,Mt as mean,Pt as median,Ht as mode,Xt as pdf,Yt as quantile,Lt as skewness,Wt as stdev,Ct as variance};
//# sourceMappingURL=mod.js.map
