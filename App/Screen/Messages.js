import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Messages = () => {
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            height: '12%',
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
              <Text style={styles.textstyle}> Messages</Text>
            </View>
            <View
              style={{
                width: 41,
                height: 41,
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../assets/images/ThreeDot.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            color: 'red',
            height: '75%',
            flexDirection: 'row',
            //   backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
            }}>
            <Image
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 250,
                height: 250,
              }}
              source={require('../assets/images/Messages.png')}
            />
            <Text
              style={{
                color: '#BBBBBB',
                fontFamily: 'Poppins-Light',
                fontWeight: '500',
                lineHeight: 15,
              }}>
              Looks like you haven’t initiated a coversation with any Members.
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            width: '90%',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 60,
              backgroundColor: '#185538',
              borderRadius: 20,
              elevation: 5,
            }}>
            <TouchableOpacity>
              <Image source={require('../assets/images/NewMessage.png')} />
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
});

export default Messages;
