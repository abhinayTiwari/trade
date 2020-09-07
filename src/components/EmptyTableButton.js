import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class EmptyTableButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }
    
    toggleButtonStatus(){
        this.setState({
            ...this.state,
            status: !this.state.status
        })
    }

    async clearDatabase(){
        let userConfirmation = confirm("This will delete all the rows. Are you sure?")
        if(userConfirmation){
            this.toggleButtonStatus();
            const res = await fetch('https://fy7plv8zt3.execute-api.us-east-2.amazonaws.com/v1/tradingdata');
            let tradeData = await res.json();
            tradeData = tradeData.map(a => a.timestamp);
            const allDeleted = await Promise.all(tradeData.map(t=> this.deleteItem(t))) 
            this.toggleButtonStatus();
            alert("Cleared Successfully!!")
        }
    }

    async deleteItem(timestamp){
        let data = { "timestamp": timestamp}
        const res =  await fetch("https://fy7plv8zt3.execute-api.us-east-2.amazonaws.com/v1/tradingdata", {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        return await res.json();
    }

    render() {
        return ( 
            <div className="button-container">
                <Button variant="danger" onClick={this.clearDatabase.bind(this)}>
                    { this.state.status? "Clear Database" : "Clearing..."}
                </Button> 
            </div>
        )
    }
}

export default EmptyTableButton
