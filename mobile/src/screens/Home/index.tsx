import { Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../componentes/Heading';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameCard, GameCardProps } from '../../componentes/GameCard';
import { GAMES } from '../../utils/games';
import { Background } from '../../componentes/Background';
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('SERVER IP:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu suo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />

      </SafeAreaView>
    </Background>
  );
}
