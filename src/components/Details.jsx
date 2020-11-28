import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Details extends Component {
    state = {
        data: []
    }

    componentDidMount () {
        const { dataBook } = this.props.location.state
        this.setState({data: dataBook})
        console.log(this.state.data)
      }

    render() { 
        
        return ( 
            <React.Fragment>
                <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                <div className="container-fluid">
                    <div class="page-header">
                        <h1>{this.state.data.title}</h1>      
                    </div>
                        <div className="row m-0">
                            <div className="col-lg-4 left-side-product-box pb-3">
                                <img src={this.state.data.book_image} className="border p-3" height="600px" width="400px" />
                            </div>
                            <div className="col-lg-8">
                                <div className="right-side-pro-detail border p-3 m-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h2 className="font-weight-normal">Book Name</h2>
                                            <p className="m-0 p-0" className="text-info">{this.state.data.title}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <h2 className="font-weight-normal">Author</h2>
                                            <p className="m-0 p-0" className="text-info">{this.state.data.author}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <h2 className="font-weight-normal">Publisher</h2>
                                            <p className="m-0 p-0" className="text-info">{this.state.data.publisher}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12">
                                            <h2 className="font-weight-normal">ISBN</h2>
                                            <p className="m-0 p-0" className="text-info">{this.state.data.primary_isbn10}</p>
                                            <hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        <div className="col-lg-12 pt-2">
                                            <h2 className="font-weight-normal">Description</h2>
                                            <p className="text-info">{this.state.data.description}</p><hr className="m-0 pt-2 mt-2" />
                                        </div><br></br>
                                        
                                        
                                        <div className="col-lg-12 mt-3">
                                            <div className="row">
                                                <div className="col-lg-6 pb-2">
                                                    <a href={this.state.data.amazon_product_url} className="btn btn-info">Buy</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Link to={{ pathname: '/' }} className="btn btn-info">Back To Home</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </Switch>
            </Router>
            </React.Fragment>

        );
    }
}
 
export default Details;