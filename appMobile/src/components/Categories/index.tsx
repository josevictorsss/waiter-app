import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Category>
          <Icon>
            <Text>{item.icon}</Text>
          </Icon>

          <Text size={14} weight="600">
            {item.name}
          </Text>
        </Category>
      )}
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};
