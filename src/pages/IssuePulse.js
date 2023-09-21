import React, { useState } from "react";
import Layout from "@theme/Layout";
import useForm from "../hooks/useForm";
import IssueTable from "../components/IssueTable";

async function fetchOrgRepos(org, headers) {
  const response = await fetch(
    `https://api.github.com/orgs/${org}/repos?type=all&per_page=100`,
    {
      headers,
    }
  );
  return response.json();
}

async function fetchUserRepos(user, headers) {
  const response = await fetch(
    `https://api.github.com/user/repos?per_page=100&affiliation=owner`,
    {
      headers,
    }
  );

  return response.json();
}

async function fetchRepoIssues(repoFullName, labels, headers) {
  const response = await fetch(
    `https://api.github.com/repos/${repoFullName}/issues?labels=${labels.join(
      ","
    )}`,
    {
      headers,
    }
  );

  return response.json();
}

async function fetchIssues(orgOrUser, labels, headers, isUser) {
  const repos = isUser
    ? await fetchUserRepos(orgOrUser, headers)
    : await fetchOrgRepos(orgOrUser, headers);

  // console.log("Repos:", repos);

  const issuesPromises = repos.map((repo) =>
    fetchRepoIssues(repo.full_name, labels, headers)
  );
  const issuesArrays = await Promise.all(issuesPromises);
  return [].concat(...issuesArrays); // Flatten the array of arrays
}

function IssuePulse() {
  const {
    formValues,
    onChangeInput,
    onSubmitForm: onSubmitFormFromHook,
  } = useForm({
    org: "",
    pat: "",
    labels: "",
    isUser: false,
  });

  const { org, pat, labels, isUser } = formValues;
  const [issues, setIssues] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmitFormFromHook(e);

    const headers = {
      Authorization: `token ${pat}`,
      Accept: "application/vnd.github.v3+json",
    };

    try {
      const labelsArray = labels.split(",").map((label) => label.trim());
      const allIssues = await fetchIssues(org, labelsArray, headers, isUser);

      console.log("All issues:", allIssues);

      setIssues(allIssues);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const test = [
    {
      url: "https://api.github.com/repos/scherersebastian/issue-injector/issues/1",
      repository_url:
        "https://api.github.com/repos/scherersebastian/issue-injector",
      labels_url:
        "https://api.github.com/repos/scherersebastian/issue-injector/issues/1/labels{/name}",
      comments_url:
        "https://api.github.com/repos/scherersebastian/issue-injector/issues/1/comments",
      events_url:
        "https://api.github.com/repos/scherersebastian/issue-injector/issues/1/events",
      html_url: "https://github.com/scherersebastian/issue-injector/issues/1",
      id: 1902895310,
      node_id: "I_kwDOKRw2yc5xa-DO",
      number: 1,
      title: "Missing User Instruction",
      user: {
        login: "github-actions[bot]",
        id: 41898282,
        node_id: "MDM6Qm90NDE4OTgyODI=",
        avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/github-actions%5Bbot%5D",
        html_url: "https://github.com/apps/github-actions",
        followers_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        following_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        gists_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        organizations_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        events_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        type: "Bot",
        site_admin: false,
      },
      labels: [
        {
          id: 5981436894,
          node_id: "LA_kwDOKRw2yc8AAAABZIV73g",
          url: "https://api.github.com/repos/scherersebastian/issue-injector/labels/security",
          name: "security",
          color: "ffffff",
          default: false,
          description: null,
        },
        {
          id: 5981436911,
          node_id: "LA_kwDOKRw2yc8AAAABZIV77w",
          url: "https://api.github.com/repos/scherersebastian/issue-injector/labels/KICS",
          name: "KICS",
          color: "ffffff",
          default: false,
          description: null,
        },
      ],
      state: "open",
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: "2023-09-19T12:40:40Z",
      updated_at: "2023-09-19T12:40:41Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: 'Hash ID: 143a3c2cbbc5eb2bb089511b46ba5e41a37ac147e88b7caa21a7933988efbdbe\n```json\n{\n    "ruleId": "fd54f200-402c-4333-a5a4-36ef6709af2f",\n    "ruleIndex": 0,\n    "kind": "fail",\n    "message": {\n        "text": "The \'Dockerfile\' does not contain any \'USER\' instruction"\n    },\n    "locations": [\n        {\n            "physicalLocation": {\n                "artifactLocation": {\n                    "uri": "test/missing_user_instruction-positive.dockerfile"\n                },\n                "region": {\n                    "startLine": 2\n                }\n            }\n        }\n    ]\n}\n{\n    "id": "fd54f200-402c-4333-a5a4-36ef6709af2f",\n    "name": "Missing User Instruction",\n    "shortDescription": {\n        "text": "Missing User Instruction"\n    },\n    "fullDescription": {\n        "text": "A user should be specified in the dockerfile, otherwise the image will run as root"\n    },\n    "defaultConfiguration": {\n        "level": "error"\n    },\n    "helpUri": "https://docs.docker.com/engine/reference/builder/#user",\n    "relationships": [\n        {\n            "target": {\n                "id": "CAT005",\n                "index": 14,\n                "toolComponent": {\n                    "name": "Categories",\n                    "guid": "58cdcc6f-fe41-4724-bfb3-131a93df4c3f",\n                    "index": 0\n                }\n            }\n        }\n    ]\n}\n```',
      reactions: {
        url: "https://api.github.com/repos/scherersebastian/issue-injector/issues/1/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/scherersebastian/issue-injector/issues/1/timeline",
      performed_via_github_app: null,
      state_reason: null,
    },
  ];

  return (
    <Layout title="Issue Pulse" description="Fetch issues from GitHub">
      <div className="container margin-top--lg">
        <div className="hero shadow--lw">
          <div className="container">
            <h1 className="hero__title">Issue Pulse</h1>
            <p className="hero__subtitle">
              Complementing{" "}
              <a href="https://github.com/scherersebastian/issue-injector">
                Issue Injector
              </a>
              , Issue Pulse is your comprehensive overview for cross-repository
              security issues. Keep a pulse on every vulnerability.
            </p>

            <div>
              <form onSubmit={onSubmitForm}>
                <div className="margin-top--md">
                  <label>
                    <input
                      type="checkbox"
                      name="isUser"
                      checked={formValues.isUser}
                      onChange={(e) =>
                        onChangeInput(e.target.name, e.target.checked)
                      }
                    />
                    Fetch issues from User instead of Organisation
                  </label>
                </div>

                <div className="margin-top--md">
                  <label>
                    Organisation:
                    <input
                      name="org"
                      value={org}
                      placeholder="Type your GitHub organisation..."
                      onChange={(e) =>
                        onChangeInput(e.target.name, e.target.value)
                      }
                      style={{ width: "100%", height: "35px" }}
                    />
                  </label>
                </div>

                <div className="margin-top--md">
                  <label>
                    Personal Access Token (PAT):
                    <input
                      name="pat"
                      value={pat}
                      type="password"
                      placeholder="Type your PAT..."
                      onChange={(e) =>
                        onChangeInput(e.target.name, e.target.value)
                      }
                      style={{ width: "100%", height: "35px" }}
                    />
                  </label>
                </div>

                <div className="margin-top--md">
                  <label>
                    Issue Labels (comma-separated):
                    <input
                      name="labels"
                      value={labels}
                      placeholder="e.g. security, kics, bug"
                      onChange={(e) =>
                        onChangeInput(e.target.name, e.target.value)
                      }
                      style={{ width: "100%", height: "35px" }}
                    />
                  </label>
                </div>

                <div className="margin-top--md">
                  <button
                    className="button button--primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Fetch Issues
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {issues.length > 0 && <IssueTable issues={issues} />}

        {test.length > 0 && <IssueTable issues={test} />}
      </div>
    </Layout>
  );
}

export default IssuePulse;
