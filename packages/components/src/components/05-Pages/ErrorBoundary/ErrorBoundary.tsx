/* eslint-disable */
// @ts-nocheck
import React, { ErrorInfo } from 'react';
import { Box, Card, Container, Divider } from '@mui/material';

type ErrorStateProps = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};

/**
 * Error boundary Component.
 *
 * Has collapsible component with error.
 */
export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false,
      error: {
        name: '',
        message: ''
      },
      errorInfo: {
        componentStack: ''
      }
    } as ErrorStateProps;
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      ...this.state,
      error,
      errorInfo
    });
  }

  public render() {
    if (this.state.hasError) {
      // @ts-ignore
      return (
        <Container>
          <Card>
            <Box sx={{ p: 2, display: 'flex' }}>
              <h2>Something went wrong.</h2>
            </Box>
            <Divider />
            <Box>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </Box>
          </Card>
        </Container>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
