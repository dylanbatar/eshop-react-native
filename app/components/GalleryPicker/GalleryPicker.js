import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GalleryPickerItem from './GalleryPickerItem';

export default function GalleryPicker({
  items = [],
  iconButton,
  onPressButton,
  onPressItem,
}) {
  const flatList = useRef();

  const addImage = () => {
    onPressButton();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          iconButton ? { width: 'auto', maxWidth: '75%' } : { width: 'auto' },
          items.length > 0 && { marginRight: 5 },
        ]}
      >
        <FlatList
          horizontal
          ref={flatList}
          onContentSizeChange={() => flatList.current.scrollToEnd()}
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <GalleryPickerItem
              image={item.image}
              onPress={() => onPressItem(item.image)}
            />
          )}
        />
      </View>
      {iconButton && <GalleryPickerItem icon={iconButton} onPress={addImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
