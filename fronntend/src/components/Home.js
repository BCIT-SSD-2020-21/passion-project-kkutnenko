import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

export default function Home() {

    const API_URL = ' https://omxhrbkahl.execute-api.us-west-1.amazonaws.com/prod'

    const [budgets, setBudgets] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(()=> {
        setTimeout(() => {
            setIsLoading(true)
            getAllBudgets();
        }, 0);
                     
        
    }, [])

    const getAllBudgets = async () => {
        fetch(`${API_URL}/budgets`)
            .then(response => response.json())
            .then(data => {
                setBudgets(data), setIsLoading(false)
                console.log("budgets:", budgets)
            })
    }

   
        if (isLoading) {
            return (
                <p>Is Loading...</p>
            )
        }    
        
        else {
            return(
                <p>Loaded</p>
            )
        }
        
  
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
