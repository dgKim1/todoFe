import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, toggleComplete, deleteItem }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-finish" : ""}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteItem(item._id)}
            >
              삭제
            </button>
            <button
              className="button-delete"
              onClick={() => toggleComplete(item._id)}
            >
              {item.isComplete ? `안끝남` : `끝남`}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
