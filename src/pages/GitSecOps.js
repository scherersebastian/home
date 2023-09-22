import React, { useState } from "react";
import Layout from "@theme/Layout";
import useForm from "../hooks/useForm";
import FindingsTable from "../components/FindingsTable";

async function fetchOrgRepos(org, headers) {
  const response = await fetch(
    `https://api.github.com/orgs/${org}/repos?type=all&per_page=100`,
    {
      headers,
    }
  );
  return response.json();
}

async function fetchRepoFindings(repoFullName, headers, severity) {
  const response = await fetch(
    `https://api.github.com/repos/${repoFullName}/code-scanning/alerts?state=open&severity=${severity}`,
    {
      headers,
    }
  );

  return response.json();
}

async function fetchFindings(org, headers, severity) {
  const repos = await fetchOrgRepos(org, headers);

  const findingsPromises = repos.map((repo) =>
    fetchRepoFindings(repo.full_name, headers, severity)
  );
  const findingsArrays = await Promise.all(findingsPromises);
  return [].concat(...findingsArrays);
}

function GitSecOps() {
  const {
    formValues,
    onChangeInput,
    onSubmitForm: onSubmitFormFromHook,
  } = useForm({
    org: "",
    pat: "",
    severity: "critical",
  });

  const { org, pat, severity } = formValues;
  const [findings, setFindings] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmitFormFromHook(e);

    const headers = {
      Authorization: `token ${pat}`,
      Accept: "application/vnd.github.v3+json",
    };

    try {
      const allFindings = await fetchFindings(org, headers, severity);
      console.log("All findings:", allFindings);
      setFindings(allFindings);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Layout title="GitSecOps" description="Fetch findings from GitHub">
      <div className="container margin-top--lg">
        <div className="hero shadow--lw margin-bottom--md">
          <div className="container">
            <h1 className="hero__title">GitSecOps</h1>
            <p className="hero__subtitle">
              GitSecOps pulls all findings from the GitHub Advanced Security
              Dashboard across an organization's repos into one view. No more
              jumping between dashboards. See vulnerabilities, act fast. Simple
              and efficient. <i>Only displaying open findings.</i>
            </p>

            <div>
              <form onSubmit={onSubmitForm}>
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
                    Severity:
                    <select
                      name="severity"
                      value={formValues.severity}
                      onChange={(e) =>
                        onChangeInput(e.target.name, e.target.value)
                      }
                      style={{ width: "100%", height: "35px" }}
                    >
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                      <option value="warning">Warning</option>
                      <option value="note">Note</option>
                      <option value="error">Error</option>
                    </select>
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
                  <button
                    className="button button--primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Fetch Findings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/*
        <FindingsTable findings={findings} />
        */}

        {findings.length > 0 ? (
          <FindingsTable findings={findings} />
        ) : (
          <div>
            <p>No findings fetched. Please fetch findings to view them here.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default GitSecOps;
