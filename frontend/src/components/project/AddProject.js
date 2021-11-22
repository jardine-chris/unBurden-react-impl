import { useState } from "react";

const AddProject = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) return;

    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{marginTop: '5em'}}>
      <form onSubmit={submitHandler}>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
};

export default AddProject;
