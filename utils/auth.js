import React from "react";
import Router from "next/router";
import { getCookie } from "./cookies";
import nextCookie from "next-cookies";

export const withAuth = (WrappedComponent) => {
  class HOC extends React.Component {
    static async getInitialProps(ctx) {
      let token = getCookie("_budget_app");

      if (!token) {
        const cookie = nextCookie(ctx);
        token = cookie["_budget_app"];
      }

      if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: "/login" });
        ctx.res.end();
        return;
      }

      if (!token) {
        Router.push("/login");
      }

      // Check if Page has a `getInitialProps`;
      const pageProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : null || {};
      return { ...pageProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};
