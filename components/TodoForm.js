const TodoForm = ({ submitHandler, formValue, setFormValue }) => {
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="w-full mb-2" placeholder="title..." name="title" onChange={changeHandler} value={formValue.title} />
      <textarea
        rows={4}
        className="w-full mb-3"
        placeholder="description..."
        name="description"
        onChange={changeHandler}
        value={formValue.description}
      />
      <button className="!bg-blue-600 !text-white w-full" type="submit">
        Save
      </button>
    </form>
  );
};

export default TodoForm;
