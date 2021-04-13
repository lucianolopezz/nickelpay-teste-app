import React, { useEffect, useState } from 'react';

import SkeletonBookItem from '../../components/Skeletons/BookItem';

import { SafeAreaView } from 'react-native';
import { api } from '../../services/api';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';

import {
  Container,
  BookList,
  ItemSeparator,
  Icon,
  BookItem,
  BookItemContent,
  BookItemCover,
  BookItemTitle,
  BookItemContainerDescription,
  BookItemDescription,
} from './styles';

interface BooksProps {
  url: string;
  isbn: string;
  name: string;
  authors: string;
  publisher: string;
  country: string;
  released: string;
  urlImage: string;
}

interface BooksResponseProps {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<BooksProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getBooks = async () => {
    const bookResponse: AxiosResponse<BooksResponseProps[]> = await api.get(
      '/books',
    );

    const booksData = bookResponse.data.map((book) => {
      return {
        url: book.url,
        isbn: book.isbn,
        name: book.name,
        authors: book.authors.join(', '),
        publisher: book.publisher,
        country: book.country,
        released: format(new Date(book.released), 'dd/MM/yyyy'),
        urlImage: `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`,
      };
    });

    setBooks(booksData);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const renderSkeletonBookList = () => {
    return Array.from({ length: 20 }).map((_, index: number) => (
      <SkeletonBookItem key={index} />
    ));
  };

  const renderBookList = () => {
    return (
      <BookList<React.ElementType>
        data={books}
        refreshing={loading}
        onRefresh={getBooks}
        keyExtractor={(item: BooksProps) => item.isbn}
        renderItem={({ item }: { item: BooksProps }) => (
          <BookItem>
            <BookItemCover
              resizeMode="cover"
              source={{
                uri: item.urlImage,
              }}
            />
            <BookItemContent>
              <BookItemTitle>{item.name}</BookItemTitle>
              <BookItemContainerDescription>
                <BookItemDescription>
                  <Icon name="map-marker" size={14} /> {item.country}
                </BookItemDescription>
                <BookItemDescription>
                  <Icon name="calendar" size={14} /> {item.released}
                </BookItemDescription>
              </BookItemContainerDescription>
            </BookItemContent>
          </BookItem>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    );
  };

  return (
    <SafeAreaView>
      <Container>
        {loading ? renderSkeletonBookList() : renderBookList()}
      </Container>
    </SafeAreaView>
  );
};

export default Books;
