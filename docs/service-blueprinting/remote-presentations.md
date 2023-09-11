---
sidebar_position: 2
---

# Remote Presentations

Remote presentations are becoming the new normal thanks to a variety of video conferencing tools and a pandemic that forces workers to remain in isolation.

> “I used to enjoy getting up in front of an audience,” ... “I loved working the room. Now, I feel like I’m speaking into a black hole.”
>
> Pre-Covid, when we presented in person, we could rely on the audience response to confirm that our message was being received. In virtual presentations, however, we lack audience feedback. We no longer see body language. We often don’t see people nodding their heads (or nodding off if they are bored) and it is much harder to make eye contact. As a result, we feel like no one is listening. Unfortunately, this makes us even more anxious about speaking. And even worse, because we feel as if no one is listening, we speak as if no one is listening. We sound less connected to the audience. We speak in more of a monotone. We ramble and have trouble finishing a thought. This only makes the problem worse — it both reinforces our anxiety and makes for a poor presentation. After all, the more disconnected we sound, the harder it is for the audience to listen.
>
> The answer is to virtually simulate the call and response function we experience during in-person presentations.
>
> — [Sarah Gershman](https://hbr.org/2020/11/yes-virtual-presenting-is-weird)

**Interactive and collaborative presentations are key.**

Feedback from the audience must be gathered directly. The feedback can be provided through _presentation tools_ or verbal requests.

When slides take over, they can become an information dump, and the quality of the audience experience is greatly diminished. The audience naturally focuses on the slides, not the speaker. That’s because our eyes are more powerful than our ears.

It seems that lots of people are spending lots of time designing infographics that engage the audience and cut out the speaker. Perhaps in online training this use of captivating visuals is necessary, but in a causal meeting or webinar it should be banned.

A presentation is a time to step up to the role we have been given. That means leading people by talking directly to them, engaging with them, laughing with them, and letting them feel our presence. We sideline ourselves by letting this need for visuals to take over.

## Advice for Remote Presentations / Work

Here are [three ways](https://hbr.org/2020/11/yes-virtual-presenting-is-weird) to elicit greater audience response and connection:

- Use the chat, especially when you start: _Can everyone hear me?_ gets the presentation off to a weak start. You could begin with a relevant question and ask people to type the answer in the chat. For example, you might ask everyone to write one thing they hope to learn from the presentation.

- Even when the audience can’t respond, keep it conversational: One way to simulate the back and forth nature of a conversation is to ask **rhetorical questions** throughout your presentation. For example, when you introduce a new idea, you might say, _Are you ready to try something new?_ Or, if you want people to notice something, you might say, _Do you see the shift from low to high on the chart?_

- Empathize: By taking a few moments before a presentation to put yourself in the shoes of the listener, you will feel more emotionally connected to them when you speak.

- Tooling:

  - Prepare files in advance with tools that your team is comfortable and able to use

  - Choosing the right tools can make it easier to provide feedback: Look for a low entry barrier so that nondesigners can easily accomplish their tasks.

  - Select one tool rather than a collection of tools: Using a single tool minimizes the chance that people will be lost in the process.

- Set a timeline for feedback collection and stick to it

- Replicating Hallway Conversations:

  - Set a recurring time for the team to meet with the intention of collaborating: Work together on anything that’s needed - as the team gets used to it, this meeting won’t be seen as forced.

  - Start meetings with an informal discussion to allow team members time to build relationships

  - Try a full-day video conference to replicate in-office communication: No formal agenda, but team members can unmute when they want to ask a question or work through a design problem together in the moment without having to schedule a separate meeting. Consider starting with a quarter- or half-day and only do this occasionally.

- Maintaining a clear direction:

  - Clearly (and redundantly) communicate expectations and goals before, during, and after the workshop with written reminders, invitations, and verbal reminders

  - Have a single source of truth so that all requirements, documentation, and updated designs live in one place

  - Provide clear documentation when handing off designs: The audience will determine whether your documentation should be about how interactions will work or the importance of features to the business.

  - Check in with team members frequently: Don’t be afraid to show incomplete or messy work.

## Embedded Presentation

import Presentation from "@site/src/components/presentation/Presentation";
import PresentationContainer from "@site/src/components/presentation/PresentationContainer";
import Slide from "@site/src/components/presentation/Slide";
import Title from "@site/src/components/presentation/Title";
import Paragraph from "@site/src/components/presentation/Paragraph";
import Content from "@site/src/components/presentation/Content";
import Column from "@site/src/components/presentation/Column";
import Image from "@site/src/components/presentation/Image";

import Screenshot from "./assets/Screenshot_2023-09-03_144837-blurred.webp";

<Presentation>
<PresentationContainer>

<Slide>
<Column width="12">

<Title>Lorem ipsum dolor sit amet, consetetur</Title>

At vero eos et accusam et justo duo dolores et ea rebum.

> A greater than…

Some `backticks` for inline.

```js
backtick.fences("for blocks");
```

</Column>
</Slide>

<Slide>
<Column width="12">

<Title>Image without scale</Title>

![Docusaurus logo](assets/Screenshot_2023-09-03_144837-blurred.webp)

</Column>
</Slide>

<Slide>
<Column width="12">

<Title>Image with scale</Title>

<img src={Screenshot} alt="Screenshot_2023-09-03_144837-blurred image" style={{width: "700px", height: "500px"}} />

</Column>
</Slide>

<Slide>
<Column width="6">
<Title>Scale image to column</Title>

<Content>
<ol style={{ listStyleType: "decimal" }}>
  <li>At vero eos et accusam</li>
  <li>Et justo duo dolores et ea rebum</li>
  <li>Stet clita kasd gubergren</li>
</ol>
</Content>
</Column>

<Column width="6">

<img src={Screenshot} alt="Screenshot_2023-09-03_144837-blurred image" style={{width: "100%", height: "85%", objectFit: "cover"}} />

</Column>
</Slide>

<Slide>
<Column width="12">

<Title>Lists</Title>

- asterisks for unordered items

1. decimals and a dot for ordered items

</Column>
</Slide>

<Slide>
<Column width="12">
<Title>Lorem ipsum dolor sit amet, consetetur</Title>
<Paragraph>At vero eos et accusam et justo duo dolores et ea rebum. </Paragraph>
</Column>
</Slide>

<Slide>
<Column width="6">
<Title>Stet clita kasd gubergren</Title>

<Content>
<ol style={{ listStyleType: "decimal" }}>
  <li>At vero eos et accusam</li>
  <li>Et justo duo dolores et ea rebum</li>
  <li>Stet clita kasd gubergren</li>
</ol>
</Content>
</Column>

<Column width="6">
<Title>No sea takimata sanctus</Title>

<Content>
<ul style={{ listStyleType: "disc" }}>
  <li>Est Lorem ipsum dolor sit amet</li>
  <li>Sed diam nonumy eirmod tempor invidunt ut labore et</li>
  <li>Dolore magna aliquyam erat, sed diam voluptua</li>
  <li>Est Lorem ipsum dolor sit amet</li>
  <li>Sed diam nonumy eirmod tempor invidunt ut labore et</li>
  <li>Dolore magna aliquyam erat, sed diam voluptua</li>
</ul>
</Content>
</Column>
</Slide>

<Slide>
<Column width="6">
<Title>Sed diam nonumy eirmod</Title>
</Column>

<Image width="6" path={Screenshot}/>
</Slide>

</PresentationContainer>
</Presentation>

## References

- [Yes, Virtual Presenting Is Weird ~Sarah Gershman](https://hbr.org/2020/11/yes-virtual-presenting-is-weird)

- https://www.nngroup.com/articles/remote-design-challenges/?lm=remote-ux-workshop-challenges&pt=youtubevideo

- https://www.nngroup.com/articles/remote-workshop-fail/?lm=remote-ux-workshop-challenges&pt=youtubevideo
