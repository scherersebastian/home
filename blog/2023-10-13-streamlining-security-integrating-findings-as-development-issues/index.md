---
slug: streamlining-security-integrating-findings-as-development-issues
authors: scherersebastian
tags: [Security Engineering, Findings, Issues]
---

# Streamlining Security: Integrating Findings as Development Issues

During my work as a security engineer on the CatenaX project, I made a significant discovery. We had integrated the Veracode tool, and developers could only access their findings by switching to the Veracode platform. This meant that developers had to go through the time-comsuming process of logging into another platform, creating a new set of credentials, requesting access, and then attempting to locate their findings within the huge Veracode platform. It was an ineffective and frustrating process.

Out of this pain and the desire to streamline the workflow for developers, I created [**IssueInjector**](https://github.com/scherersebastian/issue-injector). For a deeper dive into the technical details of Issue Injector, you can refer to a separate article. In this article, we'll focus on why this workflow is so beneficial for developers.

In the realm of security, ensuring that vulnerabilities are addressed promptly is of utmost importance. But when and how should these vulnerabilities be shared within an organization?

This article explores the idea of seamlessly integrating findings and potential threats directly into the development workflow as issues or stories.

<!--truncate-->

Such an approach not only streamlines the process but also empowers developers to address security concerns efficiently without leaving their familiar development environment.

## The Efficiency of Integrated Findings

Traditionally, security findings and potential threats have been reported via email or external reports, often leading to communication challenges and a lack of integration into the development workflow. However, there are compelling reasons to advocate for reporting these concerns as issues or stories directly within the development project, whether it's innersource or a private repository.

**Why is this approach beneficial?**

Imagine a scenario where a company employs multiple security tools for SCA (Software Composition Analysis), SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), Secret Scanning, and Container Scanning. In a traditional setup, developers would need to switch between multiple dashboards and tools to access findings from each security tool. This can be time-consuming and disrupt the development workflow.

:::info

This is what happens when you let security people with no engineering background develop a developer-friendly security process.

:::

Here's where the GitHub action [**IssueInjector**](https://github.com/scherersebastian/issue-injector) becomes invaluable. If you want to give it a try, it can make a world of difference.

By reporting findings directly as issues or stories within the development environment, security teams can seamlessly integrate security concerns into the ongoing development process. Developers no longer need to switch between different dashboards or tools to access critical information. Instead, they can address vulnerabilities right where they work, ensuring a more efficient and collaborative approach to security.

![GitHub security issue](assets/open-issue.png)

## The Case for Internal Issue Reporting

### Advantages of Reporting Issues within Development Projects

- **Seamless Integration**: Findings are directly integrated into the development workflow, ensuring they are rapidly addressed and resolved.

- **Enhanced Transparency**: Tracking vulnerabilities as issues within the development project promotes a culture of openness and proactivity. This fosters trust and collaboration among team members, ensuring everyone is on the same page regarding security concerns.

- **Efficiency**: Teams no longer need to wait for formal reports or analyses to address vulnerabilities. They can take immediate action to rectify the issue, significantly reducing the time it takes to mitigate security risks.

- **Accountability**: Open communication about vulnerabilities ensures that the entire development team is aware of the risks and takes collective responsibility for their resolution.

In this context, the integration of findings into the development project, whether it's innersource or private, offers a more efficient and organized approach to managing security concerns. Issues are neatly contained within the project, eliminating the need for separate email reports and enhancing collaboration between security and development teams.

### Possible Disadvantages of Internal Issue Reporting

While integrating findings as development issues offers numerous advantages, it's essential to consider _potential_ disadvantages:

- **Overwhelming Developers**: If not managed properly, a flood of security issues can overwhelm developers and hinder their ability to address critical vulnerabilities effectively.

- **False Positives**: Security tools produce false positive findings, leading to unnecessary interruptions in the development workflow and decreased trust in the reporting process.

- **Sensitivity of Data**: In cases where security findings involve sensitive or confidential data, reporting them as issues within the development project may pose data privacy and compliance challenges.

It's crucial to proactively manage these potential drawbacks by focusing primarily on high-severity issues, as they tend to be more manageable in quantity.

In cases of false positives, developers can promptly handle them by either closing the issues or disregarding them. After all, we're well aware of how meticulously backlogs tend to be maintained, right?

Regarding the sensitivity of data, _most developers are so focused on their workloads that they rarely have the time or inclination to browse through the issues of other teams. The exception might be business informatics experts who cannot code themselves and may resort to copying from others - I'm not speaking from personal experience._

## Conclusion

While the public sphere often necessitates a coordinated approach to vulnerability disclosure, the insulated environment of a corporation provides an ideal context for efficient internal issue reporting. This approach not only promotes transparency, accountability, and efficiency but also enhances collaboration between development and security teams. By streamlining the integration of findings as development issues or stories, organizations can strengthen their security posture and respond more effectively to potential threats.
