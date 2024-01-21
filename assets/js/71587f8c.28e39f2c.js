"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[1230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={slug:"issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",authors:"scherersebastian",tags:["Security","GitHub Advanced Security"]},s="IssueInjector: Centralizing All Security Findings in GitHub Without Paying for Advanced Security",o={permalink:"/home/blog/issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",editUrl:"https://github.com/scherersebastian/home/blob/main/blog/2023-11-02-issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security/index.md",source:"@site/blog/2023-11-02-issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security/index.md",title:"IssueInjector: Centralizing All Security Findings in GitHub Without Paying for Advanced Security",description:"As a follow-up to the article Streamlining Security: Integrating Findings as Development Issues, this article shows how IssueInjector can be used.",date:"2023-11-02T00:00:00.000Z",formattedDate:"November 2, 2023",tags:[{label:"Security",permalink:"/home/blog/tags/security"},{label:"GitHub Advanced Security",permalink:"/home/blog/tags/git-hub-advanced-security"}],readingTime:2.895,hasTruncateMarker:!0,authors:[{name:"Sebastian Scherer",title:"Security Engineer",url:"https://scherersebastian.github.io/home/",imageURL:"https://avatars.githubusercontent.com/u/59142915?v=4",key:"scherersebastian"}],frontMatter:{slug:"issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security",authors:"scherersebastian",tags:["Security","GitHub Advanced Security"]},prevItem:{title:"Do Users Write More Insecure Code with AI Assistants?",permalink:"/home/blog/do-users-write-more-insecure-code-with-ai-assistants"},nextItem:{title:"Full Disclosure: Ensuring Everyone Has the Information They Need",permalink:"/home/blog/full-disclosure-ensuring-everyone-has-the-information-they-need"}},l={authorsImageUrls:[void 0]},u=[{value:"How To Use",id:"how-to-use",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup Instructions",id:"setup-instructions",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Limitations",id:"limitations",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a follow-up to the article ",(0,i.kt)("a",{parentName:"p",href:"/home/blog/streamlining-security-integrating-findings-as-development-issues"},"Streamlining Security: Integrating Findings as Development Issues"),", this article shows how ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scherersebastian/issue-injector"},(0,i.kt)("strong",{parentName:"a"},"IssueInjector"))," can be used."),(0,i.kt)("p",null,"IssueInjector is a GitHub action adept at converting security findings, notably from SARIF (Static Analysis Results Interchange Format), into GitHub issues. It not only creates issues for new findings but also auto-closes resolved ones."),(0,i.kt)("p",null,"This tool is compatible with nearly all security tools that use the SARIF format. It bridges the gap between security scan results and your GitHub issues tab, automatically generating issues from detected vulnerabilities and risks."),(0,i.kt)("p",null,"A distinguishing feature of IssueInjector is its capability to ",(0,i.kt)("em",{parentName:"p"},"bypass the GitHub Advanced Security Dashboard"),". This means users can view and manage findings directly in GitHub, even ",(0,i.kt)("em",{parentName:"p"},"without the Advanced Security")," subscription, eliminating the need to switch between platforms for each security tool."),(0,i.kt)("h2",{id:"how-to-use"},"How To Use"),(0,i.kt)("p",null,"The IssueInjector GitHub Action processes SARIF files to create GitHub issues based on the findings. It filters findings based on severity and ensures that issues are properly labeled."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Make sure you have a SARIF file that you want to process. Your GitHub repository should have the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SARIF_FILE"),": The path to your SARIF file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SEVERITY"),': The severity level to filter the findings (optional, default is "error").')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GITHUB_TOKEN"),": GitHub token to authenticate with the API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GITHUB_REPO"),": The GitHub repository where issues should be created."))),(0,i.kt)("h3",{id:"setup-instructions"},"Setup Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Add Action to Your Workflow File:")," In your GitHub Actions workflow, you can include this action by creating a new step.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'jobs:\n  your_job_name:\n    runs-on: ubuntu-latest\n\n    permissions:\n      contents: read\n      issues: write\n\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - name: Use IssueInjector\n        uses: scherersebastian/issue-injector@v1.0.0 # replace `v1` with the version you\'d like to use\n        with:\n          SARIF_FILE: "path/to/your/sarif-file.sarif"\n          SEVERITY: "error" # Optional, default is "error"\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          GITHUB_REPO: "username/repo-name"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Set Required Secrets:")," Make sure to set the GITHUB_TOKEN secret to ",(0,i.kt)("inlineCode",{parentName:"p"},"contents: read, issues: write"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Run the Workflow:")," Once your workflow file is set up, push the changes to your GitHub repository. This will trigger the workflow, and the IssueInjector action will process the SARIF file and create issues based on the findings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Check for Issues:"),' After the workflow runs, check your GitHub repository\'s "Issues" tab for newly created issues.'))),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SARIF_FILE")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the SARIF file"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SEVERITY")),(0,i.kt)("td",{parentName:"tr",align:null},"Severity level to filter"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"error"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:null},"GitHub token to authenticate with the API"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_REPO")),(0,i.kt)("td",{parentName:"tr",align:null},"The GitHub repository where issues should be created"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once closed, issues remain closed: If an issue is manually closed, the script won't reopen it even if the finding reappears in a new scan.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No branch support: The current version of the script doesn't distinguish between different branches. It assumes that all findings are relevant to the default or main branch.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Location changes result in hash mismatch: If the location of a finding is changed, such as by renaming a file, the hash generated for that finding will differ. This could lead to duplicate issues being created.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IssueInjector is ",(0,i.kt)("em",{parentName:"p"},"soft release ready"),", indicating potential bugs. One known limitation is inconsistent issue creation due to missing or varied SARIF file values across different tools. Feedback on discrepancies is appreciated to enhance the tool's performance."))))}d.isMDXComponent=!0}}]);