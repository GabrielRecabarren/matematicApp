import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fondo.png')}
          style={styles.fondo}
          resizeMode="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hola Aylén!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Busca un lugar cómodo.</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">Es importante estar a gusto para pasar un buen rato.</ThemedText>
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Prepárate</ThemedText>
        <ThemedText>
Se acercan desafíos. Prepárate como mejor te parezca. Anda al baño, preparate un snack. ¡Lo que necesites!        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 3: Comencemos!</ThemedText>
        <ThemedText>
          Cuando estes lista, presiona el botón que dice Start para comenzar.
        </ThemedText>
        <Button
        title='Start'
        color={"gold"}
        onPress={() => router.push('/desafio1')}

        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  fondo: {
    width:'100%',
    height:'100%'
  },
});
