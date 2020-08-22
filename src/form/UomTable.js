import React, {Component} from 'react';
import {Icon,TableContainer,Table,TableBody,TableHead,TableCell,TableRow,Paper, ListItemSecondaryAction } from '@material-ui/core';
import faker from 'faker';

class UomTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TableContainer style={{marginTop:20}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Code</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Active?</TableCell>
                        <TableCell align="center">Default?</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.rows.map((row) => (
                        <TableRow key={row.code}>
                            <TableCell component="th" scope="row">
                                {row.code}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="center"><Icon color={row.checked?'primary':'secondary'}>{row.checked?'done':'close'}</Icon></TableCell>
                            <TableCell align="center"><Icon color={row.isDefault?'primary':'secondary'}>{row.isDefault?'done':'close'}</Icon></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default UomTable;