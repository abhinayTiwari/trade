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
              console.log("Checked the Database for any new entry.")
            }, 30000);
          } catch(e) {
            console.log(e);
          }
    }


    updateData(){
        fetch("https://fy7plv8zt3.execute-api.us-east-2.amazonaws.com/v1/tradingdata").then(res=> res.json())
        .then(res=> {
            res = this.updateChangeOI(res)
            this.setState({...this.state,
                tradeData:res,
                lastRefreshed: this.getCurDate()
            })
        })
    }

    updateChangeOI(data){
        let newData = [];
        for(let i=0; i < data.length; i++){
            if(i == data.length -1) newData.push(data[i]);
            else{
                let prevRow = data[i+1];
                let curRow = data[i];
                curRow.chng_oi_ce_nifty = curRow.oi_ce_nifty - prevRow.oi_ce_nifty;
                curRow.chng_oi_pe_nifty = curRow.oi_pe_nifty - prevRow.oi_pe_nifty;
                curRow.chng_oi_ce_banknifty = curRow.oi_ce_banknifty - prevRow.oi_ce_banknifty;
                curRow.chng_oi_pe_banknifty = curRow.oi_pe_banknifty - prevRow.oi_pe_banknifty;
                newData.push(curRow);
            }
        }
        return newData;
    }

    getCurDate(){
        return new Date() + ""
    }

    render() {
        return (
            <React.Fragment>
                <div><span>Last Checked the Database for new entry:</span> <span>{this.state.lastRefreshed}</span></div>
                <Table striped bordered hover variant="dark">  
        <thead>
                <tr>
                    <th colSpan="4">Nifty</th>
                    <th colSpan="4">Bank Nifty</th>
                    <th>TimeStamp</th>
                </tr>
                <tr>
                    <th colSpan="2">CE</th>
                    <th colSpan="2">PE</th>
                    <th colSpan="2">CE</th>
                    <th colSpan="2">PE</th>
                    <th></th>
                </tr>
                <tr> 
                    <th>OI</th>
                    <th>CHNG OI</th>
                    <th>OI</th>
                    <th>CHNG OI</th>
                    <th>OI</th>
                    <th>CHNG OI</th>
                    <th>OI</th>
                    <th>CHNG OI</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {
                   this.state.tradeData.map(row => (<TableRow key={row.timestamp} data={row}/>))
               }
            </tbody>     
          </Table>
            </React.Fragment>
            
        )
    }
}

//this.state.tradeData.map(row => (<TableRow key={row.timestamp} data={row}/>)
export default TradeTable
