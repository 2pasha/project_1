export const TableButtons = ({
  onDelete
}) => {
  return (
    <div className="field is-grouped is-grouped-centered">
      <p className="control">
        <button className="button is-warning">Edit</button>
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