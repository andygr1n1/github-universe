import React, { useContext, useRef } from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";
import {InputContext} from "../hooks/InputContext";

const Search = () => {
    const {stateInput: {value, setValue, cleared}} = useContext(InputContext);
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);
    const goBtn = useRef(null);
    const onSubmit = (event) => {
        console.log(event.target)
        if (event.key !== 'Enter' && event.target !== goBtn.current) {
            return
        }

        github.clearUsers();

        if (value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show("Enter user name!!!", "warning")
        }
    }

    return (
        <div className={"form-group"}>
            <button type="button" className="btn btn-danger clearBtn" onClick={() => {
                cleared()
                github.clearUsers();
            }}>Clear</button>
            <input
                type="text"
                className="form-control"
                placeholder="user nickname..."
                value={value}
                onChange={event => setValue(event.target.value) }
                onKeyPress={onSubmit}
            />
            <button ref={goBtn} type="button" className="btn btn-success go" onClick={onSubmit}>Go</button>
        </div>
    )
}

export default Search