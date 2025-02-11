import { json } from "@remix-run/node";
import {
  useLoaderData,
  useOutletContext
} from "@remix-run/react";

import { getDisruptions } from "~/models/service-components";

export const loader = async () => {
  const disruptions = await getDisruptions();
  return json({disruptions});
};

export default function Disruptions() {
  const { serviceComponents } = useOutletContext();
  const { disruptions } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-4xl">Disruptions</h1>
      <div>
        <p>Disruptions Count - {disruptions.meta.total_count}</p>
        <p>
          Service Components Count -{" "}
          {serviceComponents.service_components.length}
        </p>
      </div>
    </div>
  );
}