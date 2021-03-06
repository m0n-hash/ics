import React, {Component} from 'react';
import {Container,TextField,Button,Icon,Checkbox,InputAdornment,Grid,Card,FormControlLabel} from '@material-ui/core';
import faker from 'faker';
import UomTable from './UomTable';

class Uom extends Component{
    constructor(props){
        super(props);
        this.state={
            code:'',
            name:'',
            description:'',
            checked:false,
            isDefault:false,
            rows:[]
        };
    }

    componentDidMount(){
        this.generateUom();
    }

    generateUom=()=>{
        let num=faker.random.number(10);
        let item=[];
        for(let i=0;i<num;i++){
            item.push({
                code:faker.commerce.product(),
                name:faker.commerce.productName(),
                description:faker.commerce.productMaterial(),
                checked:faker.random.boolean(),
                isDefault:false
            })
        }

        this.setState({
            rows:item
        })
    }

    onChange=(key,value)=>{
        this.setState({
            [key]:value
        },()=>{
            console.log(`${key} : ${value} -> ${this.state[key]}`);
        });
    }

    onSave=()=>{
        let {rows,...formValue}=this.state;
        rows=[formValue,...rows];
        
        this.setState({
            rows:rows,
            code:'',
            name:'',
            description:'',
            checked:false,
            isDefault:false,
        })
    }

    render(){
        return(
            <Container maxWidth="md">
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
                                labelPlacement="start"
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
                                labelPlacement="start"
                                />
                        </Grid>
                        <Grid container item xs direction="row" justify="flex-end" alignItems="flex-end">
                            <Button onClick={this.onSave} variant="contained" color="primary">
                                <Icon>save</Icon> Save
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
                <UomTable rows={this.state.rows}/>
            </Container>
        )
    }
}

export default Uom;
