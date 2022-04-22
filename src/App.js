import React from "react";
import "./App.css";
import { Customers } from "./Customers";
import { Header } from "./Header";
import * as AuthServices from "../src/services/authServices";
import { Button } from "react-bootstrap";

class App extends React.Component {
  state = {
    customers: [],
    fileName: "Customers",
  };

  ExportLoginHistory() {
    //  Actions.setLoading(true);
    AuthServices.ExportLoginHistory()
      .then((response) => {
        console.log("response", response);
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          this._hiddenLink.href = url;
          this._hiddenLink.download = `Login-History-Report `;
          this._hiddenLink.click();
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  componentDidMount() {
    this.getListLoginHistory();
  }

  getListLoginHistory = (e) => {
    AuthServices.GetLoginHistory()
      .then((result) => {
        if (result.isSuccess) {
          this.setState({ customers: result.data });
        } else {
          this.setState([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div  style={{ height: '90vh' }}>
          <a
            href="#download"
            style={{ visibility: "hidden", display: "none" }}
            ref={(c) => (this._hiddenLink = c)}
          >
            download
          </a>
          <Header />
          <div
            className="block-example border border-dark"
            style={{ height: "20%", width: "40%", margin: "auto", backgroundColor:'#f7f8fc' }}
          >
            <div style={{ marginTop: 20, fontSize:24, fontWeight:500, color:'red' }} className="center">Click here to export report this week !!</div>
            <div className="center" style={{ marginTop: 20 }}>
              <Button type="button" onClick={() => this.ExportLoginHistory()}>
                <span style={{fontWeight:'bold'}}>Export</span>
              </Button>
            </div>
          </div>
          {/* <Customers customers={this.state.customers} /> */}
        </div>
    );
  }
}
export default App;
