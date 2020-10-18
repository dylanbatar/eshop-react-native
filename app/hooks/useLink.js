import { useNavigation } from '@react-navigation/native';

export const useLink = () => {
  const navigation = useNavigation();

  const navigateToRoute = (routeName, props) => {
    navigation.navigate(routeName, { ...props });
  };

  return [navigateToRoute];
};
