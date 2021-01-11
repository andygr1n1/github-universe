import React, { useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

const Home = () => {
    // const cards = new Array(15).fill("").map((_, i) => i)
    const {loading, users} = useContext(GithubContext)

    return (
        <>
            <Search />
            <div className="row">

                {
                    loading
                    ? <div className={"text-center simpleLoader"}>Loading</div>
                        : users.map(user => (<div className="col-sm-4 mb-4" key={user.id}><Card user={user} /></div>)
                        )
                }
            </div>
        </>
    )
}

export default Home