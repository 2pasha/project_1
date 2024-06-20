export const TableButtons = ({
  onDelete,
  onEdit
}) => {
  return (
    <div className="field is-grouped is-grouped-centered">
      <p className="control">
        <button
          className="button is-warning"
          onClick={onEdit}
        >
          Edit
        </button>
      </p>
      <p className="control">
        <button
          className="button is-danger"
          onClick={onDelete}
        >
          Delete
        </button>
      </p>
    </div>
  );
};