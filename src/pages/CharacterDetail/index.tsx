import React, { useEffect, useState, useMemo } from 'react';

import SkeletonCharacterDetail from '../../components/Skeletons/CharacterDetail';
import { useRoute, RouteProp } from '@react-navigation/core';

import { ScrollView, Animated } from 'react-native';
import { api } from '../../services/api';
import { AxiosResponse } from 'axios';

import {
  Container,
  Header,
  ContainerHeadDescription,
  ContainerBodyDescription,
  DescriptionLabel,
  DescriptionText,
  Icon,
  Name,
  BookItem,
  BookCover,
} from './styles';

interface CharacterProps {
  url: string;
  name: string;
  gender: string;
  culture: string;
  aliases: string[];
  books: string[];
  tvSeries: string[];
}

interface BookReponseProps {
  isbn: string;
}

interface BooksProps {
  urlImage: string;
}

type ParamList = {
  CharacterDetail: {
    url: string;
  };
};

const AnimatedBookCover = Animated.createAnimatedComponent(BookCover);

const CharacterDetail: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'CharacterDetail'>>();
  const [character, setCharacter] = useState<CharacterProps>(
    {} as CharacterProps,
  );
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [opacityBookCover] = useState(new Animated.Value(0));

  const characterId = useMemo(() => route.params.url.split('/').pop(), [
    route.params,
  ]);

  const getCharacterAndBooks = async () => {
    const charactersResponse: AxiosResponse<CharacterProps> = await api.get(
      `/characters/${characterId}`,
    );

    const booksCoversData = Promise.all(
      charactersResponse.data.books.map(async (book) => {
        if (book) {
          const bookId = book.split('/').pop();
          const bookResponse: AxiosResponse<BookReponseProps> = await api.get(
            `/books/${bookId}`,
          );

          return {
            urlImage: `https://covers.openlibrary.org/b/isbn/${bookResponse.data.isbn}-L.jpg`,
          };
        }
      }),
    );

    const booksData = (await booksCoversData) as BooksProps[];

    setCharacter(charactersResponse.data);
    setBooks(booksData);
    setLoading(false);
  };

  useEffect(() => {
    getCharacterAndBooks();
  }, []);

  useEffect(() => {
    Animated.timing(opacityBookCover, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderSkeletonCharacterDetail = () => <SkeletonCharacterDetail />;

  const renderCharacterDetail = () => {
    return (
      <>
        <Header>
          <Icon name="user" size={50} />
          <Name>{character.aliases}</Name>
        </Header>
        <ContainerHeadDescription>
          <DescriptionLabel>
            <Icon name={character.gender === 'Female' ? 'female' : 'male'} />{' '}
            Gênero
          </DescriptionLabel>
          <DescriptionLabel>
            <Icon name="user" /> Cultura
          </DescriptionLabel>
          <DescriptionLabel>
            <Icon name="tv" /> Tv séries
          </DescriptionLabel>
        </ContainerHeadDescription>
        <ContainerBodyDescription>
          <DescriptionText>{character.gender}</DescriptionText>
          <DescriptionText>{character.culture}</DescriptionText>
          <DescriptionText>
            {character.tvSeries?.map((serie) => serie).join('\n')}
          </DescriptionText>
        </ContainerBodyDescription>
        <ContainerHeadDescription>
          <DescriptionLabel>Livros</DescriptionLabel>
        </ContainerHeadDescription>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {books.map((book, index) => (
            <BookItem key={index}>
              <AnimatedBookCover
                resizeMode="cover"
                style={{
                  opacity: opacityBookCover,
                }}
                source={{
                  uri: book.urlImage,
                }}
              />
            </BookItem>
          ))}
        </ScrollView>
      </>
    );
  };

  return (
    <Container>
      {loading ? renderSkeletonCharacterDetail() : renderCharacterDetail()}
    </Container>
  );
};

export default CharacterDetail;
