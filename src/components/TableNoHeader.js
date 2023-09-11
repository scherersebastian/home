import React from "react";

export default function TableNoHeader({ children }) {
  return (
    <table>
      <tbody>
        {/*
          <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
          </tr>
          */}

        {children}
      </tbody>
    </table>
  );
}
