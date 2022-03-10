import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  select: {
    color: 'grey',
  },
});

const SelectMenu = ({ selectedSort, setSelectedSort }) => {
  const handleSort = (itemValue) => {
    setSelectedSort(itemValue);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedSort}
        onValueChange={(itemValue) => handleSort(itemValue)}
      >
        <Picker.Item
          label='Select sorting method...'
          enabled={false}
          style={styles.select}
        />
        <Picker.Item
          label='Latest repositories'
          value={{
            orderBy: 'CREATED_AT',
            orderDirection: 'DESC',
          }}
        />
        <Picker.Item
          label='Highest rated repositories'
          value={{
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'DESC',
          }}
        />
        <Picker.Item
          label='Lowest rated repositories'
          value={{
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'ASC',
          }}
        />
      </Picker>
    </View>
  );
};

export default SelectMenu;
