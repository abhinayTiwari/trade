import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'

export class TradeTable extends Component {
    
    constructor() {   
        super()
        this.state = {
            tradeData: [],
            lastRefreshed: ""
        }
    }

    async componentDidMount(){
        this.updateData();
        try {
            setInterval(async () => {
              const res = await fetch('https://fy7plv8zt3.execute-api.us-east-2.amazonaws.com/v1/tradingdata');
              const tradeData = await res.json();
              this.setState({...this.state,
                tradeData,
                lastRefreshed: this.getCurDate()
              })
              console.log("update data")
            }, 30000);
          } catch(e) {
            console.log(e);
          }
    }


    updateData(){
        fetch("https://fy7plv8zt3.execute-api.us-east-2.amazonaws.com/v1/tradingdata").then(res=> res.json())
        .then(res=> {
            this.setState({...this.state,
                tradeData:res,
                lastRefreshed: this.getCurDate()
            })
        })
    }

    getCurDate(){
        return new Date() + ""
    }

    render() {
        return (
            <React.Fragment>
                <div><span>Last Updated:</span> <span>{this.state.lastRefreshed}</span></div>
                <Table striped bordered hover variant="dark">  
        <thead>
                <tr>
                   <th>TimeStamp</th>
                    <th colSpan="3">CE</th>
                    <th colSpan="3">PE</th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>OI</th>
                    <th>Chng OI</th>
                    <th>Vol</th>
                    <th>OI</th>
                    <th>Chng OI</th>
                    <th>Vol</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.tradeData.map(row => (<TableRow data={row}/>))
                }
            </tbody>     
          </Table>
            </React.Fragment>
            
        )
    }
}

export default TradeTable
