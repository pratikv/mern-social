import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import auth from "./../auth/auth-helper";
import Grid from "@material-ui/core/Grid";
import FindPeople from "./../user/FindPeople";
import NewsFeed from "./../post/NewsFeed";

const useStyles = makeStyles(theme => (
    {
        card: {
            maxWidth: 600,
            margin: 'auto',
            marginTop: theme.spacing(5)
        },
        title: {
            padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
            color: theme.palette.openTitle
        },
        media: {
            minHeight: 400
        }
    }
));

export default function Home() {
    const [defaultPage, setDefaultPage] = useState(false);
    useEffect(() => {
        setDefaultPage(auth.isAuthenticated());
    }, []);
    const classes = useStyles();
    return (
        <div>
            {
                !defaultPage &&
                <div>
                    <Card className={classes.card}>
                        <Typography type="headline" component="h2" className={classes.title}>
                            Home Page
                    </Typography>
                        <CardContent>
                            <Typography type="body2" component="p">
                                Welcome to the MERN Social page
                        </Typography>
                        </CardContent>
                    </Card>
                </div>
            }
            {
                defaultPage &&
                <Grid container spacing={8}>
                    <Grid item xs={8} sm={7}>
                        <NewsFeed />
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <FindPeople />
                    </Grid>
                </Grid>
            }
        </div>
    )
}
