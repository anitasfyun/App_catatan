import { DeleteButton } from "./DeleteButton";
import "../App.css";

import PropTypes from "prop-types";

function NoteCard({ no, title, createdAt, children, id, index, onDelete }) {
  return (
    <div class="">
      <div className="text-start fs-4 mb-2 bg-secondary text-light rounded">
        <div className="card-header p-2 d-flex justify-content-between">
          <div>Notes {no}</div>
          <DeleteButton index={index} id={id} onDelete={onDelete} />
        </div>
        <div class="card p-2 mb-2 bg-info bg-primary-subtle ">
          <div className="card-header d-flex justify-content-between">
            <h5 class="card-title ">{title}</h5>
            <div class="text-body-secondary fs-6 ">{createdAt}</div>
          </div>
          <p class="card-text fs-5 text-start">{children}</p>
        </div>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  no: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { NoteCard };
