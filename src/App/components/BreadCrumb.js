import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ links }) {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs-container max-width">
        {links.map((link) => {
          return (
            <li className="bread-item">
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreadCrumb;
