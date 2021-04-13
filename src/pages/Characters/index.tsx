import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native';
import { api } from '../../services/api';
import { AxiosResponse } from 'axios';

import SkeletonCharacterItem from '../../components/Skeletons/CharacterItem';

import {
  Container,
  CharactersList,
  ItemSeparator,
  Icon,
  CharacterItem,
  CharacterItemContentRight,
  CharacterItemTitle,
  BookCountBadge,
  BookCountText,
} from './styles';

interface CharactersProps {
  url: string;
  name: string;
  gender: string;
  aliases: string[];
  books: string[];
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharactersProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getCharacters = async () => {
    const charactersResponse: AxiosResponse<CharactersProps[]> = await api.get(
      '/characters',
    );

    setCharacters(charactersResponse.data);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const renderSkeletonCharactersList = () => {
    return Array.from({ length: 20 }).map((_, index: number) => (
      <SkeletonCharacterItem key={index} />
    ));
  };

  const renderCharactersList = () => {
    return (
      <CharactersList<React.ElementType>
        data={characters}
        refreshing={loading}
        onRefresh={getCharacters}
        keyExtractor={(item: CharactersProps, index: number) => String(index)}
        renderItem={({ item }: { item: CharactersProps }) => (
          <CharacterItem
            onPress={() =>
              navigation.navigate('CharacterDetail', {
                url: item.url,
              })
            }>
            <Icon
              name={item.gender === 'Female' ? 'female' : 'male'}
              size={18}
            />
            <CharacterItemTitle>{item.aliases}</CharacterItemTitle>
            <CharacterItemContentRight>
              <Icon name="book" size={18} />
              <BookCountBadge>
                <BookCountText>{item.books.length}</BookCountText>
              </BookCountBadge>
            </CharacterItemContentRight>
          </CharacterItem>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    );
  };

  return (
    <SafeAreaView>
      <Container>
        {loading ? renderSkeletonCharactersList() : renderCharactersList()}
      </Container>
    </SafeAreaView>
  );
};

export default Characters;
