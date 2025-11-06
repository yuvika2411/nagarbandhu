// navigation.jsx
let navigateCallback = null;

// Hook for screens to navigate
export const useNavigate = () => {
  return (path) => {
    if (navigateCallback) {
      // remove starting "/" if present
      const cleanPath = path.startsWith("/") ? path.slice(1) : path;
      navigateCallback(cleanPath);
    } else {
      console.warn("NavigationProvider not initialized");
    }
  };
};

// Wraps the app to provide navigation function
export const NavigationProvider = ({ children, onNavigate }) => {
  navigateCallback = onNavigate;
  return children;
};
