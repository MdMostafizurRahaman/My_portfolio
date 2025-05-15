import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { Toaster } from "./components/ui/toaster.jsx";
import { queryClient } from "./lib/queryClient.js";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/not-found.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 30, height: 30 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setIsCursorVisible(true);
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOut = () => {
      setIsCursorVisible(false);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest(".flip-card") ||
        target.closest(".tech-item")
      ) {
        setCursorSize({ width: 50, height: 50 });
      } else {
        setCursorSize({ width: 30, height: 30 });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Custom cursor */}
      <div 
        className="cursor-glow" 
        style={{
          opacity: isCursorVisible ? 1 : 0,
          left: cursorPosition.x + 'px',
          top: cursorPosition.y + 'px',
          width: cursorSize.width + 'px',
          height: cursorSize.height + 'px',
        }}
      />
      
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;