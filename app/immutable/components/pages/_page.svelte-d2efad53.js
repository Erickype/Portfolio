import{S as T,i as X,s as Y,k as f,q as P,a as S,l as h,m as E,r as j,h as i,c as w,n as _,L as J,b as L,C as r,D as N,B as Z,u as V,E as Q}from"../../chunks/index-3329a512.js";import{b as z}from"../../chunks/paths-b4419565.js";function F(C,e,s){const l=C.slice();return l[1]=e[s],l}function O(C,e){let s,l,u,g=e[1].titleContent+"",D,M,y,I=e[1].bodyContent+"",v,q,b,n,A,k=e[1].actionContent+"",d,o,H;return{key:C,first:null,c(){s=f("article"),l=f("div"),u=f("h5"),D=P(g),M=S(),y=f("p"),v=P(I),q=S(),b=f("footer"),n=f("a"),A=f("small"),d=P(k),H=S(),this.h()},l(m){s=h(m,"ARTICLE",{id:!0});var c=E(s);l=h(c,"DIV",{id:!0,class:!0});var t=E(l);u=h(t,"H5",{});var a=E(u);D=j(a,g),a.forEach(i),M=w(t),y=h(t,"P",{});var p=E(y);v=j(p,I),p.forEach(i),t.forEach(i),q=w(c),b=h(c,"FOOTER",{});var B=E(b);n=h(B,"A",{href:!0,role:!0,class:!0});var R=E(n);A=h(R,"SMALL",{});var G=E(A);d=j(G,k),G.forEach(i),R.forEach(i),B.forEach(i),H=w(c),c.forEach(i),this.h()},h(){_(l,"id","content"),_(l,"class","svelte-1jia4hv"),_(n,"href",o=z+"/more/"+e[1].titleContent),_(n,"role","button"),_(n,"class","moreButton svelte-1jia4hv"),_(s,"id","article"),this.first=s},m(m,c){L(m,s,c),r(s,l),r(l,u),r(u,D),r(l,M),r(l,y),r(y,v),r(s,q),r(s,b),r(b,n),r(n,A),r(A,d),r(s,H)},p(m,c){e=m,c&1&&g!==(g=e[1].titleContent+"")&&V(D,g),c&1&&I!==(I=e[1].bodyContent+"")&&V(v,I),c&1&&k!==(k=e[1].actionContent+"")&&V(d,k),c&1&&o!==(o=z+"/more/"+e[1].titleContent)&&_(n,"href",o)},d(m){m&&i(s)}}}function U(C){let e,s,l,u,g,D,M,y,I,v,q,b,n,A,k,d,o=[],H=new Map,m=C[0].contents;const c=t=>t[1].id;for(let t=0;t<m.length;t+=1){let a=F(C,m,t),p=c(a);H.set(p,o[t]=O(p,a))}return{c(){e=f("div"),s=f("h1"),l=f("p"),u=P("Hello, "),g=f("br"),D=P(`\r
			I'm Erick `),M=f("br"),y=P(`\r
			Software Engineer`),I=S(),v=f("img"),b=S(),n=f("kbd"),A=P("Principal skills"),k=S(),d=f("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=h(t,"DIV",{class:!0});var a=E(e);s=h(a,"H1",{class:!0});var p=E(s);l=h(p,"P",{});var B=E(l);u=j(B,"Hello, "),g=h(B,"BR",{}),D=j(B,`\r
			I'm Erick `),M=h(B,"BR",{}),y=j(B,`\r
			Software Engineer`),B.forEach(i),p.forEach(i),I=w(a),v=h(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(i),b=w(t),n=h(t,"KBD",{class:!0});var R=E(n);A=j(R,"Principal skills"),R.forEach(i),k=w(t),d=h(t,"DIV",{class:!0});var G=E(d);for(let K=0;K<o.length;K+=1)o[K].l(G);G.forEach(i),this.h()},h(){_(s,"class","svelte-1jia4hv"),J(v.src,q="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xMy3lYAo5Xb8tZ5rG4wWIDa-2zzfi8mE745Kr0YAMJkH3C9PvB7yZlZ96LXF8KE9MyE&usqp=CAU")||_(v,"src",q),_(v,"alt","portrait"),_(v,"class","svelte-1jia4hv"),_(e,"class","grid"),_(n,"class","svelte-1jia4hv"),_(d,"class","grid")},m(t,a){L(t,e,a),r(e,s),r(s,l),r(l,u),r(l,g),r(l,D),r(l,M),r(l,y),r(e,I),r(e,v),L(t,b,a),L(t,n,a),r(n,A),L(t,k,a),L(t,d,a);for(let p=0;p<o.length;p+=1)o[p].m(d,null)},p(t,[a]){a&1&&(m=t[0].contents,o=N(o,a,c,1,t,m,H,d,Q,O,null,F))},i:Z,o:Z,d(t){t&&i(e),t&&i(b),t&&i(n),t&&i(k),t&&i(d);for(let a=0;a<o.length;a+=1)o[a].d()}}}function W(C,e,s){let{data:l}=e;return C.$$set=u=>{"data"in u&&s(0,l=u.data)},[l]}class tt extends T{constructor(e){super(),X(this,e,W,U,Y,{data:0})}}export{tt as default};