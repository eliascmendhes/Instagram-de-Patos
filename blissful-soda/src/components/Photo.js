import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

//}{ } [ ]
const Photo = ({file, count}) => {
  const [like, setLike] = useState(count);

  const increment = () => {
    setLike(like + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Image
        style={styles.image}
        source={file}></Image>
      <TouchableOpacity onPress={increment}>
        <Text>  {like} like</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: '#00F100',
  },
  image: {
    height: 180,
    width: 180,
  },
});
export default Photo;
