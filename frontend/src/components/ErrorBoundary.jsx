import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="p-8 m-4 shadow-lg border-red-200">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Something went wrong</h2>
            <p className="text-slate-600">
              We encountered an error while loading this section. Please try refreshing the page.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Page
            </Button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left bg-slate-100 p-4 rounded">
                <summary className="cursor-pointer font-medium">Error Details (Development Only)</summary>
                <pre className="mt-2 text-sm text-red-700 overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}

export const ErrorMessage = ({ error, onRetry }) => (
  <Card className="p-6 m-4 shadow-lg border-red-200 bg-red-50">
    <div className="text-center space-y-4">
      <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
      <h3 className="text-lg font-semibold text-red-800">Failed to load data</h3>
      <p className="text-red-600">{error || 'An unexpected error occurred'}</p>
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-100"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  </Card>
);

export default ErrorBoundary;