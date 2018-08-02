import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

    state = { hasError: false };

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            errorInfo: info
        })
    }

    render() {

        if (this.state.hasError) {
            return (<div className='error'>
                <h1>Something went wrong</h1>
            </div>)
        }
        return this.props.children;
    }
}