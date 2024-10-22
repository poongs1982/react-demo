import React from 'react';
import { connect } from 'react-redux';
import cookiesActionCreator from '../actions/cookiesActionCreator';
import chocolateActionCreator from '../actions/chocolateActionCreator';

function CookiesChocoContainer(props) {
    console.log(props)
    return ( 
        <div className="container m-5 p-5 text-center">
        <h2>Cookie Choco Redux Component</h2>
        <h4 className="m-5">Number of Cookies: { props.numOfCookiesProps }</h4>
        <button type="button" className="btn btn-success" onClick={props.buyCookieProps}>Purchase Cookie</button>
        <h4 className="m-5">Number of Chocolates: { props.numOfChocolatesProps }</h4>
        <button type="button" className="btn btn-success" onClick={props.buyChocolateProps}>Purchase Cookie</button>
    </div> 
     );
}

const mapStateToProps = (state) => {
    return {
        numOfCookiesProps: state.cookiesRed.numOfCookies,
        numOfChocolatesProps: state.chocnumOfChocolates
}}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCookieProps: ()=>dispatch(cookiesActionCreator()),
        buyChocolateProps: ()=>dispatch(chocolateActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesChocoContainer);