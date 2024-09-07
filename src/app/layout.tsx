"use client"
import { Footer, Header, Main } from "@/components";
import { Provider } from "react-redux";

import store from "@/store";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <div className="container">
            <Header />
            <Main>
              {children}
            </Main>
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}
