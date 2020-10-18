import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItemWithIcon from '../components/List/ListItemWithIcon';
import { colors } from '../config/colors';
import Separator from '../components/List/Separator';
import { useLink } from '../hooks/useLink';

const INITIAL_OPTIONS = [
  {
    title: 'My listing',
    icon: {
      bg: colors.red,
      name: 'format-list-bulleted',
    },
    route: '',
  },
  {
    title: 'My Messages',
    icon: {
      bg: colors.bluegreen,
      name: 'email',
    },
    route: 'message',
  },
];

export default function AccountScreen() {
  const [navigateToRoute] = useLink();

  return (
    <View style={styles.container}>
      <View style={styles.profileItem}>
        <ListItemWithIcon
          title='Dylan Batista'
          subtitle='dylanbatar2@gmail.com'
          size={60}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <FlatList
        data={INITIAL_OPTIONS}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ListItemWithIcon
            size={40}
            title={item.title}
            icon={item.icon.name}
            bgIcon={item.icon.bg}
            onPress={() => navigateToRoute(item.route)}
          />
        )}
        ListFooterComponent={<Separator style={{ paddingTop: 20 }} />}
      />
      <ListItemWithIcon
        title='Log Out'
        bgIcon='#ffe66d'
        icon='logout'
        size={40}
        onPress={() => navigateToRoute('welcomeScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileItem: {
    marginVertical: 20,
  },
});
