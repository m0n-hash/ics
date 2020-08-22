import React, {Component} from 'react';
import {Container,TextField,Button,Icon,Checkbox,InputAdornment,Grid,Card,FormControlLabel } from '@material-ui/core';

class Uom extends Component{
    constructor(props){
        super(props);
        this.state={
            code:'',
            name:'',
            description:'',
            checked:false,
            isDefault:false
        };
    }

    onChange=(key,value)=>{
        this.setState({
            [key]:value
        },()=>{
            console.log(`${key} : ${value} -> ${this.state[key]}`);
        });
    }

    onSave=()=>{
        console.log(this.state);
    }

    render(){
        return(
            <Container maxWidth="sm">
                <Card style={{padding:20}}>
                    <Grid container spacing="2" direction="column" justify="center" alignItems="stretch">
                        <Grid item xs>
                            <TextField    
                                id="code"
                                label="Code"
                                fullWidth
                                variant="outlined"
                                onChange={(e)=>this.onChange(e.target.id,e.target.value)}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon color="primary">fiber_manual_record</Icon>
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField    
                                id="name"
                                label="name"
                                fullWidth
                                variant="outlined"
                                onChange={(e)=>this.onChange(e.target.id,e.target.value)}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon color="primary">description</Icon>
                                    </InputAdornment>
                                ),
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField    
                                id="description"
                                label="Description"
                                fullWidth
                                multiline
                                rows={3}
                                onChange={(e)=>this.onChange(e.target.id,e.target.value)}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid container item xs direction="row" justify="flex-start" alignItems="flex-start">
                            <FormControlLabel
                                value="start"
                                control={<Checkbox
                                    id="checked"
                                    onChange={(e)=>this.onChange(e.target.id,e.target.checked)}
                                    checked={this.state.checked}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />}
                                label="isActive?"
                                labelPlacement="isActive?"
                                />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox
                                    id="isDefault"
                                    onChange={(e)=>this.onChange(e.target.id,e.target.checked)}
                                    checked={this.state.isDefault}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />}
                                label="isDefault?"
                                labelPlacement="isDefault?"
                                />
                        </Grid>
                        <Grid container item xs direction="row" justify="flex-end" alignItems="flex-end">
                            <Button onClick={this.onSave} variant="contained" color="primary">
                                <Icon>save</Icon> Save
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        )
    }
}

export default Uom;
