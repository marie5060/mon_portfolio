var N=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var y=(s,a,n)=>a in s?N(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,f=(s,a)=>{for(var n in a||(a={}))w.call(a,n)&&y(s,n,a[n]);if(x)for(var n of x(a))b.call(a,n)&&y(s,n,a[n]);return s};import{r as t,R as e,a as M}from"./vendor.ceda99fa.js";const k=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};k();var C="/portfolio/assets/aboutMe.17672eb0.jpg";const h=(s,a)=>{const[n,i]=t.exports.useState(!1),l=t.exports.useMemo(()=>s,[s]),r=m=>{const[o]=m;i(o.isIntersecting)};return t.exports.useEffect(()=>{const m=new IntersectionObserver(r,l),o=a.current;return o&&m.observe(o),()=>{o&&m.unobserve(o)}}),n},S=()=>{const s=t.exports.useRef(null),[a,n]=t.exports.useState(0),[i,l]=t.exports.useState(!1),[r,m]=t.exports.useState(""),o=h({rootElement:void 0,rootMargin:"0px",threshold:.8},s),c="En reconversion professionnelle, j'ai suivi une formation de d\xE9veloppeuse Web et Web Mobile, ainsi qu'une formation PHP/Symfony au sein de la Wild Code School d'Anglet, apr\xE8s un stage de 6 mois chez Digital Copilot. Enthousiaste, volontaire et aimant le travail d'\xE9quipe, je suis \xE0 la recherche d'une alternance \xE0 compter du d\xE9but mars 2023, afin d'approfondir mes enseignements et d'avancer main dans la main avec ma future entreprise.",d=["!",",",".","?"],p="ABOUT ME",u=["A","O","B","M"];return t.exports.useEffect(()=>{const E=setTimeout(()=>{o&&l(!0)},1200);if(i&&o){const _=setInterval(()=>{a<c.length-1&&n(a+1)},d.includes(c[a])?500:20);return m(c[a]==="."?r+c[a]+`
`:r+c[a]),()=>{clearInterval(_),clearTimeout(E)}}else n(0),m(""),l(!1)},[a,o,i]),e.createElement(e.Fragment,null,e.createElement("div",{className:"aboutMe__name"},p.split(" ").map((E,_)=>e.createElement("div",{className:"aboutMe__name__word",key:_},E.split("").map((g,v)=>e.createElement("span",{className:"aboutMe__name__word--letter",key:v,style:{transform:!o&&u.includes(g)?"translateY(-20px)":"translateY(0)",transitionDelay:o?`${v/10}s`:"",opacity:o?"1":"0"}},g))))),e.createElement("div",{className:"aboutMe__infos"},e.createElement("div",{className:"aboutMe__infos__presentation",ref:s},e.createElement("div",{className:"aboutMe__infos__presentation__text"},r.split(`
`).map((E,_)=>e.createElement("span",{key:_},E,E.substring(E.length-1)==="."&&e.createElement("br",null))),e.createElement("span",{className:"aboutMe__infos__presentation__text--cursor"},"|"))),e.createElement("img",{className:"aboutMe__infos__picture",alt:"",src:C})))},z=s=>t.exports.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},s),t.exports.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})),L=s=>t.exports.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},s),t.exports.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})),j=s=>t.exports.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},s),t.exports.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"}));var P="/portfolio/assets/Marie_Emeline _LAINE_CV.fc5c3cfe.pdf";const R=s=>t.exports.createElement("svg",f({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60 60",style:{enableBackground:"new 0 0 60 60"},xmlSpace:"preserve",width:"1em",height:"1em"},s),t.exports.createElement("g",null,t.exports.createElement("path",{d:"M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z"}),t.exports.createElement("path",{d:"M34.5,37c0.552,0,1-0.447,1-1s-0.448-1-1-1h-17c-0.552,0-1,0.447-1,1s0.448,1,1,1H34.5z"}),t.exports.createElement("path",{d:"M44.5,30h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c0.552,0,1-0.447,1-1S45.052,30,44.5,30z"}),t.exports.createElement("path",{d:"M21.5,31c0,0.553,0.448,1,1,1h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10C21.948,30,21.5,30.447,21.5,31z"}),t.exports.createElement("path",{d:"M16.79,30.29c-0.18,0.189-0.29,0.449-0.29,0.71c0,0.26,0.11,0.52,0.29,0.7c0.18,0.189,0.44,0.3,0.71,0.3 s0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71c0-0.261-0.11-0.521-0.29-0.71C17.84,29.92,17.15,29.93,16.79,30.29z"}),t.exports.createElement("path",{d:"M38.79,35.29c-0.18,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.71C38.98,36.89,39.24,37,39.5,37 c0.26,0,0.52-0.11,0.71-0.29c0.19-0.19,0.29-0.44,0.29-0.71c0-0.261-0.11-0.521-0.29-0.71C39.83,34.92,39.17,34.92,38.79,35.29z"}),t.exports.createElement("path",{d:"M43.79,35.29c-0.18,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.71C43.98,36.89,44.24,37,44.5,37 c0.26,0,0.52-0.11,0.71-0.3c0.19-0.19,0.29-0.44,0.29-0.7c0-0.261-0.11-0.521-0.29-0.71C44.83,34.92,44.17,34.92,43.79,35.29z"}),t.exports.createElement("path",{d:"M23.025,40.166c-2.19,1.14-2.927,3.321-3.196,5.582c-0.414-0.347-0.828-0.693-1.242-1.04 c-0.98-0.821-2.402,0.586-1.414,1.415c0.935,0.783,1.871,1.567,2.806,2.351c0.658,0.551,1.676,0.203,1.707-0.707 c0.073-2.166,0.175-4.742,2.348-5.873C25.177,41.299,24.166,39.572,23.025,40.166z"}),t.exports.createElement("path",{d:"M36.455,44.108c-1.458-0.092-3.592,2.155-4.716,0.153c-0.26-0.464-0.913-0.638-1.368-0.359 c-1.416,0.869-3.267,2.119-4.756,0.5c-0.873-0.949-2.285,0.468-1.414,1.414c1.87,2.033,4.276,1.415,6.399,0.263 c0.478,0.535,1.071,0.926,1.837,1.081c0.792,0.16,4.025-1.141,4.2-0.901c0.752,1.029,2.488,0.032,1.727-1.009 C37.847,44.543,37.371,44.166,36.455,44.108z"}),t.exports.createElement("path",{d:"M28.666,23.963l0.674-0.479l-0.344-0.752c-0.312-0.682-0.813-1.212-1.45-1.532l-2.12-1.082 c0.975-0.623,1.676-1.561,2.095-2.801c0.684-0.417,1.115-1.158,1.115-1.984v-0.667c0-0.677-0.294-1.308-0.794-1.745 c-0.357-1.898-1.644-3.951-5.54-3.951c-0.153,0-0.303,0.006-0.451,0.018c-0.523,0.043-1.285,0-1.937-0.438 c-0.303-0.204-0.458-0.362-0.534-0.459c-0.317-0.403-0.849-0.544-1.324-0.35c-0.474,0.195-0.752,0.669-0.694,1.179 c0.03,0.257,0.073,0.557,0.138,0.884c0.084,0.42,0.089,0.541,0.086,0.573c-0.008,0.035-0.066,0.159-0.112,0.259 c-0.07,0.15-0.156,0.335-0.257,0.582c-0.217,0.529-0.375,1.105-0.471,1.719c-0.489,0.438-0.778,1.063-0.778,1.73v0.667 c0,0.826,0.431,1.567,1.115,1.984c0.417,1.235,1.115,2.171,2.083,2.793l-2.204,1.087c-0.613,0.334-1.091,0.867-1.382,1.541 l-0.32,0.741l0.656,0.469C17.797,25.291,20.004,26,22.302,26C24.592,26,26.792,25.296,28.666,23.963z M18.016,22.907l2.445-1.204 c0.519-0.257,0.842-0.776,0.842-1.355v-1.422l-0.604-0.261c-0.912-0.392-1.506-1.151-1.819-2.321l-0.143-0.533l-0.527-0.164 c-0.116-0.036-0.24-0.149-0.24-0.313v-0.667c0-0.142,0.095-0.242,0.184-0.289l0.469-0.25l0.055-0.529 c0.062-0.595,0.193-1.14,0.391-1.622c0.086-0.211,0.16-0.368,0.22-0.497c0.155-0.332,0.249-0.578,0.283-0.855 c0.73,0.305,1.559,0.425,2.44,0.358c0.095-0.008,0.192-0.012,0.291-0.012c2.919,0,3.469,1.334,3.622,2.638l0.061,0.523l0.466,0.245 c0.089,0.047,0.185,0.147,0.185,0.29v0.667c0,0.164-0.125,0.277-0.24,0.313l-0.527,0.164l-0.143,0.533 c-0.313,1.17-0.908,1.93-1.819,2.321l-0.604,0.261v1.428c0,0.57,0.315,1.086,0.825,1.347l2.415,1.233 C23.923,24.343,20.628,24.334,18.016,22.907z"})),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null),t.exports.createElement("g",null)),Y=()=>{const s=t.exports.useRef(null),a=h({rootElement:void 0,rootMargin:"0px",threshold:.8},s),n="CONTACT ME",i=["C","N","A","T","E"];return e.createElement(e.Fragment,null,e.createElement("div",{className:"contact__name",ref:s},n.split(" ").map((l,r)=>e.createElement("div",{className:"contact__name__word",key:r},l.split("").map((m,o)=>e.createElement("span",{className:"contact__name__word--letter",key:o,style:{transform:!a&&i.includes(m)?"translateY(-20px)":"translateY(0)",transitionDelay:a?`${o/10}s`:"",opacity:a?"1":"0"}},m))))),e.createElement("div",{className:"contact__infos"},e.createElement("a",{href:P,download:!0},e.createElement(R,{className:"contact__infos__icon"})),e.createElement("a",{href:"mailto:marie.emlaine@gmail.com"},e.createElement(z,{className:"contact__infos__icon"})),e.createElement("a",{href:"https://github.com/marie5060",target:"_blank",rel:"noreferrer"},e.createElement(j,{className:"contact__infos__icon"})),e.createElement("a",{href:"https://www.linkedin.com/in/marie-lain%C3%A9-a12924222/",target:"_blank",rel:"noreferrer"},e.createElement(L,{className:"contact__infos__icon"}))))},T=({setFirstPageVisible:s})=>{const a=t.exports.useRef(null),n=h({rootElement:void 0,rootMargin:"0px",threshold:.8},a);t.exports.useEffect(()=>{s(n)},[n]);const i="MARIE EMELINE LAINE",l="DEVELOPPEUSE WEB",r=["A","E","I","O","U"];return e.createElement(e.Fragment,null,e.createElement("div",{className:"home__title"},e.createElement("div",{className:"home__title__name",ref:a},i.split(" ").map((m,o)=>e.createElement("p",{className:"home__title__name__word",key:o},m.split("").map((c,d)=>e.createElement("span",{className:"home__title__name__word--letter",key:d,style:{transform:!n&&r.includes(c)?"translateY(-20px)":"translateY(0)",transitionDelay:n?`${d/10}s`:"",opacity:n?"1":"0"}},c))))),e.createElement("div",{className:"home__title__dev"},e.createElement("h1",{style:{opacity:n?"1":"0",transform:n?"translateY(0)":"translateY(40px)"}},l))))};var V="/portfolio/assets/game.9931eba7.svg",A="/portfolio/assets/music.7a54c378.svg",O="/portfolio/assets/surf.18e7aa69.svg",H="/portfolio/assets/tools.2dc76ae5.svg",I="/portfolio/assets/Wine_bottle.1459211f.svg";const F=()=>{const[s,a]=t.exports.useState(0),n=[{idProject:1,title:"Crash Blind Test",image:V,text:"Projet de Blind test musical avec la possibilit\xE9 de jouer avec ses propres playlists grace \xE0 l'API Deezer.",link:"https://marie5060.github.io/Blind-Crash-Test/"},{idProject:2,title:"Les Femmes Prennent Le Large",image:O,text:"Premier projet avec un client, avec pour but de promouvoir les rencontres de surfeuses dans la pratique de leurs sport."},{idProject:3,title:"LiveUp",image:A,text:"Hackathon (32h) sur le th\xE8me de la musique. Nous avons effectu\xE9 un site d'\xE9v\xE8nements musicaux.",link:"https://aurelienbrethes.github.io/Liveup/"},{idProject:4,title:"ManoMano X Wild",image:H,text:" Hackathon (48h) en partenariat avec ManoMano visant \xE0 am\xE9liorer l'experience utilisateur sur leur site."},{idProject:5,title:"SecretCellar",image:I,text:"Projet de formation effectu\xE9 en premier lieu en php/twig, puis gr\xE2ce au framework symfony dans un second temps. Une solution permettant de g\xE9rer une cave \xE0 vin personelle (gestion de stock stock, diverses filtres)"}],i=t.exports.useRef(null),l=h({rootElement:void 0,rootMargin:"0px",threshold:.8},i),r="PORTFOLIO",m=["P","R","F","O"];return e.createElement(e.Fragment,null,e.createElement("div",{className:"portfolio__name",ref:i},r.split(" ").map((o,c)=>e.createElement("div",{className:"portfolio__name__word",key:c},o.split("").map((d,p)=>e.createElement("span",{className:"portfolio__name__word--letter",key:p,style:{transform:!l&&m.includes(d)?"translateY(-20px)":"translateY(0)",transitionDelay:l?`${p/10}s`:"",opacity:l?"1":"0"}},d))))),e.createElement("div",{className:"portfolio__projects"},e.createElement("div",{className:"portfolio__projects__project"},e.createElement("ul",{className:"portfolio__projects__project--titleProject"},n.map((o,c)=>e.createElement("li",{style:{borderRight:s===c&&window.innerWidth>800?"3px solid #fdeded":"",borderBottom:s===c&&window.innerWidth<800?"3px solid #fdeded":""},key:c,role:"presentation"},e.createElement("button",{style:{color:s===c?"#fdeded":"",transform:s===c?"scale(1.05)":"scale(1)"},onClick:()=>a(c)},e.createElement("div",null,e.createElement("img",{style:{opacity:s===c?1:.3},src:o.image,alt:"logo_project"})),e.createElement("p",null,o.title))))),e.createElement("div",{className:"portfolio__projects__project--details"},n.map((o,c)=>e.createElement("div",{className:"portfolio__projects__project--details__map",style:{opacity:s===c?1:0,transform:s===c?"translateY(0)":"translateY(-25vw)"},key:c},e.createElement("div",null,e.createElement("img",{src:o.image,alt:"logo_project"})),e.createElement("h2",null,o.title),e.createElement("p",null,o.text))))),n.map((o,c)=>s===c&&o.link&&e.createElement("a",{className:"portfolio__name--link",key:c,href:o.link,target:"_blank",rel:"noopener noreferrer"},"Voir le site"))))};var $="/portfolio/assets/logos.b2514285.svg";const B=({name:s,icon:a})=>e.createElement(e.Fragment,null,e.createElement("svg",{className:"style"},e.createElement("use",{xlinkHref:`${$}#${a}`}),s)),D=[{name:"CSS",icon:"logos-css"},{name:"HTML",icon:"logos-html"},{name:"Javascript",icon:"logos-javascript"},{name:"React",icon:"logos-react"},{name:"NodeJs",icon:"logos-nodejs"},{name:"TS",icon:"logos-typescript"},{name:"Github",icon:"logos-github"},{name:"Sass",icon:"logos-sass"},{name:"Postman",icon:"logos-postman"},{name:"Figma",icon:"logos-figma"},{name:"mysql",icon:"logos-mysql"},{name:"tailwind",icon:"logos-tailwind"},{name:"php",icon:"logos-php"},{name:"symfony",icon:"logos-symfony"},{name:"next",icon:"logos-next"}],W=()=>{const s=t.exports.useRef(null),a=h({rootElement:void 0,rootMargin:"0px",threshold:.8},s),n="MY TECH",i=["T","E","H"];return e.createElement(e.Fragment,null,e.createElement("div",{className:"tech__name"},n.split(" ").map((l,r)=>e.createElement("div",{className:"tech__name__word",key:r},l.split("").map((m,o)=>e.createElement("span",{className:"tech__name__word--letter",key:o,style:{transform:!a&&i.includes(m)?"translateY(-20px)":"translateY(0)",transitionDelay:a?`${o/10}s`:"",opacity:a?"1":"0"}},m))))),e.createElement("div",{className:"tech__icons",ref:s},e.createElement("ul",{className:"tech__icons__list"},D.map((l,r)=>e.createElement("li",{key:r,style:{transform:a?"translateY(0)":"translateY(40px)",opacity:a?"1":"0",transitionDelay:r%2==0?"0.3s":"1s"}},e.createElement(B,{name:l.name,icon:l.icon}))))))};function q(){const[s,a]=t.exports.useState(0),[n,i]=t.exports.useState(0),[l,r]=t.exports.useState(!0),[m,o]=t.exports.useState(!0);t.exports.useEffect(()=>{a(window.innerHeight),window.addEventListener("resize",()=>{a(window.innerHeight)})},[]);const c=[{className:"home",component:e.createElement(T,{setFirstPageVisible:o}),scrollNumber:0},{className:"aboutMe",component:e.createElement(S,null),scrollNumber:1},{className:"portfolio",component:e.createElement(F,null),scrollNumber:2},{className:"tech",component:e.createElement(W,null),scrollNumber:3},{className:"contact",component:e.createElement(Y,null),scrollNumber:4}],d=(p,u)=>{n>=0&&window.innerWidth>800&&(p>0&&u<c.length-1?(i(u+1),r(!1)):n>0&&(i(u-1),r(!1)),setTimeout(()=>{r(!0)},1e3))};return e.createElement(e.Fragment,null,s&&e.createElement("div",{className:"app",style:{height:`${s}px`}},n===0&&m&&window.innerWidth>800&&e.createElement("div",{className:"app__menu"},e.createElement("div",{onClick:()=>i(1),role:"presentation"},"About me"),e.createElement("div",{onClick:()=>i(2),role:"presentation"},"Portfolio"),e.createElement("div",{onClick:()=>i(3),role:"presentation"},"Tech"),e.createElement("div",{onClick:()=>i(4),role:"presentation"},"Contact")),n>0&&e.createElement("div",{className:"app__menu--right"},c.map((p,u)=>e.createElement("div",{key:u,onClick:()=>i(p.scrollNumber),role:"presentation",className:`app__menu--right__circle app__menu--right__circle${p.scrollNumber===n?"--selected":n%2?"--darker":"--light"}`}))),c.map((p,u)=>e.createElement("div",{key:u,className:p.className,style:{height:`${s}px`,transform:`translateY(-${s*n}px)`},onWheel:E=>l&&d(E.deltaY,u)},p.component))))}M.render(e.createElement(e.StrictMode,null,e.createElement(q,null)),document.getElementById("root"));
