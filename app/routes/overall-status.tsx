import { json } from "@remix-run/node";
import {
  useLoaderData,
  useOutletContext
} from "@remix-run/react";

import { getOverallStatus } from "~/models/service-components";

export const loader = async () => {
  const overallStatus = await getOverallStatus();
  return json({overallStatus});
};

export default function OverallStatus() {
  const { serviceComponents } = useOutletContext();
  const { overallStatus } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-4xl">Disruptions</h1>
      <div>
        <p>OverallStatus - {overallStatus.status_page.status}</p>
        <p>
          Service Components Count -{" "}
          {serviceComponents.service_components.length}
        </p>
      </div>
    </div>
  );
}