import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: '#000' }}>You've clicked the button: {count} time(s)</Text>
                    <Button onPress={onClick} style={styles.button} title = "Click Me, please!"/>
            </View>
    );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cea19b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
});