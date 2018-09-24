import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { Responsive, WidthProvider } from 'react-grid-layout';
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Assessment from "@material-ui/icons/Assessment";
import Close from "@material-ui/icons/Close";


import IconButton from '@material-ui/core/IconButton';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ResponsiveLine } from '@nivo/line'
import Todos from '../components/Todos';
import moment from "moment";
import { List as ImmutableList } from "immutable";
import accounting from "accounting";

const data = [
    {
        "id": "us",
        "color": "hsl(73, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 34
            },
            {
                "x": "helicopter",
                "y": 45
            },
            {
                "x": "boat",
                "y": 281
            },
            {
                "x": "train",
                "y": 86
            },
            {
                "x": "subway",
                "y": 77
            },
            {
                "x": "bus",
                "y": 9
            },
            {
                "x": "car",
                "y": 165
            },
            {
                "x": "moto",
                "y": 242
            },
            {
                "x": "bicycle",
                "y": 35
            },
            {
                "x": "others",
                "y": 75
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(29, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 226
            },
            {
                "x": "helicopter",
                "y": 282
            },
            {
                "x": "boat",
                "y": 9
            },
            {
                "x": "train",
                "y": 245
            },
            {
                "x": "subway",
                "y": 132
            },
            {
                "x": "bus",
                "y": 124
            },
            {
                "x": "car",
                "y": 164
            },
            {
                "x": "moto",
                "y": 56
            },
            {
                "x": "bicycle",
                "y": 98
            },
            {
                "x": "others",
                "y": 109
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(48, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 233
            },
            {
                "x": "helicopter",
                "y": 154
            },
            {
                "x": "boat",
                "y": 95
            },
            {
                "x": "train",
                "y": 291
            },
            {
                "x": "subway",
                "y": 183
            },
            {
                "x": "bus",
                "y": 57
            },
            {
                "x": "car",
                "y": 1
            },
            {
                "x": "moto",
                "y": 78
            },
            {
                "x": "bicycle",
                "y": 124
            },
            {
                "x": "others",
                "y": 99
            }
        ]
    }
];

const dashboardStyle = {
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 996,
        overflow: "visible"
    },
    card: {
        marginTop: 30,
        height: "calc(100% - 30px)",
        width: "100%",
        float: "left",
        overflow: "visible"
    },
    cardIcon: {
        marginTop: -40,
        borderRadius: "3px",
        backgroundColor: "#999",
        padding: 20,
        marginTop: "-20px",
        marginLeft: "15px",
        float: "left",
        cursor: "grabbing"
    },
    cardIconChart: {
        marginTop: -40,
        width: "calc(100% - 30px)",
        borderRadius: "3px",
        backgroundColor: "#999",
        padding: 20,
        marginTop: "-20px",
        marginLeft: "15px",
        float: "left",
        cursor: "grabbing"
    },
    cardIconBlue: {
        background: "linear-gradient(60deg, #26c6da, #00acc1)"
    },
    cardIconSuccess: {
        background: "linear-gradient(60deg, #66bb6a, #43a047)"
    },
    cardIconWarning: {
        background: "linear-gradient(60deg, #ffa726, #fb8c00)"
    },
    cardIconPurple: {
        background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
    },
    cardIconError: {
        background: "linear-gradient(60deg, #ef5350, #e53935)"
    },
    closeButton: {
        padding: 4,
        margin: 4
    }
}

const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends React.Component {
    state = {
        a: true,
        b: true,
        c: true,
    };

    componentDidMount() {
        const sales = [];

        for (var i = 0; i < 7; ++i) {
            sales.push({
                x: moment().day("Sunday").add(i, 'days').format('dd'),
                y: Math.random() * 100 + 10
            })
        }

        this.setState((state, props) => {
            return { ...state, data: [{ id: 'Total', data: sales }] }
        })
    }

    close = (who) => {
        this.setState((state, props) => {
            return { ...state, [who]: false }
        })
    }

    render() {
        const { classes } = this.props;

        var layout = [
            { i: 'a', x: 0, y: 0, w: 4, h: 1 },
            { i: 'b', x: 4, y: 0, w: 4, h: 1 },
            { i: 'c', x: 8, y: 0, w: 4, h: 1 },
            { i: 'd', x: 0, y: 1, w: 8, h: 3 },
            { i: 'e', x: 8, y: 1, w: 4, h: 3 },
        ];

        const abc = [];

        if (this.state.a) {
            abc.push(
                <div key='a'>
                    <Card className={classes.card} elevation={4}>
                        <Card className={`${classes.cardIcon} ${classes.cardIconSuccess} drag`} elevation={0}>
                            <Assessment style={{ color: "#FFFFFF", fontSize: 30 }} />
                        </Card>
                        <IconButton className={classes.closeButton} style={{ float: "right" }} onClick={() => this.close('a')}>
                            <Close />
                        </IconButton>
                    </Card>
                </div>
            );
        }

        if (this.state.b) {
            abc.push(<div key='b'>
                <Card className={classes.card} elevation={4}>
                    <Card className={`${classes.cardIcon} ${classes.cardIconBlue} drag`} elevation={0}>
                        <Store style={{ color: "#FFFFFF", fontSize: 30 }} />
                    </Card>
                    <IconButton className={classes.closeButton} style={{ float: "right" }} onClick={() => this.close('b')}>
                        <Close />
                    </IconButton>
                </Card>
            </div>
            );
        }

        if (this.state.c) {
            abc.push(<div key='c'>
                <Card className={classes.card} elevation={4}>
                    <Card className={`${classes.cardIcon} ${classes.cardIconWarning} drag`} elevation={0}>
                        <Accessibility style={{ color: "#FFFFFF", fontSize: 30 }} />
                    </Card>
                    <IconButton className={classes.closeButton} style={{ float: "right" }} onClick={() => this.close('c')}>
                        <Close />
                    </IconButton>
                    <CardContent>
                        <Typography variant="title" align="center">
                            Fixed issues
                        </Typography>
                        <Typography variant="headline" align="center">
                            3
                        </Typography>
                    </CardContent>
                </Card>
            </div>);
        }

        return (<ResponsiveGridLayout className="layout" layouts={{ lg: layout }}
                        isResizable={false}
                        draggableHandle=".drag"
                        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                        cols={{ lg: 12, md: 12, sm: 12, xs: 4, xxs: 2 }}>
                        {abc}
                        <div key='d'>
                            <Card className={classes.card} elevation={4}>
                                <Card className={`${classes.cardIconChart} ${classes.cardIconPurple} drag`} elevation={0}>
                                    <Typography variant="title" align="center" style={{ color: "#FFFFFF" }}>
                                        Daily Sales
                            </Typography>
                                </Card>
                                <div style={{ height: "100%", marginTop: 60 }}>
                                    <ResponsiveLine
                                        margin={{
                                            top: 20,
                                            right: 40,
                                            bottom: 100,
                                            left: 80
                                        }}
                                        colors={['rgb(97, 205, 187)', 'rgb(244, 117, 96)']}
                                        data={this.state.data}
                                        animate
                                        tooltipFormat={val => accounting.formatMoney(val, "R$", 2, ".", ",")}
                                        curve="monotoneX"
                                        yScale={{ type: 'linear', stacked: true }}
                                    />

                                </div>
                            </Card>
                        </div>
                        <div key='e'>
                            <Card className={classes.card} elevation={4} style={{ òverflowY: "auto" }}>
                                <Card className={`${classes.cardIconChart} ${classes.cardIconError} drag`} elevation={0}>
                                    <Typography variant="title" align="center" style={{ color: "#FFFFFF" }}>
                                        Todo
                            </Typography>
                                </Card>
                                <div style={{ padding: 5, marginTop: 20 }}>
                                    <Todos />
                                </div>
                            </Card>
                        </div>
                    </ResponsiveGridLayout>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);