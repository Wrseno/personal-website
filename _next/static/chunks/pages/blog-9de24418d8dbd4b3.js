(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3899:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(4363)}])},7430:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(5893),s=t(9008),a=t.n(s),o=t(1664),l=t.n(o),i=t(7294),c=t(1163),d=t(4603),u=t(6130),m=t(2010);function x(){var e=(0,c.useRouter)().asPath,n=(0,i.useState)("hamburger-nonactive"),t=n[0],s=n[1],a=(0,i.useState)("menu-hidden"),o=a[0],x=a[1],h=(0,i.useState)(!1),g=h[0],b=h[1],f=function(){g?(s("hamburger-nonactive"),x("menu-hidden")):(s("hamburger-active"),x("menu-visible")),b(!g)},j=(0,i.useState)(!1),p=j[0],v=j[1];(0,i.useEffect)(function(){v(!0)},[]);var N=(0,m.F)(),k=N.systemTheme,w=N.theme,y=N.setTheme;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:"flex bg-transparent navbar-fixed top-0 left-0 w-full items-center z-10 dark:bg-black bg-opacity-70",children:(0,r.jsx)("div",{className:"container lg:px-36",children:(0,r.jsxs)("div",{className:"flex justify-between relative",children:[(0,r.jsx)("div",{className:"px-4",children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsxs)("a",{className:"font-bold text-2xl block py-6",children:["wrseno ",(0,r.jsx)("span",{className:"text-primary",children:"•"})]})})}),(0,r.jsxs)("div",{className:"flex items-center px-4",children:[(0,r.jsxs)("button",{id:t,name:"hamburger",type:"button",className:"block absolute right-4 lg:hidden",onClick:f,children:[(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left "}),(0,r.jsx)("span",{className:"hamburger-line-2 transition duration-300 ease-in-out"}),(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-bottom-left"})]}),(0,r.jsx)("nav",{id:o,className:"hidden absolute py-5 bg-black font-semibold shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full dark:text-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none",children:(0,r.jsxs)("ul",{className:"block lg:flex items-center",children:[(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(l(),{href:"/about",children:(0,r.jsx)("a",{className:"".concat("/about"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"About"})})}),(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(l(),{href:"/achievement",children:(0,r.jsx)("a",{className:"".concat("/achievement"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Achievements"})})}),(0,r.jsx)("li",{className:"group",children:(0,r.jsx)(l(),{href:"/project",children:(0,r.jsx)("a",{className:"".concat("/project"===e?"font-bold border-b-4 rounded-sm border-primary":""," text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold"),children:"Projects"})})}),(0,r.jsx)("li",{className:"group",children:p?"dark"===("system"===w?k:w)?(0,r.jsx)(d.Z,{className:"lg:ml-4 w-8 h-8 bg-slate-400 dark:bg-slate-800 rounded-md text-yellow-500",role:"button",onClick:function(){return y("light")}}):(0,r.jsx)(u.Z,{className:"lg:ml-4 w-8 h-8 bg-slate-400 dark:bg-slate-800 rounded-md text-gray-900",role:"button",onClick:function(){return y("dark")}}):null})]})})]})]})})})})}function h(){return(0,r.jsx)("div",{})}function g(e){var n=e.children,t=e.pageTitle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsxs)("title",{children:["Wrseno | ",t]}),(0,r.jsx)("meta",{name:"author",content:"Warseno Bambang Setyono"}),(0,r.jsx)("meta",{name:"description",content:"Warseno Portofolio Website"}),(0,r.jsx)("meta",{name:"keywords",content:"Warseno, Warseno Bambang, Warseno Bambang Setyono, wrseno, wrzeno, Warseno Skanja, Warseno SMK 1"}),(0,r.jsx)("meta",{name:"og:title",content:"Warseno Bambang Setyono"}),(0,r.jsx)("meta",{name:"og:url",content:"https://wrseno.my.id"}),(0,r.jsx)("meta",{name:"og:site_name",content:"wrseno"}),(0,r.jsx)("link",{rel:"icon",href:"/icon_wrseno.png"})]}),(0,r.jsx)(x,{}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(h,{})]})}},4363:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},default:function(){return c}});var r=t(5893);t(7294);var s=t(7430),a=t(5675),o=t.n(a),l=function(e){var n=e.blog;return(0,r.jsxs)("div",{className:"py-32",children:[(0,r.jsx)(o(),{width:"200",height:"200",src:n.image.url,alt:n.title}),(0,r.jsx)("h1",{children:n.title}),(0,r.jsx)("p",{children:n.excerpt})]})},i=!0,c=function(e){var n=e.blogs;return console.log(n),(0,r.jsx)(s.Z,{pageTitle:"Blog",children:n.map(function(e,n){return(0,r.jsx)(l,{blog:e.node},n)})})}}},function(e){e.O(0,[637,675,774,888,179],function(){return e(e.s=3899)}),_N_E=e.O()}]);