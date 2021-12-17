import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Profile = () => {
  return (
    <>
      <View style={{width: '100%', alignItems: 'center'}}>
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
              <Text style={styles.textstyle}>My Profile</Text>
              <Text style={styles.textstyle1}>
                Enjoy in this lovely community
              </Text>
            </View>
            <View
              style={{
                width: 102,
                height: 41,
                backgroundColor: 'rgba(196, 196, 196, 0.15)',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  top: 8,
                  left: 20,
                }}>
                <Image source={require('../assets/images/Menu1.png')} />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    left: 25,
                    bottom: 23,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  <Text style={{fontFamily: 'Poppins-Bold', color: '#E1F9ED'}}>
                    Menu
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              left: 22,
              width: '100%',
              height: '100%',
            }}>
            <Image source={require('../assets/images/ProfilePic.png')} />
            <View
              style={{
                height: '35%',
                width: '60%',
                left: 20,
                bottom: 25,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 20,
                  color: '#E1F9ED',
                }}>
                Islam Imamuddin Luhar
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: 14,
                  color: '#68AF8E',
                }}>
                9825230115
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: 14,
                  color: '#68AF8E',
                }}>
                info@agwanmotors.com
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center', width:'49%'}}>
            <Image source={require('../assets/icons/date.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Birth Date
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              01/02/1968
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center', width: '49%'}}>
            <Image source={require('../assets/icons/blood.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Blood Group
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              AB+
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center' ,width: '49%'}}>
            <Image source={require('../assets/icons/education.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Education
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              8th Pass
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center' ,width: '49%' }}>
            <Image source={require('../assets/icons/occupation.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Occupation
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              Bussiness
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center' ,width: '49%'}}>
            <Image source={require('../assets/icons/occupation.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Sub Cost
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              Agwan
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center' ,width: '49%'}}>
            <Image source={require('../assets/icons/occupation.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Native Village
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{width:'48%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              Dyodhi
            </Text>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center', width:'49%'}}>
            <Image source={require('../assets/icons/occupation.png')} />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#527C94',
                fontSize: 14,
              }}>
              Address
            </Text>
          </View>
          <Text style={{fontSize: 14, color: '#527C94'}}>:</Text>
          <View style={{height: 100, width: '50%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                color: '#68AF8E',
                fontSize: 14,
              }}>
              116/A-1 Jannat Bunglow, Palanpur Road, Opp. Adarsh school,
              Savgadh, Sabarkantha-383001, Gujarat.
            </Text>
          </View>
        </View>
        <View style={{marginTop: 80, width: '90%'}}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'rgba(104, 175, 142, 0.2)',
            }}
          />
        </View>
        <View
          style={{
            width: '90%',
            marginTop: 30,
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
                <Image source={require('../assets/images/family.png')} />
                <Text
                  style={{
                    color: '#68AF8E',
                    marginTop: 5,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  My Family
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../assets/images/business.png')} />
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
  detailStyle: {
    width: '90%',
    height: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red'
  },
  boxStyle: {
    width: '45%',
    height: 112,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
});

export default Profile;
