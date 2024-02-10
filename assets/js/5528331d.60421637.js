"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[8604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,y=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={slug:"issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",authors:"scherersebastian",tags:["Security","GitHub Advanced Security"]},s="IssueInjector: Centralizing All Security Findings in GitHub Without Paying for Advanced Security",o={permalink:"/home/blog/issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",editUrl:"https://github.com/scherersebastian/home/blob/main/blog/2023-11-02-issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security/index.md",source:"@site/blog/2023-11-02-issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security/index.md",title:"IssueInjector: Centralizing All Security Findings in GitHub Without Paying for Advanced Security",description:"As a follow-up to the article Streamlining Security: Integrating Findings as Development Issues, this article shows how IssueInjector can be used.",date:"2023-11-02T00:00:00.000Z",formattedDate:"November 2, 2023",tags:[{label:"Security",permalink:"/home/blog/tags/security"},{label:"GitHub Advanced Security",permalink:"/home/blog/tags/git-hub-advanced-security"}],readingTime:2.895,hasTruncateMarker:!0,authors:[{name:"Sebastian Scherer",title:"Security Engineer",url:"https://scherersebastian.github.io/home/",imageURL:"https://avatars.githubusercontent.com/u/59142915?v=4",key:"scherersebastian"}],frontMatter:{slug:"issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",authors:"scherersebastian",tags:["Security","GitHub Advanced Security"]},prevItem:{title:"Do Users Write More Insecure Code with AI Assistants?",permalink:"/home/blog/do-users-write-more-insecure-code-with-ai-assistants"},nextItem:{title:"Full Disclosure: Ensuring Everyone Has the Information They Need",permalink:"/home/blog/full-disclosure-ensuring-everyone-has-the-information-they-need"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a follow-up to the article ",(0,i.kt)("a",{parentName:"p",href:"/home/blog/streamlining-security-integrating-findings-as-development-issues"},"Streamlining Security: Integrating Findings as Development Issues"),", this article shows how ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scherersebastian/issue-injector"},(0,i.kt)("strong",{parentName:"a"},"IssueInjector"))," can be used."),(0,i.kt)("p",null,"IssueInjector is a GitHub action adept at converting security findings, notably from SARIF (Static Analysis Results Interchange Format), into GitHub issues. It not only creates issues for new findings but also auto-closes resolved ones."),(0,i.kt)("p",null,"This tool is compatible with nearly all security tools that use the SARIF format. It bridges the gap between security scan results and your GitHub issues tab, automatically generating issues from detected vulnerabilities and risks."),(0,i.kt)("p",null,"A distinguishing feature of IssueInjector is its capability to ",(0,i.kt)("em",{parentName:"p"},"bypass the GitHub Advanced Security Dashboard"),". This means users can view and manage findings directly in GitHub, even ",(0,i.kt)("em",{parentName:"p"},"without the Advanced Security")," subscription, eliminating the need to switch between platforms for each security tool."))}p.isMDXComponent=!0}}]);