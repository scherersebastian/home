import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import Section from "../components/Section";
import Blog from "../components/Blog";
import Project from "../components/Project";
import Screenshot_1 from "@site/static/img/Screenshot_2023-09-03_144837-blurred.webp";
import Screenshot_2 from "@site/static/img/Screenshot_2023-09-03_144901-blurred.webp";
import Screenshot_3 from "@site/static/img/Screenshot_2023-09-03_145203-blurred.webp";
import Screenshot_4 from "@site/static/img/Screenshot_2023-09-03_145117-blurred.webp";

export default function Home() {
  return (
    <Layout title="Home" description="Sebastian Scherer personal website">
      <div className="home">
        <div className="container-fluid">
          <div className="row row--no-gutters">
            <Project
              title="Security Engineering"
              link="/docs/security-engineering"
              style={{
                background: `url(${Screenshot_1})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--8"
            />

            <Project
              title="Service Blueprinting"
              link="/docs/service-blueprinting"
              style={{
                background: `url(${Screenshot_2})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--4"
            />

            <Project
              title="Threat Modeling"
              link="/docs/threat-modeling"
              style={{
                background: `url(${Screenshot_3})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--6"
            />

            <Project
              title="Remote Presentations"
              link="/docs/service-blueprinting/remote-presentations"
              style={{
                background: `url(${Screenshot_4})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--6"
            />
          </div>
        </div>

        <main>
          <Section border={false}>
            <p className={clsx(styles.highlight, styles.text)}>
              I'm Sebastian Scherer - passionate about software, and sharing
              what I know.
            </p>

            <p className={styles.text}>
              Currently employed as security engineer at Mercedes Benz Tech
              Innovation based in Ulm, Germany.
            </p>

            <p className={styles.text}>
              My credo is <i>Security must be developer-friendly</i>.
            </p>

            <p className={styles.text}>
              My writing style is concise - no blah. If you struggle with
              directness, please bow out.
            </p>
          </Section>

          <Section border={true}>
            <div className="row">
              <div className="col col--5">
                <h1 className={styles.blogTitle}>Blog</h1>
              </div>

              <div className="col col--7">
                <Blog
                  title="IssueInjector: Centralizing All Security Findings in GitHub Without Paying for Advanced Security"
                  description="IssueInjector is a GitHub action adept at converting security findings, notably from SARIF (Static Analysis Results Interchange Format), into GitHub issues. It not only creates issues for new findings but also auto-closes resolved ones."
                  link="/blog/issueinjector-centralizing-all-security-findings-in-github-without-paying-for-advanced-security"
                  tags={["GitHub Advanced Security", "Security"]}
                  date="November 2023"
                />

                <Blog
                  title="Streamlining Security: Integrating Findings as Development Issues"
                  description="During my work as a security engineer on the CatenaX project, I made a significant discovery. We had integrated the Veracode tool, and developers could only access their findings by switching to the Veracode platform. This meant that developers had to go through the time-comsuming process of logging into another platform, creating a new set of credentials, requesting access, and then attempting to locate their findings within the huge Veracode platform. It was an ineffective and frustrating process."
                  link="/blog/streamlining-security-integrating-findings-as-development-issues"
                  tags={[
                    "Security Engineering",
                    "GitHub Advanced Security",
                    "Security",
                  ]}
                  date="October 2023"
                />

                <Blog
                  title="Understanding Adversarial Attacks on LLMs"
                  description="If you're elbow-deep in AI research or engineering, this one's a wakeup call. Recent studies have unveiled a new class of vulnerabilities in Large Language Models (LLMs) - and it's not just theoretical."
                  link="/blog/understanding-adversarial-attacks-on-llms"
                  tags={["Prompt Engineering", "AI"]}
                  date="October 2023"
                />

                <Blog
                  title="Mastering the Art of Prompt Engineering"
                  description="Let's get one thing straight: If you think ChatGPT is just a toy to generate random text, you're wildly missing the mark. This model can be your trusty sidekick, an assistant that can tackle anything from code to research. But you've got to know how to talk to it. No, I don't mean saying please and thank you — I'm talking about mastering the art of prompt engineering. Prompt engineering is not straightforward; it requires careful thought and various considerations."
                  link="/blog/mastering-the-art-of-prompt-engineering"
                  tags={["Prompt Engineering", "AI"]}
                  date="September 2023"
                />

                <Blog
                  title="The Interactive Advantage: Why GitHub Copilot Chat is a Game-Changer"
                  description="GitHub's Copilot Chat takes AI in development to a new level. Integrated into your code editor, this chatbot enhances the already impressive GitHub Copilot. Its revolutionary aspect lies in increased interactivity, allowing for nuanced communication with AI. Currently in beta, it's available for enterprise customers using Visual Studio and Visual Studio Code."
                  link="/blog/the-interactive-advantage-why-github-copilot-chat-is-a-game-changer"
                  tags={["Prompt Engineering", "AI", "CoPilot"]}
                  date="September 2023"
                />

                <Blog
                  title="Low Code vs. No Code: Simplifying Software Development"
                  description="Low Code and No Code are both software development approaches aimed at simplifying the development process by reducing the amount of manual coding required. They enable individuals with little or no programming experience to create applications and automate processes using visual, drag-and-drop interfaces."
                  link="/blog/low-code-vs-no-code-simplifying-software-development"
                  tags={["Low Code", "No Code"]}
                  date="April 2022"
                />
              </div>
            </div>
          </Section>
        </main>
      </div>
    </Layout>
  );
}
