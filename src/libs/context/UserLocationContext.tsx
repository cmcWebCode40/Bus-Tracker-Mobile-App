import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type TCreateContext = {
  updateUser: () => void;
  isAuthenticated: boolean;
};

export const UserLocationContext = createContext<TCreateContext>({
  isAuthenticated: false,
  updateUser: () => undefined,
});

interface UserLocationProviderProps {
  children: React.ReactNode;
}

export const UserLocationProvider: React.FunctionComponent<
  UserLocationProviderProps
> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = useCallback(() => {
    setIsAuthenticated(!isAuthenticated);
  }, [isAuthenticated]);

  const authContextValues = useMemo(
    () => ({
      updateUser,
      isAuthenticated,
    }),
    [updateUser, isAuthenticated],
  );
  return (
    <UserLocationContext.Provider value={authContextValues}>
      {children}
    </UserLocationContext.Provider>
  );
};

export const useUserLocationContext = () => {
  return useContext(UserLocationContext);
};
