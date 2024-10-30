import React from 'react';
import { Heading, Text, Center, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const NewsDetail = () => {
  const route = useRoute();
  const { image, date, title, content } = route.params;

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <Center flex={1}>
          <Box mb="$4">
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: '100%', height: 200 }}
                alt="Gambar Berita"
                mb="$2"
              />
            ) : (
              <Text>Tidak ada gambar</Text> // Fallback jika gambar tidak tersedia
            )}
            <Text fontSize="$xs" color="$textLight300">
              {date}
            </Text>
            <Heading fontSize="$lg" lineHeight="$md">
              {title}
            </Heading>
            <Text mt="$2" fontSize="$sm" color="$textLight500">
              {content}
            </Text>
          </Box>
        </Center>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
