import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-primary-900 w-screen h-screen font-dmsans">
          <div className="relative bg-white  max-w-sm mx-auto h-screen">
            <div className="overflow-y-scroll h-screen ">
              <div className="px-3  py-4 mb-24">
                <h1>Sorry.. there was an error while rendering</h1>
              </div>
            </div>
            <div className="absolute bottom-0 z-50 w-full"></div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
