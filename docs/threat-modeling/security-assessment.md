---
sidebar_position: 2
---

# Security Assessment

The security assessment describes a **detailed** threat modeling process - based on STRIDE.

STRIDE is a mnemonic representing six types of security threats (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege)

STRIDE is not the sole approach to threat modeling, but due to its simplicity and effectiveness, especially in software-centric environments, it is the most widely adopted framework in the industry.

## Writing a Good Data Flow Diagram

Having a good diagram is key to a good threat model.

The first step is to draw a diagram of the flow of data in your component. It's the DATA flow you care about, NOT the code flow. Your threats come via data, NOT code.

_This might sound overly simplified, and yes, code can be a hot mess waiting to be exploited too. But for the purposes of this enlightening tutorial, we're center-staging the data flow diagram. Code chaos can take a backseat for once. Für die Besserwisser: consider this a footnote just for you._

Use the following elements:

- External Interactor: Is an element that is outside your area of control. It could be a user calling into an API, it could be another component (browser, user) but not one that's being threat modeled.

- Process: A process is simply some code (or microservice). It does NOT mean that it's a _process_ as OS's call processes, instead it's just a collection of code.

- Data Store: A datastore is something that holds data.

- Data Flow: Represents the flow of data through the system.

- Trust Boundary: Occurs when one component doesn't trust the component on the other side of the boundary. There is always a trust boundary between elements running at different privilege levels.

- _Data: Data can be a file, a registry key, or personal data. This element is not part of the classic data flow diagram. However, I find it helpful to explicitly note security relevant data._

  - Data Stores store data

  - Processes process data

  - Data Flows send Data

## STRIDE

STRIDE stands for:

| Threat                     | Property        | Definition                                               |
| -------------------------- | --------------- | -------------------------------------------------------- |
| **Spoofing**               | Authentication  | Impersonating something or someone else                  |
| **Tampering**              | Integrity       | Modifying data or code                                   |
| **Repudiation**            | Non-repudiation | Claiming to have not performed an action                 |
| **Information Disclosure** | Confidentiality | Exposing information to someone not authorized to see it |
| **Denial of Service**      | Availability    | Deny or degrade service to users                         |
| **Elevation of Privilege** | Authorization   | Gain capabilities without proper authorization           |

Essentially the idea is that you can classify all your threats according to one of the 6 STRIDE categories. But STRIDE is not a rigorous classification mechanism - there's a ton of overlap between the various categories (a successful Elevation of Privilege attack could result in Tampering of data, for instance). But it doesn't change the fact that it's an extremely useful mechanism for analyzing threats to a system.

It turns out that some STRIDE threats only apply to particular types of elements. If you think about it, it makes sense - for instance, an Elevation of Privilege threat doesn't apply to data stores (since a data store simply holds data, it operates at no privilege level).

For each element type, the following threats are considered valid:

| Element type      | S   | T   | R   | I   | D   | E   |
| ----------------- | --- | --- | --- | --- | --- | --- |
| External Entities | X   |     | X   |     |     |     |
| Processes         | X   | X   | X   | X   | X   | X   |
| Data Stores       |     | X   | ?   | X   | X   |     |
| Data Flows        |     | X   |     | X   | X   |     |
| Data              |     | X   |     | X   | X   |     |

## STRIDE-per-element

We call this process of considering the element-specific threats to each element in the DFD _STRIDE-per-Element_.

And the best part about it is that STRIDE allows people to produce competent threat models with relatively little training.

The STRIDE-per-element methodology ends up creating a fair number of threats, even a component with a relatively tiny diagram. The good news is that many/most of those threats aren't meaningful threats.

This analysis is the core of the threat model, and where the real work associated with the process takes place.

### Rules of Thumb

While it can be easy to find threats, it is important to realize that all threats have real-world consequences for the development team.

**Concentrate your efforts on those where the attacker can cause real damage.**

To help you guide your thinking about what kinds of threats deserve mitigation, here are some rules of thumb that you can use while performing your threat modeling from [Microsoft](https://docs.microsoft.com/en-us/archive/blogs/larryosterman/threat-modeling-again-threat-modeling-rules-of-thumb):

- If the data hasn’t crossed a trust boundary, you don’t really care about it (_~it may not be a primary concern_).

- If the threat requires that the attacker is ALREADY running code on the client at your privilege level, you don’t really care about it.

- If your code runs with any elevated privileges (even if your code runs in a restricted instance) you need to be concerned.

- If your code invalidates assumptions made by other entities, you need to be concerned.

- If your code listens on the network, you need to be concerned.

- If your code retrieves information from the internet, you need to be concerned.

- If your code deals with data that came from a file, you need to be concerned (these last two are the inverses of rule #1).

- If your code is marked as safe for scripting or safe for initialization, you need to be REALLY concerned.

For more information on the rules, see [Microsofts rules of thumb](https://docs.microsoft.com/en-us/archive/blogs/larryosterman/threat-modeling-again-threat-modeling-rules-of-thumb).

### How to Ask Security Questions

We’re often in situations where crucial details are missing. This can lead to conflicts, especially after an incident.

Keep this in mind:

- People are more willing to reveal sensitive information when questions are asked in a decreasing order of intrusiveness.

- Ask questions on their terms - will the use of ISO and security jargon freeze the person into inaction?

- Checklists can help in stressful situations and prevent _creative_ interpretations of your questions.

## Risk Analysis

For each threat, the risk must be determined. The defined risk assessment methodology can be used for this purpose.

Risk is composed both of the impact when a risk is manifested as well as the likelihood that the risk will manifest. Impact can be assessed in a risk assessment and is primarily based on the data which the service handles. Likelihood on the other hand is primarily driven by the presence or absence of security controls in the service.

Risk is commonly defined as: **risk = impact \* likelihood**

For each identified threat, the risk must be assessed.

For assessing Likelihood, Impact, and the resultant Risk, predefined metric tables are often utilized, such as those provided by [Mozilla](https://infosec.mozilla.org/guidelines/assessing_security_risk).

### Impact

Impact is the potential result that can be produced by the weakness, assuming that the weakness can be successfully reached and exploited.

Assessing impact is a relatively finite, quantitative exercise:

- define the maximum amount of how much money we might lose

- how badly our reputation would be damaged

- how many employees would be unable to work

- etc.

Risk impact generally does not change quickly over time unless services and products are redesigned, large features are added, new types of data is processed, etc.

### Likelihood

The likelihood that a vulnerability in the service will be exploited in a calendar year due to the absence of security controls.

## Risk Treatment

For each risk, the risk treatment option must be determined.

Risk treatment options:

- **Avoid** - deciding not to proceed with the activity that introduced the unacceptable risk, choosing an alternative more acceptable activity that meets business objectives, or choosing an alternative less risky approach or process.

- **Reduce** - implementing a strategy that is designed to reduce the likelihood or consequence of the risk to an acceptable level, where elimination is considered to be excessive in terms of time or expense.

- **Transfer** - implementing a strategy that shares or transfers the risk to another party or parties, such as outsourcing the management of physical assets, developing contracts with service providers or insuring against the risk. The third-party accepting the risk should be aware of and agree to accept this obligation.

- **Accept** - making an informed decision that the risk rating is at an acceptable level or that the cost of the treatment outweighs the benefit. This option may also be relevant in situations where a residual risk remains after other treatment options have been put in place. No further action is taken to treat the risk, however, ongoing monitoring is recommended.

In an ideal world, a risk treatment plan can be created. Unfortunately, this is usually unrealistic and creates more overhead than benefit.

What cannot be waived, however, is for each risk with the treatment option "reduce", to create issues / stories for the associated mitigations and to include the issue number in the security assessment report.

This ensures that the mitigations are in the backlog and are visible to the development team.

### Treatment Plan

Effective risk treatment relies on attaining commitment from key practice stakeholders and developing realistic objectives and timelines for implementation.

For each risk identified in the risk assessment, detail the following:

- Specify the treatment option agreed on - avoid, reduce, share/transfer or accept.

- Document the treatment plan - outline the approach to be used to treat the risk. Any relationships or interdependencies with other risks should also be highlighted.

- Assign an appropriate owner - who is accountable for monitoring and reporting on progress of the treatment plan implementation. Where the treatment plan owner and the risk owner are different, the risk owner has ultimate accountability for ensuring the agreed treatment plan is implemented.

- Specify a target resolution date - where risk treatments have long lead times, consider the development of interim measures. For example, it is unlikely to be acceptable for a residual risk to be rated ‘high' and to have a risk treatment with a resolution timeframe of two years.

### Mitigation

When employing STRIDE, you can refer to the following threat-mitigation table from [OWASP](https://owasp.org/www-community/Threat_Modeling_Process#determine-countermeasures-and-mitigation) to identify mitigation techniques:

| Threat                 | Mitigation Techniques                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| Spoofing               | Appropriate authentication, Protect secret data, Don't store secrets                             |
| Tampering              | Appropriate authorization, Hashes, MACs, Digital signatures, Tamper resistant protocols          |
| Repudiation            | Digital signatures, Timestamps, Audit trails                                                     |
| Information Disclosure | Authorization, Privacy-enhanced protocols, Encryption, Protect secrets, Don't store secrets      |
| Denial of Service      | Appropriate authentication, Appropriate authorization, Filtering, Throttling, Quality of service |
| Elevation of privilege | Run with least privilege                                                                         |
