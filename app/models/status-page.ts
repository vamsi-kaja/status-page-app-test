import type StatusPage from '../interfaces/status-page';
const remoteFetchURL = 'https://qademonew-itnew.status.freshcmdb.com';
// const remoteFetchURL = "http://localhost:9001";
// const remoteFetchURL = 'https://ritikesh-my-team.status.freshservice.com/api/public/status/service-components';
// const fetchURL = 'http://localhost:9001/api/public/status/service-components';

const getStatusPage = async function(): Promise<StatusPage | Error> {
  const url = `${remoteFetchURL}/api/public/status/page/settings`;
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      response.json().then((statusPageResponse) => {
        resolve(statusPageResponse.status_page);
      });
    }).catch(error => {
      reject(error);
    });
  })
}

export {
  getStatusPage
}