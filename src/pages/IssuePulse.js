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

  return (
    <Layout title="Issue Pulse" description="Fetch issues from GitHub">
      <div className="container margin-top--lg">
        <div className="hero shadow--lw margin-bottom--md">
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

        {issues.length > 0 ? (
          <IssueTable issues={issues} />
        ) : (
          <div>
            <p>No issues fetched. Please fetch issues to view them here.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default IssuePulse;
