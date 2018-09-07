import * as HelloWorldActions from "actions/helloworld";
import * as React from 'react';
import { Nav, Navbar, NavItem, Panel} from 'react-bootstrap';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import * as HelloWorldTypes from "types/helloworld";
import {IApplicationState} from "types/index";

export class HelloWorld extends React.Component<HelloWorldTypes.IHelloWorldState & HelloWorldTypes.IHelloWorldDispatch, any> {

    public render() {
        return (
            <React.Fragment>
                <Navbar fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Bob App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                        {
                            this.props.cities.map((city: {cityName: string, active: boolean}, index: number) => {
                                return (
                                    <NavItem
                                        className={ city.active ? 'active' : '' }
                                        key={index}
                                        eventKey={index}
                                        onClick={this.selectCity(city.cityName)} href="#">
                                        {city.cityName.toUpperCase()}
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </Navbar>
                <div>
                    <Panel bsStyle={this.props.isError ? 'danger' : 'success'}>
                        <Panel.Heading>{ this.props.title }</Panel.Heading>
                        <Panel.Body>{ JSON.stringify(this.props.data) }</Panel.Body>
                    </Panel>
                </div>
            </React.Fragment>
        );
    }

    public selectCity = (cityName: string) => () => {
        this.props.getCityDetail(cityName);
    };


}

export function mapStateToProps({ HelloWorldReducer }: IApplicationState) {
    return {
        ...HelloWorldReducer,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<HelloWorldTypes.HelloWorldAction>) {
    return {
        getCityDetail: (cityName: string) => dispatch(HelloWorldActions.clickCity(cityName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
