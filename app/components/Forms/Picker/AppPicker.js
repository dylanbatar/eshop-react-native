import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../config/colors';
import PickerItem from './PickerItem';
import LargeButton from '../../Buttons/LargeButton/LargeButton';

export default function AppPicker({
  icon,
  items,
  trailingIcon,
  placeholder,
  onSelectedItem,
}) {
  const [modal, setModal] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const selectedItem = (item) => {
    setSelectItem(item);
    setModal(false);
    onSelectedItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={22} color={colors.grey} />
          )}
          <Text
            style={[
              styles.placeholder,
              selectItem?.title
                ? { color: colors.fullDark }
                : { color: 'grey' },
            ]}
          >
            {selectItem ? selectItem.title : placeholder}
          </Text>
          {trailingIcon && (
            <MaterialCommunityIcons
              style={styles.trailingIcon}
              name={trailingIcon}
              size={22}
              color={colors.grey}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modal}
        style={styles.modal}
        animationType='slide'
        presentationStyle='formSheet'
      >
        <View style={styles.buttonContainer}>
          <LargeButton
            title='Close'
            colorText={'blue'}
            onPress={() => setModal(false)}
          />
        </View>
        <View style={styles.itemsContainer}>
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={(category) => category.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                onPress={() => selectedItem(item)}
                title={item.title}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: colors.fullDark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  placeholder: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
  },
  trailingIcon: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonClose: {
    color: 'red',
  },
  itemsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
