import React, { useState } from "react";
import styles from "./IssueTable.module.css";

function IssueTable({ issues }) {
  const [openedIssueId, setOpenedIssueId] = useState(null);

  const toggleIssue = (issueId) => {
    if (openedIssueId === issueId) {
      setOpenedIssueId(null);
    } else {
      setOpenedIssueId(issueId);
    }
  };

  return (
    <table className={styles.issueTable} style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Labels</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {issues.length === 0 ? (
          <tr>
            <td colSpan={3}>
              No issues fetched. Please fetch issues to view them here.
            </td>
          </tr>
        ) : (
          issues.map((issue) => (
            <React.Fragment key={issue.id}>
              <tr onClick={() => toggleIssue(issue.id)}>
                <td>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                </td>
                <td>{issue.labels.map((label) => label.name).join(", ")}</td>
                <td>{issue.user.login}</td>
              </tr>
              {openedIssueId === issue.id && (
                <tr>
                  <td colSpan={4}>{issue.body}</td>
                </tr>
              )}
            </React.Fragment>
          ))
        )}
      </tbody>
    </table>
  );
}

export default IssueTable;
