// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";var t,n,e,A;var M=_,a={};M(a,"MAX_ARRAY_LENGTH",n?t:(n=1,t=4294967295)),M(a,"MAX_TYPED_ARRAY_LENGTH",A?e:(A=1,e=9007199254740991));var T,i,u=a;var O={};_(O,"NUM_BYTES",i?T:(i=1,T=8));var L,s,R=O;var f={};_(f,"NUM_BYTES",s?L:(s=1,L=16));var P,o,v,X,B,U,m,d,F,c,l,C,H,Y,D,p,G,j,h,W,b,Q,x,g,w,y,K=f;var V=_,Z={};V(Z,"CBRT_EPS",o?P:(o=1,P=.09921256574801247)),V(Z,"EPS",X?v:(X=1,v=.0009765625)),V(Z,"EXPONENT_BIAS",U?B:(U=1,B=15)),V(Z,"MAX",d?m:(d=1,m=65504)),V(Z,"MAX_SAFE_INTEGER",c?F:(c=1,F=2047)),V(Z,"MIN_SAFE_INTEGER",C?l:(C=1,l=-2047)),V(Z,"NINF",function(){if(Y)return H;Y=1;var _=r.NEGATIVE_INFINITY;return H=_}()),V(Z,"NUM_BYTES",p?D:(p=1,D=2)),V(Z,"PINF",function(){if(j)return G;j=1;var _=r.POSITIVE_INFINITY;return G=_}()),V(Z,"PRECISION",W?h:(W=1,h=11)),V(Z,"SMALLEST_NORMAL",Q?b:(Q=1,b=6103515625e-14)),V(Z,"SMALLEST_SUBNORMAL",g?x:(g=1,x=5.960464477539063e-8)),V(Z,"SQRT_EPS",y?w:(y=1,w=.03125));var k,q,z,J,$,__,r_,N_,E_,S_,I_,t_,n_,e_,A_,M_,a_,T_,i_,u_,O_,L_,s_,R_,f_,P_,o_=Z;var v_=_,X_={};v_(X_,"CBRT_EPS",function(){if(q)return k;q=1;var _=N(.004921566601151848);return k=_}()),v_(X_,"EPS",function(){if(J)return z;J=1;var _=N(1.1920928955078125e-7);return z=_}()),v_(X_,"EXPONENT_BIAS",__?$:(__=1,$=127)),v_(X_,"MAX",N_?r_:(N_=1,r_=34028234663852886e22)),v_(X_,"MAX_SAFE_INTEGER",S_?E_:(S_=1,E_=16777215)),v_(X_,"MIN_SAFE_INTEGER",t_?I_:(t_=1,I_=-16777215)),v_(X_,"NINF",function(){if(e_)return n_;e_=1;var _,r=S,N=new E(1);return new r(N.buffer)[0]=4286578688,_=N[0],n_=_}()),v_(X_,"NUM_BYTES",M_?A_:(M_=1,A_=4)),v_(X_,"PINF",function(){if(T_)return a_;T_=1;var _,r=S,N=new E(1);return new r(N.buffer)[0]=2139095040,_=N[0],a_=_}()),v_(X_,"PRECISION",u_?i_:(u_=1,i_=24)),v_(X_,"SMALLEST_NORMAL",L_?O_:(L_=1,O_=11754943508222875e-54)),v_(X_,"SMALLEST_SUBNORMAL",R_?s_:(R_=1,s_=1401298464324817e-60)),v_(X_,"SQRT_EPS",function(){if(P_)return f_;P_=1;var _=N(.0003452669770922512);return f_=_}());var B_,U_,m_,d_,F_,c_,l_,C_,H_,Y_,D_,p_,G_,j_,h_,W_,b_,Q_,x_,g_,w_,y_,K_,V_,Z_,k_,q_,z_,J_,$_,_r,rr,Nr,Er,Sr,Ir,tr,nr,er,Ar,Mr,ar,Tr,ir,ur,Or,Lr,sr,Rr,fr,Pr,or,vr,Xr,Br,Ur,mr,dr,Fr,cr,lr,Cr,Hr,Yr,Dr,pr,Gr,jr,hr,Wr,br,Qr,xr,gr,wr,yr,Kr,Vr,Zr,kr,qr,zr,Jr,$r,_N,rN,NN,EN,SN,IN,tN,nN,eN,AN,MN,aN,TN,iN,uN,ON,LN,sN,RN,fN,PN,oN,vN,XN,BN,UN,mN,dN,FN,cN,lN,CN,HN=X_;var YN=_,DN={};YN(DN,"APERY",U_?B_:(U_=1,B_=1.2020569031595942)),YN(DN,"CATALAN",d_?m_:(d_=1,m_=.915965594177219)),YN(DN,"CBRT_EPS",c_?F_:(c_=1,F_=60554544523933395e-22)),YN(DN,"E",C_?l_:(C_=1,l_=2.718281828459045)),YN(DN,"EPS",Y_?H_:(Y_=1,H_=2220446049250313e-31)),YN(DN,"EULERGAMMA",p_?D_:(p_=1,D_=.5772156649015329)),YN(DN,"EXPONENT_BIAS",j_?G_:(j_=1,G_=1023)),YN(DN,"FOURTH_PI",W_?h_:(W_=1,h_=.7853981633974483)),YN(DN,"FOURTH_ROOT_EPS",Q_?b_:(Q_=1,b_=.0001220703125)),YN(DN,"GAMMA_LANCZOS_G",g_?x_:(g_=1,x_=10.900511)),YN(DN,"GLAISHER",y_?w_:(y_=1,w_=1.2824271291006226)),YN(DN,"HALF_LN2",V_?K_:(V_=1,K_=.34657359027997264)),YN(DN,"HALF_PI",k_?Z_:(k_=1,Z_=1.5707963267948966)),YN(DN,"HIGH_WORD_EXPONENT_MASK",z_?q_:(z_=1,q_=2146435072)),YN(DN,"HIGH_WORD_SIGNIFICAND_MASK",$_?J_:($_=1,J_=1048575)),YN(DN,"LN_HALF",rr?_r:(rr=1,_r=-.6931471805599453)),YN(DN,"LN_PI",Er?Nr:(Er=1,Nr=1.1447298858494002)),YN(DN,"LN_SQRT_TWO_PI",Ir?Sr:(Ir=1,Sr=.9189385332046728)),YN(DN,"LN10",nr?tr:(nr=1,tr=2.302585092994046)),YN(DN,"LN2",Ar?er:(Ar=1,er=.6931471805599453)),YN(DN,"LN_TWO_PI",ar?Mr:(ar=1,Mr=1.8378770664093456)),YN(DN,"LOG2E",ir?Tr:(ir=1,Tr=1.4426950408889634)),YN(DN,"LOG10E",Or?ur:(Or=1,ur=.4342944819032518)),YN(DN,"MAX",sr?Lr:(sr=1,Lr=17976931348623157e292)),YN(DN,"MAX_BASE2_EXPONENT",fr?Rr:(fr=1,Rr=1023)),YN(DN,"MAX_BASE2_EXPONENT_SUBNORMAL",or?Pr:(or=1,Pr=-1023)),YN(DN,"MAX_BASE10_EXPONENT",Xr?vr:(Xr=1,vr=308)),YN(DN,"MAX_BASE10_EXPONENT_SUBNORMAL",Ur?Br:(Ur=1,Br=-308)),YN(DN,"MAX_LN",dr?mr:(dr=1,mr=709.782712893384)),YN(DN,"MAX_SAFE_FIBONACCI",cr?Fr:(cr=1,Fr=8944394323791464)),YN(DN,"MAX_SAFE_INTEGER",Cr?lr:(Cr=1,lr=9007199254740991)),YN(DN,"MAX_SAFE_LUCAS",Yr?Hr:(Yr=1,Hr=7639424778862807)),YN(DN,"MAX_SAFE_NTH_FIBONACCI",pr?Dr:(pr=1,Dr=78)),YN(DN,"MAX_SAFE_NTH_LUCAS",jr?Gr:(jr=1,Gr=76)),YN(DN,"MIN_BASE2_EXPONENT",Wr?hr:(Wr=1,hr=-1022)),YN(DN,"MIN_BASE2_EXPONENT_SUBNORMAL",Qr?br:(Qr=1,br=-1074)),YN(DN,"MIN_BASE10_EXPONENT",gr?xr:(gr=1,xr=-308)),YN(DN,"MIN_BASE10_EXPONENT_SUBNORMAL",yr?wr:(yr=1,wr=-324)),YN(DN,"MIN_LN",Vr?Kr:(Vr=1,Kr=-708.3964185322641)),YN(DN,"MIN_SAFE_INTEGER",kr?Zr:(kr=1,Zr=-9007199254740991)),YN(DN,"NINF",function(){if(zr)return qr;zr=1;var _=r.NEGATIVE_INFINITY;return qr=_}()),YN(DN,"NUM_BYTES",$r?Jr:($r=1,Jr=8)),YN(DN,"PHI",rN?_N:(rN=1,_N=1.618033988749895)),YN(DN,"PI",EN?NN:(EN=1,NN=3.141592653589793)),YN(DN,"PI_SQUARED",IN?SN:(IN=1,SN=9.869604401089358)),YN(DN,"PINF",function(){if(nN)return tN;nN=1;var _=Number.POSITIVE_INFINITY;return tN=_}()),YN(DN,"PRECISION",AN?eN:(AN=1,eN=53)),YN(DN,"SMALLEST_NORMAL",aN?MN:(aN=1,MN=22250738585072014e-324)),YN(DN,"SMALLEST_SUBNORMAL",iN?TN:(iN=1,TN=5e-324)),YN(DN,"SQRT_EPS",ON?uN:(ON=1,uN=1.4901161193847656e-8)),YN(DN,"SQRT_HALF",sN?LN:(sN=1,LN=.7071067811865476)),YN(DN,"SQRT_HALF_PI",fN?RN:(fN=1,RN=1.2533141373155003)),YN(DN,"SQRT_PHI",oN?PN:(oN=1,PN=1.272019649514069)),YN(DN,"SQRT_PI",XN?vN:(XN=1,vN=1.772453850905516)),YN(DN,"SQRT_THREE",UN?BN:(UN=1,BN=1.7320508075688772)),YN(DN,"SQRT_TWO",dN?mN:(dN=1,mN=1.4142135623730951)),YN(DN,"SQRT_TWO_PI",cN?FN:(cN=1,FN=2.5066282746310007)),YN(DN,"TWO_PI",CN?lN:(CN=1,lN=6.283185307179586));var pN,GN,jN,hN,WN,bN,QN=DN;var xN=_,gN={};xN(gN,"MAX",GN?pN:(GN=1,pN=127)),xN(gN,"MIN",hN?jN:(hN=1,jN=-128)),xN(gN,"NUM_BYTES",bN?WN:(bN=1,WN=1));var wN,yN,KN,VN,ZN,kN,qN=gN;var zN=_,JN={};zN(JN,"MAX",yN?wN:(yN=1,wN=32767)),zN(JN,"MIN",VN?KN:(VN=1,KN=-32768)),zN(JN,"NUM_BYTES",kN?ZN:(kN=1,ZN=2));var $N,_E,rE,NE,EE,SE,IE=JN;var tE=_,nE={};tE(nE,"MAX",_E?$N:(_E=1,$N=2147483647)),tE(nE,"MIN",NE?rE:(NE=1,rE=-2147483648)),tE(nE,"NUM_BYTES",SE?EE:(SE=1,EE=4));var eE,AE,ME,aE,TE,iE,uE,OE,LE,sE,RE,fE,PE=nE;function oE(){if(AE)return eE;AE=1;return eE=";"}function vE(){if(aE)return ME;aE=1;return ME=":"}function XE(){if(OE)return uE;OE=1;return uE="\\"}function BE(){if(sE)return LE;sE=1;return LE="/"}var UE=_,mE={};UE(mE,"DELIMITER",function(){if(iE)return TE;iE=1;var _=I,r=oE(),N=vE();return TE=_?r:N}()),UE(mE,"DELIMITER_POSIX",vE()),UE(mE,"DELIMITER_WIN32",oE()),UE(mE,"SEP",function(){if(fE)return RE;fE=1;var _=I,r=XE(),N=BE();return RE=_?r:N}()),UE(mE,"SEP_POSIX",BE()),UE(mE,"SEP_WIN32",XE());var dE,FE,cE,lE,CE,HE,YE,DE,pE,GE,jE,hE,WE,bE,QE,xE,gE,wE,yE,KE,VE,ZE,kE,qE,zE,JE,$E,_S,rS,NS,ES=mE;var SS=_,IS={};SS(IS,"HOURS_IN_DAY",FE?dE:(FE=1,dE=24)),SS(IS,"HOURS_IN_WEEK",lE?cE:(lE=1,cE=168)),SS(IS,"MILLISECONDS_IN_DAY",HE?CE:(HE=1,CE=864e5)),SS(IS,"MILLISECONDS_IN_HOUR",DE?YE:(DE=1,YE=36e5)),SS(IS,"MILLISECONDS_IN_MINUTE",GE?pE:(GE=1,pE=6e4)),SS(IS,"MILLISECONDS_IN_SECOND",hE?jE:(hE=1,jE=1e3)),SS(IS,"MILLISECONDS_IN_WEEK",bE?WE:(bE=1,WE=6048e5)),SS(IS,"MINUTES_IN_DAY",xE?QE:(xE=1,QE=1440)),SS(IS,"MINUTES_IN_HOUR",wE?gE:(wE=1,gE=60)),SS(IS,"MINUTES_IN_WEEK",KE?yE:(KE=1,yE=10080)),SS(IS,"MONTHS_IN_YEAR",ZE?VE:(ZE=1,VE=12)),SS(IS,"SECONDS_IN_DAY",qE?kE:(qE=1,kE=86400)),SS(IS,"SECONDS_IN_HOUR",JE?zE:(JE=1,zE=3600)),SS(IS,"SECONDS_IN_MINUTE",_S?$E:(_S=1,$E=60)),SS(IS,"SECONDS_IN_WEEK",NS?rS:(NS=1,rS=604800));var tS,nS,eS,AS,MS=IS;var aS=_,TS={};aS(TS,"MAX",nS?tS:(nS=1,tS=255)),aS(TS,"NUM_BYTES",AS?eS:(AS=1,eS=1));var iS,uS,OS,LS,sS=TS;var RS=_,fS={};RS(fS,"MAX",uS?iS:(uS=1,iS=65535)),RS(fS,"NUM_BYTES",LS?OS:(LS=1,OS=2));var PS,oS,vS,XS,BS=fS;var US=_,mS={};US(mS,"MAX",oS?PS:(oS=1,PS=4294967295)),US(mS,"NUM_BYTES",XS?vS:(XS=1,vS=4));var dS,FS,cS,lS,CS=mS;var HS=_,YS={};HS(YS,"MAX",FS?dS:(FS=1,dS=1114111)),HS(YS,"MAX_BMP",lS?cS:(lS=1,cS=65535));var DS=YS,pS={};_(pS,"array",u),_(pS,"complex64",R),_(pS,"complex128",K),_(pS,"float16",o_),_(pS,"float32",HN),_(pS,"float64",QN),_(pS,"int8",qN),_(pS,"int16",IE),_(pS,"int32",PE),_(pS,"path",ES),_(pS,"time",MS),_(pS,"uint8",sS),_(pS,"uint16",BS),_(pS,"uint32",CS),_(pS,"unicode",DS);export{u as array,K as complex128,R as complex64,pS as default,o_ as float16,HN as float32,QN as float64,IE as int16,PE as int32,qN as int8,ES as path,MS as time,BS as uint16,CS as uint32,sS as uint8,DS as unicode};
//# sourceMappingURL=index.mjs.map
