import React from 'react'

export default function Home() {

    const API_URL = ' https://omxhrbkahl.execute-api.us-west-1.amazonaws.com/prod'

    const [budgets, setBudgets] = React.useState([])

    useEffect(()=> {
        getAllLists();              
    }, [budgets])

    hetAllBudgets = async () => {
        fetch(`${API_URL}/budgets`)
            .then(response => response.json())
            .then(data => {
                setBudgets(data)
                console.log("budgets:", budgets)
            })
    }

    return (
        
        <Grid container spacing ={3} className={classes.root}>            
        <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons" onClick={NewList}>
            Add New Budget
        </Button>
        {
            _.sortBy(budgets,"id")
            .map(budget => (
               
                <Card key={budget.id} className={classes.card} variant="outlined">
                     
                <CardContent>
                <form className={classes.header} noValidate autoComplete="off">            
                    <TextField id="basic" placeholder="To Do List" defaultValue={toDoList.description} variant="outlined"  onChange = {event => listNameInput(event, toDoList.id, toDoList)}/>
                </form>                  
                        {   
                            toDoList.items &&
                            toDoList.items.map((item, index) => (
                                <form key={ `item-${index}`} noValidate autoComplete="off"> 
                                    <Checkbox
                                        checked={toDoList.isDone[index]}
                                        onChange={handleChange}                        
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />                
                                    <TextField id="standard-basic" defaultValue={item}  onChange = {event => itemNameInput(event, item, toDoList.items, index, toDoList, toDoList.id)}/>
                                    <IconButton onClick={() => deleteListItem(toDoList.id,index)} aria-label="delete" className={classes.margin}>
                                        <DeleteIcon />
                                    </IconButton>
                                </form>
                            ))
                        }   
                            <IconButton onClick={() => putListItem(toDoList.id)} style={{fill: "#4054b4"}}>                         
                                <AddCircleRoundedIcon  />                
                            </IconButton>
                    
                </CardContent>
                
                <CardActions>
                    
                        <Button className={classes.buttonDiv} variant="contained" color="secondary" 
                        onClick={() => deleteListById(toDoList.id)}
                        >
                            Delete
                        </Button>                      
                    
                </CardActions>
                
                </Card>
            ))
        }
       
    </Grid>
  );
}

const useStyles = makeStyles({
    root: {
     
      margin: "30px 30px 30px 30px", 
      display: "flexbox",
      flexDirection: "row",
      width: "99.7%",
      
          
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      alignContent: "center"
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        margin: '0 30px 30px 0',           
        
    },
    header: {
        width: "100%",
        padding: "0 20px 0 30px",
        margin: "0 0 20px",
                    
        
    },
    buttonDiv: {
        alignItems: "right",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        display: "flexbox",
        flexDirection: "row",
        marginLeft: "auto"
            
    },

    card: {
        margin:"10px 20px 10px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    
        
  });
