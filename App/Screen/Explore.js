import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Explore = () => {
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            height: 110,
            alignItems: 'center',
            backgroundColor: '#26362E',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <View
            style={{
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.textstyle}> Hey, User!</Text>
              <Text style={styles.textstyle1}>
                Enjoy in this lovely community
              </Text>
            </View>
            <View
              style={{
                width: 41,
                height: 41,
                backgroundColor: 'rgba(196, 196, 196, 0.15)',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../assets/images/Notification.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              marginTop: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.boxStyle}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../assets/images/briefcase.png')} />
                <Text
                  style={{
                    color: '#68AF8E',
                    marginTop: 5,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Businesses
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
              <TouchableOpacity style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
              <Image source={require('../assets/images/Team.png')} />
              <Text
                style={{
                  color: '#68AF8E',
                  marginBottom: 2,
                  fontFamily: 'Poppins-Bold',
                }}>
                Members
              </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
            <TouchableOpacity style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
              <Image source={require('../assets/images/Couple.png')} />
              <Text
                style={{
                  color: '#68AF8E',
                  marginTop: 5,
                  fontFamily: 'Poppins-Bold',
                }}>
                Jivan Sathi
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 24,
    lineHeight: 36,
    color: '#E1F9ED',
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  textstyle1: {
    fontSize: 14,
    lineHeight: 21,
    color: '#68AF8E',
    fontWeight: '400',
    fontFamily: 'Poppins-Bold',
  },
  boxStyle: {
    width: '30%',
    height: 112,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Explore;
