import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
//}{ } [ ]

const Logo = () => {
  return <Text style={styles.Logo}>InstaCat</Text>;
};

const styles = StyleSheet.create({
  Logo: {
    alignSelf: 'center', // alinha o elemento no centro
    marginVertical: 20, // faz um alinhamento vertical
  },
});

export default Logo;
