import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import { List as ImmutableList } from "immutable";

const items = [
    {
        action: 'Sign contract for "What are conference organizers afraid of?"',
        checked: false
    },
    {
        action: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        checked: false
    },
    {
        action: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
        checked: false
    },
    {
        action: 'Create 4 Invisible User Experiences you Never Knew About',
        checked: false
    },

]

class Todos extends React.Component {
    state = {
        items: ImmutableList(items)
    }
    
    handleChecked = (item) => {
        const copy = {
            ...item,
            checked: !item.checked
        };


        this.setState((state, props) => {
            return { ...state, items: state.items.set(state.items.indexOf(item), copy) };
        });

    };

    render() {
        const { classes } = this.props;

        return (
            <List>
                {this.state.items.map((item, index) => (
                    [
                        <ListItem dense>
                            <Checkbox
                                checked={item.checked}
                                onChange={() => this.handleChecked(item)}
                                color="primary"
                            />
                            <ListItemText primary={(item.checked ? <strike>{item.action}</strike> : <span>{item.action}</span>)} />
                        </ListItem>,
                        <Divider inset />
                    ]
                )
                )}
            </List>
        )
    }
}

export default Todos;