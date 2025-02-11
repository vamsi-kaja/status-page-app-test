import { Link } from "@remix-run/react";
// import {  useOutletContext } from "@remix-run/react";
// import useStatusPageStore from "~/store/status-page";

export default function Index() {
  // const { serviceComponents } = useStatusPageStore((state) => state.serviceComponents);
  return (
    <div>
      <h1 className="text-4xl">Index</h1>
      {/* <h3>Services Count: {serviceComponents.service_components.length}</h3> */}
      <div className="flex gap-4">
        <Link to="/disruptions" className="text-blue-500">
          Disruptions
        </Link>
        <Link to="/overall-status" className="text-blue-500">
          Overall Status
        </Link>
      </div>
    </div>
  );
}
