import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import moment from 'moment';

import styles from './styles';

const ModalDetail = (props) => {
  const { name, startDate, endDate, description, photos, bloodCamp } = props.item
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{`${moment(startDate).format('DD.MM.YYYY')} - ${moment(endDate).format('DD.MM.YYYY')}`}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.date, { marginTop: 20 }]}>Photos</Text>
        <FlatList
          data={photos}
          renderItem={_renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
          style={styles.imageList}
        />
        <Text style={styles.date}>
          Take place in <Text style={styles.campName} onPress={props.handlePressLocation}>{bloodCamp.name}</Text>
        </Text>
      </View>
    </View>)
}

_renderItem = ({ item }) => {
  return (
    <Image source={{ uri: item.url }} style={{ width: '50%', height: 120, marginRight: 5, marginBottom: 5 }} />
  )
}

export default ModalDetail;