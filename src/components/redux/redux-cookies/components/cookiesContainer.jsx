import React from 'react';
import { connect } from 'react-redux';
import buyCookiesActionCreator from '../actions/cookiesActionCreator';

function CookiesContainer(props) {
    return ( <div className="container m-5 p-5 text-center">
        <h2>Cookie Redux Component</h2>
        <h4 className="m-5">Number of Cookies: { props.numOfCookiesProps }</h4>
        <button type="button" className="btn btn-success" onClick={props.buyCookieProps}>Purchase Cookie</button>
    </div> );
}

const mapStateToProps = (state) => {
    return {
        numOfCookiesProps: state.numOfCookies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCookieProps: () => dispatch(buyCookiesActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesContainer)
