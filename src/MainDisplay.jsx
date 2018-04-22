import React from 'react';
import {dbase} from './fbase';
import {byPropKey} from "./utils";
import {Button, Card, CardActions, CardContent, CardMedia, Typography, withStyles} from "material-ui";
import logo from './logo.png';

const styles = {
    card: {
        maxWidth: 345,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    media: {
        height: 400,
    },
};


class MainDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            initialLoad: true,
            url: null
        };
    }

    componentDidMount() {
        dbase.ref('url').on('value', (snapshot) => {
            if (this.state.initialLoad) {
                this.setState(byPropKey('initialLoad', false));
            } else {
                this.setState(byPropKey('url', snapshot.val()));
            }
        });
    }

    openOut = (event) => {
        window.open(this.state.url.url, '_blank');
    };

    upload = (event) => {
        this.props.history.push('/uploads');
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <header className="App-header" onClick={this.upload}>
                    <div style={{display: 'inline-block', paddingRight: 20}}><img src={logo} style={{height: '48px', }}/></div>
                    <div style={{display: 'inline-block'}}><h1 className="App-title" style={{lineHeight: '48px'}}>WhoDis</h1></div>
                </header>
                <div style={{
                    height: 630,
                    width: 389,
                    paddingTop: 120,
                    paddingBottom: 120,
                    paddingLeft: 100,
                    paddingRight: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'iPhonex.png'})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {
                        this.state.url && this.state.url.image
                            ? (
                                <div>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={this.state.url.image}
                                            title={this.state.url.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {this.state.url.name}
                                            </Typography>
                                            <Typography component="p">
                                                <b>{this.state.url.subText}</b>
                                            </Typography>
                                            <Typography component="p">
                                                {this.state.url.location}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={this.openOut}>
                                                Connect <i className="fab fa-linkedin"/>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                            : (
                                <div style={{textAlign: 'center', }}>
                                    <p className="App-intro">
                                        No profile found! Take a picture to get started!
                                    </p>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MainDisplay);
