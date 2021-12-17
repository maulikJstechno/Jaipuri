import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';

const Messages = () => {
    const userdata = [
        {
            id: '1',
            userName: 'Shane',
            userImg : require('../assets/images/user.png'),
            howManyMsg: "5",
            messageTime:'11:23 pm',
            messageText: 'Shane : Haha oh man'
        },
        {
            id: '2',
            userName: 'Francisco',
            userImg : require('../assets/images/user1.png'),
            howManyMsg: "5",
            messageTime:'12:01 pm',
            messageText: 'Francisco : omg, this is amazing'
        },
        {
            id: '3',
            userName: 'Philip',
            userImg : require('../assets/images/user2.png'),
            howManyMsg: "5",
            messageTime:'Yesterday',
            messageText: 'You : perfect!'
        },
        {
            id: '4',
            userName: 'Jorge',
            userImg : require('../assets/images/user3.png'),
            howManyMsg: "5",
            messageTime:'07/11/21',
            messageText: 'You : Haha thats terrifying 😂'
        },
        {
            id: '5',
            userName: 'Floyd',
            userImg : require('../assets/images/user4.png'),
            howManyMsg: "5",
            messageTime:'15/08/21',
            messageText: 'Floyed : woohoooo'
        },
        {
            id: '6',
            userName: 'Ronald',
            userImg : require('../assets/images/user5.png'),
            howManyMsg: "5",
            messageTime:'12/06/20',
            messageText: 'Ronald : Wow, this is really epic'
        },
    ]
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            height: 112,
            alignItems: 'center',
            backgroundColor: '#26362E',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <View
            style={{
              width: '90%',
              marginTop: '10%',
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
        <View>
           <FlatList 
            data={userdata}
            keyExtractor={item => item.id }
            renderItem={({item})=>(
                <View>
                    <Text>{item.userName}</Text>
                </View>
            )}
           />
        </View>
        
        {/* <View
          style={{
            alignItems: 'flex-end',
            justifyContent:'flex-end',
            width: '90%',
            height:'80%'
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
        </View> */}
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
