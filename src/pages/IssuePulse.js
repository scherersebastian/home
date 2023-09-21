import React, { useState } from "react";
import Layout from "@theme/Layout";
import useForm from "../hooks/useForm";

async function fetchOrgRepos(org, headers) {
  const response = await fetch(
    `https://api.github.com/orgs/${org}/repos?type=all`,
    {
      headers,
    }
  );
  return response.json();
}

async function fetchUserRepos(user, headers) {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?type=all&per_page=100`,
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

  console.log("Repos:", repos);

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

      setIssues(allIssues);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Layout title="GitHub Issues Page" description="Fetch issues from GitHub">
      <div className="container margin-top--md">
        <form onSubmit={onSubmitForm}>
          <label>
            <input
              type="checkbox"
              name="isUser"
              checked={formValues.isUser}
              onChange={(e) => onChangeInput(e.target.name, e.target.checked)}
            />
            Fetch from User instead of Org
          </label>

          <input
            name="org"
            value={org}
            placeholder="Type your GitHub organisation..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <input
            name="pat"
            value={pat}
            type="password"
            placeholder="Type your Personal Access Token (PAT)..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <input
            name="labels"
            value={labels}
            placeholder="Type issue labels (comma-separated)..."
            onChange={(e) => onChangeInput(e.target.name, e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <button
            className="button button--primary"
            type="submit"
            style={{ width: "100%" }}
          >
            Fetch Issues
          </button>
        </form>

        {issues.length > 0 && (
          <table style={{ width: "100%", marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Labels</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td>{issue.title}</td>
                  <td>{issue.labels.map((label) => label.name).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

export default IssuePulse;
