import React from "react";

const AddBooks = () => {
  return (
    <form>
      <input placeholder="ADD NEW BOOK" />
      <select name="books" id="book">
        <option value="Action">Volvo</option>
        <option value="Science fiction">The God's Equation</option>
        <option value="Economy">Dollars</option>
        <option value="Computer Science">DS n ALgo</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBooks;
