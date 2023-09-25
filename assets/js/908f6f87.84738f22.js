"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[136],{7876:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=e=>{const[t,n]=(0,a.useState)(e);return{formValues:t,onChangeInput:(e,a)=>{n({...t,[e]:a})},onSubmitForm:e=>{e.preventDefault()}}}},3455:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),l=n(179),r=n(7876);const i="findingsTable_iQY2";const o=function(e){let{findings:t}=e;const[n,l]=(0,a.useState)(null);return a.createElement("table",{className:i,style:{width:"100%"}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Rule"),a.createElement("th",null,"Severity"),a.createElement("th",null,"Tool Name"),a.createElement("th",null,"Repository"))),a.createElement("tbody",null,t.filter((e=>e.rule&&e.rule.id)).map(((e,t)=>{const r=`${e.number}-${t}`,i=e.html_url.split("/")[4];return a.createElement(a.Fragment,{key:r},a.createElement("tr",{onClick:()=>{var e;l(n===(e=r)?null:e)}},a.createElement("td",null,e.rule.id," ",a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},e.rule.name)),a.createElement("td",null,e.rule.severity),a.createElement("td",null,e.tool.name),a.createElement("td",null,i)),n===r&&a.createElement("tr",null,a.createElement("td",{colSpan:4},e.rule.description)))}))))};async function c(e,t,n){const a=await async function(e,t){return(await fetch(`https://api.github.com/orgs/${e}/repos?type=all&per_page=100`,{headers:t})).json()}(e,t),l=a.map((e=>async function(e,t,n){return(await fetch(`https://api.github.com/repos/${e}/code-scanning/alerts?state=open&severity=${n}`,{headers:t})).json()}(e.full_name,t,n))),r=await Promise.all(l);return[].concat(...r)}const s=function(){const{formValues:e,onChangeInput:t,onSubmitForm:n}=(0,r.Z)({org:"",pat:"",severity:"critical"}),{org:i,pat:s,severity:m}=e,[u,p]=(0,a.useState)([]);return a.createElement(l.Z,{title:"GitSecOps",description:"Fetch findings from GitHub"},a.createElement("div",{className:"container margin-top--lg"},a.createElement("div",{className:"hero shadow--lw margin-bottom--md"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},"GitSecOps"),a.createElement("p",{className:"hero__subtitle"},"GitSecOps pulls all findings from the GitHub Advanced Security Dashboard across an organization's repos into one view. No more jumping between dashboards. See vulnerabilities, act fast. Simple and efficient. ",a.createElement("i",null,"Only displaying open findings.")),a.createElement("div",null,a.createElement("form",{onSubmit:async e=>{e.preventDefault(),n(e);const t={Authorization:`token ${s}`,Accept:"application/vnd.github.v3+json"};try{const e=await c(i,t,m);p(e)}catch(a){console.error("There was a problem with the fetch operation:",a)}}},a.createElement("div",{className:"margin-top--md"},a.createElement("label",null,"Organisation:",a.createElement("input",{name:"org",value:i,placeholder:"Type your GitHub organisation...",onChange:e=>t(e.target.name,e.target.value),style:{width:"100%",height:"35px"}}))),a.createElement("div",{className:"margin-top--md"},a.createElement("label",null,"Severity:",a.createElement("select",{name:"severity",value:e.severity,onChange:e=>t(e.target.name,e.target.value),style:{width:"100%",height:"35px"}},a.createElement("option",{value:"critical"},"Critical"),a.createElement("option",{value:"high"},"High"),a.createElement("option",{value:"medium"},"Medium"),a.createElement("option",{value:"low"},"Low"),a.createElement("option",{value:"warning"},"Warning"),a.createElement("option",{value:"note"},"Note"),a.createElement("option",{value:"error"},"Error")))),a.createElement("div",{className:"margin-top--md"},a.createElement("label",null,"Personal Access Token (PAT):",a.createElement("input",{name:"pat",value:s,type:"password",placeholder:"Type your PAT...",onChange:e=>t(e.target.name,e.target.value),style:{width:"100%",height:"35px"}}))),a.createElement("div",{className:"margin-top--md"},a.createElement("button",{className:"button button--primary",type:"submit",style:{width:"100%"}},"Fetch Findings")))))),u.length>0?a.createElement(o,{findings:u}):a.createElement("div",null,a.createElement("p",null,"No findings fetched. Please fetch findings to view them here."))))}}}]);