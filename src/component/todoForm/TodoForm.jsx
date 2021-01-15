/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./todoform.module.css";
import * as styles from "./todoForm.style";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo!");
      return;
    }

    if (value.length > 40) {
      alert("Cobalah membuat list lebih pendek!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (!showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
