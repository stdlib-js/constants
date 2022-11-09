// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";var t,n,A,e;var M=_,T={};M(T,"MAX_ARRAY_LENGTH",n?t:(n=1,t=4294967295)),M(T,"MAX_TYPED_ARRAY_LENGTH",e?A:(e=1,A=9007199254740991));var a,i,O=T;var u={};_(u,"NUM_BYTES",i?a:(i=1,a=8));var L,s,R=u;var P={};_(P,"NUM_BYTES",s?L:(s=1,L=16));var f,v,o,X,B,U,m,d,F,c,l,C,H,Y,D,p,G,j,h,W,b,Q,x,K,g,w,y=P;var V=_,Z={};V(Z,"CBRT_EPS",v?f:(v=1,f=.09921256574801247)),V(Z,"EPS",X?o:(X=1,o=.0009765625)),V(Z,"EXPONENT_BIAS",U?B:(U=1,B=15)),V(Z,"MAX",d?m:(d=1,m=65504)),V(Z,"MAX_SAFE_INTEGER",c?F:(c=1,F=2047)),V(Z,"MIN_SAFE_INTEGER",C?l:(C=1,l=-2047)),V(Z,"NINF",function(){if(Y)return H;Y=1;var _=r.NEGATIVE_INFINITY;return H=_}()),V(Z,"NUM_BYTES",p?D:(p=1,D=2)),V(Z,"PINF",function(){if(j)return G;j=1;var _=r.POSITIVE_INFINITY;return G=_}()),V(Z,"PRECISION",W?h:(W=1,h=11)),V(Z,"SMALLEST_NORMAL",Q?b:(Q=1,b=6103515625e-14)),V(Z,"SMALLEST_SUBNORMAL",K?x:(K=1,x=5.960464477539063e-8)),V(Z,"SQRT_EPS",w?g:(w=1,g=.03125));var k,q,z,J,$,__,r_,N_,E_,S_,I_,t_,n_,A_,e_,M_,T_,a_,i_,O_,u_,L_,s_,R_,P_,f_,v_,o_,X_=Z;var B_=_,U_={};B_(U_,"CBRT_EPS",function(){if(q)return k;q=1;var _=N(.004921566601151848);return k=_}()),B_(U_,"EPS",function(){if(J)return z;J=1;var _=N(1.1920928955078125e-7);return z=_}()),B_(U_,"EXPONENT_BIAS",__?$:(__=1,$=127)),B_(U_,"EXPONENT_MASK",N_?r_:(N_=1,r_=2139095040)),B_(U_,"MAX",S_?E_:(S_=1,E_=34028234663852886e22)),B_(U_,"MAX_SAFE_INTEGER",t_?I_:(t_=1,I_=16777215)),B_(U_,"MIN_SAFE_INTEGER",A_?n_:(A_=1,n_=-16777215)),B_(U_,"NINF",function(){if(M_)return e_;M_=1;var _,r=S,N=new E(1);return new r(N.buffer)[0]=4286578688,_=N[0],e_=_}()),B_(U_,"NUM_BYTES",a_?T_:(a_=1,T_=4)),B_(U_,"PINF",function(){if(O_)return i_;O_=1;var _,r=S,N=new E(1);return new r(N.buffer)[0]=2139095040,_=N[0],i_=_}()),B_(U_,"PRECISION",L_?u_:(L_=1,u_=24)),B_(U_,"SMALLEST_NORMAL",R_?s_:(R_=1,s_=11754943508222875e-54)),B_(U_,"SMALLEST_SUBNORMAL",f_?P_:(f_=1,P_=1401298464324817e-60)),B_(U_,"SQRT_EPS",function(){if(o_)return v_;o_=1;var _=N(.0003452669770922512);return v_=_}());var m_,d_,F_,c_,l_,C_,H_,Y_,D_,p_,G_,j_,h_,W_,b_,Q_,x_,K_,g_,w_,y_,V_,Z_,k_,q_,z_,J_,$_,_r,rr,Nr,Er,Sr,Ir,tr,nr,Ar,er,Mr,Tr,ar,ir,Or,ur,Lr,sr,Rr,Pr,fr,vr,or,Xr,Br,Ur,mr,dr,Fr,cr,lr,Cr,Hr,Yr,Dr,pr,Gr,jr,hr,Wr,br,Qr,xr,Kr,gr,wr,yr,Vr,Zr,kr,qr,zr,Jr,$r,_N,rN,NN,EN,SN,IN,tN,nN,AN,eN,MN,TN,aN,iN,ON,uN,LN,sN,RN,PN,fN,vN,oN,XN,BN,UN,mN,dN,FN,cN,lN,CN,HN,YN,DN=U_;var pN=_,GN={};pN(GN,"APERY",d_?m_:(d_=1,m_=1.2020569031595942)),pN(GN,"CATALAN",c_?F_:(c_=1,F_=.915965594177219)),pN(GN,"CBRT_EPS",C_?l_:(C_=1,l_=60554544523933395e-22)),pN(GN,"E",Y_?H_:(Y_=1,H_=2.718281828459045)),pN(GN,"EPS",p_?D_:(p_=1,D_=2220446049250313e-31)),pN(GN,"EULERGAMMA",j_?G_:(j_=1,G_=.5772156649015329)),pN(GN,"EXPONENT_BIAS",W_?h_:(W_=1,h_=1023)),pN(GN,"FOURTH_PI",Q_?b_:(Q_=1,b_=.7853981633974483)),pN(GN,"FOURTH_ROOT_EPS",K_?x_:(K_=1,x_=.0001220703125)),pN(GN,"GAMMA_LANCZOS_G",w_?g_:(w_=1,g_=10.900511)),pN(GN,"GLAISHER",V_?y_:(V_=1,y_=1.2824271291006226)),pN(GN,"HALF_LN2",k_?Z_:(k_=1,Z_=.34657359027997264)),pN(GN,"HALF_PI",z_?q_:(z_=1,q_=1.5707963267948966)),pN(GN,"HIGH_WORD_EXPONENT_MASK",$_?J_:($_=1,J_=2146435072)),pN(GN,"HIGH_WORD_SIGNIFICAND_MASK",rr?_r:(rr=1,_r=1048575)),pN(GN,"LN_HALF",Er?Nr:(Er=1,Nr=-.6931471805599453)),pN(GN,"LN_PI",Ir?Sr:(Ir=1,Sr=1.1447298858494002)),pN(GN,"LN_SQRT_TWO_PI",nr?tr:(nr=1,tr=.9189385332046728)),pN(GN,"LN10",er?Ar:(er=1,Ar=2.302585092994046)),pN(GN,"LN2",Tr?Mr:(Tr=1,Mr=.6931471805599453)),pN(GN,"LN_TWO_PI",ir?ar:(ir=1,ar=1.8378770664093456)),pN(GN,"LOG2E",ur?Or:(ur=1,Or=1.4426950408889634)),pN(GN,"LOG10E",sr?Lr:(sr=1,Lr=.4342944819032518)),pN(GN,"MAX",Pr?Rr:(Pr=1,Rr=17976931348623157e292)),pN(GN,"MAX_BASE2_EXPONENT",vr?fr:(vr=1,fr=1023)),pN(GN,"MAX_BASE2_EXPONENT_SUBNORMAL",Xr?or:(Xr=1,or=-1023)),pN(GN,"MAX_BASE10_EXPONENT",Ur?Br:(Ur=1,Br=308)),pN(GN,"MAX_BASE10_EXPONENT_SUBNORMAL",dr?mr:(dr=1,mr=-308)),pN(GN,"MAX_LN",cr?Fr:(cr=1,Fr=709.782712893384)),pN(GN,"MAX_SAFE_FIBONACCI",Cr?lr:(Cr=1,lr=8944394323791464)),pN(GN,"MAX_SAFE_INTEGER",Yr?Hr:(Yr=1,Hr=9007199254740991)),pN(GN,"MAX_SAFE_LUCAS",pr?Dr:(pr=1,Dr=7639424778862807)),pN(GN,"MAX_SAFE_NTH_FIBONACCI",jr?Gr:(jr=1,Gr=78)),pN(GN,"MAX_SAFE_NTH_LUCAS",Wr?hr:(Wr=1,hr=76)),pN(GN,"MIN_BASE2_EXPONENT",Qr?br:(Qr=1,br=-1022)),pN(GN,"MIN_BASE2_EXPONENT_SUBNORMAL",Kr?xr:(Kr=1,xr=-1074)),pN(GN,"MIN_BASE10_EXPONENT",wr?gr:(wr=1,gr=-308)),pN(GN,"MIN_BASE10_EXPONENT_SUBNORMAL",Vr?yr:(Vr=1,yr=-324)),pN(GN,"MIN_LN",kr?Zr:(kr=1,Zr=-708.3964185322641)),pN(GN,"MIN_SAFE_INTEGER",zr?qr:(zr=1,qr=-9007199254740991)),pN(GN,"NINF",function(){if($r)return Jr;$r=1;var _=r.NEGATIVE_INFINITY;return Jr=_}()),pN(GN,"NUM_BYTES",rN?_N:(rN=1,_N=8)),pN(GN,"PHI",EN?NN:(EN=1,NN=1.618033988749895)),pN(GN,"PI",IN?SN:(IN=1,SN=3.141592653589793)),pN(GN,"PI_SQUARED",nN?tN:(nN=1,tN=9.869604401089358)),pN(GN,"PINF",function(){if(eN)return AN;eN=1;var _=Number.POSITIVE_INFINITY;return AN=_}()),pN(GN,"PRECISION",TN?MN:(TN=1,MN=53)),pN(GN,"SMALLEST_NORMAL",iN?aN:(iN=1,aN=22250738585072014e-324)),pN(GN,"SMALLEST_SUBNORMAL",uN?ON:(uN=1,ON=5e-324)),pN(GN,"SQRT_EPS",sN?LN:(sN=1,LN=1.4901161193847656e-8)),pN(GN,"SQRT_HALF",PN?RN:(PN=1,RN=.7071067811865476)),pN(GN,"SQRT_HALF_PI",vN?fN:(vN=1,fN=1.2533141373155003)),pN(GN,"SQRT_PHI",XN?oN:(XN=1,oN=1.272019649514069)),pN(GN,"SQRT_PI",UN?BN:(UN=1,BN=1.772453850905516)),pN(GN,"SQRT_THREE",dN?mN:(dN=1,mN=1.7320508075688772)),pN(GN,"SQRT_TWO",cN?FN:(cN=1,FN=1.4142135623730951)),pN(GN,"SQRT_TWO_PI",CN?lN:(CN=1,lN=2.5066282746310007)),pN(GN,"TWO_PI",YN?HN:(YN=1,HN=6.283185307179586));var jN,hN,WN,bN,QN,xN,KN=GN;var gN=_,wN={};gN(wN,"MAX",hN?jN:(hN=1,jN=127)),gN(wN,"MIN",bN?WN:(bN=1,WN=-128)),gN(wN,"NUM_BYTES",xN?QN:(xN=1,QN=1));var yN,VN,ZN,kN,qN,zN,JN=wN;var $N=_,_E={};$N(_E,"MAX",VN?yN:(VN=1,yN=32767)),$N(_E,"MIN",kN?ZN:(kN=1,ZN=-32768)),$N(_E,"NUM_BYTES",zN?qN:(zN=1,qN=2));var rE,NE,EE,SE,IE,tE,nE=_E;var AE=_,eE={};AE(eE,"MAX",NE?rE:(NE=1,rE=2147483647)),AE(eE,"MIN",SE?EE:(SE=1,EE=-2147483648)),AE(eE,"NUM_BYTES",tE?IE:(tE=1,IE=4));var ME,TE,aE,iE,OE,uE,LE,sE,RE,PE,fE,vE,oE=eE;function XE(){if(TE)return ME;TE=1;return ME=";"}function BE(){if(iE)return aE;iE=1;return aE=":"}function UE(){if(sE)return LE;sE=1;return LE="\\"}function mE(){if(PE)return RE;PE=1;return RE="/"}var dE=_,FE={};dE(FE,"DELIMITER",function(){if(uE)return OE;uE=1;var _=I,r=XE(),N=BE();return OE=_?r:N}()),dE(FE,"DELIMITER_POSIX",BE()),dE(FE,"DELIMITER_WIN32",XE()),dE(FE,"SEP",function(){if(vE)return fE;vE=1;var _=I,r=UE(),N=mE();return fE=_?r:N}()),dE(FE,"SEP_POSIX",mE()),dE(FE,"SEP_WIN32",UE());var cE,lE,CE,HE,YE,DE,pE,GE,jE,hE,WE,bE,QE,xE,KE,gE,wE,yE,VE,ZE,kE,qE,zE,JE,$E,_S,rS,NS,ES,SS,IS=FE;var tS=_,nS={};tS(nS,"HOURS_IN_DAY",lE?cE:(lE=1,cE=24)),tS(nS,"HOURS_IN_WEEK",HE?CE:(HE=1,CE=168)),tS(nS,"MILLISECONDS_IN_DAY",DE?YE:(DE=1,YE=864e5)),tS(nS,"MILLISECONDS_IN_HOUR",GE?pE:(GE=1,pE=36e5)),tS(nS,"MILLISECONDS_IN_MINUTE",hE?jE:(hE=1,jE=6e4)),tS(nS,"MILLISECONDS_IN_SECOND",bE?WE:(bE=1,WE=1e3)),tS(nS,"MILLISECONDS_IN_WEEK",xE?QE:(xE=1,QE=6048e5)),tS(nS,"MINUTES_IN_DAY",gE?KE:(gE=1,KE=1440)),tS(nS,"MINUTES_IN_HOUR",yE?wE:(yE=1,wE=60)),tS(nS,"MINUTES_IN_WEEK",ZE?VE:(ZE=1,VE=10080)),tS(nS,"MONTHS_IN_YEAR",qE?kE:(qE=1,kE=12)),tS(nS,"SECONDS_IN_DAY",JE?zE:(JE=1,zE=86400)),tS(nS,"SECONDS_IN_HOUR",_S?$E:(_S=1,$E=3600)),tS(nS,"SECONDS_IN_MINUTE",NS?rS:(NS=1,rS=60)),tS(nS,"SECONDS_IN_WEEK",SS?ES:(SS=1,ES=604800));var AS,eS,MS,TS,aS=nS;var iS=_,OS={};iS(OS,"MAX",eS?AS:(eS=1,AS=255)),iS(OS,"NUM_BYTES",TS?MS:(TS=1,MS=1));var uS,LS,sS,RS,PS=OS;var fS=_,vS={};fS(vS,"MAX",LS?uS:(LS=1,uS=65535)),fS(vS,"NUM_BYTES",RS?sS:(RS=1,sS=2));var oS,XS,BS,US,mS=vS;var dS=_,FS={};dS(FS,"MAX",XS?oS:(XS=1,oS=4294967295)),dS(FS,"NUM_BYTES",US?BS:(US=1,BS=4));var cS,lS,CS,HS,YS=FS;var DS=_,pS={};DS(pS,"MAX",lS?cS:(lS=1,cS=1114111)),DS(pS,"MAX_BMP",HS?CS:(HS=1,CS=65535));var GS=pS,jS={};_(jS,"array",O),_(jS,"complex64",R),_(jS,"complex128",y),_(jS,"float16",X_),_(jS,"float32",DN),_(jS,"float64",KN),_(jS,"int8",JN),_(jS,"int16",nE),_(jS,"int32",oE),_(jS,"path",IS),_(jS,"time",aS),_(jS,"uint8",PS),_(jS,"uint16",mS),_(jS,"uint32",YS),_(jS,"unicode",GS);export{O as array,y as complex128,R as complex64,jS as default,X_ as float16,DN as float32,KN as float64,nE as int16,oE as int32,JN as int8,IS as path,aS as time,mS as uint16,YS as uint32,PS as uint8,GS as unicode};
//# sourceMappingURL=index.mjs.map
