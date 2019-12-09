import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import moment from 'moment';

import styles from './styles';

const ModalDetail = (props) => {
  const { name, startDate, endDate, description, photos, bloodCamp } = props.item
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{`${moment(startDate).format('DD.MM.YYYY')} - ${moment(endDate).format('DD.MM.YYYY')}`}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.date, { marginTop: 20 }]}>Photos</Text>
        <ScrollView horizontal style={styles.imageList}>
          {photos.map(photo => (
            <Image source={{ uri: photo.url }} style={{ width: 180, height: 100 }} key={photo._id} />
          ))}
        </ScrollView>
        <Text style={styles.date}>
          Take place in <Text style={styles.campName} onPress={props.handlePressLocation}>{bloodCamp.name}</Text>
        </Text>
      </View>
    </View>)
}

export default ModalDetail;