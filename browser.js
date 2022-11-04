// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var p=Math.floor,h=Math.ceil;function y(r){return r<0?h(r):p(r)}var v=Number,g=v.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,b=1023;function m(r){return r===d||r===g}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return w&&"symbol"==typeof Symbol.toStringTag}var A,E=Object.prototype.toString,_=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",k=N()?function(r){var n,t,e,i,a;if(null==r)return E.call(r);t=r[S],a=S,n=null!=(i=r)&&_.call(i,a);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e}:function(r){return E.call(r)},U="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===k(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,x=A,F="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===k(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var $,G=I,M="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===k(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var L,W=$,C="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===k(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var q,X={uint16:L,uint8:W};(q=new X.uint16(1))[0]=4660;var Y,z,B=52===new X.uint8(q.buffer)[0];!0===B?(Y=1,z=0):(Y=0,z=1);var D={HIGH:Y,LOW:z},J=new G(1),K=new x(J.buffer),Q=D.HIGH,rr=D.LOW;function nr(r,n){return J[0]=n,r[0]=K[Q],r[1]=K[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er,ir,ar=!0===B?1:0,or=new G(1),ur=new x(or.buffer);function fr(r){return or[0]=r,ur[ar]}!0===B?(er=1,ir=0):(er=0,ir=1);var cr={HIGH:er,LOW:ir},sr=new G(1),lr=new x(sr.buffer),pr=cr.HIGH,hr=cr.LOW;function yr(r,n){return lr[pr]=r,lr[hr]=n,sr[0]}var vr=[0,0];function gr(r,n){var t,e;return tr(vr,r),t=vr[0],t&=2147483647,e=fr(n),yr(t|=e&=2147483648,vr[1])}function dr(r){return Math.abs(r)}function br(r,n,t,e){return l(r)||m(r)?(n[e]=r,n[e+t]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return br(r,[0,0],1,0)}),"assign",br);var mr=[0,0],wr=[0,0];function Nr(r,n){var t,e;return 0===n||0===r||l(r)||m(r)?r:(br(r,mr,1,0),n+=mr[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-b|0}(r=mr[0]),n<-1074?gr(0,r):n>1023?r<0?g:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(wr,r),t=wr[0],t&=2148532223,e*yr(t|=n+b<<20,wr[1])))}var Ar=1.4426950408889634,Er=1/(1<<28);function _r(r){var n;return l(r)||r===d?r:r===g?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,i,a,o;return Nr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=y(r<0?Ar*r-.5:Ar*r+.5)),1.9082149292705877e-10*n,n)}function Sr(r){return p(r)===r}function kr(r){return Sr(r/2)}function Ur(r){return kr(r>0?r-1:r+1)}var Tr=Math.sqrt,jr=!0===B?0:1,Ir=new G(1),xr=new x(Ir.buffer);function Fr(r,n){return Ir[0]=r,xr[jr]=n>>>0,Ir[0]}function Vr(r){return 0|r}var Or=!0===B?1:0,$r=new G(1),Gr=new x($r.buffer);function Mr(r,n){return $r[0]=r,Gr[Or]=n>>>0,$r[0]}var Pr=1048576,Hr=[1,1.5],Lr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],Cr=.6931471805599453,Rr=2147483647,Zr=1048575,qr=1048576,Xr=2147483647,Yr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,n){var t,e,i,a,o,u,f,c,s,p,h,y,v,w;if(l(r)||l(n))return NaN;if(tr(Dr,n),o=Dr[0],0===Dr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Tr(r);if(-.5===n)return 1/Tr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(m(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(n===d)?0:d}(r,n)}if(tr(Dr,r),a=Dr[0],0===Dr[1]){if(0===a)return function(r,n){return n===g?d:n===d?0:n>0?Ur(n)?r:0:Ur(n)?gr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&Ur(n))return-1;if(m(r))return r===g?Kr(-0,-n):n<0?0:d}if(r<0&&!1===Sr(n))return(r-r)/(r-r);if(i=dr(r),t=a&Xr|0,e=o&Xr|0,f=o>>>31|0,u=(u=a>>>31|0)&&Ur(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*zr*zr:u*Br*Br;if(t>1072693248)return 0===f?u*zr*zr:u*Br*Br;h=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Jr,i)}else h=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,h,y,v,g,d,m,w,N,A,E,_;return N=0,t<Pr&&(N-=53,t=fr(n*=9007199254740992)),N+=(t>>20)-b|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,N+=1,t-=Pr),o=Fr(i=(m=(n=Mr(n,t))-(c=Hr[E]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=Mr(0,e+=E<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Fr(f=3+(a=o*o)+(d+=(u=w*(m-o*f-o*(n-(f-c))))*(o+i)),0),v=(h=-7.028461650952758e-9*(l=Fr(l=(m=o*f)+(w=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(w-(l-m))+Wr[E])-((y=Fr(y=(p=.9617967009544373*l)+h+(s=Lr[E])+(g=N),0))-g-s-p),r[0]=y,r[1]=v,r}(Jr,i,t);if(p=(n-(c=Fr(n,0)))*h[0]+n*h[1],s=c*h[0],tr(Dr,y=p+s),v=Vr(Dr[0]),w=Vr(Dr[1]),v>=Yr){if(0!=(v-Yr|w))return u*zr*zr;if(p+8008566259537294e-32>y-s)return u*zr*zr}else if((v&Xr)>=1083231232){if(0!=(v-3230714880|w))return u*Br*Br;if(p<=y-s)return u*Br*Br}return y=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&Rr|0)>>20)-b|0,c=0,s>1071644672&&(i=Mr(0,((c=r+(qr>>l+1)>>>0)&~(Zr>>(l=((c&Rr)>>20)-b|0)))>>>0),c=(c&Zr|qr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Vr(r=fr(f=1-((f=(a=.6931471824645996*(i=Fr(i=t+n,0)))+(o=(t-(i-n))*Cr+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Nr(f,c):Mr(f,r)}(v,s,p),u*y}function Qr(r,n,t,e){return l(r)||l(n)||l(t)||l(e)||n<=0||t<=0?NaN:r<=e?0:_r(-Kr((r-e)/t,-n))}function rn(r){return function(){return r}}function nn(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function tn(r){return"number"==typeof r}s(Qr,"factory",(function(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?rn(NaN):function(e){return l(e)?NaN:e<=t?0:_r(-Kr((e-t)/n,-r))}}));var en=v.prototype.toString,an=N();function on(r){return"object"==typeof r&&(r instanceof v||(an?function(r){try{return en.call(r),!0}catch(r){return!1}}(r):"[object Number]"===k(r)))}function un(r){return tn(r)||on(r)}function fn(r){return tn(r)&&r>0}function cn(r){return on(r)&&r.valueOf()>0}function sn(r){return fn(r)||cn(r)}s(un,"isPrimitive",tn),s(un,"isObject",on),s(sn,"isPrimitive",fn),s(sn,"isObject",cn);var ln=.6931471803691238,pn=1.9082149292705877e-10,hn=1048575;function yn(r){var n,t,e,i,a,o,u,f,c,s,p,h;return 0===r?g:l(r)||r<0?NaN:(a=0,(t=fr(r))<1048576&&(a-=54,t=fr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-b|0,a+=(f=614244+(t&=hn)&1048576|0)>>20|0,u=(r=Mr(r,t|1072693248^f))-1,(hn&2+t)<3?0===u?0===a?0:a*ln+a*pn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*ln-(o-a*pn-u)):(f=t-398458|0,c=440401-t|0,i=(p=(h=(s=u/(2+u))*s)*h)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=h*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*ln-(n-(s*(n+o)+a*pn)-u)):0===a?u-s*(u-o):a*ln-(s*(u-o)-a*pn-u))))}var vn=.5772156649015329;function gn(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:1+vn/r+vn+yn(n/r)}function dn(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}var bn=-.16666666666666632;function mn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(bn+i*t):r-(i*(.5*n-e*t)-n-e*bn)}var wn=!0===B?0:1,Nn=new G(1),An=new x(Nn.buffer);function En(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var _n=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Sn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kn=16777216,Un=5.960464477539063e-8,Tn=En(20),jn=En(20),In=En(20),xn=En(20);function Fn(r,n,t,e,i,a,o,u,f){var c,s,l,h,y,v,g,d,b;for(h=a,b=e[t],d=t,y=0;d>0;y++)s=Un*b|0,xn[y]=b-kn*s|0,b=e[d-1]+s,d-=1;if(b=Nr(b,i),b-=8*p(.125*b),b-=g=0|b,l=0,i>0?(g+=y=xn[t-1]>>24-i,xn[t-1]-=y<<24-i,l=xn[t-1]>>23-i):0===i?l=xn[t-1]>>23:b>=.5&&(l=2),l>0){for(g+=1,c=0,y=0;y<t;y++)d=xn[y],0===c?0!==d&&(c=1,xn[y]=16777216-d):xn[y]=16777215-d;if(i>0)switch(i){case 1:xn[t-1]&=8388607;break;case 2:xn[t-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=Nr(1,i)))}if(0===b){for(d=0,y=t-1;y>=a;y--)d|=xn[y];if(0===d){for(v=1;0===xn[a-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=_n[o+y],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(y-d)];e[y]=s}return Fn(r,n,t+=v,e,i,a,o,u,f)}}if(0===b)for(t-=1,i-=24;0===xn[t];)t-=1,i-=24;else(b=Nr(b,-i))>=kn?(s=Un*b|0,xn[t]=b-kn*s|0,i+=24,xn[t+=1]=s):xn[t]=0|b;for(s=Nr(1,i),y=t;y>=0;y--)e[y]=s*xn[y],s*=Un;for(y=t;y>=0;y--){for(s=0,v=0;v<=h&&v<=t-y;v++)s+=Sn[v]*e[y+v];In[t-y]=s}for(s=0,y=t;y>=0;y--)s+=In[y];for(n[0]=0===l?s:-s,s=In[0]-s,y=1;y<=t;y++)s+=In[y];return n[1]=0===l?s:-s,7&g}function Vn(r,n,t,e){var i,a,o,u,f,c,s;for((a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)Tn[f]=c<0?0:_n[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Tn[o+(f-c)];jn[f]=i}return Fn(r,n,4,jn,u,4,a,o,Tn)}var On=Math.round;function $n(r,n,t){var e,i,a,o,u;return a=r-1.5707963267341256*(e=On(.6366197723675814*r)),o=6077100506506192e-26*e,u=n>>20|0,t[0]=a-o,u-(fr(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((i=a)-(a=i-(o=6077100506303966e-26*e))-o),t[0]=a-o,u-(fr(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((i=a)-(a=i-(o=20222662487111665e-37*e))-o),t[0]=a-o)),t[1]=a-t[0]-o,e}var Gn=1.5707963267341256,Mn=6077100506506192e-26,Pn=2*Mn,Hn=3*Mn,Ln=4*Mn,Wn=[0,0,0],Cn=[0,0];function Rn(r,n){var t,e,i,a,o,u,f;if((i=2147483647&fr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?$n(r,i,n):i<=1073928572?r>0?(f=r-Gn,n[0]=f-Mn,n[1]=f-n[0]-Mn,1):(f=r+Gn,n[0]=f+Mn,n[1]=f-n[0]+Mn,-1):r>0?(f=r-2*Gn,n[0]=f-Pn,n[1]=f-n[0]-Pn,2):(f=r+2*Gn,n[0]=f+Pn,n[1]=f-n[0]+Pn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?$n(r,i,n):r>0?(f=r-3*Gn,n[0]=f-Hn,n[1]=f-n[0]-Hn,3):(f=r+3*Gn,n[0]=f+Hn,n[1]=f-n[0]+Hn,-3):1075388923===i?$n(r,i,n):r>0?(f=r-4*Gn,n[0]=f-Ln,n[1]=f-n[0]-Ln,4):(f=r+4*Gn,n[0]=f+Ln,n[1]=f-n[0]+Ln,-4);if(i<1094263291)return $n(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Nn[0]=r,An[wn]}(r),f=yr(i-((e=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Wn[o]=0|f,f=16777216*(f-Wn[o]);for(Wn[2]=f,a=3;0===Wn[a-1];)a-=1;return u=Vn(Wn,Cn,e,a),r<0?(n[0]=-Cn[0],n[1]=-Cn[1],-u):(n[0]=Cn[0],n[1]=Cn[1],u)}var Zn=[0,0],qn=3.141592653589793;function Xn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=_r(r),2.5066282746310007*(t=r>143.01608?(e=Kr(r,.5*r-.25))*(e/t):Kr(r,r-.5)/t)*n}function Yn(r,n){return n/((1+vn*r)*r)}function zn(r){var n,t,e,i;if(Sr(r)&&r<0||r===g||l(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===g}(r)?g:d;if(r>171.61447887182297)return d;if(r<-170.5674972726612)return 0;if((t=dr(r))>33)return r>=0?Xn(r):(n=0==(1&(e=p(t)))?-1:1,(i=t-e)>.5&&(i=t-(e+=1)),i=t*function(r){var n;if(n=fr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:mn(r,0);if(n>=2146435072)return NaN;switch(3&Rn(r,Zn)){case 0:return mn(Zn[0],Zn[1]);case 1:return dn(Zn[0],Zn[1]);case 2:return-mn(Zn[0],Zn[1]);default:return-dn(Zn[0],Zn[1])}}(qn*i),n*qn/(dr(i)*Xn(t)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Yn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Yn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Bn(r,n,t){var e,i,a,o;return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:r<=4?d:(i=zn(1-1/r),a=zn(1-2/r),o=zn(1-3/r),e=(zn(1-4/r)-4*o*i+3*a*a)/Kr(a-i*i,2),e-=6)}function Dn(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:r<=1?d:t+n*zn(1-1/r)}function Jn(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:t+n*Kr(Cr,-1/r)}function Kn(r,n,t){var e;return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:t+n*Kr(1+(e=1/r),-e)}function Qn(r,n,t){var e,i,a;return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:r<=3?d:(e=(i=zn(1-1/r))*i,a=zn(1-2/r),(zn(1-3/r)-3*a*i+2*e*i)/Kr(a-e,1.5))}function rt(r,n,t){var e,i;return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:r<=2?d:(e=zn(1-1/r),i=zn(1-2/r),n*Tr(i-e*e))}function nt(r,n,t){var e;return l(r)||l(n)||l(t)||r<=0||n<=0?NaN:r<=2?d:(e=zn(1-1/r),n*n*(zn(1-2/r)-e*e))}function tt(r,n,t,e){return l(r)||l(n)||l(t)||l(e)||n<=0||t<=0?NaN:r<=e?g:-Kr((r-e)/t,-n)}function et(r,n,t,e){var i;return l(r)||l(n)||l(t)||l(e)||n<=0||t<=0?NaN:r<=e?g:(i=(r-e)/t,yn(n/t)-(1+n)*yn(i)-Kr(i,-n))}function it(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?rn(NaN):function(e){var i;return l(e)?NaN:e<=t?g:(i=(e-t)/n,yn(r/n)-(1+r)*yn(i)-Kr(i,-r))}}function at(r,n,t,e){return l(r)||l(n)||l(t)||l(e)||n<=0||t<=0?NaN:_r(et(r,n,t,e))}function ot(r,n,t,e){return l(r)||l(n)||l(t)||l(e)||r<0||r>1||n<=0||t<=0?NaN:e+t*Kr(-yn(r),-1/n)}function ut(r){return"number"==typeof r}function ft(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function ct(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+ft(i):ft(i)+r,e&&(r="-"+r)),r}s(tt,"factory",(function(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?rn(NaN):function(e){return l(e)?NaN:e<=t?g:-Kr((e-t)/n,-r)}})),s(et,"factory",it),s(at,"factory",(function(r,n,t){var e;return l(r)||l(n)||l(t)||r<=0||n<=0?rn(NaN):(e=it(r,n,t),function(i){return l(i)?NaN:_r(e(i,r,n,t))})})),s(ot,"factory",(function(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?rn(NaN):function(e){return l(e)||e<0||e>1?NaN:t+n*Kr(-yn(e),-1/r)}}));var st=String.prototype.toLowerCase,lt=String.prototype.toUpperCase;function pt(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!ut(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=ct(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=ct(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===lt.call(r.specifier)?lt.call(t):st.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ht(r){return"string"==typeof r}var yt=Math.abs,vt=String.prototype.toLowerCase,gt=String.prototype.toUpperCase,dt=String.prototype.replace,bt=/e\+(\d)$/,mt=/e-(\d)$/,wt=/^(\d+)$/,Nt=/^(\d+)e/,At=/\.0$/,Et=/\.0*e/,_t=/(\..*[^0])0*e/;function St(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!ut(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":yt(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=dt.call(t,_t,"$1e"),t=dt.call(t,Et,"e"),t=dt.call(t,At,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dt.call(t,bt,"e+0$1"),t=dt.call(t,mt,"e-0$1"),r.alternate&&(t=dt.call(t,wt,"$1."),t=dt.call(t,Nt,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gt.call(r.specifier)?gt.call(t):vt.call(t)}function kt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Ut(r,n,t){var e=n-r.length;return e<0?r:r=t?r+kt(e):kt(e)+r}var Tt=String.fromCharCode,jt=isNaN,It=Array.isArray;function xt(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Ft(r){var n,t,e,i,a,o,u,f,c;if(!It(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(ht(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=xt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,jt(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,jt(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=pt(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!jt(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=jt(a)?String(e.arg):Tt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=St(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=ct(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Ut(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Vt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ot(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function $t(r){var n,t,e,i;for(t=[],i=0,e=Vt.exec(r);e;)(n=r.slice(i,Vt.lastIndex-e[0].length)).length&&t.push(n),t.push(Ot(e)),i=Vt.lastIndex,e=Vt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Gt(r){return"string"==typeof r}function Mt(r){var n,t,e;if(!Gt(r))throw new TypeError(Mt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=$t(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Ft.apply(null,t)}function Pt(){var r,n,t;if(!(this instanceof Pt))return 0===arguments.length?new Pt:new Pt(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(n=arguments[1],t=arguments[2],!fn(r=arguments[0]))throw new TypeError(Mt("invalid argument. Shape parameter must be a positive number. Value: `%s`.",r));if(!fn(n))throw new TypeError(Mt("invalid argument. Scale parameter must be a number. Value: `%s`.",n));if(!tn(t)||l(t))throw new TypeError(Mt("invalid argument. Location parameter must be a number. Value: `%s`.",t))}else r=1,n=1,t=0;return f(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!fn(n))throw new TypeError(Mt("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),f(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!fn(r))throw new TypeError(Mt("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),f(this,"m",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!tn(r)||l(r))throw new TypeError(Mt("invalid assignment. Must be a number. Value: `%s`.",r));t=r}}),this}nn(Pt.prototype,"entropy",(function(){return gn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"kurtosis",(function(){return Bn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"mean",(function(){return Dn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"median",(function(){return Jn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"mode",(function(){return Kn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"skewness",(function(){return Qn(this.alpha,this.s,this.m)})),nn(Pt.prototype,"stdev",(function(){return rt(this.alpha,this.s,this.m)})),nn(Pt.prototype,"variance",(function(){return nt(this.alpha,this.s,this.m)})),s(Pt.prototype,"cdf",(function(r){return Qr(r,this.alpha,this.s,this.m)})),s(Pt.prototype,"logcdf",(function(r){return tt(r,this.alpha,this.s,this.m)})),s(Pt.prototype,"logpdf",(function(r){return et(r,this.alpha,this.s,this.m)})),s(Pt.prototype,"pdf",(function(r){return at(r,this.alpha,this.s,this.m)})),s(Pt.prototype,"quantile",(function(r){return ot(r,this.alpha,this.s,this.m)}));var Ht={};return c(Ht,"cdf",Qr),c(Ht,"Frechet",Pt),c(Ht,"entropy",gn),c(Ht,"kurtosis",Bn),c(Ht,"logcdf",tt),c(Ht,"logpdf",et),c(Ht,"mean",Dn),c(Ht,"median",Jn),c(Ht,"mode",Kn),c(Ht,"pdf",at),c(Ht,"quantile",ot),c(Ht,"skewness",Qn),c(Ht,"stdev",rt),c(Ht,"variance",nt),Ht},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).frechet=n();
//# sourceMappingURL=browser.js.map
