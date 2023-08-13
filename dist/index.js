"use strict";var r=function(A_,a){return function(){return a||A_((a={exports:{}}).exports,a),a.exports}};var D=r(function(Ji,C){"use strict";var E_=4294967295;C.exports=E_});var Y=r(function($i,G){"use strict";var I_=9007199254740991;G.exports=I_});var l=r(function(ru,W){"use strict";var f=require("@stdlib/utils/define-read-only-property"),M={};f(M,"MAX_ARRAY_LENGTH",D());f(M,"MAX_TYPED_ARRAY_LENGTH",Y());W.exports=M});var Q=r(function(eu,K){"use strict";var S_=8;K.exports=S_});var V=r(function(tu,d){"use strict";var T_=require("@stdlib/utils/define-read-only-property"),y={};T_(y,"NUM_BYTES",Q());d.exports=y});var b=r(function(su,m){"use strict";var a_=16;m.exports=a_});var h=r(function(_u,Z){"use strict";var O_=require("@stdlib/utils/define-read-only-property"),w={};O_(w,"NUM_BYTES",b());Z.exports=w});var j=r(function(iu,g){"use strict";var L_=.09921256574801247;g.exports=L_});var z=r(function(uu,k){"use strict";var v_=.0009765625;k.exports=v_});var $=r(function(Nu,J){"use strict";var M_=15;J.exports=M_});var er=r(function(Au,rr){"use strict";var q_=65504;rr.exports=q_});var sr=r(function(Eu,tr){"use strict";var o_=2047;tr.exports=o_});var ir=r(function(Iu,_r){"use strict";var c_=-2047;_r.exports=c_});var Nr=r(function(Su,ur){"use strict";var x_=require("@stdlib/number/ctor"),p_=x_.NEGATIVE_INFINITY;ur.exports=p_});var Er=r(function(Tu,Ar){"use strict";var F_=2;Ar.exports=F_});var Sr=r(function(au,Ir){"use strict";var R_=require("@stdlib/number/ctor"),P_=R_.POSITIVE_INFINITY;Ir.exports=P_});var ar=r(function(Ou,Tr){"use strict";var X_=11;Tr.exports=X_});var Lr=r(function(Lu,Or){"use strict";var U_=6103515625e-14;Or.exports=U_});var Mr=r(function(vu,vr){"use strict";var B_=5960464477539063e-23;vr.exports=B_});var or=r(function(Mu,qr){"use strict";var H_=.03125;qr.exports=H_});var xr=r(function(qu,cr){"use strict";var I=require("@stdlib/utils/define-read-only-property"),E={};I(E,"CBRT_EPS",j());I(E,"EPS",z());I(E,"EXPONENT_BIAS",$());I(E,"MAX",er());I(E,"MAX_SAFE_INTEGER",sr());I(E,"MIN_SAFE_INTEGER",ir());I(E,"NINF",Nr());I(E,"NUM_BYTES",Er());I(E,"PINF",Sr());I(E,"PRECISION",ar());I(E,"SMALLEST_NORMAL",Lr());I(E,"SMALLEST_SUBNORMAL",Mr());I(E,"SQRT_EPS",or());cr.exports=E});var Fr=r(function(ou,pr){"use strict";var n_=2147483647;pr.exports=n_});var Pr=r(function(cu,Rr){"use strict";var C_=require("@stdlib/number/float64/base/to-float32"),D_=C_(.004921566601151848);Rr.exports=D_});var Ur=r(function(xu,Xr){"use strict";var G_=require("@stdlib/number/float64/base/to-float32"),Y_=G_(11920928955078125e-23);Xr.exports=Y_});var Hr=r(function(pu,Br){"use strict";var f_=127;Br.exports=f_});var Cr=r(function(Fu,nr){"use strict";var W_=2139095040;nr.exports=W_});var Gr=r(function(Ru,Dr){"use strict";var l_=34028234663852886e22;Dr.exports=l_});var fr=r(function(Pu,Yr){"use strict";var K_=16777215;Yr.exports=K_});var lr=r(function(Xu,Wr){"use strict";var Q_=-16777215;Wr.exports=Q_});var dr=r(function(Uu,yr){"use strict";var y_=require("@stdlib/array/float32"),d_=require("@stdlib/array/uint32"),Kr=new y_(1),V_=new d_(Kr.buffer),Qr,m_=4286578688;V_[0]=m_;Qr=Kr[0];yr.exports=Qr});var mr=r(function(Bu,Vr){"use strict";var b_=4;Vr.exports=b_});var hr=r(function(Hu,Zr){"use strict";var w_=require("@stdlib/array/float32"),Z_=require("@stdlib/array/uint32"),br=new w_(1),h_=new Z_(br.buffer),wr,g_=2139095040;h_[0]=g_;wr=br[0];Zr.exports=wr});var jr=r(function(nu,gr){"use strict";var j_=24;gr.exports=j_});var zr=r(function(Cu,kr){"use strict";var k_=2147483648;kr.exports=k_});var $r=r(function(Du,Jr){"use strict";var z_=8388607;Jr.exports=z_});var ee=r(function(Gu,re){"use strict";var J_=11754943508222875e-54;re.exports=J_});var se=r(function(Yu,te){"use strict";var $_=1401298464324817e-60;te.exports=$_});var ie=r(function(fu,_e){"use strict";var r2=require("@stdlib/number/float64/base/to-float32"),e2=r2(.0003452669770922512);_e.exports=e2});var Ne=r(function(Wu,ue){"use strict";var _=require("@stdlib/utils/define-read-only-property"),s={};_(s,"ABS_MASK",Fr());_(s,"CBRT_EPS",Pr());_(s,"EPS",Ur());_(s,"EXPONENT_BIAS",Hr());_(s,"EXPONENT_MASK",Cr());_(s,"MAX",Gr());_(s,"MAX_SAFE_INTEGER",fr());_(s,"MIN_SAFE_INTEGER",lr());_(s,"NINF",dr());_(s,"NUM_BYTES",mr());_(s,"PINF",hr());_(s,"PRECISION",jr());_(s,"SIGN_MASK",zr());_(s,"SIGNIFICAND_MASK",$r());_(s,"SMALLEST_NORMAL",ee());_(s,"SMALLEST_SUBNORMAL",se());_(s,"SQRT_EPS",ie());ue.exports=s});var Ee=r(function(lu,Ae){"use strict";var t2=1.2020569031595942;Ae.exports=t2});var Se=r(function(Ku,Ie){"use strict";var s2=.915965594177219;Ie.exports=s2});var ae=r(function(Qu,Te){"use strict";var _2=60554544523933395e-22;Te.exports=_2});var Le=r(function(yu,Oe){"use strict";var i2=2.718281828459045;Oe.exports=i2});var Me=r(function(du,ve){"use strict";var u2=2220446049250313e-31;ve.exports=u2});var oe=r(function(Vu,qe){"use strict";var N2=.5772156649015329;qe.exports=N2});var xe=r(function(mu,ce){"use strict";var A2=1023;ce.exports=A2});var Fe=r(function(bu,pe){"use strict";var E2=.7853981633974483;pe.exports=E2});var Pe=r(function(wu,Re){"use strict";var I2=.0001220703125;Re.exports=I2});var Ue=r(function(Zu,Xe){"use strict";var S2=10.900511;Xe.exports=S2});var He=r(function(hu,Be){"use strict";var T2=1.2824271291006226;Be.exports=T2});var Ce=r(function(gu,ne){"use strict";var a2=.34657359027997264;ne.exports=a2});var Ge=r(function(ju,De){"use strict";var O2=1.5707963267948966;De.exports=O2});var fe=r(function(ku,Ye){"use strict";var L2=2147483647;Ye.exports=L2});var le=r(function(zu,We){"use strict";var v2=2146435072;We.exports=v2});var Qe=r(function(Ju,Ke){"use strict";var M2=2147483648;Ke.exports=M2});var de=r(function($u,ye){"use strict";var q2=1048575;ye.exports=q2});var me=r(function(r6,Ve){"use strict";var o2=-.6931471805599453;Ve.exports=o2});var we=r(function(e6,be){"use strict";var c2=1.1447298858494002;be.exports=c2});var he=r(function(t6,Ze){"use strict";var x2=.9189385332046728;Ze.exports=x2});var je=r(function(s6,ge){"use strict";var p2=2.302585092994046;ge.exports=p2});var ze=r(function(_6,ke){"use strict";var F2=.6931471805599453;ke.exports=F2});var $e=r(function(i6,Je){"use strict";var R2=1.8378770664093456;Je.exports=R2});var et=r(function(u6,rt){"use strict";var P2=1.4426950408889634;rt.exports=P2});var st=r(function(N6,tt){"use strict";var X2=.4342944819032518;tt.exports=X2});var it=r(function(A6,_t){"use strict";var U2=17976931348623157e292;_t.exports=U2});var Nt=r(function(E6,ut){"use strict";var B2=1023;ut.exports=B2});var Et=r(function(I6,At){"use strict";var H2=-1023;At.exports=H2});var St=r(function(S6,It){"use strict";var n2=308;It.exports=n2});var at=r(function(T6,Tt){"use strict";var C2=-308;Tt.exports=C2});var Lt=r(function(a6,Ot){"use strict";var D2=709.782712893384;Ot.exports=D2});var Mt=r(function(O6,vt){"use strict";var G2=8944394323791464;vt.exports=G2});var ot=r(function(L6,qt){"use strict";var Y2=9007199254740991;qt.exports=Y2});var xt=r(function(v6,ct){"use strict";var f2=7639424778862807;ct.exports=f2});var Ft=r(function(M6,pt){"use strict";var W2=78;pt.exports=W2});var Pt=r(function(q6,Rt){"use strict";var l2=76;Rt.exports=l2});var Ut=r(function(o6,Xt){"use strict";var K2=-1022;Xt.exports=K2});var Ht=r(function(c6,Bt){"use strict";var Q2=-1074;Bt.exports=Q2});var Ct=r(function(x6,nt){"use strict";var y2=-308;nt.exports=y2});var Gt=r(function(p6,Dt){"use strict";var d2=-324;Dt.exports=d2});var ft=r(function(F6,Yt){"use strict";var V2=-708.3964185322641;Yt.exports=V2});var lt=r(function(R6,Wt){"use strict";var m2=-9007199254740991;Wt.exports=m2});var Qt=r(function(P6,Kt){"use strict";var b2=require("@stdlib/number/ctor"),w2=b2.NEGATIVE_INFINITY;Kt.exports=w2});var dt=r(function(X6,yt){"use strict";var Z2=8;yt.exports=Z2});var mt=r(function(U6,Vt){"use strict";var h2=1.618033988749895;Vt.exports=h2});var wt=r(function(B6,bt){"use strict";var g2=3.141592653589793;bt.exports=g2});var ht=r(function(H6,Zt){"use strict";var j2=9.869604401089358;Zt.exports=j2});var jt=r(function(n6,gt){"use strict";var k2=Number.POSITIVE_INFINITY;gt.exports=k2});var zt=r(function(C6,kt){"use strict";var z2=53;kt.exports=z2});var $t=r(function(D6,Jt){"use strict";var J2=22250738585072014e-324;Jt.exports=J2});var es=r(function(G6,rs){"use strict";var $2=5e-324;rs.exports=$2});var ss=r(function(Y6,ts){"use strict";var ri=14901161193847656e-24;ts.exports=ri});var is=r(function(f6,_s){"use strict";var ei=.7071067811865476;_s.exports=ei});var Ns=r(function(W6,us){"use strict";var ti=1.2533141373155003;us.exports=ti});var Es=r(function(l6,As){"use strict";var si=1.272019649514069;As.exports=si});var Ss=r(function(K6,Is){"use strict";var _i=1.772453850905516;Is.exports=_i});var as=r(function(Q6,Ts){"use strict";var ii=1.7320508075688772;Ts.exports=ii});var Ls=r(function(y6,Os){"use strict";var ui=1.4142135623730951;Os.exports=ui});var Ms=r(function(d6,vs){"use strict";var Ni=2.5066282746310007;vs.exports=Ni});var os=r(function(V6,qs){"use strict";var Ai=6.283185307179586;qs.exports=Ai});var xs=r(function(m6,cs){"use strict";var t=require("@stdlib/utils/define-read-only-property"),e={};t(e,"APERY",Ee());t(e,"CATALAN",Se());t(e,"CBRT_EPS",ae());t(e,"E",Le());t(e,"EPS",Me());t(e,"EULERGAMMA",oe());t(e,"EXPONENT_BIAS",xe());t(e,"FOURTH_PI",Fe());t(e,"FOURTH_ROOT_EPS",Pe());t(e,"GAMMA_LANCZOS_G",Ue());t(e,"GLAISHER",He());t(e,"HALF_LN2",Ce());t(e,"HALF_PI",Ge());t(e,"HIGH_WORD_ABS_MASK",fe());t(e,"HIGH_WORD_EXPONENT_MASK",le());t(e,"HIGH_WORD_SIGN_MASK",Qe());t(e,"HIGH_WORD_SIGNIFICAND_MASK",de());t(e,"LN_HALF",me());t(e,"LN_PI",we());t(e,"LN_SQRT_TWO_PI",he());t(e,"LN10",je());t(e,"LN2",ze());t(e,"LN_TWO_PI",$e());t(e,"LOG2E",et());t(e,"LOG10E",st());t(e,"MAX",it());t(e,"MAX_BASE2_EXPONENT",Nt());t(e,"MAX_BASE2_EXPONENT_SUBNORMAL",Et());t(e,"MAX_BASE10_EXPONENT",St());t(e,"MAX_BASE10_EXPONENT_SUBNORMAL",at());t(e,"MAX_LN",Lt());t(e,"MAX_SAFE_FIBONACCI",Mt());t(e,"MAX_SAFE_INTEGER",ot());t(e,"MAX_SAFE_LUCAS",xt());t(e,"MAX_SAFE_NTH_FIBONACCI",Ft());t(e,"MAX_SAFE_NTH_LUCAS",Pt());t(e,"MIN_BASE2_EXPONENT",Ut());t(e,"MIN_BASE2_EXPONENT_SUBNORMAL",Ht());t(e,"MIN_BASE10_EXPONENT",Ct());t(e,"MIN_BASE10_EXPONENT_SUBNORMAL",Gt());t(e,"MIN_LN",ft());t(e,"MIN_SAFE_INTEGER",lt());t(e,"NINF",Qt());t(e,"NUM_BYTES",dt());t(e,"PHI",mt());t(e,"PI",wt());t(e,"PI_SQUARED",ht());t(e,"PINF",jt());t(e,"PRECISION",zt());t(e,"SMALLEST_NORMAL",$t());t(e,"SMALLEST_SUBNORMAL",es());t(e,"SQRT_EPS",ss());t(e,"SQRT_HALF",is());t(e,"SQRT_HALF_PI",Ns());t(e,"SQRT_PHI",Es());t(e,"SQRT_PI",Ss());t(e,"SQRT_THREE",as());t(e,"SQRT_TWO",Ls());t(e,"SQRT_TWO_PI",Ms());t(e,"TWO_PI",os());cs.exports=e});var Fs=r(function(b6,ps){"use strict";var Ei=127;ps.exports=Ei});var Ps=r(function(w6,Rs){"use strict";var Ii=-128;Rs.exports=Ii});var Us=r(function(Z6,Xs){"use strict";var Si=1;Xs.exports=Si});var Hs=r(function(h6,Bs){"use strict";var q=require("@stdlib/utils/define-read-only-property"),O={};q(O,"MAX",Fs());q(O,"MIN",Ps());q(O,"NUM_BYTES",Us());Bs.exports=O});var Cs=r(function(g6,ns){"use strict";var Ti=32767;ns.exports=Ti});var Gs=r(function(j6,Ds){"use strict";var ai=-32768;Ds.exports=ai});var fs=r(function(k6,Ys){"use strict";var Oi=2;Ys.exports=Oi});var ls=r(function(z6,Ws){"use strict";var o=require("@stdlib/utils/define-read-only-property"),L={};o(L,"MAX",Cs());o(L,"MIN",Gs());o(L,"NUM_BYTES",fs());Ws.exports=L});var Qs=r(function(J6,Ks){"use strict";var Li=2147483647;Ks.exports=Li});var ds=r(function($6,ys){"use strict";var vi=-2147483648;ys.exports=vi});var ms=r(function(r4,Vs){"use strict";var Mi=4;Vs.exports=Mi});var ws=r(function(e4,bs){"use strict";var c=require("@stdlib/utils/define-read-only-property"),v={};c(v,"MAX",Qs());c(v,"MIN",ds());c(v,"NUM_BYTES",ms());bs.exports=v});var x=r(function(t4,Zs){"use strict";var qi=";";Zs.exports=qi});var p=r(function(s4,hs){"use strict";var oi=":";hs.exports=oi});var js=r(function(_4,gs){"use strict";var ci=require("@stdlib/assert/is-windows"),xi=x(),pi=p(),F;ci?F=xi:F=pi;gs.exports=F});var R=r(function(i4,ks){"use strict";var Fi="\\";ks.exports=Fi});var P=r(function(u4,zs){"use strict";var Ri="/";zs.exports=Ri});var $s=r(function(N4,Js){"use strict";var Pi=require("@stdlib/assert/is-windows"),Xi=R(),Ui=P(),X;Pi?X=Xi:X=Ui;Js.exports=X});var e0=r(function(A4,r0){"use strict";var T=require("@stdlib/utils/define-read-only-property"),S={};T(S,"DELIMITER",js());T(S,"DELIMITER_POSIX",p());T(S,"DELIMITER_WIN32",x());T(S,"SEP",$s());T(S,"SEP_POSIX",P());T(S,"SEP_WIN32",R());r0.exports=S});var s0=r(function(E4,t0){"use strict";var Bi=24;t0.exports=Bi});var i0=r(function(I4,_0){"use strict";var Hi=168;_0.exports=Hi});var N0=r(function(S4,u0){"use strict";var ni=864e5;u0.exports=ni});var E0=r(function(T4,A0){"use strict";var Ci=36e5;A0.exports=Ci});var S0=r(function(a4,I0){"use strict";var Di=6e4;I0.exports=Di});var a0=r(function(O4,T0){"use strict";var Gi=1e3;T0.exports=Gi});var L0=r(function(L4,O0){"use strict";var Yi=6048e5;O0.exports=Yi});var M0=r(function(v4,v0){"use strict";var fi=1440;v0.exports=fi});var o0=r(function(M4,q0){"use strict";var Wi=60;q0.exports=Wi});var x0=r(function(q4,c0){"use strict";var li=10080;c0.exports=li});var F0=r(function(o4,p0){"use strict";var Ki=12;p0.exports=Ki});var P0=r(function(c4,R0){"use strict";var Qi=86400;R0.exports=Qi});var U0=r(function(x4,X0){"use strict";var yi=3600;X0.exports=yi});var H0=r(function(p4,B0){"use strict";var di=60;B0.exports=di});var C0=r(function(F4,n0){"use strict";var Vi=604800;n0.exports=Vi});var G0=r(function(R4,D0){"use strict";var N=require("@stdlib/utils/define-read-only-property"),i={};N(i,"HOURS_IN_DAY",s0());N(i,"HOURS_IN_WEEK",i0());N(i,"MILLISECONDS_IN_DAY",N0());N(i,"MILLISECONDS_IN_HOUR",E0());N(i,"MILLISECONDS_IN_MINUTE",S0());N(i,"MILLISECONDS_IN_SECOND",a0());N(i,"MILLISECONDS_IN_WEEK",L0());N(i,"MINUTES_IN_DAY",M0());N(i,"MINUTES_IN_HOUR",o0());N(i,"MINUTES_IN_WEEK",x0());N(i,"MONTHS_IN_YEAR",F0());N(i,"SECONDS_IN_DAY",P0());N(i,"SECONDS_IN_HOUR",U0());N(i,"SECONDS_IN_MINUTE",H0());N(i,"SECONDS_IN_WEEK",C0());D0.exports=i});var f0=r(function(P4,Y0){"use strict";var mi=255;Y0.exports=mi});var l0=r(function(X4,W0){"use strict";var bi=1;W0.exports=bi});var y0=r(function(U4,Q0){"use strict";var K0=require("@stdlib/utils/define-read-only-property"),U={};K0(U,"MAX",f0());K0(U,"NUM_BYTES",l0());Q0.exports=U});var V0=r(function(B4,d0){"use strict";var wi=65535;d0.exports=wi});var b0=r(function(H4,m0){"use strict";var Zi=2;m0.exports=Zi});var h0=r(function(n4,Z0){"use strict";var w0=require("@stdlib/utils/define-read-only-property"),B={};w0(B,"MAX",V0());w0(B,"NUM_BYTES",b0());Z0.exports=B});var j0=r(function(C4,g0){"use strict";var hi=4294967295;g0.exports=hi});var z0=r(function(D4,k0){"use strict";var gi=4;k0.exports=gi});var r_=r(function(G4,$0){"use strict";var J0=require("@stdlib/utils/define-read-only-property"),H={};J0(H,"MAX",j0());J0(H,"NUM_BYTES",z0());$0.exports=H});var t_=r(function(Y4,e_){"use strict";var ji=1114111;e_.exports=ji});var __=r(function(f4,s_){"use strict";var ki=65535;s_.exports=ki});var N_=r(function(W4,u_){"use strict";var i_=require("@stdlib/utils/define-read-only-property"),n={};i_(n,"MAX",t_());i_(n,"MAX_BMP",__());u_.exports=n});var A=require("@stdlib/utils/define-read-only-property/dist"),u={};A(u,"array",l());A(u,"complex64",V());A(u,"complex128",h());A(u,"float16",xr());A(u,"float32",Ne());A(u,"float64",xs());A(u,"int8",Hs());A(u,"int16",ls());A(u,"int32",ws());A(u,"path",e0());A(u,"time",G0());A(u,"uint8",y0());A(u,"uint16",h0());A(u,"uint32",r_());A(u,"unicode",N_());module.exports=u;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map