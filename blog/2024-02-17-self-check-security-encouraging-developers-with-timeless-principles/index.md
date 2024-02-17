---
slug: self-check-security-encouraging-developers-with-timeless-principles
authors: scherersebastian
tags: [Security]
---

# Self-Check Security: Encouraging Developers with Timeless Principles

In today's world, where keeping apps secure is more critical than ever, developers have a unique edge. They know their code and setup inside out, which means they don't have to wait for a security expert to come in and do a security check. This isn't about dumping more work on developers - they've got enough on their plates already. It's more about encouraging them to use that know-how to check their own work for security issues.
By sticking to some core security principles laid out by Saltzer and Schroeder back in the day (_1975_), developers can totally handle doing a solid security check on their apps if they want to.

<!--truncate-->

Saltzer and Schroeder's security basics:

1. **Least Privilege**: Keep it tight. Only give access and permissions for what's absolutely necessary, cutting down on misuse chances.

2. **Fail-Safe Defaults**: If you're not sure, say no. Only allow stuff that's explicitly okayed to keep things secure by default.

3. **Economy of Mechanism**: Keep it simple. The simpler the security, the easier it is to manage and make sure it's doing its job.

4. **Complete Mediation**: Check every access to make sure it's legit, avoiding any sneaky misuse of permissions.

5. **Open Design**: Don't rely on keeping your security a secret. A solid system stays secure even when attackers know how it works.

6. **Separation of Privilege**: Make sure doing anything important requires more than one check to cut down on abuse.

7. **Least Common Mechanism**: Share as little as possible between users and processes to keep attack paths to a minimum.

8. **Psychological Acceptability**: Don't make security a pain to use. If it's too annoying, people will just find ways around it.

## References

- [Saltzer and Schroeder - _The protection of information in computer systems_](https://ieeexplore.ieee.org/document/1451869)
