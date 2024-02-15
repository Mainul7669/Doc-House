// components/PrivateRoute.js
import { useContext, useEffect } from 'react';
import { AuthContext } from "@components/providers/AuthProvider";
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if user is not logged in
    if (!loading && !user) {
      router.push("/signup");
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading component
  }

  return user ? children : null;
};

export default PrivateRoute;
