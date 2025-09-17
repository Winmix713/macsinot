/**
 * Root Layout Component
 *
 * Provides global application setup including React Query configuration
 * and other providers needed throughout the app.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The root layout wrapper
 */
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Simple error boundary fallback
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#dc2626", marginBottom: "16px" }}>
          Something went wrong
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "16px" }}>
          {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Simple error boundary component
class SimpleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={() =>
            this.setState({ hasError: false, error: null })
          }
        />
      );
    }

    return this.props.children;
  }
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            border: "3px solid #e5e7eb",
            borderTopColor: "#3b82f6",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <span style={{ color: "#6b7280" }}>Loading...</span>
      </div>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Create QueryClient instance with optimized configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data remains fresh for 5 minutes
      staleTime: 1000 * 60 * 5,
      // Cache data for 30 minutes
      gcTime: 1000 * 60 * 30,
      // Retry failed requests once
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 1;
      },
      // Disable refetch on window focus for better UX
      refetchOnWindowFocus: false,
      // Refetch on reconnect
      refetchOnReconnect: true,
      // Enable network mode for better offline handling
      networkMode: "online",
    },
    mutations: {
      // Retry mutations once on network errors
      retry: (failureCount, error) => {
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 1;
      },
      networkMode: "online",
    },
  },
});

/**
 * Root Layout Component
 *
 * Wraps the entire application with necessary providers and error boundaries.
 * Provides React Query client, error handling, and loading states.
 */
export default function RootLayout({ children }) {
  return (
    <SimpleErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </QueryClientProvider>
    </SimpleErrorBoundary>
  );
}
