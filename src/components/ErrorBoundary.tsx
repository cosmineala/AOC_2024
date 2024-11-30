import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback: ReactNode; // The UI component or element to display when an error occurs
  children: ReactNode; // The child components this ErrorBoundary will wrap
}

interface ErrorBoundaryState {
  hasError: boolean; // To track if an error has occurred
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error logging service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;