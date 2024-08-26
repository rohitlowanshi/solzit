import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import ApplyLeave from '../Screens/ApplyLeave';
import LeaveRequest from '../Screens/Leaves&Breakes/LeaveRequest';
import LeaveBalance from '../Screens/Leaves&Breakes/LeaveBalance';
import Aboutleavedetails from '../Screens/Dashboard/Aboutleavedetails';
import Profile from '../Screens/profile/Profile';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
      <Stack.Screen name="LeaveRequest" component={LeaveRequest} />
      <Stack.Screen name="LeaveBalance" component={LeaveBalance} />
      <Stack.Screen name="Aboutleavedetails" component={Aboutleavedetails} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
