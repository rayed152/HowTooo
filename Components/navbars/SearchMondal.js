import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Form } from "react-bootstrap";
import React from "react";
import styles from "./navbar.module.css";

function SearchMondal() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="search-dropdown-toggle">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={`${styles.searchDropdownMenu}`}>
          <Form className="px-3 py-2">
            <Form.Group className="mb-3" controlId="searchForm">
              <Form.Control
                type="text"
                placeholder="Search"
                className={`${styles.searchInput}`}
              />
            </Form.Group>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SearchMondal;
