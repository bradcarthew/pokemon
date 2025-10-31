import { StyleSheet, ActivityIndicator, View } from "react-native"

export const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer} testID={'loading-indicator'}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center'
  }
});