(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8422],{48422:(e,t,r)=>{"use strict";r.d(t,{jG:()=>k,ki:()=>_,pb:()=>R,v7:()=>c});var n=r(41880),i=r.n(n),s=r(96540),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function u(e,t,r){if(r||2==arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function c(e){if(e<1048576){var t=Number((e/1024).toFixed(0));return t<=0?e+" B":t+" KB"}return e<0x40000000?(e/1048576).toFixed(0)+" MB":e<0x10000000000?(e/0x40000000).toFixed(0)+" GB":""}function l(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.some(function(e){return!l(t)&&e&&e.apply(void 0,u([t],r,!1)),l(t)})}}function d(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}"function"==typeof SuppressedError&&SuppressedError;var h=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}};function p(e){return null!=e}var g=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},v=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},m={code:"too-many-files",message:"Too many files"};function y(e){e.preventDefault()}function _(e,t){return void 0===t&&(t={}),i().unparse(e,t)}var b={Link:"link",Button:"button"};function k(){return{CSVDownloader:function(){var e=this,t=function(t){var r=t.children,n=t.data,o=void 0===n?{}:n,a=t.filename,u=t.type,c=void 0===u?b.Link:u,l=t.style,f=void 0===l?{}:l,d=t.className,h=void 0===d?"":d,p=t.bom,g=void 0!==p&&p,v=t.config,m=void 0===v?{}:v,y=function(){var t,r,n;return t=void 0,r=void 0,n=function(){var e,t,r,n,s,u;return function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(u){return function(a){if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,function(c){switch(c.label){case 0:return e=g?"\uFEFF":"",t=null,r=null,"function"!=typeof o?[3,2]:[4,o()];case 1:o=c.sent(),c.label=2;case 2:return t="object"==typeof o?i().unparse(o,m):o,n=new Blob(["".concat(e).concat(t)],{type:"text/csv;charset=utf-8;"}),r=(s=window.navigator).msSaveBlob?s.msSaveBlob(n,"".concat(a,".csv")):window.URL.createObjectURL(n),(u=document.createElement("a")).href=r,u.setAttribute("download","".concat(a,".csv")),u.click(),u.remove(),[2]}})},new(r||(r=Promise))(function(i,s){function o(e){try{u(n.next(e))}catch(e){s(e)}}function a(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,a)}u((n=n.apply(e,t||[])).next())})};return s.createElement(s.Fragment,null,c===b.Button?s.createElement("button",{onClick:function(){return y()},style:f,className:h},r):s.createElement("a",{onClick:function(){return y()},style:f,className:h},r))};return s.useMemo(function(){return t},[])}(),Type:b}}var E={progressBar:{borderRadius:3,boxShadow:"inset 0 1px 3px rgba(0, 0, 0, .2)",bottom:14,width:"100%"},fill:{backgroundColor:"#659cef",borderRadius:3,height:10,transition:"width 500ms ease-in-out"}};function w(e){var t=e.style,r=e.className,n=e.display,i=(0,s.useState)(0),o=i[0],a=i[1];return(0,s.useEffect)(function(){a(e.percentage)},[e.percentage]),s.createElement("span",{style:Object.assign({},E.progressBar,E.fill,t,{width:"".concat(o,"%"),display:n}),className:r})}function C(e){var t=e.color,r=e.width,n=e.height;return s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:void 0===r?23:r,height:void 0===n?23:n,viewBox:"0 0 512 512"},s.createElement("path",{fill:t,d:"M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"}),s.createElement("path",{fill:"#FFF",d:"M285 256l72.5-84.2c7.9-9.2 6.9-23-2.3-31-9.2-7.9-23-6.9-30.9 2.3L256 222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3-9.2 7.9-10.2 21.8-2.3 31L227 256l-72.5 84.2c-7.9 9.2-6.9 23 2.3 31 4.1 3.6 9.2 5.3 14.3 5.3 6.2 0 12.3-2.6 16.6-7.6l68.2-79.2 68.2 79.2c4.3 5 10.5 7.6 16.6 7.6 5.1 0 10.2-1.7 14.3-5.3 9.2-7.9 10.2-21.8 2.3-31L285 256z"}))}function R(){var e;return{CSVReader:(e=function(e){var t=e.children,r=e.accept,n=void 0===r?"text/csv, .csv, application/vnd.ms-excel":r,c=e.config,_=void 0===c?{}:c,b=e.minSize,k=void 0===b?0:b,E=e.maxSize,R=void 0===E?1/0:E,O=e.maxFiles,S=void 0===O?1:O,F=e.disabled,A=void 0!==F&&F,T=e.noClick,L=void 0!==T&&T,P=e.noDrag,I=void 0!==P&&P,B=e.noDragEventsBubbling,j=void 0!==B&&B,z=e.noKeyboard,M=void 0!==z&&z,U=e.multiple,N=void 0!==U&&U,q=e.required,K=void 0!==q&&q,W=e.preventDropOnDocument,H=void 0===W||W,Q=e.onUploadAccepted,$=e.validator,G=e.onUploadRejected,J=e.onDragEnter,Z=e.onDragOver,V=e.onDragLeave,Y=(0,s.useRef)(null),X=(0,s.useRef)(null),ee=(0,s.useRef)([]),et=(0,s.useReducer)(D,x),er=et[0],en=et[1],ei=er.acceptedFile,es=er.displayProgressBar,eo=er.progressBarPercentage,ea=er.draggedFiles,eu=er.isFileDialogActive,ec=function(e){X.current&&X.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,s.useEffect)(function(){return H&&(document.addEventListener("dragover",y,!1),document.addEventListener("drop",ec,!1)),function(){H&&(document.removeEventListener("dragover",y),document.removeEventListener("drop",ec))}},[X,H]);var el=function(e){return A?null:e},ef=function(e){return I?null:el(e)},ed=function(e){j&&e.stopPropagation()},eh=function(e){e.preventDefault(e),e.persist(),ed(e)},ep=function(e){en({displayProgressBar:e,type:"setDisplayProgressBar"})},eg=function(e){en({progressBarPercentage:e,type:"setProgressBarPercentage"})},ev=(0,s.useCallback)(function(){Y.current&&er.displayProgressBar&&(en({type:"openDialog"}),Y.current.value=null,Y.current.click())},[en]),em=function(){eu&&setTimeout(function(){Y.current&&(Y.current.files.length||en({type:"closeDialog"}))},300)};(0,s.useEffect)(function(){return window.addEventListener("focus",em,!1),function(){window.removeEventListener("focus",em,!1)}},[Y,eu]);var ey=(0,s.useCallback)(function(){var e,t;L||(void 0===e&&(e=window.navigator.userAgent),-1!==(t=e).indexOf("MSIE")||-1!==t.indexOf("Trident/")||-1!==e.indexOf("Edge/")?setTimeout(ev,0):ev())},[Y,L]),e_=(0,s.useCallback)(function(e){if(eh(e),eg(0),ee.current=[],d(e)&&(!l(e)||j)){var t=[],r=[];if(Array.from(e.target.files||e.dataTransfer&&e.dataTransfer.files).forEach(function(e){var i,s=[i="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),s=i.replace(/\/.*$/,"");return r.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?s===t.replace(/\/.*$/,""):i===t})}return!0}(e,n),i?null:h(n)],o=s[0],a=s[1],u=function(e,t,r){if(p(e.size)){if(p(t)&&p(r)){if(e.size>r)return[!1,g(r)];if(e.size<t)return[!1,v(t)]}else{if(p(t)&&e.size<t)return[!1,v(t)];if(p(r)&&e.size>r)return[!1,g(r)]}}return[!0,null]}(e,k,R),c=u[0],l=u[1],f=$?$(e):null;if(o&&c&&!f)t.push(e);else{var d=[a,l];f&&(d=d.concat(f)),r.push({file:e,errors:d.filter(function(e){return e})})}}),(!N&&t.length>1||N&&S>=1&&t.length>S)&&(t.forEach(function(e){r.push({file:e,errors:[m]})}),t.splice(0)),en({acceptedFiles:t,fileRejections:r,type:"setFiles"}),ep("block"),r.length>0&&G&&G(r,e),t.length>0&&Q){var s={},o=[],a=[],u=[],c=new window.FileReader,f=0;t.forEach(function(e){en({acceptedFile:e,type:"setFile"}),s={complete:(null==_?void 0:_.complete)||(null==_?void 0:_.step)?_.complete:function(){Q({data:o,errors:a,meta:u},e)},step:(null==_?void 0:_.step)?_.step:function(t){if(o.push(t.data),t.errors.length>0&&a.push(t.errors),t.length>0&&u.push(t[0].meta),_&&_.preview)f=Math.round(o.length/_.preview*100),o.length===_.preview&&Q({data:o,errors:a,meta:u},e);else{var r=Math.round(t.meta.cursor/e.size*100);if(r===f)return;f=r}eg(f)}},s=Object.assign({},_,s),c.onload=function(e){i().parse(e.target.result,s)},c.onloadend=function(){setTimeout(function(){ep("none")},2e3)},c.readAsText(e,_.encoding||"utf-8")})}}},[N,n,k,R,S,$,Q]),eb=(0,s.useCallback)(function(e){ed(e)},[]),ek=function(e){return M?null:el(e)},eE=(0,s.useCallback)(function(e){eh(e),ee.current=u(u([],ee.current,!0),[e.target],!1),d(e)&&(!l(e)||j)&&(en({draggedFiles:ea,isDragActive:!0,type:"setDraggedFiles"}),J&&J(e))},[J,j]),ew=(0,s.useCallback)(function(e){eh(e);var t=d(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&Z&&Z(e),!1},[Z,j]),eC=(0,s.useCallback)(function(e){eh(e);var t=ee.current.filter(function(e){return X.current&&X.current.contains(e)}),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),ee.current=t,t.length>0||(en({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),d(e)&&V&&V(e))},[X,V,j]),eR=(0,s.useCallback)(function(e){X.current&&X.current.isEqualNode(e.target)&&("Space"!==e.key&&"Enter"!==e.key||(e.preventDefault(),ev()))},[X,Y]),ex=(0,s.useCallback)(function(){en({type:"focus"})},[]),eD=(0,s.useCallback)(function(){en({type:"blur"})},[]),eO=(0,s.useMemo)(function(){return function(e){void 0===e&&(e={});var t=e.onClick,r=e.onDrop,n=e.onDragOver,i=e.onDragLeave,s=e.onKeyDown,u=e.onFocus,c=e.onBlur,l=e.onDragEnter,d=a(e,["onClick","onDrop","onDragOver","onDragLeave","onKeyDown","onFocus","onBlur","onDragEnter"]);return o({onClick:el(f(void 0===t?function(){}:t,ey)),onDrop:ef(f(void 0===r?function(){}:r,e_)),onDragEnter:ef(f(void 0===l?function(){}:l,eE)),onDragOver:ef(f(void 0===n?function(){}:n,ew)),onDragLeave:ef(f(void 0===i?function(){}:i,eC)),onKeyDown:ek(f(void 0===s?function(){}:s,eR)),onFocus:ek(f(void 0===u?function(){}:u,ex)),onBlur:ek(f(void 0===c?function(){}:c,eD))},d)}},[X,eR,ex,eD,ey,eE,ew,eC,e_,M,I,A]),eS=(0,s.useMemo)(function(){return function(e){void 0===e&&(e={});var t,r=e.refKey,i=e.onChange,s=e.onClick,u=a(e,["refKey","onChange","onClick"]),c=((t={accept:n,multiple:N,required:K,type:"file",style:{display:"none"},onChange:el(f(void 0===i?function(){}:i,e_)),onClick:el(f(void 0===s?function(){}:s,eb)),autoComplete:"off",tabIndex:-1})[void 0===r?"ref":r]=Y,t);return o(o({},c),u)}},[Y,n,e_,A]),eF=(0,s.useCallback)(function(e){Y.current.value="",en({type:"reset"}),e.stopPropagation()},[]),eA=(0,s.useMemo)(function(){return function(e){void 0===e&&(e={});var t=e.onClick,r=a(e,["onClick"]);return o({onClick:el(f(void 0===t?function(){}:t,eF))},r)}},[eF]);return s.createElement(s.Fragment,null,s.createElement("input",o({},eS())),t({getRootProps:eO,acceptedFile:ei,ProgressBar:function(e){return s.createElement(w,o({display:es,percentage:eo},e))},getRemoveFileProps:eA,Remove:function(e){return s.createElement(C,o({},e))}}))},(0,s.useMemo)(function(){return e},[]))}}var x={displayProgressBar:"none",progressBarPercentage:0,isDragActive:!1,isFileDialogActive:!1,isFocused:!1,draggedFiles:[],acceptedFiles:[],acceptedFile:null};function D(e,t){switch(t.type){case"openDialog":return o(o({},e),{isFileDialogActive:!0});case"closeDialog":return o(o({},e),{isFileDialogActive:!1});case"setFiles":return o(o({},e),{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"setFile":return o(o({},e),{acceptedFile:t.acceptedFile});case"setDisplayProgressBar":return o(o({},e),{displayProgressBar:t.displayProgressBar});case"setProgressBarPercentage":return o(o({},e),{progressBarPercentage:t.progressBarPercentage});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return o(o({},e),{draggedFiles:n,isDragActive:r});case"focus":return o(o({},e),{isFocused:!0});case"blur":return o(o({},e),{isFocused:!1});case"reset":return o({},x);default:return e}}i().BAD_DELIMITERS,i().RECORD_SEP,i().UNIT_SEP,i().WORKERS_SUPPORTED,i().LocalChunkSize,i().DefaultDelimiter},41880:function(e,t){var r,n,i;n=[],void 0!==(i="function"==typeof(r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},s=0,o={parse:function(r,n){var a,u=(n=n||{}).dynamicTyping||!1;if(k(u)&&(n.dynamicTypingFunction=u,u={}),n.dynamicTyping=u,n.transform=!!k(n.transform)&&n.transform,n.worker&&o.WORKERS_SUPPORTED){var h=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,n,a=(r=t.URL||t.webkitURL||null,n=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=v,u.id=s++,i[u.id]=u}();return h.userStep=n.step,h.userChunk=n.chunk,h.userComplete=n.complete,h.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void h.postMessage({input:r,config:n,workerId:h.id})}var p=null;return o.NODE_STREAM_INPUT,"string"==typeof r?(r=65279===(a=r).charCodeAt(0)?a.slice(1):a,p=n.download?new c(n):new f(n)):!0===r.readable&&k(r.read)&&k(r.on)?p=new d(n):(t.File&&r instanceof File||r instanceof Object)&&(p=new l(n)),p.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",a='"',u=a+a,c=!1,l=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var d=RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,c);if("object"==typeof e[0])return h(l||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||l),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],c);throw Error("Unable to serialize unrecognized input");function h(e,t,r){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&n){for(var c=0;c<e.length;c++)0<c&&(o+=i),o+=g(e[c],c);0<t.length&&(o+=s)}for(var l=0;l<t.length;l++){var f=a?e.length:t[l].length,d=!1,h=a?0===Object.keys(t[l]).length:0===t[l].length;if(r&&!a&&(d="greedy"===r?""===t[l].join("").trim():1===t[l].length&&0===t[l][0].length),"greedy"===r&&a){for(var p=[],v=0;v<f;v++){var m=u?e[v]:v;p.push(t[l][m])}d=""===p.join("").trim()}if(!d){for(var y=0;y<f;y++){0<y&&!h&&(o+=i);var _=a&&u?e[y]:y;o+=g(t[l][_],y)}l<t.length-1&&(!r||0<f&&!h)&&(o+=s)}}return o}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;f&&"string"==typeof e&&f.test(e)&&(e="'"+e,n=!0);var s=e.toString().replace(d,u);return(n=n||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,o.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?a+s+a:s}}};if(o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=0xa00000,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=h,o.NetworkStreamer=c,o.FileStreamer=l,o.StringStreamer=f,o.ReadableStreamStreamer=d,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var r=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===a(this).prop("tagName").toUpperCase()&&"file"===a(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})}),i(),this;function i(){if(0!==n.length){var t,r,i,u,c=n[0];if(k(e.before)){var l=e.before(c.file,c.inputElem);if("object"==typeof l){if("abort"===l.action)return t="AbortError",r=c.file,i=c.inputElem,u=l.reason,void(k(e.error)&&e.error({name:t},r,i,u));if("skip"===l.action)return void s();"object"==typeof l.config&&(c.instanceConfig=a.extend(c.instanceConfig,l.config))}else if("skip"===l)return void s()}var f=c.instanceConfig.complete;c.instanceConfig.complete=function(e){k(f)&&f(e,c.file,c.inputElem),s()},o.parse(c.file,c.instanceConfig)}else k(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:o.WORKER_ID,finished:c});else if(k(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!c||!k(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substring(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(Error(r))}}function l(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var t,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function h(e){var t,r,n,i=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,s=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,a=this,u=0,c=0,l=!1,f=!1,d=[],h={data:[],errors:[],meta:{}};if(k(e.step)){var v=e.step;e.step=function(t){if(h=t,b())y();else{if(y(),0===h.data.length)return;u+=t.data.length,e.preview&&u>e.preview?r.abort():(h.data=h.data[0],v(h,a))}}}function m(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function y(){return h&&n&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(h.data=h.data.filter(function(e){return!m(e)})),b()&&function(){if(h){if(Array.isArray(h.data[0])){for(var t=0;b()&&t<h.data.length;t++)h.data[t].forEach(r);h.data.splice(0,1)}else h.data.forEach(r)}function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),d.push(t)}}(),function(){if(!h||!e.header&&!e.dynamicTyping&&!e.transform)return h;function t(t,r){var n,o=e.header?{}:[];for(n=0;n<t.length;n++){var a,u,l=n,f=t[n];e.header&&(l=n>=d.length?"__parsed_extra":d[n]),e.transform&&(f=e.transform(f,l)),a=l,u=f,e.dynamicTypingFunction&&void 0===e.dynamicTyping[a]&&(e.dynamicTyping[a]=e.dynamicTypingFunction(a)),f=!0===(e.dynamicTyping[a]||e.dynamicTyping)?"true"===u||"TRUE"===u||"false"!==u&&"FALSE"!==u&&(!function(e){if(i.test(e)){var t=parseFloat(e);if(-0x20000000000000<t&&t<0x20000000000000)return!0}return!1}(u)?s.test(u)?new Date(u):""===u?null:u:parseFloat(u)):u,"__parsed_extra"===l?(o[l]=o[l]||[],o[l].push(f)):o[l]=f}return e.header&&(n>d.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+d.length+" fields but parsed "+n,c+r):n<d.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+d.length+" fields but parsed "+n,c+r)),o}var r=1;return!h.data.length||Array.isArray(h.data[0])?(h.data=h.data.map(t),r=h.data.length):h.data=t(h.data,0),e.header&&h.meta&&(h.meta.fields=d),c+=r,h}()}function b(){return e.header&&0===d.length}function E(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),h.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<n[0].length;if(1===n.length||s)return"\n";for(var o=0,a=0;a<n.length;a++)"\n"===n[a][0]&&o++;return o>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),h.meta.delimiter=e.delimiter);else{var c=function(t,r,n,i,s){var a,u,c,l;s=s||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var f=0;f<s.length;f++){var d=s[f],h=0,p=0,v=0;c=void 0;for(var y=new g({comments:i,delimiter:d,newline:r,preview:10}).parse(t),_=0;_<y.data.length;_++)if(n&&m(y.data[_]))v++;else{var b=y.data[_].length;p+=b,void 0!==c?0<b&&(h+=Math.abs(b-c),c=b):c=b}0<y.data.length&&(p/=y.data.length-v),(void 0===u||h<=u)&&(void 0===l||l<p)&&1.99<p&&(u=h,a=d,l=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);c.successful?e.delimiter=c.bestDelimiter:(n=!0,e.delimiter=o.DefaultDelimiter),h.meta.delimiter=e.delimiter}var f=_(e);return e.preview&&e.header&&f.preview++,t=i,h=(r=new g(f)).parse(t,s,a),y(),l?{meta:{paused:!0}}:h||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){a.streamer._halted?(l=!1,a.streamer.parseChunk(t,!0)):setTimeout(a.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),h.meta.aborted=!0,k(e.complete)&&e.complete(h),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,c=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var l=0,f=!1;this.parse=function(o,d,h){if("string"!=typeof o)throw Error("Input must be a string");var g=o.length,v=r.length,m=n.length,y=i.length,_=k(s),b=[],E=[],w=[],C=l=0;if(!o)return Q();if(e.header&&!d){var R=o.split(n)[0].split(r),x=[],D={},O=!1;for(var S in R){var F=R[S];k(e.transformHeader)&&(F=e.transformHeader(F,S));var A=F,T=D[F]||0;for(0<T&&(O=!0,A=F+"_"+T),D[F]=T+1;x.includes(A);)A=A+"_"+T;x.push(A)}if(O){var L=o.split(n);L[0]=x.join(r),o=L.join(n)}}if(u||!1!==u&&-1===o.indexOf(t)){for(var P=o.split(n),I=0;I<P.length;I++){if(w=P[I],l+=w.length,I!==P.length-1)l+=n.length;else if(h)break;if(!i||w.substring(0,y)!==i){if(_){if(b=[],q(w.split(r)),$(),f)return Q()}else q(w.split(r));if(a&&a<=I)return b=b.slice(0,a),Q(!0)}}return Q()}for(var B=o.indexOf(r,l),j=o.indexOf(n,l),z=RegExp(p(c)+p(t),"g"),M=o.indexOf(t,l);;)if(o[l]!==t){if(i&&0===w.length&&o.substring(l,l+y)===i){if(-1===j)return Q();l=j+m,j=o.indexOf(n,l),B=o.indexOf(r,l)}else if(-1!==B&&(B<j||-1===j))w.push(o.substring(l,B)),l=B+v,B=o.indexOf(r,l);else{if(-1===j)break;if(w.push(o.substring(l,j)),H(j+m),_&&($(),f))return Q();if(a&&b.length>=a)return Q(!0)}}else for(M=l,l++;;){if(-1===(M=o.indexOf(t,M+1)))return h||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:l}),W();if(M===g-1)return W(o.substring(l,M).replace(z,t));if(t!==c||o[M+1]!==c){if(t===c||0===M||o[M-1]!==c){-1!==B&&B<M+1&&(B=o.indexOf(r,M+1)),-1!==j&&j<M+1&&(j=o.indexOf(n,M+1));var U=K(-1===j?B:Math.min(B,j));if(o.substr(M+1+U,v)===r){w.push(o.substring(l,M).replace(z,t)),o[l=M+1+U+v]!==t&&(M=o.indexOf(t,l)),B=o.indexOf(r,l),j=o.indexOf(n,l);break}var N=K(j);if(o.substring(M+1+N,M+1+N+m)===n){if(w.push(o.substring(l,M).replace(z,t)),H(M+1+N+m),B=o.indexOf(r,l),M=o.indexOf(t,l),_&&($(),f))return Q();if(a&&b.length>=a)return Q(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:l}),M++}}else M++}return W();function q(e){b.push(e),C=l}function K(e){var t=0;if(-1!==e){var r=o.substring(M+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return h||(void 0===e&&(e=o.substring(l)),w.push(e),l=g,q(w),_&&$()),Q()}function H(e){l=e,q(w),w=[],j=o.indexOf(n,l)}function Q(e){return{data:b,errors:E,meta:{delimiter:r,linebreak:n,aborted:f,truncated:!!e,cursor:C+(d||0)}}}function $(){s(Q()),b=[],E=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return l}}function v(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!n);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function y(){throw Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=_(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=o.parse(r.input,r.config);n&&t.postMessage({workerId:o.WORKER_ID,results:n,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(f.prototype)).constructor=f,(d.prototype=Object.create(u.prototype)).constructor=d,o})?r.apply(t,n):r)&&(e.exports=i)}}]);
//# sourceMappingURL=8422-fb209977a9c64efe.js.map