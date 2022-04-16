import React, { Component } from 'react';
import WarningSymbol from '../img/alert-triangle.svg';
import '../styles/ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        return { hasError: true };  
    }

    render() {
        if (this.state.hasError) {
            return  (<div className="error">
                        <img src={WarningSymbol} alt="alert triangle"/>
                        <p>An error occurred.</p>
                    </div>)
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
