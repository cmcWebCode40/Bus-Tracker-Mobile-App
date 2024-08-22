import axios, {AxiosResponse} from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Alert} from 'react-native';

export interface Coordinates {
  feeds: Feed[];
}

export interface Channel {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
}

export interface Feed {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
}

const defaultCurrentLocation = {
  location: [],
  speed: 0,
  BusFlag: false,
  BusStop: '',
  link: '',
};

type TCreateContext = {
  updateUser: () => void;
  isAuthenticated: boolean;
  currentLocation: CurrentLocation;
};

export const UserLocationContext = createContext<TCreateContext>({
  isAuthenticated: false,
  updateUser: () => undefined,
  currentLocation: defaultCurrentLocation,
});

export interface CurrentLocation {
  location: number[];
  speed: number;
  BusStop?: string;
}

interface UserLocationProviderProps {
  children: React.ReactNode;
}

export const UserLocationProvider: React.FunctionComponent<
  UserLocationProviderProps
> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>(
    defaultCurrentLocation,
  );

  const updateUser = useCallback(() => {
    setIsAuthenticated(!isAuthenticated);
  }, [isAuthenticated]);

  const getCurrentCoordination = async () => {
    const response = await axios.get<Coordinates>(
      'https://api.thingspeak.com/channels/2580764/feeds.json?api_key=HI8JWVJUXATQY0P4&results=1',
    );
    console.log('=============getCurrentCoordination=======================');
    console.log(response.data.feeds[0]);
    console.log('====================================');
    const data = response.data.feeds[0];
    if (data) {
      setCurrentLocation(c => ({
        ...c,
        location: [Number(data.field1), Number(data.field2)],
        BusStop: '',
        speed: Number(data.field3),
      }));
    }
  };

  useEffect(() => {
    setInterval(() => {
      getCurrentCoordination();
    }, 3000);
    // const ws = new WebSocket(
    //   'wss://mqtt-tracking-system-4895ee17dd0b.herokuapp.com/gps',
    // );
    // ws.onmessage = (event: WebSocketMessageEvent) => {
    //   const data = JSON.parse(event.data) as CurrentLocation;
    //   updateLocation(data);
    //   // setCurrentLocation(c => ({
    //   //   ...c,
    //   //   BusFlag: data.BusFlag,
    //   //   location: data.location,
    //   //   BusStop: data.BusStop,
    //   //   link: data.link,
    //   //   speed: data.speed,
    //   // }));
    // };
    // ws.onerror = e => {
    //   // an error occurred
    //   Alert.alert(e.message);
    //   console.log('====================================');
    //   console.log(e);
    //   console.log('====================================');
    // };
    // ws.onclose = e => {
    //   // connection closed
    //   console.log(e.code, e.reason);
    // };
  }, []);

  const authContextValues = useMemo(
    () => ({updateUser, isAuthenticated, currentLocation}),
    [currentLocation, isAuthenticated, updateUser],
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
