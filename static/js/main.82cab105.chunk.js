(this["webpackJsonpreact-mini-sidebar-example"]=this["webpackJsonpreact-mini-sidebar-example"]||[]).push([[0],{14:function(e,n,t){e.exports=t(24)},15:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);t(15);var a,l,r,i,o,c,d,C,p,h,m,s=t(0),u=t.n(s),f=t(9),b=t.n(f),L=t(4),E=t(1),g=t(10),v=t(2),x=t.n(v),F=t(3),w=F.a.div(p||(p=a||(a=Object(E.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: ",";\n    transition: background-color 1s;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    pointer-events: none;\n    ","\n"]))),(function(e){return e.activeMd?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0)"}),(function(e){return e.active?"@media(max-width: 768px) {\n            background-color: rgba(0, 0, 0, 0.5);\n        }":""})),M=F.a.aside(h||(h=l||(l=Object(E.a)(["\n    position: fixed;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background-color: ",";\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    transition: width 1s;\n    z-index: 10000;\n    ","\n\n    ","\n\n    @media(max-width: 768px) {\n        ","\n    }\n\n    & .sidebar-nav-icon {\n        margin: 0 ","px;\n        width: ","px;\n    }\n\n    & .sidebar-nav-item {\n        width: ","px;\n    }\n\n"]))),(function(e){return e.bgColor||"white"}),(function(e){return e.collapsableMd?"width: ".concat(e.collapsedWidth||70,"px;"):"width: ".concat(e.width||250,"px;")}),(function(e){return e.expandedMd&&"width: ".concat(e.width||250,"px;")}),(function(e){return e.expanded?"width: ".concat(e.width||250,"px;"):"width: ".concat(e.collapsedWidth||70,"px;")}),(function(e){return(e.collapsedWidth-e.iconContainerWidth)/2}),(function(e){return e.iconContainerWidth}),(function(e){return e.width})),y=F.a.button(m||(m=r||(r=Object(E.a)(["\n    background-color: transparent;\n    padding-bottom: 10px;\n    display: ",";\n    border: none;\n    font-size: 40px;\n    position: absolute;\n    bottom: 15px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    transition: transform 1s;\n    color: ",";\n    \n    &:focus {\n        outline: none;\n    }\n\n    transform: ",";\n\n    @media(max-width: 768px) {\n        display: block;\n    }\n\n"]))),(function(e){return e.collapseOnMd?"block":"none"}),(function(e){return e.color}),(function(e){return e.collapsed?"rotate(0deg)":"rotate(180deg)"})),O=function(e){var n=e.children,t=e.collapseOnMd,a=void 0!==t&&t,l=e.withOverlay,r=void 0===l||l,i=e.expandOnHover,o=void 0!==i&&i,c=e.bgColor,d=void 0===c?"white":c,C=e.btnColor,p=void 0===C?"black":C,h=e.width,m=void 0===h?250:h,f=e.collapsedWidth,b=void 0===f?100:f,E=e.iconContainerWidth,v=void 0===E?50:E,x=Object(s.useState)(!0),F=Object(L.a)(x,2),O=F[0],Z=F[1],k=Object(g.useMediaQuery)({query:"(max-width: 768px)"});return u.a.createElement(s.Fragment,null,u.a.createElement(w,{active:!O&&r,activeMd:!O&&a&&r}),u.a.createElement(M,{onMouseEnter:function(){return o&&!k&&Z(!1)},onMouseLeave:function(){return o&&!k&&Z(!0)},expanded:!O,collapsableMd:a,expandedMd:!O&&a,bgColor:d,width:m,collapsedWidth:b,iconContainerWidth:v},n,(!o||k)&&u.a.createElement(y,{color:p,onClick:function(){return Z(!O)},collapseOnMd:a,collapsed:O,collapsedWidth:b},"\u2192")))};O.propTypes={collapseOnMd:x.a.bool,withOverlay:x.a.bool,expandOnHover:x.a.bool,bgColor:x.a.string,btnColor:x.a.string};var Z,k=F.a.div(Z||(Z=i||(i=Object(E.a)(["\n    border-bottom: solid 1px #e2e2e2;\n    padding: 15px;\n    text-align: center;\n    color: ",";\n"]))),(function(e){return e.color})),P=function(e){var n=e.children,t=e.color,a=void 0===t?"black":t;return u.a.createElement(k,{color:a},n)};P.propTypes={color:x.a.string};var j,z,W=F.a.ul(j||(j=o||(o=Object(E.a)(["\n    list-style: none;\n    padding-left: 0px;\n\n    & a {\n        text-decoration: none;\n    }\n"])))),R=function(e){return u.a.createElement("nav",null,u.a.createElement(W,null,e.children))},T=F.a.li(z||(z=c||(c=Object(E.a)(["\n    display: block;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: ",";\n    &:hover {\n        background-color: #e2e2e2;\n    }\n\n    .active & {\n        border-left: solid blue 2px;\n    }\n"]))),(function(e){return e.color||"black"})),S=function(e){var n=e.children,t=e.color,a=void 0===t?"black":t;return u.a.createElement(T,{className:"sidebar-nav-item",color:a},n)};S.propTypes={color:x.a.string};var B,D=F.a.div(B||(B=d||(d=Object(E.a)(["\n    display: inline-block;\n    width: 50px;\n    margin-right: 10px;\n    margin-left: 10px;\n    text-align: center;\n\n    & svg, & img {\n        max-width: 100%;\n        max-height: 30px;\n    }\n\n    & svg {\n        fill: ",";\n    }\n"]))),(function(e){return e.fillColor})),H=function(e){var n=e.children,t=e.fillColor,a=void 0===t?"black":t;return u.a.createElement(D,{className:"sidebar-nav-icon",fillColor:a},n)};H.propTypes={fillColor:x.a.string};var I,A=F.a.div(I||(I=C||(C=Object(E.a)(["\n    display: inline-block;\n    width: 150px;\n    font-size: 20px;\n    font-weight: 100;\n    position: relative;\n    bottom: 8px;\n"])))),N=function(e){return u.a.createElement(A,null,e.children)},_=function(){var e=Object(s.useState)(!1),n=Object(L.a)(e,2),t=n[0],a=n[1],l=Object(s.useState)(!1),r=Object(L.a)(l,2),i=r[0],o=r[1],c=Object(s.useState)(!1),d=Object(L.a)(c,2),C=d[0],p=d[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(O,{collapseOnMd:t,withOverlay:i,expandOnHover:C},u.a.createElement(P,null,"Test"),u.a.createElement(R,null,u.a.createElement("a",{className:"active",href:"/"},u.a.createElement(S,null,u.a.createElement(H,null,u.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Etcher-icon.png",alt:"altt"})),u.a.createElement(N,null,"Active Link"))),u.a.createElement(S,null,u.a.createElement(H,null,u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",version:"1.1"},u.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},u.a.createElement("g",{id:"019---Present"},u.a.createElement("g",{id:"Icons_copy",transform:"translate(1.000000, 1.000000)"},u.a.createElement("circle",{id:"Oval",fill:"#FFDC00",cx:"40",cy:"18",r:"18"}),u.a.createElement("path",{d:"M40,0 C39.494,0 39,0.035 38.5,0.076 C47.8272756,0.846169734 55.0049834,8.64098126 55.0049834,18 C55.0049834,27.3590187 47.8272756,35.1538303 38.5,35.924 C39,35.965 39.494,36 40,36 C49.9411254,35.9999999 57.9999997,27.9411254 57.9999997,18 C57.9999997,8.05887461 49.9411254,1.48134311e-07 40,0 Z",id:"Path",fill:"#FF8401"}),u.a.createElement("path",{d:"M22.5,30 C24.9852814,30 27,27.9852814 27,25.5 C27,23.0147186 24.9852814,21 22.5,21 C20.0147186,21 18,23.0147186 18,25.5 C18,23.0147186 15.9852814,21 13.5,21 C11.0147186,21 9,23.0147186 9,25.5 C9,27.9852814 11.0147186,30 13.5,30 L22.5,30 Z",id:"Path",fill:"#48BDFF"}),u.a.createElement("path",{d:"M22.5,21 C21.9878328,21.0048915 21.4803641,21.0982658 21,21.276 C23.066119,22.0022113 24.3066413,24.1133306 23.9355343,26.2716888 C23.5644273,28.4300471 21.6900227,30.0055875 19.5,30.0000148 L22.5,30 C24.9852814,30 27,27.9852814 27,25.5 C27,23.0147186 24.9852814,21 22.5,21 Z",id:"Path",fill:"#2C98F6"}),u.a.createElement("path",{d:"M22,36 L35,36 C35.5522847,36 36,35.5522847 36,35 L36,31 C36,30.4477153 35.5522847,30 35,30 L1,30 C0.44771525,30 0,30.4477153 0,31 L0,35 C0,35.5522847 0.44771525,36 1,36 L22,36 Z",id:"Path",fill:"#FFDC00"}),u.a.createElement("path",{d:"M35,30 L32,30 C32.5522847,30 33,30.4477153 33,31 L33,35 C33,35.5522847 32.5522847,36 32,36 L35,36 C35.5522847,36 36,35.5522847 36,35 L36,31 C36,30.4477153 35.5522847,30 35,30 Z",id:"Path",fill:"#FF8401"}),u.a.createElement("path",{d:"M22.267,36 L34,36 L34,57 C34,57.5522847 33.5522847,58 33,58 L3,58 C2.44771525,58 2,57.5522847 2,57 L2,36 L13.733,36",id:"Path",fill:"#FFDC00"}),u.a.createElement("path",{d:"M31,36 L31,57 C31,57.5522847 30.5522847,58 30,58 L33,58 C33.5522847,58 34,57.5522847 34,57 L34,36 L31,36 Z",id:"Path",fill:"#FF8401"}),u.a.createElement("rect",{id:"Rectangle",fill:"#48BDFF",x:"14",y:"29",width:"8",height:"8",rx:"1"}),u.a.createElement("path",{d:"M21,29 L18,29 C18.5522847,29 19,29.4477153 19,30 L19,36 C19,36.5522847 18.5522847,37 18,37 L21,37 C21.5522847,37 22,36.5522847 22,36 L22,30 C22,29.4477153 21.5522847,29 21,29 Z",id:"Path",fill:"#2C98F6"}),u.a.createElement("rect",{id:"Rectangle",fill:"#48BDFF",x:"15",y:"37",width:"6",height:"21"}),u.a.createElement("rect",{id:"Rectangle",fill:"#2C98F6",x:"18",y:"37",width:"3",height:"21"}),u.a.createElement("path",{d:"M49,10.986 C49.0032832,11.5107865 48.7961895,12.0150148 48.425,12.386 L34.383,26.42 C33.8168399,26.9886641 32.9631088,27.1587006 32.2222747,26.8503487 C31.4814405,26.5419967 31.0004792,25.8164311 31.005,25.014 C31.0017168,24.4892135 31.2088105,23.9849852 31.58,23.614 L45.617,9.58 C46.1826653,9.00770838 47.038751,8.83535948 47.7818031,9.14417747 C48.5248552,9.45299545 49.0065992,10.1813563 49,10.986 Z",id:"Path",fill:"#FFFFFF"}),u.a.createElement("circle",{id:"Oval",fill:"#FFFFFF",cx:"34",cy:"12",r:"3"}),u.a.createElement("path",{d:"M34,9 C33.4718941,9.00274535 32.9540847,9.14635115 32.5,9.416 C33.4273539,9.9458262 33.9996803,10.9319639 33.9996803,12 C33.9996803,13.0680361 33.4273539,14.0541738 32.5,14.584 C32.9540847,14.8536489 33.4718941,14.9972547 34,15 C35.6568542,15 37,13.6568542 37,12 C37,10.3431458 35.6568542,9 34,9 Z",id:"Path",fill:"#CCCCCC"}),u.a.createElement("circle",{id:"Oval",fill:"#FFFFFF",cx:"46",cy:"24",r:"3"}),u.a.createElement("path",{d:"M46,21 C45.4718941,21.0027453 44.9540847,21.1463511 44.5,21.416 C45.4273539,21.9458262 45.9996803,22.9319639 45.9996803,24 C45.9996803,25.0680361 45.4273539,26.0541738 44.5,26.584 C44.9540847,26.8536489 45.4718941,26.9972547 46,27 C47.6568542,27 49,25.6568542 49,24 C49,22.3431458 47.6568542,21 46,21 Z",id:"Path",fill:"#CCCCCC"})),u.a.createElement("g",{id:"Icons_copy_2",transform:"translate(1.000000, 1.000000)",fill:"#FFFFFF"},u.a.createElement("path",{d:"M1,36 L2,36 L2,57 C2,57.5522847 2.44771525,58 3,58 L6,58 C5.44771525,58 5,57.5522847 5,57 L5,36 L4,36 C3.44771525,36 3,35.5522847 3,35 L3,31 C3,30.4477153 3.44771525,30 4,30 L1,30 C0.44771525,30 0,30.4477153 0,31 L0,35 C0,35.5522847 0.44771525,36 1,36 Z",id:"Path"}),u.a.createElement("path",{d:"M12,25.5 C12.0034018,23.598387 13.2056447,21.905629 15,21.276 C14.5196359,21.0982658 14.0121672,21.0048915 13.5,21 C11.0147186,21 9,23.0147186 9,25.5 C9,27.9852814 11.0147186,30 13.5,30 L16.5,30 C14.0147186,30 12,27.9852814 12,25.5 Z",id:"Path"}),u.a.createElement("path",{d:"M24,21.276 C24.2310369,21.1897112 24.4688588,21.1228133 24.711,21.076 C24.8965576,21.0447914 25.0839574,21.0257508 25.272,21.019 C24.3941003,16.0500006 25.6560669,10.9413586 28.7467399,6.95269923 C31.8374129,2.96403984 36.4691807,0.466539272 41.5,0.076 C41,0.035 40.506,0 40,0 C39.494,0 39,0.035 38.5,0.076 C33.4687363,0.466705297 28.8366734,2.96473918 25.7461168,6.95406551 C22.6555602,10.9433918 21.3941643,16.052703 22.273,21.022 C22.0849574,21.0287508 21.8975576,21.0477914 21.712,21.079 L24,21.276 Z",id:"Path"})),u.a.createElement("g",{id:"Icons"},u.a.createElement("rect",{id:"Rectangle",fill:"#FFFFFF",x:"2",y:"37",width:"2",height:"8"}),u.a.createElement("path",{d:"M3.02,42 C2.46771527,42.0027614 2.01776148,41.5572847 2.01500006,41.005 C2.01223863,40.4527153 2.45771527,40.0027615 3.01,40 L3.02,40 C3.57228475,40 4.02,40.4477153 4.02,41 C4.02,41.5522847 3.57228475,42 3.02,42 Z",id:"Path",fill:"#000000"}),u.a.createElement("path",{d:"M2,38 L14.278,38 C14.4526873,38.298663 14.701337,38.5473127 15,38.722 L15,58 L4,58 L4,45 C4,44.4477153 3.55228475,44 3,44 C2.44771525,44 2,44.4477153 2,45 L2,58 C2,59.1045695 2.8954305,60 4,60 L34,60 C35.1045695,60 36,59.1045695 36,58 L36,38 C37.1045695,38 38,37.1045695 38,36 L38,32 C38,30.8954305 37.1045695,30 36,30 L27.739,30 C29.0628409,28.4496357 29.4205142,26.2941835 28.6683687,24.3993323 C27.9162231,22.504481 26.1776606,21.1811124 24.1509354,20.9607276 C22.1242103,20.7403428 20.1418405,21.6590996 19,23.348 C17.8581595,21.6590996 15.8757897,20.7403428 13.8490646,20.9607276 C11.8223394,21.1811124 10.0837769,22.504481 9.33163133,24.3993323 C8.57948576,26.2941835 8.93715913,28.4496357 10.261,30 L2,30 C0.8954305,30 1.3527075e-16,30.8954305 0,32 L0,36 C1.3527075e-16,37.1045695 0.8954305,38 2,38 Z M22,36.995 L22,37 L16,37 L16,31 L22,31 L22,36.995 Z M17,58 L17,39 L21,39 L21,58 L17,58 Z M34,58 L23,58 L23,38.722 C23.298663,38.5473127 23.5473127,38.298663 23.722,38 L34,38 L34,58 Z M36,36 L24,36 L24,32 L36,32 L36,36 Z M14.5,23 C16.4329966,23 18,24.5670034 18,26.5 C18,27.0522847 18.4477153,27.5 19,27.5 C19.5522847,27.5 20,27.0522847 20,26.5 C19.9919922,24.592416 21.5130243,23.0297336 23.4201287,22.9862183 C25.3272332,22.942703 26.9179581,24.4343828 26.9969659,26.3403468 C27.0759737,28.2463108 25.6141631,29.8645271 23.71,29.979 C23.3524627,29.3740126 22.7027364,29.0020349 22,29 L16,29 C15.2972636,29.0020349 14.6475373,29.3740126 14.29,29.979 C12.3953311,29.8784046 10.9276574,28.283363 10.984723,26.3868838 C11.0417886,24.4904047 12.6027106,22.9864944 14.5,23 Z M2,32 L14,32 L14,36 L2,36 L2,32 Z",id:"Shape",fill:"#000000",fillRule:"nonzero"}),u.a.createElement("path",{d:"M22.021,17.955 C21.9909082,18.5064536 22.4135472,18.9778931 22.965,19.008 C23.5137192,19.0304009 23.9805455,18.6118975 24.018,18.064 C24.5290324,8.79899031 32.3750514,1.65532791 41.6472527,2.01287516 C50.9194541,2.3704224 58.1920558,10.097077 57.9880917,19.3739276 C57.7841277,28.6507782 50.1789561,36.050325 40.9,36 C40.6399572,36.0022024 40.391958,36.1099172 40.2128472,36.2984549 C40.0337364,36.4869925 39.9388727,36.740186 39.95,37 C39.9736804,37.5616648 40.4378486,38.0037298 41,38 C51.3565587,37.9957705 59.8020021,29.6981884 59.9891386,19.3433197 C60.1762752,8.98845102 52.036162,0.391129334 41.686519,0.0126906238 C31.336876,-0.365748087 22.5906116,7.61411665 22.021,17.955 Z",id:"Path",fill:"#000000"}),u.a.createElement("path",{d:"M33.981,29 C34.7723747,29.0023197 35.531792,28.6879663 36.09,28.127 L50.129,14.089 C51.2835818,12.92042 51.2835818,11.04058 50.129,9.872 C48.9479702,8.7471746 47.0920298,8.7471746 45.911,9.872 L31.871,23.911 C31.0180852,24.7638213 30.7631254,26.0465691 31.2250805,27.1607348 C31.6870357,28.2749006 32.7748627,29.0009024 33.981,29 Z M33.281,25.324 L47.324,11.287 C47.6039121,11.0030062 48.0284335,10.9178495 48.3962187,11.0719187 C48.7640038,11.2259879 49.0010782,11.5882942 48.995,11.987 C48.9972507,12.2452994 48.896065,12.4937626 48.714,12.677 L34.676,26.713 C34.2866806,27.0824 33.6763194,27.0824 33.287,26.713 C32.9123463,26.3254034 32.9123463,25.7105966 33.287,25.323 L33.281,25.324 Z",id:"Shape",fill:"#000000",fillRule:"nonzero"}),u.a.createElement("path",{d:"M35,17 C37.209139,17 39,15.209139 39,13 C39,10.790861 37.209139,9 35,9 C32.790861,9 31,10.790861 31,13 C31,15.209139 32.790861,17 35,17 Z M35,11 C36.1045695,11 37,11.8954305 37,13 C37,14.1045695 36.1045695,15 35,15 C33.8954305,15 33,14.1045695 33,13 C33,11.8954305 33.8954305,11 35,11 Z",id:"Shape",fill:"#000000",fillRule:"nonzero"}),u.a.createElement("path",{d:"M47,21 C44.790861,21 43,22.790861 43,25 C43,27.209139 44.790861,29 47,29 C49.209139,29 51,27.209139 51,25 C51,22.790861 49.209139,21 47,21 Z M47,27 C45.8954305,27 45,26.1045695 45,25 C45,23.8954305 45.8954305,23 47,23 C48.1045695,23 49,23.8954305 49,25 C49,26.1045695 48.1045695,27 47,27 Z",id:"Shape",fill:"#000000",fillRule:"nonzero"}),u.a.createElement("path",{d:"M7,51 C6.44771525,51 6,51.4477153 6,52 L6,55 C6,55.5522847 6.44771525,56 7,56 L10,56 C10.5522847,56 11,55.5522847 11,55 C11,54.4477153 10.5522847,54 10,54 L8,54 L8,52 C8,51.4477153 7.55228475,51 7,51 Z",id:"Path",fill:"#000000"})))))),u.a.createElement(N,null,"Test")),u.a.createElement(S,null,u.a.createElement(H,null,u.a.createElement("img",{src:"https://au.int/sites/default/files/blocks/32111-img-radio-icon.png",alt:"altt"})),u.a.createElement(N,null,"Test")),u.a.createElement(S,null,u.a.createElement(H,null,u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},u.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),u.a.createElement("path",{d:"M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"}))),u.a.createElement(N,null,"Test")))),u.a.createElement("div",{style:{marginLeft:"30%",marginTop:"250px"}},u.a.createElement("label",{htmlFor:"collapse"},"Collapse sidebar on big screens:"),u.a.createElement("input",{type:"checkbox",onChange:function(e){return a(!t)}})," ",u.a.createElement("br",null),u.a.createElement("label",{htmlFor:"overlay"},"Activate overlay:"),u.a.createElement("input",{id:"overlay",type:"checkbox",onChange:function(e){return o(!i)}})," ",u.a.createElement("br",null),u.a.createElement("label",{htmlFor:"hover"},"Extend and collapse by hovering (big screen only):"),u.a.createElement("input",{id:"hover",type:"checkbox",onChange:function(e){return p(!C)}})," ",u.a.createElement("br",null)))};b.a.render(u.a.createElement(_,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.82cab105.chunk.js.map