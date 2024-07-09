import React, { ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class ErrorBoundary extends React.Component
    <ErrorBoundaryProps, ErrorBoundaryState> {
    // eslint-disable-next-line no-useless-constructor
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;
