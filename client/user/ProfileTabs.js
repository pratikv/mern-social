import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Tab, Tabs, TableContainer } from "@material-ui/core";
import FollowGrid from "./FollowGrid";
import PostList from "./../post/PostList";

export default function ProfileTabs(props) {
    const [tab, setTab] = useState(0);

    const handleTabChange = (event, value) => {
        setTab(value);
    };

    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    vatiant="fullwidth"
                >
                    <Tab label="Posts" />
                    <Tab label="Following" />
                    <Tab label="Followers" />
                </Tabs>
            </AppBar>
            {tab == 0 && <TableContainer><PostList removeUpdate={props.removePostUpdate} posts={props.posts} /></TableContainer>}
            {tab == 1 && <TableContainer><FollowGrid people={props.user.following} /></TableContainer>}
            {tab == 2 && <TableContainer><FollowGrid people={props.user.followers} /></TableContainer>}
        </div>
    )

}

ProfileTabs.propTypes = {
    user: PropTypes.object.isRequired,
    removePostUpdate: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const TabContainer = (props) => {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
