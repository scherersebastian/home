import React, { useState } from "react";
import styles from "./FindingsTable.module.css";

function extractRepoName(html_url) {
  return html_url.split("/")[4];
}

function FindingsTable({ findings }) {
  const [openedFindingKey, setOpenedFindingKey] = useState(null);

  const toggleFinding = (findingKey) => {
    if (openedFindingKey === findingKey) {
      setOpenedFindingKey(null);
    } else {
      setOpenedFindingKey(findingKey);
    }
  };

  return (
    <table className={styles.findingsTable} style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Rule</th>
          <th>Severity</th>
          <th>Tool Name</th>
          <th>Repository</th>
        </tr>
      </thead>
      <tbody>
        {findings
          .filter((finding) => finding.rule && finding.rule.id) // Skip findings with "no analysis found"
          .map((finding, index) => {
            const uniqueKey = `${finding.number}-${index}`;
            const repoName = extractRepoName(finding.html_url);
            return (
              <React.Fragment key={uniqueKey}>
                <tr onClick={() => toggleFinding(uniqueKey)}>
                  <td>
                    {finding.rule.id}{" "}
                    <a
                      href={finding.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {finding.rule.name}
                    </a>
                  </td>
                  <td>{finding.rule.severity}</td>
                  <td>{finding.tool.name}</td>
                  <td>{repoName}</td>
                </tr>
                {openedFindingKey === uniqueKey && (
                  <tr>
                    <td colSpan={4}>{finding.rule.description}</td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
      </tbody>
    </table>
  );
}

export default FindingsTable;
