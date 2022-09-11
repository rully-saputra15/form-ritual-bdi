import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  }
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
