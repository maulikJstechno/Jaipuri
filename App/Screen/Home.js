import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = () => {
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            height: 250,
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
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              marginTop: 16,
            }}
          />
          <View
            style={{
              width: '90%',
              height: 90,
              backgroundColor: 'rgba(196, 196, 196, 0.15)',
              marginTop: 20,
              borderRadius: 5,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.textStyle2}>7002</Text>
              <Text style={styles.textStyle3}>Total Population</Text>
            </View>
            <View>
              <Text style={styles.textStyle4}>2,100K</Text>
              <Text style={styles.textStyle5}>Total Donation</Text>
            </View>
          </View>
          <View
            style={{
              height: 74,
              borderRightWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              bottom: 82,
            }}
          />
          <View style={{
              width: '95%',
              height: 200,
              marginBottom: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',}}>
            <Swiper style={styles.wrapper} autoplay = {true} >
              <View>
                <Image source={require("../assets/images/Slider1.png")} />
              </View>
              <View>
              <Image source={require("../assets/images/Slider2.jpg")} />
              </View>
              <View>
              <Image source={require("../assets/images/Slider1.png")} />
              </View>
            </Swiper>
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
  textStyle2: {
    color: '#E1F9ED',
    top: 25,
    right: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 33,
  },
  textStyle3: {
    color: '#68AF8E',
    top: 15,
    right: 50,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 36,
  },
  textStyle4: {
    color: '#E1F9ED',
    top: 25,
    left: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 33,
  },
  textStyle5: {
    color: '#68AF8E',
    top: 15,
    left: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 36,
  },
});

export default Home;
