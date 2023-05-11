import { IntlProvider } from "react-intl";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MarvelProvider } from "./context";

import Br from "./locales/br.json";
import En from "./locales/en.json";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  let locale = navigator.language || "en-US";

  let localeFile;
  switch (locale) {
    case "en-US":
      localeFile = En;
      break;
    case "pt-BR":
      localeFile = Br;
      break;
    default:
      localeFile = En;
      locale = "en-US";
  }

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider messages={localeFile} locale={locale} defaultLocale="en">
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle theme={defaultTheme} />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  );
}

export default App;
