import { useEffect, useState } from 'react';
import router from '../router';

import { RouterProvider } from 'react-router-dom';
import Loader from '../Views/Shared/Loader';



export function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
  return loading ? (
    <Loader />
  ) : (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;