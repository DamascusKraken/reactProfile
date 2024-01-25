import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>This is broke. Please be patient as we fix this.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
