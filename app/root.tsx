import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { ShouldRevalidateFunction } from "@remix-run/react";

import { json } from "@remix-run/node";

import { getStatusPage } from "~/models/status-page";
import { getServiceComponents } from "~/models/service-components";
import AppLayout from "~/containers/app-layout";
import { useEffect } from "react";
import "./tailwind.css";

export const meta: MetaFunction<typeof loader> = ({
  data
}) => {
  const { title, description } = data?.statusPage?.settings?.seo_meta || {
    title: 'Status Page',
    description: 'Status page description'
  };
  return [{
    title
  }, {
    name: 'description',
    content: description
  }]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader = async () => {
  const [statusPage, serviceComponents] = await Promise.all([
    getStatusPage(),
    getServiceComponents()
  ]);
  return json({statusPage, serviceComponents});
};

export const shouldRevalidate: ShouldRevalidateFunction = () => {
  return false;
};

export default function App() {
  const { statusPage, serviceComponents } = useLoaderData<typeof loader>();

  const outletContext = { serviceComponents };
  useEffect(() => {
    window.statusPage = statusPage;
  });
  return (
    <>
      <AppLayout statusPage={statusPage}>
        <Outlet context={outletContext} />
      </AppLayout>
    </>
  );
}
