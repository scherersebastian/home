"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[3706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"mastering-the-art-of-prompt-engineering",title:"Mastering the Art of Prompt Engineering",authors:"scherersebastian",tags:["Prompt Engineering","AI"]},o=void 0,s={permalink:"/home/blog/mastering-the-art-of-prompt-engineering",editUrl:"https://github.com/scherersebastian/home/blob/main/blog/2023-08-25-mastering-the-art-of-prompt-engineering/index.md",source:"@site/blog/2023-08-25-mastering-the-art-of-prompt-engineering/index.md",title:"Mastering the Art of Prompt Engineering",description:"In the age of advanced machine learning, we have gained an assistant that never tires, is always ahead of the business curve, and boasts the combined knowledge of the world with an IQ of 145. The challenge now? Mastering the art of prompt engineering to communicate effectively with this unparalleled digital aide.",date:"2023-08-25T00:00:00.000Z",formattedDate:"August 25, 2023",tags:[{label:"Prompt Engineering",permalink:"/home/blog/tags/prompt-engineering"},{label:"AI",permalink:"/home/blog/tags/ai"}],readingTime:9.47,hasTruncateMarker:!0,authors:[{name:"Sebastian Scherer",title:"Security Engineer",url:"https://scherersebastian.github.io/home/",imageURL:"https://avatars.githubusercontent.com/u/59142915?v=4",key:"scherersebastian"}],frontMatter:{slug:"mastering-the-art-of-prompt-engineering",title:"Mastering the Art of Prompt Engineering",authors:"scherersebastian",tags:["Prompt Engineering","AI"]},prevItem:{title:"The Interactive Advantage: Why GitHub Copilot Chat is a Game-Changer",permalink:"/home/blog/the-interactive-advantage-why-github-copilot-chat-is-a-game-changer"},nextItem:{title:"U.S. Encryption Protocols Lagging: A Global Concern",permalink:"/home/blog/us-encryption-protocols-lagging-a-global-concern"}},l={authorsImageUrls:[void 0]},p=[{value:"The Principles of Prompting: The Basics",id:"the-principles-of-prompting-the-basics",level:2},{value:"Prompt Wording",id:"prompt-wording",level:2},{value:"Prompt Engineering Strategies",id:"prompt-engineering-strategies",level:2},{value:"Input/Output Prompting",id:"inputoutput-prompting",level:3},{value:"Zero-Shot, One-Shot, and Few-Shot Prompting",id:"zero-shot-one-shot-and-few-shot-prompting",level:3},{value:"Chain-of-Thought Prompting",id:"chain-of-thought-prompting",level:3},{value:"Self-Criticism",id:"self-criticism",level:3},{value:"Iterative Prompting",id:"iterative-prompting",level:3},{value:"Prompting for Prompts",id:"prompting-for-prompts",level:3},{value:"Model-Guided Prompting",id:"model-guided-prompting",level:3},{value:"AI Hallucinations",id:"ai-hallucinations",level:2},{value:"Mitigating the Risk",id:"mitigating-the-risk",level:3},{value:"Best Practice: Review Your Outputs",id:"best-practice-review-your-outputs",level:3},{value:"Text Embeddings",id:"text-embeddings",level:2},{value:"A Hands-on Example",id:"a-hands-on-example",level:2},{value:"Safeguarding Against Undesired Responses",id:"safeguarding-against-undesired-responses",level:3},{value:"Special Characters and Their Role",id:"special-characters-and-their-role",level:3},{value:"Emphasizing Desired Formatting",id:"emphasizing-desired-formatting",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the age of advanced machine learning, we have gained an assistant that never tires, is always ahead of the business curve, and boasts the combined knowledge of the world with an IQ of 145. The challenge now? Mastering the art of prompt engineering to communicate effectively with this unparalleled digital aide."),(0,i.kt)("p",null,"If you think ChatGPT is just a toy to generate random text, you're wildly missing the mark. This model can be your trusty sidekick, an assistant that can tackle anything from code to research. But you've got to know how to talk to it. No, I don't mean saying ",(0,i.kt)("em",{parentName:"p"},"please")," and ",(0,i.kt)("em",{parentName:"p"},"thank you")," \u2014 I'm talking about mastering the art of prompt engineering."),(0,i.kt)("p",null,"Prompt engineering is not straightforward; it requires careful thought and various considerations."),(0,i.kt)("h2",{id:"the-principles-of-prompting-the-basics"},"The Principles of Prompting: The Basics"),(0,i.kt)("p",null,"Alright, before we get into the nitty-gritty techniques, let's set the stage with some principles."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Write ",(0,i.kt)("strong",{parentName:"p"},"clear, detailed")," instructions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specify the ",(0,i.kt)("strong",{parentName:"p"},"format"),", like summaries, lists, or bullet points.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"system messages and role-playing")," to enhance the interaction.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Limit ",(0,i.kt)("strong",{parentName:"p"},"scope")," for broad topics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Avoid leading the model to a specific answer."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instead of:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Write 5 tech articles.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A well-engineered prompt would look like:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Generate titles and abstracts for 5 tech articles focusing on the impact of machine learning on healthcare. Each abstract should be around 100-150 words. Aim for topics that would be relevant for CTOs of healthcare startups. Output the results as a numbered list.\n")),(0,i.kt)("p",null,"Here, the revised prompt leaves no room for misinterpretation. It clearly specifies the number of articles, the subject focus (machine learning in healthcare), the target audience (CTOs of healthcare startups), and even the format in which the output should be presented. The more specific you are, the more accurate and tailored the output will be."),(0,i.kt)("h2",{id:"prompt-wording"},"Prompt Wording"),(0,i.kt)("p",null,"The way you phrase your prompt is crucial for getting the output you want from a language learning model like ChatGPT. The model needs clear and accurate language to deliver useful answers. If you're not sure about the terminology in a particular field, this could limit the quality of the model's responses\u2014think of it like doing a web search with the wrong keywords."),(0,i.kt)("p",null,"Essentially, prompt wording isn't a standalone method but serves as the backbone for all other prompting techniques."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Sorry PHP developers, you still have to learn a new proper language.")),(0,i.kt)("h2",{id:"prompt-engineering-strategies"},"Prompt Engineering Strategies"),(0,i.kt)("h3",{id:"inputoutput-prompting"},"Input/Output Prompting"),(0,i.kt)("p",null,"The elementary method of asking and receiving."),(0,i.kt)("p",null,"Instead of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Translate the following text into French.\n")),(0,i.kt)("p",null,"Say:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'Translate the following English text into French: "The weather is fine."\n')),(0,i.kt)("p",null,"Clarity is king. Specificity leads to more accurate outputs."),(0,i.kt)("h3",{id:"zero-shot-one-shot-and-few-shot-prompting"},"Zero-Shot, One-Shot, and Few-Shot Prompting"),(0,i.kt)("p",null,"Zero-Shot is like throwing a dart in the dark; One-Shot and Few-Shot light up the board."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'Zero-Shot: Recommend some video games.\nOne-Shot: Recommend video games similar to "Animal Crossing."\nFew-Shot: Recommend video games based on my liking for "Animal Crossing," "Stardew Valley," and "Harvest Moon."\n')),(0,i.kt)("p",null,"Your level of specificity dictates the relevance of the recommendations."),(0,i.kt)("p",null,"Zero-shot uses the model's existing training to answer queries without additional data. Few-shot prompting uses limited additional examples to guide the model to a desired output. For example, specifying personal preferences like \"Ania's favorite foods are burgers, fries, and pizza\" can help the model give restaurant recommendations in a location like Dubai."),(0,i.kt)("h3",{id:"chain-of-thought-prompting"},"Chain-of-Thought Prompting"),(0,i.kt)("p",null,"For problems that require more brainpower, guide the model through a logical progression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"How would you optimize a bubble sort algorithm for efficiency? Think this through step by step.\n")),(0,i.kt)("p",null,"This will make the model break down the problem logically, perhaps suggesting using a different sorting algorithm altogether."),(0,i.kt)("h3",{id:"self-criticism"},"Self-Criticism"),(0,i.kt)("p",null,"Machines aren't perfect. Teach the LLM to critique its work for increased accuracy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Review the SQL query you just generated. Does it follow best practices? If not, please rewrite it.\n")),(0,i.kt)("p",null,"This will get the model to scrutinize its own output, allowing you to catch and correct errors proactively."),(0,i.kt)("h3",{id:"iterative-prompting"},"Iterative Prompting"),(0,i.kt)("p",null,"Big problems? Break 'em down into digestible pieces and solve them one at a time."),(0,i.kt)("p",null,"You could first ask for a list of top cybersecurity threats for 2023, then inquire about mitigation strategies for each. Baby steps will get you there."),(0,i.kt)("h3",{id:"prompting-for-prompts"},"Prompting for Prompts"),(0,i.kt)("p",null,"Have ChatGPT help you ask better questions. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"What kind of prompt would help you generate a more efficient sorting algorithm?\n")),(0,i.kt)("h3",{id:"model-guided-prompting"},"Model-Guided Prompting"),(0,i.kt)("p",null,"ChatGPT can ask you for the info it needs to perform a specific task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"Develop a machine learning model for sentiment analysis. What do you need to know from me?\n")),(0,i.kt)("p",null,"This eliminates guesswork and leads to a more customized output."),(0,i.kt)("h2",{id:"ai-hallucinations"},"AI Hallucinations"),(0,i.kt)("p",null,"In the realm of prompt engineering with language models like GPT-4, one phenomenon that can't be ignored is that of AI hallucinations. Simply put, an AI hallucination occurs when the model outputs data that is either blatantly incorrect or unusually distorted, often due to the misinterpretation of the input prompt or the underlying training data."),(0,i.kt)("p",null,"In machine learning, a model's ability to generalize from its training data to unseen data is crucial. However, sometimes this generalization goes awry. The model might extrapolate from its training in ways that, while mathematically plausible given its training set, are practically nonsensical or misleading."),(0,i.kt)("p",null,"Google's Deep Dream serves as a quintessential example in the image domain, transforming benign pictures into nightmarish arrays of repetitive patterns. While entertaining in the context of art, hallucinations can become problematic when we rely on the model for mission-critical tasks such as medical diagnosis, financial analysis, or autonomous vehicle control."),(0,i.kt)("h3",{id:"mitigating-the-risk"},"Mitigating the Risk"),(0,i.kt)("p",null,"There are several ways to detect and mitigate the risks of AI hallucinations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Data Quality: Ensure that the model is trained on high-quality, unbiased data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Model Auditing: Regularly evaluate the model's output in different scenarios to identify any erratic behavior.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Output Validation: Include a layer of human oversight or automated checks to validate the model's output against known parameters or ground truth."))),(0,i.kt)("h3",{id:"best-practice-review-your-outputs"},"Best Practice: Review Your Outputs"),(0,i.kt)("p",null,"It's essential to critically review any machine-generated output, particularly in contexts where an incorrect response can have significant ramifications."),(0,i.kt)("p",null,"By understanding the mechanics and pitfalls of AI hallucinations, engineers can better anticipate these anomalies and put measures in place to prevent or catch them, thereby ensuring more robust and reliable machine learning implementations."),(0,i.kt)("h2",{id:"text-embeddings"},"Text Embeddings"),(0,i.kt)("p",null,"Text embeddings convert textual data into high-dimensional vectors that capture semantic meaning, serving as the backbone of any natural language processing (NLP) based application."),(0,i.kt)("p",null,"Understanding textual data is essential for companies that deal with customer interactions, analytics, or decision-making based on textual information. Text embeddings can supercharge applications like customer service chatbots, sentiment analysis tools, or search engines to offer accurate and contextually relevant results."),(0,i.kt)("p",null,"Imagine a chatbot integrated into Mercedes' online showroom platform, designed to help potential customers with their car-buying experience. A customer might ask, ",(0,i.kt)("em",{parentName:"p"},'"Tell me about the fuel efficiency of the E-Class."')," Another might inquire, ",(0,i.kt)("em",{parentName:"p"},'"What\'s the gas mileage on the E-Class sedan?"')),(0,i.kt)("p",null,'By leveraging text embeddings, the chatbot can understand that "fuel efficiency" and "gas mileage" are semantically similar queries, even though the wording is different. These terms are converted into high-dimensional vectors that cluster closely in the semantic space, allowing the chatbot to recognize them as related.'),(0,i.kt)("p",null,"With this capability, the chatbot can provide detailed and relevant information to potential buyers, enhancing the customer experience and possibly accelerating the sales process. This is particularly important for a premium brand like Mercedes, where customers expect high levels of personalized service. Text embeddings make the chatbot more adaptable and efficient, which is crucial for a luxury automaker aiming to offer a customer experience as polished as the cars it sells."),(0,i.kt)("p",null,"In summary, text embeddings are vital for companies seeking to leverage NLP in targeted applications, offering superior understanding and performance compared to traditional lexical methods."),(0,i.kt)("h2",{id:"a-hands-on-example"},"A Hands-on Example"),(0,i.kt)("p",null,"Below, we delve into a practical illustration. Here is an example of a crafted prompt used in a Supabase context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'You are a very enthusiastic Supabase representative who loves to help people.\nGiven the following sections from the Supabase documentation,\nanswer the question using only that information.\nOutput it in markdown format.\nIf you\'re unsure and the answer is not explicitly written in the documentation,\nsay "sorry, I don\'t know how to help with that".\n\nContext sections:\n{{context text placeholder}}\n\nQuestion: """\n{{question placeholder}}\n"""\n\nAnswer as markdown, including related code snippets if available.\n')),(0,i.kt)("p",null,"In the shared example, various components were embedded in the prompt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Identity"),': This sets the stage, providing the model with a role or persona. In the case of the example, the model is given the identity of a "very enthusiastic Supabase representative". This primes the model for the subsequent tasks and influences its tonality.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Task"),': Explicit instructions for what you want the model to do. This can be as simple as "answer the question" or more complex, setting boundaries on the type of answer expected.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Condition"),": This safeguards against the model's tendencies to \"hallucinate\" or generate information that might not be accurate or desired. Setting conditions like \"if unsure, say 'I don't know'\" helps in managing the response's reliability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Context"),": By using context injection, we feed the model with information that will guide its answer. In the case of Supabase, it was sections from its documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Labels"),": Labels provide structure. They help clarify sections of the prompt and reinforce the instructions provided in the task."))),(0,i.kt)("h3",{id:"safeguarding-against-undesired-responses"},"Safeguarding Against Undesired Responses"),(0,i.kt)("p",null,"Using conditions and context effectively can help in preventing the model from generating undesired outputs. As noted, GPT can sometimes exude overconfidence even in incorrect answers. Setting up conditions like \"if the answer isn't in the documentation, say 'I don't know'\" is one way to counteract this."),(0,i.kt)("h3",{id:"special-characters-and-their-role"},"Special Characters and Their Role"),(0,i.kt)("p",null,'Triple quotes (""") around a segment of the prompt, as recommended by OpenAI, can help in explicitly defining the boundaries of a section. It serves a dual purpose \u2013 making it clear to the model and preventing potential prompt injections from malicious actors.'),(0,i.kt)("h3",{id:"emphasizing-desired-formatting"},"Emphasizing Desired Formatting"),(0,i.kt)("p",null,"By specifying the desired format, like \"answer as markdown\", you instruct the model to structure its output in a certain way. This is particularly useful if you're looking to display the model's output in a specific visual or structural format."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Engineering your prompts is akin to fine-tuning an already high-performance machine. With the right tweaks, you can go from getting adequate outputs to having a full-fledged, task-smashing assistant."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Info:")," As an interesting aside\u2014while writing this article and drawing from a specific source (which I've naturally credited), I discovered that others have done the same. However, I took the extra step of omitting the mundane details, refining the examples, and only including what aligns with my own experience. What they did was simply have an AI rewrite the entire text and then repost it without any attribution. This raises ethical questions about intellectual property and the authenticity of the content we consume online. I plan to delve deeper into this issue in a separate blog post.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/prompt-engineering-for-effective-interaction-with-chatgpt/"},"Prompt Engineering for Effective Interaction with ChatGPT"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_ZvnD73m40o"},"Prompt Engineering Tutorial \u2013 Master ChatGPT and LLM Responses ",(0,i.kt)("em",{parentName:"a"},"(Ania Kubow on freeCodeCamp)")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Yhtjd7yGGGA"},"ClippyGPT - How I Built Supabase\u2019s OpenAI Doc Search (Embeddings)")))))}c.isMDXComponent=!0}}]);