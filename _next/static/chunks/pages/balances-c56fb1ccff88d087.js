(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7215],{90585:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/balances",function(){return s(65810)}])},55349:(e,t,s)=>{"use strict";s.d(t,{FcD:()=>l.FcD,o5u:()=>l.o5u});var l=s(39324)},73625:(e,t,s)=>{"use strict";s.d(t,{Ahz:()=>l.Ahz,Drp:()=>l.Drp,MJN:()=>l.MJN,azJ:()=>l.azJ,l1Y:()=>l.l1Y,l6P:()=>l.l6P,m_M:()=>l.m_M,o5u:()=>l.o5u});var l=s(39324)},81253:(e,t,s)=>{"use strict";s.d(t,{$nd:()=>l.$nd,o5u:()=>l.o5u});var l=s(39324)},85234:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var l=s(74848),n=s(96540),a=s(25239),r=s(54096),i=s(58861),o=s(19763),d=s.n(o),c=s(56332),x=s(79296);let u=e=>{let{children:t}=e,s=(0,c._J)(),o=(0,n.useMemo)(()=>i.vq.filter(e=>(0,x.$I)(e.href,s)),[s]);return(0,l.jsx)(r.A,{title:"Assets",action:(0,l.jsxs)("div",{className:d().pageHeader,children:[(0,l.jsx)("div",{className:d().navWrapper,children:(0,l.jsx)(a.A,{tabs:o})}),t&&(0,l.jsx)("div",{className:d().actionsWrapper,children:t})]})})}},68716:(e,t,s)=>{"use strict";s.d(t,{A:()=>g});var l=s(74848),n=s(96540),a=s(4743),r=s(1771),i=s(39990),o=s(70258),d=s(20044),c=s(77568),x=s(26603),u=s(78036),h=s(93726),p=s(91703),m=s(90285),j=s(53373),A=s.n(j),f=s(57749),_=s.n(f),b=s(50289);function C(e,t,s){return t.cells[s].rawValue<e.cells[s].rawValue?-1:t.cells[s].rawValue>e.cells[s].rawValue?1:0}function v(e){let{headCells:t,order:s,orderBy:n,onRequestSort:r}=e,i=e=>()=>{r(e)};return(0,l.jsx)(c.A,{children:(0,l.jsx)(u.A,{children:t.map(e=>(0,l.jsx)(o.A,{align:"left",padding:"normal",sortDirection:n===e.id&&s,sx:{width:e.width?e.width:"",textAlign:e.align?e.align:""},className:A()({sticky:e.sticky}),children:e.label&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(h.A,{active:n===e.id,direction:n===e.id?s:"asc",onClick:i(e.id),sx:{mr:[0,"-26px"]},children:[e.label,n===e.id?(0,l.jsx)(a.A,{component:"span",sx:m.A,children:"desc"===s?"sorted descending":"sorted ascending"}):null]})})},e.id))})})}let y=[10,25,100],g=function(e){let{rows:t,headCells:s,mobileVariant:c}=e,[h,m]=(0,n.useState)("asc"),[j,f]=(0,n.useState)(""),[g,k]=(0,n.useState)(0),[w,N]=(0,n.useState)(y[1]),S=(j?t.slice().sort("desc"===h?(e,t)=>C(e,t,j):(e,t)=>-C(e,t,j)):t).slice(g*w,g*w+w);return(0,l.jsxs)(a.A,{sx:{width:"100%"},children:[(0,l.jsx)(d.A,{"data-testid":"table-container",component:p.A,sx:{width:"100%",mb:2},children:(0,l.jsxs)(r.A,{"aria-labelledby":"tableTitle",className:c?_().mobileColumn:void 0,children:[(0,l.jsx)(v,{headCells:s,order:h,orderBy:j,onRequestSort:e=>{m(j===e&&"asc"===h?"desc":"asc"),f(e)}}),(0,l.jsx)(i.A,{children:S.length>0?S.map((e,t)=>{var s;return(0,l.jsx)(u.A,{"data-testid":"table-row",tabIndex:-1,selected:e.selected,className:e.collapsed?_().collapsedRow:void 0,children:Object.entries(e.cells).map(s=>{let[n,a]=s;return(0,l.jsx)(o.A,{className:A()({sticky:a.sticky,[_().collapsedCell]:e.collapsed}),children:(0,l.jsx)(b.SDm,{in:!e.collapsed,enter:!1,children:a.content},t)},n)})},null!==(s=e.key)&&void 0!==s?s:t)}):(0,l.jsx)(u.A,{children:(0,l.jsx)(o.A,{})})})]})}),t.length>S.length&&(0,l.jsx)(x.A,{"data-testid":"table-pagination",rowsPerPageOptions:y,component:"div",count:t.length,rowsPerPage:w,page:g,onPageChange:(e,t)=>{k(t)},onRowsPerPageChange:e=>{N(parseInt(e.target.value,10)),k(0)}})]})}},25239:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var l=s(74848);s(96540);var n=s(91106),a=s.n(n),r=s(39324),i=s(86715),o=s(52332),d=s.n(o);let c=e=>{let{tabs:t}=e,s=(0,i.useRouter)(),n=Math.max(0,t.map(e=>e.href).indexOf(s.pathname)),o=s.query.safe?{safe:s.query.safe}:void 0;return(0,l.jsx)(r.tUM,{value:n,variant:"scrollable",allowScrollButtonsMobile:!0,className:d().tabs,children:t.map((e,t)=>(0,l.jsx)(r.ozo,{href:{pathname:e.href,query:o},component:a(),tabIndex:0,className:d().tab,label:(0,l.jsx)(r.o5u,{variant:"body2",fontWeight:700,color:n===t?"primary":"primary.light",className:d().label,children:e.label})},e.href))})}},54096:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var l=s(74848),n=s(22434),a=s(53373),r=s.n(a),i=s(19763),o=s.n(i);let d=e=>{let{title:t,action:s,noBorder:a}=e;return(0,l.jsxs)(n.azJ,{className:r()(o().container,{[o().border]:!a}),children:[(0,l.jsx)(n.o5u,{variant:"h3",className:o().title,children:t}),s]})}},2455:(e,t,s)=>{"use strict";s.d(t,{i:()=>r});var l=s(74848),n=s(50021);let a={xs:"103px",md:"111px"},r=e=>{let{children:t}=e;return(0,l.jsx)(n.azJ,{sx:{position:"sticky",zIndex:"1",top:a,py:1,bgcolor:"background.main",mt:-1,mb:1},children:t})}},87910:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var l=s(79223),n=s(56332),a=s(79296),r=s(96540);let i=()=>{let e=(0,r.useContext)(l.u);return(0,n.eZ)(a.Gv.NATIVE_SWAPS)&&!e}},65810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>eD});var l,n,a=s(74848),r=s(13368),i=s.n(r),o=s(24203),d=s(11889),c=s(77635),x=s(56332),u=s(6459),h=s(10256);let p={CHECK_BALANCES:{action:"Check balances on block explorer",category:"counterfactual",event:h.Bx.CLICK}};var m=s(79296),j=s(55349);let A=()=>{let{safe:e,safeAddress:t}=(0,u.A)(),s=(0,x._J)();if(e.deployed)return null;let l=s?(0,m.R1)(s,t):void 0;return(0,a.jsxs)(j.FcD,{"data-testid":"no-tokens-alert",icon:!1,severity:"info",sx:{display:"flex",maxWidth:"600px",mt:3,px:3,py:2,mx:"auto"},children:[(0,a.jsx)(j.o5u,{fontWeight:"bold",mb:1,children:"Don't see your tokens?"}),(0,a.jsxs)(j.o5u,{variant:"body2",mb:2,children:["Your Safe Account is not activated yet so we can only display your native balance. Non-native tokens may not show up immediately after the Safe is deployed. Finish the onboarding to deploy your account onchain and unlock all features."," ",l&&(0,a.jsxs)(a.Fragment,{children:["You can always view all of your assets on the"," ",(0,a.jsx)(c.A,{...p.CHECK_BALANCES,children:(0,a.jsx)(o.A,{href:l.href,children:"Block Explorer"})})]})]}),(0,a.jsx)(d.A,{})]})};var f=s(39324),_=s(8442),b=s(63894),C=s.n(b),v=s(72206),y=s(77905),g=s(39674),k=s(68716),w=s(62341),N=s(71395);let S=e=>{let{address:t}=e,s=(0,x._J)(),l=s?(0,m.R1)(s,t):void 0;return l?(0,a.jsx)(N.o5u,{component:"span",color:"border.main",children:(0,a.jsx)(w.A,{href:l.href,title:l.title})}):null};var I=s(36755),E=s(15542),T=s(57657);let L=(0,T.A)((0,a.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined");var z=s(2455);let H=(0,T.A)((0,a.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6m-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14M2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13m-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53"}),"VisibilityOffOutlined");var V=s(40058),D=s(4189),O=s.n(D);let M=e=>{let{saveChanges:t,cancel:s,selectedAssetCount:l,showHiddenAssets:n,deselectAll:r}=e;return 0!==l||n?(0,a.jsx)(z.i,{children:(0,a.jsxs)(V.azJ,{className:O().wrapper,children:[(0,a.jsxs)(V.azJ,{className:O().hideTokensHeader,children:[(0,a.jsx)(H,{}),(0,a.jsxs)(V.o5u,{variant:"body2",lineHeight:"inherit",children:[l," ",1===l?"token":"tokens"," selected"]})]}),(0,a.jsxs)(V.azJ,{display:"flex",flexDirection:"row",gap:1,children:[(0,a.jsx)(c.A,{...h.uC.CANCEL_HIDE_DIALOG,children:(0,a.jsx)(V.$nd,{onClick:s,className:O().cancelButton,size:"small",variant:"outlined",children:"Cancel"})}),(0,a.jsx)(c.A,{...h.uC.DESELECT_ALL_HIDE_DIALOG,children:(0,a.jsx)(V.$nd,{onClick:r,className:O().cancelButton,size:"small",variant:"outlined",children:"Deselect all"})}),(0,a.jsx)(c.A,{...h.uC.SAVE_HIDE_DIALOG,children:(0,a.jsx)(V.$nd,{onClick:t,className:O().applyButton,size:"small",variant:"contained",children:"Save"})})]})]})}):null};var P=s(13859),B=s(93359),R=s(73536),J=s(16992),W=s(5259),U=s(65605),F=s(42837),G=s(53608);let K=()=>{let e=(0,W.A)(),t=(0,x._J)(),s=(0,U.jL)(),l=(0,U.GV)(F.i0),n=l.shortName.qr?"".concat(null==t?void 0:t.shortName,":"):"",r="".concat(n).concat(e);return(0,a.jsx)(f.tu9,{"data-testid":"add-funds-section",children:(0,a.jsxs)(f.xA9,{container:!0,sx:{gap:3,alignItems:"center",justifyContent:"center",p:4},children:[(0,a.jsxs)(f.xA9,{item:!0,children:[(0,a.jsx)("div",{children:(0,a.jsx)(f.azJ,{sx:{p:2,border:"1px solid",borderColor:"border.light",borderRadius:1,display:"inline-block"},children:(0,a.jsx)(J.A,{value:r,size:195})})}),(0,a.jsx)(f.ip9,{control:(0,a.jsx)(f.dOG,{checked:l.shortName.qr,onChange:e=>s((0,F.DZ)(e.target.checked))}),label:(0,a.jsx)(a.Fragment,{children:"QR code with chain prefix"})})]}),(0,a.jsxs)(f.xA9,{item:!0,container:!0,xs:12,md:6,sx:{gap:2,flexDirection:"column"},children:[(0,a.jsx)(f.o5u,{variant:"h3",sx:{fontWeight:"bold"},children:"Add funds to get started"}),(0,a.jsx)(f.o5u,{children:"Add funds directly from your bank account or copy your address to send tokens from a different account."}),(0,a.jsx)(f.azJ,{sx:{bgcolor:"background.main",p:2,borderRadius:"6px",alignSelf:"flex-start",fontSize:"14px"},children:(0,a.jsx)(R.A,{address:e,shortAddress:!1,showCopyButton:!0,hasExplorer:!0,avatarSize:24})}),(0,a.jsx)(f.azJ,{sx:{alignSelf:"flex-start"},children:(0,a.jsx)(G.A,{})})]})]})})};var q=s(14181),Z=s(69924),$=s(27457),Y=s(87910),X=s(17063),Q=s(34754),ee=s(79301),et=s(95347),es=s(63971),el=s(74036),en=s(86715),ea=s(52633);let er=e=>{let{tokenInfo:t,trackingLabel:s}=e,l=(0,es.A)(t),n=(0,x._J)(),r=(0,en.useRouter)();return(0,a.jsx)(ee.A,{allowSpendingLimit:!!l,children:e=>(0,a.jsx)(c.A,{...Q.N.OPEN_STAKE,label:s,children:(0,a.jsx)(el.$nd,{"data-testid":"stake-btn","aria-label":"Stake",variant:"text",color:"info",size:"small",startIcon:(0,a.jsx)(ea.A,{}),onClick:()=>{r.push({pathname:et.S.stake,query:{...r.query,asset:"".concat(null==n?void 0:n.shortName,"_").concat(t.type===_.TokenType.NATIVE_TOKEN?"NATIVE_TOKEN":t.address)}})},disabled:!e,children:"Stake"})})})},ei=[,,,].fill({cells:{asset:{rawValue:"0x0",content:(0,a.jsxs)("div",{className:C().token,children:[(0,a.jsx)(f.EAD,{variant:"rounded",width:"26px",height:"26px"}),(0,a.jsx)(f.o5u,{children:(0,a.jsx)(f.EAD,{width:"80px"})})]})},balance:{rawValue:"0",content:(0,a.jsx)(f.o5u,{children:(0,a.jsx)(f.EAD,{width:"32px"})})},value:{rawValue:"0",content:(0,a.jsx)(f.o5u,{children:(0,a.jsx)(f.EAD,{width:"32px"})})},actions:{rawValue:"",sticky:!0,content:(0,a.jsx)("div",{})}}}),eo=e=>e.type===_.TokenType.NATIVE_TOKEN,ed=[{id:"asset",label:"Asset",width:"60%"},{id:"balance",label:"Balance",width:"20%"},{id:"value",label:"Value",width:"20%",align:"right"},{id:"actions",label:"",width:"20%",sticky:!0}],ec=e=>{let{showHiddenAssets:t,setShowHiddenAssets:s}=e,{balances:l,loading:n}=(0,P.A)(),r=(0,Y.A)(),i=(0,X.A)(),{isAssetSelected:o,toggleAsset:d,hidingAsset:x,hideAsset:u,cancel:h,deselectAll:p,saveChanges:m}=(0,B.r5)(()=>s(!1)),j=(0,B.xR)(),b=t?l.items:j,w=!n&&1===l.items.length&&"0"===l.items[0].balance,N=(null==b?void 0:b.filter(e=>o(e.tokenInfo.address)).length)||0,T=n?ei:(b||[]).map(e=>{var s;let l=parseFloat(e.fiatBalance),n=eo(e.tokenInfo),h=o(e.tokenInfo.address);return{key:e.tokenInfo.address,selected:h,collapsed:e.tokenInfo.address===x,cells:{asset:{rawValue:e.tokenInfo.name,collapsed:e.tokenInfo.address===x,content:(0,a.jsxs)("div",{className:C().token,children:[(0,a.jsx)(g.A,{logoUri:e.tokenInfo.logoUri,tokenSymbol:e.tokenInfo.symbol}),(0,a.jsx)(f.o5u,{children:e.tokenInfo.name}),i&&e.tokenInfo.type===_.TokenType.NATIVE_TOKEN&&(0,a.jsx)(er,{tokenInfo:e.tokenInfo,trackingLabel:Q.X.asset}),!n&&(0,a.jsx)(S,{address:e.tokenInfo.address})]})},balance:{rawValue:Number(e.balance)/10**(null!==(s=e.tokenInfo.decimals)&&void 0!==s?s:0),collapsed:e.tokenInfo.address===x,content:(0,a.jsx)(y.A,{value:e.balance,decimals:e.tokenInfo.decimals,tokenSymbol:e.tokenInfo.symbol})},value:{rawValue:l,collapsed:e.tokenInfo.address===x,content:(0,a.jsxs)(f.o5u,{textAlign:"right",children:[(0,a.jsx)(v.A,{value:e.fiatBalance}),0===l&&(0,a.jsx)(f.m_M,{title:"Provided values are indicative and we are unable to accommodate pricing requests for individual assets",placement:"top",arrow:!0,children:(0,a.jsx)("span",{children:(0,a.jsx)(f.Ahz,{component:E.A,inheritViewBox:!0,color:"error",fontSize:"small",sx:{verticalAlign:"middle",ml:.5,mr:[0,"-20px"],mt:"-2px"}})})})]})},actions:{rawValue:"",sticky:!0,collapsed:e.tokenInfo.address===x,content:(0,a.jsx)(f.azJ,{display:"flex",flexDirection:"row",gap:1,alignItems:"center",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)($.A,{tokenInfo:e.tokenInfo}),r&&(0,a.jsx)(q.A,{tokenInfo:e.tokenInfo,amount:"0",trackingLabel:Z.S.asset}),t?(0,a.jsx)(f.Sc0,{size:"small",checked:h,onClick:()=>d(e.tokenInfo.address)}):(0,a.jsx)(c.A,{...I.u.HIDE_TOKEN,children:(0,a.jsx)(f.m_M,{title:"Hide asset",arrow:!0,disableInteractive:!0,children:(0,a.jsx)(f.K0,{disabled:void 0!==x,size:"medium",onClick:()=>u(e.tokenInfo.address),children:(0,a.jsx)(L,{fontSize:"small"})})})})]})})}}}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M,{saveChanges:m,cancel:h,deselectAll:p,selectedAssetCount:N,showHiddenAssets:t}),w?(0,a.jsx)(K,{}):(0,a.jsx)("div",{className:C().container,children:(0,a.jsx)(k.A,{rows:T,headCells:ed})}),(0,a.jsx)(A,{})]})};var ex=s(85234),eu=s(96540),eh=s(19778),ep=["title","titleId"];function em(){return(em=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)({}).hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(null,arguments)}let ej=function(e){var t=e.title,s=e.titleId,a=function(e,t){if(null==e)return{};var s,l,n=function(e,t){if(null==e)return{};var s={};for(var l in e)if(({}).hasOwnProperty.call(e,l)){if(t.includes(l))continue;s[l]=e[l]}return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)s=a[l],t.includes(s)||({}).propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}(e,ep);return eu.createElement("svg",em({width:65,height:64,viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},a),t?eu.createElement("title",{id:s},t):null,l||(l=eu.createElement("path",{d:"M39.3016 47.8791V50.4924C39.3016 51.2782 38.6651 51.9147 37.8794 51.9147H14.082C13.2963 51.9147 12.6598 51.2782 12.6598 50.4924L12.6527 26.7022C12.6563 25.9164 13.2891 25.28 14.0749 25.28H16.6954C17.0865 25.28 17.4065 24.96 17.4065 24.5689V21.2302C17.4065 20.8391 17.0865 20.5191 16.6954 20.5191H13.7691C12.9834 20.5191 12.3469 21.1556 12.3469 21.9413V23.5271C12.3469 24.3129 11.714 24.9493 10.9283 24.9529H10.1994L9.31404 24.96C8.53182 24.96 7.89893 25.6 7.89893 26.3822V50.8373C7.89893 51.6231 8.53537 52.2596 9.32115 52.2596H10.9247C11.7105 52.2596 12.3469 52.896 12.3469 53.6818V55.2533C12.3469 56.0391 12.9834 56.6756 13.7691 56.6756H38.1851C38.9709 56.6756 39.6074 56.0391 39.6074 55.2569V53.6604C39.6074 52.8782 40.2403 52.2453 41.026 52.2418H41.8154L41.8474 52.2382H42.6403C43.4225 52.2311 44.0554 51.5947 44.0554 50.8124V47.8791C44.0554 47.488 43.7354 47.168 43.3443 47.168H40.0127C39.6216 47.168 39.3016 47.488 39.3016 47.8791Z",className:"illustration-light-fill"})),n||(n=eu.createElement("path",{d:"M57.1722 37.6889V13.3476C57.1722 12.5618 56.5322 11.9253 55.7464 11.9253H54.1571C53.3713 11.9289 52.7349 11.296 52.7313 10.5102V8.81066C52.7242 8.02844 52.0878 7.392 51.3055 7.392H26.8824C26.0967 7.392 25.4602 8.02844 25.4602 8.81422V10.4071C25.4602 11.1893 24.8273 11.8258 24.0451 11.8293L22.4273 11.8364C21.6451 11.8364 21.0122 12.4764 21.0122 13.2587V37.7138C21.0122 38.4996 21.6487 39.136 22.4344 39.136H24.038C24.8238 39.136 25.4602 39.7724 25.4602 40.5582V42.1298C25.4602 42.9156 26.0967 43.552 26.8824 43.552H51.302C52.0878 43.552 52.7242 42.9156 52.7242 42.1298V40.5369C52.7242 39.7547 53.3571 39.1182 54.1393 39.1147L55.7535 39.1076C56.5358 39.1076 57.1687 38.4676 57.1687 37.6853L57.1722 37.6889ZM50.9962 38.7911H27.1953C26.4095 38.7911 25.7731 38.1547 25.7731 37.3689L25.766 13.5787C25.766 12.7929 26.4024 12.1564 27.1882 12.1564H50.9855C51.7713 12.1564 52.4078 12.7929 52.4078 13.5787L52.4149 37.3689C52.4149 38.1547 51.7784 38.7911 50.9926 38.7911H50.9962Z",className:"illustration-light-fill"})))};var eA=s(81253),ef=s(71612),e_=s(71008),eb=s.n(e_),eC=s(31243);let ev=e=>{var t;let{toggleShowHiddenAssets:s,showHiddenAssets:l}=e,{balances:n}=(0,P.A)(),r=(0,ef.A)(),i=(null===(t=n.items)||void 0===t?void 0:t.filter(e=>r.includes(e.tokenInfo.address)).length)||0;return(0,a.jsx)("div",{className:eb().hiddenTokenButton,children:(0,a.jsx)(c.A,{...h.uC.SHOW_HIDDEN_ASSETS,children:(0,a.jsx)(eA.$nd,{sx:{gap:1,padding:1,borderWidth:"1px !important",borderColor:e=>{let{palette:t}=e;return t.border.main}},disabled:l,onClick:s,"data-testid":"toggle-hidden-assets",variant:"outlined",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{fontSize:"small"}),(0,a.jsxs)(eA.o5u,{fontSize:"medium",children:[0===i?"Hide tokens":"".concat(i," hidden token").concat((0,eC.Tz)(i))," "]})]})})})})};var ey=s(13789);let eg=()=>{let{data:e}=(0,ey.su)();return e},ek=()=>{let e=(0,U.GV)(F.yl),t=(0,U.jL)(),s=eg()||[e.toUpperCase()],l=e=>{(0,h.sx)({...h.uC.CURRENCY_MENU,label:e})};return(0,a.jsxs)(f.MJN,{size:"small",children:[(0,a.jsx)(f.l1Y,{id:"currency-label",children:"Currency"}),(0,a.jsx)(f.l6P,{"data-testid":"currency-selector",labelId:"currency-label",id:"currency",value:e.toUpperCase(),label:"Currency",onChange:e=>{let s=e.target.value;(0,h.sx)({...h.uC.CHANGE_CURRENCY,label:s.toUpperCase()}),t((0,F.MN)(s.toLowerCase()))},onOpen:()=>l("Open"),onClose:()=>l("Close"),children:s.map(e=>(0,a.jsx)(f.Drp,{"data-testid":"currency-item",value:e,sx:{overflow:"hidden"},children:e.toUpperCase()},e))})]})};var ew=s(73625),eN=s(50184),eS=s(6897);let eI=e=>{let{children:t,widgetLocalStorageId:s,text:l,initiallyShown:n=!0,className:r,placement:i}=e,[o=!n,d]=(0,eN.A)(s),c=(0,eS.D)();return o||!l?t:(0,a.jsx)(f.m_M,{PopperProps:{className:r,disablePortal:!0},open:!0,placement:i,arrow:!0,title:(0,a.jsxs)(f.azJ,{display:"flex",alignItems:"center",gap:1,p:1,children:[(0,a.jsx)(f.Ahz,{component:E.A,inheritViewBox:!0,fontSize:"small"}),(0,a.jsx)("div",{style:{minWidth:"150px"},children:l}),(0,a.jsx)(f.$nd,{size:"small",color:c?"background":"secondary",variant:"text",sx:{whiteSpace:"nowrap"},onClick:()=>d(!0),children:"Got it!"})]}),children:t})};var eE=s(11100);let eT={[F.CG.TRUSTED]:"Default tokens",[F.CG.ALL]:"All tokens"},eL=()=>{let e=(0,U.jL)(),t=(0,U.GV)(F.i0);return(0,x.eZ)(m.Gv.DEFAULT_TOKENLIST)?(0,a.jsxs)(ew.MJN,{size:"small",children:[(0,a.jsx)(ew.l1Y,{id:"tokenlist-select-label",children:"Token list"}),(0,a.jsx)(eI,{widgetLocalStorageId:"tokenlist_onboarding",text:(0,a.jsxs)(a.Fragment,{children:["Spam filter on!",(0,a.jsx)("br",{}),'Switch to "All tokens" to see all of your tokens.']}),children:(0,a.jsxs)(ew.l6P,{labelId:"tokenlist-select-label",id:"tokenlist-select",value:t.tokenList,label:"Tokenlist",onChange:t=>{let s=t.target.value;e((0,F.KM)(s))},renderValue:e=>eT[e],onOpen:()=>(0,h.sx)(h.uC.OPEN_TOKEN_LIST_MENU),sx:{minWidth:"152px"},children:[(0,a.jsx)(ew.Drp,{value:F.CG.TRUSTED,children:(0,a.jsx)(c.A,{...h.uC.SHOW_DEFAULT_TOKENS,children:(0,a.jsxs)(ew.azJ,{display:"flex",flexDirection:"row",gap:"4px",alignItems:"center",minWidth:155,children:[eT.TRUSTED,(0,a.jsx)(ew.m_M,{arrow:!0,title:(0,a.jsxs)(ew.o5u,{children:["Learn more about ",(0,a.jsx)(o.A,{href:eE.tF.SPAM_TOKENS,children:"default tokens"})]}),children:(0,a.jsx)("span",{children:(0,a.jsx)(ew.Ahz,{sx:{display:"block"},color:"border",fontSize:"small",component:E.A})})})]})})}),(0,a.jsx)(ew.Drp,{value:F.CG.ALL,children:(0,a.jsx)(c.A,{...h.uC.SHOW_ALL_TOKENS,children:(0,a.jsx)("span",{children:eT.ALL})})})]})})]}):null};var ez=s(69871),eH=s(45613),eV=s(50021);let eD=()=>{let{error:e}=(0,P.A)(),[t,s]=(0,eu.useState)(!1),l=(0,eH.A)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"".concat(eE.Az," – Assets")})}),(0,a.jsxs)(ex.A,{children:[(0,a.jsx)(ev,{showHiddenAssets:t,toggleShowHiddenAssets:()=>s(e=>!e)}),(0,a.jsx)(eL,{}),(0,a.jsx)(ek,{})]}),(0,a.jsxs)("main",{children:[l&&(0,a.jsx)(eV.azJ,{mb:2,children:(0,a.jsx)(ez.A,{})}),e?(0,a.jsx)(eh.A,{img:(0,a.jsx)(ej,{}),text:"There was an error loading your assets"}):(0,a.jsx)(ec,{setShowHiddenAssets:s,showHiddenAssets:t})]})]})}},63894:e=>{e.exports={container:"styles_container__g7ttP",token:"styles_token__AgZX_"}},71008:e=>{e.exports={hiddenTokenButton:"styles_hiddenTokenButton__r9wXV"}},4189:e=>{e.exports={hideTokensHeader:"styles_hideTokensHeader__TAiCo",wrapper:"styles_wrapper__9V_ep",cancelButton:"styles_cancelButton__TQwR0",applyButton:"styles_applyButton__asHCW"}},57749:e=>{e.exports={tableCell:"styles_tableCell___4sMa",collapsedCell:"styles_collapsedCell__M_3f8",collapsedRow:"styles_collapsedRow__Zwb1R",actions:"styles_actions__ZIRNt",mobileColumn:"styles_mobileColumn__ubx77"}},52332:e=>{e.exports={tabs:"styles_tabs__8AoqD",tab:"styles_tab__WjqMe",label:"styles_label__D53iN"}},19763:e=>{e.exports={container:"styles_container__sGid8",title:"styles_title___s0jt",border:"styles_border__BkX1U",pageHeader:"styles_pageHeader__fRL7d",actionsWrapper:"styles_actionsWrapper__g_Tq2",navWrapper:"styles_navWrapper__XNqgs"}}},e=>{var t=t=>e(e.s=t);e.O(0,[7992,6459,9657,636,6593,8792],()=>t(90585)),_N_E=e.O()}]);
//# sourceMappingURL=balances-c56fb1ccff88d087.js.map