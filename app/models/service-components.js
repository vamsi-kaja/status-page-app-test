const remoteFetchURL = 'https://qademonew-itnew.status.freshcmdb.com';
// const remoteFetchURL = 'http://localhost:9001';
// const remoteFetchURL = 'https://ritikesh-my-team.status.freshservice.com/api/public/status/service-components';
// const fetchURL = 'http://localhost:9001/api/public/status/service-components';
const getServiceComponents = async () => {
  const serviceComponentsResponse = await fetch(`${remoteFetchURL}/api/public/status/service-components`);
  const serviceComponents = await serviceComponentsResponse.json();
  return serviceComponents;
}

const getOverallStatus = async () => {
  const overallStatusResponse = await fetch(`${remoteFetchURL}/api/public/status/page/overall-status`);
  const overallStatus = await overallStatusResponse.json();
  return overallStatus;
}

const getDisruptions = async () => {
  const disruptionsResponse = await fetch(`${remoteFetchURL}/api/public/status/disruptions?filter=%5B%7B%22condition%22:%22time_window%22,%22operator%22:%22is_between%22,%22value%22:%5B%222024-07-24T18:30:00Z%22,%222024-10-23T09:45:21Z%22%5D%7D%5D&per_page=100`);
  const disruptions = await disruptionsResponse.json();
  return disruptions;
}
export {
  getServiceComponents,
  getOverallStatus,
  getDisruptions
}