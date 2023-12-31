---
slug: mastering-the-art-of-prompt-engineering
title: Mastering the Art of Prompt Engineering
authors: scherersebastian
tags: [Prompt Engineering, AI]
---

In the age of advanced machine learning, we have gained an assistant that never tires, is always ahead of the business curve, and boasts the combined knowledge of the world with an IQ of 145. The challenge now? Mastering the art of prompt engineering to communicate effectively with this unparalleled digital assistant.

If you think ChatGPT is just a toy to generate random text, you're wildly missing the mark. This model can be your trusty sidekick, an assistant that can tackle anything from code to research. But you've got to know how to talk to it. No, I don't mean saying _please_ and _thank you_.

Prompt engineering is not straightforward; it requires careful thought and various considerations.

<!--truncate-->

![Prompt engineering meme](assets/prompt-engineering-dark-art.jpeg)

## The Principles of Prompting: The Basics

Alright, before we get into the nitty-gritty techniques, let's set the stage with some principles.

- Write **clear, detailed** instructions.

- Specify the **format**, like summaries, lists, or bullet points.

- Use **system messages and role-playing** to enhance the interaction.

- Limit **scope** for broad topics.

- Avoid leading the model to a specific answer.

**Instead of:**

> Write 5 tech articles.

**A well-engineered prompt would look like:**

> Generate titles and abstracts for 5 tech articles focusing on the impact of machine learning on healthcare. Each abstract should be around 100-150 words. Aim for topics that would be relevant for CTOs of healthcare startups. Output the results as a numbered list.

Here, the revised prompt leaves no room for misinterpretation. It clearly specifies the number of articles, the subject focus (machine learning in healthcare), the target audience (CTOs of healthcare startups), and even the format in which the output should be presented. The more specific you are, the more accurate and tailored the output will be.

## Prompt Wording

The way you phrase your prompt is crucial for getting the output you want from a language learning model like ChatGPT. The model needs clear and accurate language to deliver useful answers. If you're not sure about the terminology in a particular field, this could limit the quality of the model's responses—think of it like doing a web search with the wrong keywords.

Essentially, prompt wording isn't a standalone method but serves as the backbone for all other prompting techniques.

_Sorry PHP developers, you still have to learn a new proper language._

## Prompt Engineering Strategies

### Input/Output Prompting

The elementary method of asking and receiving.

Instead of:

> Translate the following text into French.

Say:

> Translate the following English text into French: "The weather is fine."

Clarity is king. Specificity leads to more accurate outputs.

### Zero-Shot, One-Shot, and Few-Shot Prompting

Zero-Shot is like throwing a dart in the dark; One-Shot and Few-Shot light up the board.

> Zero-Shot: Recommend some video games.
> One-Shot: Recommend video games similar to "Animal Crossing."
> Few-Shot: Recommend video games based on my liking for "Animal Crossing," "Stardew Valley," and "Harvest Moon."

Your level of specificity dictates the relevance of the recommendations.

Zero-shot uses the model's existing training to answer queries without additional data. Few-shot prompting uses limited additional examples to guide the model to a desired output. For example, specifying personal preferences like "Ania's favorite foods are burgers, fries, and pizza" can help the model give restaurant recommendations in a location like Dubai.

### Chain-of-Thought Prompting

For problems that require more brainpower, guide the model through a logical progression.

> How would you optimize a bubble sort algorithm for efficiency? Think this through step by step.

This will make the model break down the problem logically, perhaps suggesting using a different sorting algorithm altogether.

### Self-Criticism

Machines aren't perfect. Teach the LLM to critique its work for increased accuracy.

> Review the SQL query you just generated. Does it follow best practices? If not, please rewrite it.

This will get the model to scrutinize its own output, allowing you to catch and correct errors proactively.

### Iterative Prompting

Big problems? Break 'em down into digestible pieces and solve them one at a time.

You could first ask for a list of top cybersecurity threats for 2023, then inquire about mitigation strategies for each. Baby steps will get you there.

### Prompting for Prompts

Have ChatGPT help you ask better questions. For example:

> What kind of prompt would help you generate a more efficient sorting algorithm?

### Model-Guided Prompting

ChatGPT can ask you for the info it needs to perform a specific task.

> Develop a machine learning model for sentiment analysis. What do you need to know from me?

This eliminates guesswork and leads to a more customized output.

## AI Hallucinations

In the realm of prompt engineering with language models like GPT-4, one phenomenon that can't be ignored is that of AI hallucinations. Simply put, an AI hallucination occurs when the model outputs data that is either blatantly incorrect or unusually distorted, often due to the misinterpretation of the input prompt or the underlying training data.

In machine learning, a model's ability to generalize from its training data to unseen data is crucial. However, sometimes this generalization goes awry. The model might extrapolate from its training in ways that, while mathematically plausible given its training set, are practically nonsensical or misleading.

Google's Deep Dream serves as a quintessential example in the image domain, transforming benign pictures into nightmarish arrays of repetitive patterns. While entertaining in the context of art, hallucinations can become problematic when we rely on the model for mission-critical tasks such as medical diagnosis, financial analysis, or autonomous vehicle control.

### Mitigating the Risk

There are several ways to detect and mitigate the risks of AI hallucinations:

1. Data Quality: Ensure that the model is trained on high-quality, unbiased data.

2. Model Auditing: Regularly evaluate the model's output in different scenarios to identify any erratic behavior.

3. Output Validation: Include a layer of human oversight or automated checks to validate the model's output against known parameters or ground truth.

### Best Practice: Review Your Outputs

It's essential to critically review any machine-generated output, particularly in contexts where an incorrect response can have significant ramifications.

By understanding the mechanics and pitfalls of AI hallucinations, engineers can better anticipate these anomalies and put measures in place to prevent or catch them, thereby ensuring more robust and reliable machine learning implementations.

## Text Embeddings

Text embeddings convert textual data into high-dimensional vectors that capture semantic meaning, serving as the backbone of any natural language processing (NLP) based application.

Understanding textual data is essential for companies that deal with customer interactions, analytics, or decision-making based on textual information. Text embeddings can supercharge applications like customer service chatbots, sentiment analysis tools, or search engines to offer accurate and contextually relevant results.

Imagine a chatbot integrated into Mercedes' online showroom platform, designed to help potential customers with their car-buying experience. A customer might ask, _"Tell me about the fuel efficiency of the E-Class."_ Another might inquire, _"What's the gas mileage on the E-Class sedan?"_

By leveraging text embeddings, the chatbot can understand that "fuel efficiency" and "gas mileage" are semantically similar queries, even though the wording is different. These terms are converted into high-dimensional vectors that cluster closely in the semantic space, allowing the chatbot to recognize them as related.

With this capability, the chatbot can provide detailed and relevant information to potential buyers, enhancing the customer experience and possibly accelerating the sales process. This is particularly important for a premium brand like Mercedes, where customers expect high levels of personalized service. Text embeddings make the chatbot more adaptable and efficient, which is crucial for a luxury automaker aiming to offer a customer experience as polished as the cars it sells.

In summary, text embeddings are vital for companies seeking to leverage NLP in targeted applications, offering superior understanding and performance compared to traditional lexical methods.

## A Hands-on Example

Below, we delve into a practical illustration. Here is an example of a crafted prompt used in a Supabase context:

> You are a very enthusiastic Supabase representative who loves to help people. Given the following sections from the Supabase documentation, answer the question using only that information. Output it in markdown format. If you're unsure and the answer is not explicitly written in the documentation, say "sorry, I don't know how to help with that".
>
> Context sections:
> {{context text placeholder}}
>
> Question: """
> {{question placeholder}}
> """
>
> Answer as markdown, including related code snippets if available.

In the shared example, various components were embedded in the prompt:

- **Identity**: This sets the stage, providing the model with a role or persona. In the case of the example, the model is given the identity of a "very enthusiastic Supabase representative". This primes the model for the subsequent tasks and influences its tonality.

- **Task**: Explicit instructions for what you want the model to do. This can be as simple as "answer the question" or more complex, setting boundaries on the type of answer expected.

- **Condition**: This safeguards against the model's tendencies to "hallucinate" or generate information that might not be accurate or desired. Setting conditions like "if unsure, say 'I don't know'" helps in managing the response's reliability.

- **Context**: By using context injection, we feed the model with information that will guide its answer. In the case of Supabase, it was sections from its documentation.

- **Labels**: Labels provide structure. They help clarify sections of the prompt and reinforce the instructions provided in the task.

### Safeguarding Against Undesired Responses

Using conditions and context effectively can help in preventing the model from generating undesired outputs. As noted, GPT can sometimes exude overconfidence even in incorrect answers. Setting up conditions like "if the answer isn't in the documentation, say 'I don't know'" is one way to counteract this.

### Special Characters and Their Role

Triple quotes (`"""`) around a segment of the prompt, as recommended by OpenAI, can help in explicitly defining the boundaries of a section. It serves a dual purpose – making it clear to the model and preventing potential prompt injections from malicious actors.

### Emphasizing Desired Formatting

By specifying the desired format, like "answer as markdown", you instruct the model to structure its output in a certain way. This is particularly useful if you're looking to display the model's output in a specific visual or structural format.

## Conclusion

Engineering your prompts is akin to fine-tuning an already high-performance machine. With the right tweaks, you can go from getting adequate outputs to having a full-fledged, task-smashing assistant.

> **Info:** As an interesting aside—while writing this article and drawing from a specific source (which I've naturally credited), I discovered that others have done the same. However, I took the extra step of omitting the mundane details, refining the examples, and only including what aligns with my own experience. What they did was simply have an AI rewrite the entire text and then repost it without any attribution. This raises ethical questions about intellectual property and the authenticity of the content we consume online. I plan to delve deeper into this issue in a separate blog post.

## References

- [Prompt Engineering for Effective Interaction with ChatGPT](https://machinelearningmastery.com/prompt-engineering-for-effective-interaction-with-chatgpt/)

- [Prompt Engineering Tutorial – Master ChatGPT and LLM Responses _(Ania Kubow on freeCodeCamp)_](https://www.youtube.com/watch?v=_ZvnD73m40o)

- [ClippyGPT - How I Built Supabase’s OpenAI Doc Search (Embeddings)](https://www.youtube.com/watch?v=Yhtjd7yGGGA)
