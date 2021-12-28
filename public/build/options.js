var options=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let y;function $(t){y=t}const b=[],x=[],v=[],k=[],_=Promise.resolve();let w=!1;function E(t){v.push(t)}const C=new Set;let S=0;function A(){const t=y;do{for(;S<b.length;){const t=b[S];S++,$(t),M(t.$$)}for($(null),b.length=0,S=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];C.has(e)||(C.add(e),e())}v.length=0}while(b.length);for(;k.length;)k.pop()();w=!1,C.clear(),$(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function N(t,e){t&&t.i&&(j.delete(t),t.i(e))}function O(t,e){t.d(1),e.delete(t.key)}function q(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(s,c,u,l,i,f,d,p=[-1]){const h=y;$(s);const m=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||h.$$.root};d&&d(m.root);let g=!1;if(m.ctx=u?u(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&q(s,t)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();c.intro&&N(s.$$.fragment),function(t,n,s,c){const{fragment:u,on_mount:a,on_destroy:l,after_update:i}=t.$$;u&&u.m(n,s),c||E((()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(E)}(s,c.target,c.anchor,c.customElement),A()}$(h)}function T(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function B(t,e){let n,o,r,s;function c(){return e[14](e[17])}return{key:t,first:null,c(){n=l("button"),h(n,"class","aspect-square border w-8 grid"),h(n,"style",o=`background-color:${e[15]}`),this.first=n},m(t,e){u(t,n,e),r||(s=d(n,"click",p(c)),r=!0)},p(t,r){e=t,2&r&&o!==(o=`background-color:${e[15]}`)&&h(n,"style",o)},d(t){t&&a(n),r=!1,s()}}}function D(e){let n,r,s,y,$,b,x,v,k,_,w,E,C,S,A,M,j,q,L,D,P,V,z,F,G,H,I,J,K,Q,R,U,W,X=e[2]===e[3]?"(saved)":"(not saved)",Y=e[5]?"Color":"Eraser",Z=e[4]?"(saved)":"(not saved)",tt=[],et=new Map,nt=e[1];const ot=t=>t[17];for(let t=0;t<nt.length;t+=1){let n=T(e,nt,t),o=ot(n);et.set(o,tt[t]=B(o,n))}return{c(){n=l("main"),r=l("h1"),r.textContent="Options",s=f(),y=l("div"),$=l("div"),b=l("label"),x=i("Name:\n        "),v=l("input"),k=f(),_=l("button"),w=i("Save "),E=i(X),C=f(),S=l("div"),A=l("div"),M=i("Current:"),j=i(" "),q=l("input"),L=f(),D=l("button"),P=i(Y),V=f(),z=l("div"),F=l("button"),F.textContent="Clear",G=f(),H=l("div"),I=l("button"),J=i("Save "),K=i(Z),Q=f(),R=l("div");for(let t=0;t<tt.length;t+=1)tt[t].c();h(r,"class","text-4xl text-center mt-6"),h(v,"class","border-b-2 border-blue-300"),h(v,"type","text"),h(_,"type","button"),h($,"class","text-lg"),h(q,"class","w-8 h-8"),h(q,"type","color"),h(D,"type","button"),h(F,"type","button"),h(I,"type","button"),h(S,"class","text-lg flex justify-between"),h(R,"class","aspect-square w-max mx-auto grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]"),h(y,"class","space-y-6 mt-6"),h(n,"class","max-w-xl mx-auto w-full")},m(t,o){u(t,n,o),c(n,r),c(n,s),c(n,y),c(y,$),c($,b),c(b,x),c(b,v),g(v,e[2]),c($,k),c($,_),c(_,w),c(_,E),c(y,C),c(y,S),c(S,A),c(A,M),c(A,j),c(A,q),g(q,e[0]),c(S,L),c(S,D),c(D,P),c(S,V),c(S,z),c(z,F),c(S,G),c(S,H),c(H,I),c(I,J),c(I,K),c(y,Q),c(y,R);for(let t=0;t<tt.length;t+=1)tt[t].m(R,null);U||(W=[d(v,"input",e[8]),d(_,"click",p(e[9])),d(q,"input",e[10]),d(D,"click",p(e[11])),d(F,"click",p(e[12])),d(I,"click",p(e[13]))],U=!0)},p(t,[e]){4&e&&v.value!==t[2]&&g(v,t[2]),12&e&&X!==(X=t[2]===t[3]?"(saved)":"(not saved)")&&m(E,X),1&e&&g(q,t[0]),32&e&&Y!==(Y=t[5]?"Color":"Eraser")&&m(P,Y),16&e&&Z!==(Z=t[4]?"(saved)":"(not saved)")&&m(K,Z),51&e&&(nt=t[1],tt=function(t,e,n,o,r,s,c,u,a,l,i,f){let d=t.length,p=s.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=p;h--;){const t=f(r,s,h),u=n(t);let a=c.get(u);a?o&&a.p(t,e):(a=l(u,t),a.c()),y.set(u,g[h]=a),u in m&&$.set(u,Math.abs(h-m[u]))}const b=new Set,x=new Set;function v(t){N(t,1),t.m(u,i),c.set(t.key,t),i=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(i=e.first,d--,p--):y.has(r)?!c.has(o)||b.has(o)?v(e):x.has(r)?d--:$.get(o)>$.get(r)?(x.add(o),v(e)):(b.add(r),d--):(a(n,c),d--)}for(;d--;){const e=t[d];y.has(e.key)||a(e,c)}for(;p;)v(g[p-1]);return g}(tt,e,ot,1,t,nt,et,R,O,B,null,T))},i:t,o:t,d(t){t&&a(n);for(let t=0;t<tt.length;t+=1)tt[t].d();U=!1,o(W)}}}function P(t,e,n){let o="#000000",r=Array(400).fill("transparent"),s="",c="";chrome.storage.sync.get(["art","username"],(function(t){t.art&&n(1,r=t.art),t.username&&(n(2,s=t.username),n(3,c=t.username))}));let u=!0,a=!1;const l=()=>{chrome.storage.sync.set({art:r},(function(){console.log("Value is set to "+r)})),n(4,u=!0)},i=()=>{chrome.storage.sync.set({username:s}),n(3,c=s)};return[o,r,s,c,u,a,l,i,function(){s=this.value,n(2,s)},()=>i(),function(){o=this.value,n(0,o)},()=>n(5,a=!a),()=>{n(1,r=r.fill("transparent")),n(4,u=!0)},()=>l(),t=>{let e=r;e[t]=a?"transparent":o,n(1,r=e),n(4,u=!1)}]}const V=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),L(this,t,P,D,s,{})}}({target:document.body});return V}();
//# sourceMappingURL=options.js.map
