import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import GithubContext from '../../context/github/githubContext'

const Search = ({ showClear, setAlert }) => {
const githubContext = useContext(GithubContext)
const {searchUsers, clearUsers, users} = githubContext
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
    setAlert(
        "I can't do ALL the work, enter some letters",
        "danger"
      );
    } else {
      searchUsers(text);
      setText("");
    }
  };

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search/stalk users (we don't judge)"
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
}

export default Search;
