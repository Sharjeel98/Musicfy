import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {
  AppImages,
  fontFamily,
  height,
  responsiveFontSize,
  width,
} from '../../assets/utilities';
import {ThemeContext} from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
const Artists = ({navigation}) => {
  const playbackState = usePlaybackState();
  const themeContent = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: themeContent.backgroundColor}}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={AppImages.artistBilly}
          resizeMode="cover"
          style={{
            width: width,
            height: height * 0.369,
            // backgroundColor: 'red',
            // borderRadius: width * 0.02,
            // marginTop: height * 0.005,
          }}>
          <ImageBackground
            source={AppImages.gradientImg}
            imageStyle={{
              tintColor: themeContent.backgroundColor,
            }}
            style={{
              width: width,
              height: height * 0.369,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: height * 0.03,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: width * 0.94,
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginBottom: height * 0.016,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  // activeOpacity={0.7}
                  onPress={() => {
                    console.log('TOUCHED ');
                    navigation.goBack();
                  }}
                  style={{
                    zIndex: 2,
                    width: width * 0.07,
                    height: width * 0.07,
                  }}>
                  <Image
                    source={AppImages.backImg}
                    style={{
                      resizeMode: 'contain',
                      width: width * 0.07,
                      height: width * 0.07,
                      tintColor: themeContent.primaryColor,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: fontFamily.appTextMedium,
                    fontSize: responsiveFontSize * 0.125,
                    color: themeContent.primaryColor,
                    marginLeft: width * 0.02,
                  }}>
                  Artists
                </Text>
              </View>

              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={AppImages.menu}
                  style={{
                    width: width * 0.08,
                    height: width * 0.08,
                    tintColor: themeContent.primaryColor,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={AppImages.playCenter}
              style={{
                width: width * 0.2,
                height: width * 0.2,
              }}
            />
            <Text
              style={{
                color: themeContent.primaryColor,
                fontSize: responsiveFontSize * 0.325,
                fontFamily: fontFamily.appTextBold,
              }}>
              Billie Eilish
            </Text>
            <Text
              style={{
                color: themeContent.isDarkMode ? '#a7a7a7' : '#949494',
                fontSize: responsiveFontSize * 0.11,
                fontFamily: fontFamily.appTextRegular,
              }}>
              3,459,02 Followers
            </Text>
            <View
              style={{
                paddingHorizontal: width * 0.15,
                paddingVertical: height * 0.006,
                borderWidth: width * 0.003,
                borderRadius: width * 0.013,
                marginTop: height * 0.01,
                borderColor: themeContent.primaryColor,
              }}>
              <Text
                style={{
                  color: themeContent.primaryColor,
                  fontSize: responsiveFontSize * 0.115,
                  fontFamily: fontFamily.appTextMedium,
                }}>
                Follow
              </Text>
            </View>
          </ImageBackground>
        </ImageBackground>
        <View>
          {themeContent.isDarkMode ? (
            <Image
              source={AppImages.topTabDarkMode}
              style={{
                width: width,
                resizeMode: 'contain',
                // backgroundColor: 'red',
                height: height * 0.034,
                marginLeft: width * 0.03,
                marginTop: height * 0.006,
                marginBottom: height * 0.02,
              }}
            />
          ) : (
            <Image
              source={AppImages.topTabLightMode}
              style={{
                width: width,
                resizeMode: 'contain',
                // backgroundColor: 'red',
                height: height * 0.034,
                marginLeft: width * 0.03,
                marginTop: height * 0.006,
                marginBottom: height * 0.02,
              }}
            />
          )}

          <View>
            <FlatList
              data={[
                {
                  img: AppImages.song1,
                  text1: 'Copycat',
                  text2: 'Single · Latest Release',
                },
                {
                  img: AppImages.song4,
                  text1: 'Ocean Eyes',
                  text2: 'Single · Latest Release',
                },
                {
                  img: AppImages.song3,
                  text1: 'Therefore I am',
                  text2: 'Album · Latest Release',
                },
                {
                  img: AppImages.song2,
                  text1: 'Bad Guy',
                  text2: 'Single · Latest Release',
                  onPress: () => {
                    navigation.navigate('NowPlaying');
                  },
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={item?.onPress}
                    style={{
                      width: width * 0.92,
                      alignSelf: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: height * 0.01,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={item?.img}
                        style={{
                          width: width * 0.165,
                          height: width * 0.165,
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'space-between',
                          marginVertical: height * 0.005,
                          marginLeft: width * 0.02,
                        }}>
                        <Text
                          style={{
                            fontFamily: fontFamily.appTextMedium,
                            fontSize: responsiveFontSize * 0.125,
                            color: themeContent.primaryColor,
                          }}>
                          {item.text1}
                        </Text>
                        <Text
                          style={{
                            fontFamily: fontFamily.appTextRegular,
                            fontSize: responsiveFontSize * 0.11,
                            color: themeContent.fixedGrayColor,
                          }}>
                          {item.text2}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {index == 3 ? (
                        <Image
                          source={
                            playbackState == 'playing'
                              ? AppImages.pauseSmall
                              : AppImages.playSmall
                          }
                          style={{
                            width: width * 0.06,
                            height: width * 0.06,
                            marginRight: width * 0.04,
                            tintColor: themeContent.primaryColor,
                          }}
                        />
                      ) : (
                        <Image
                          source={AppImages.playSmall}
                          style={{
                            width: width * 0.06,
                            height: width * 0.06,
                            marginRight: width * 0.04,
                            tintColor: themeContent.primaryColor,
                          }}
                        />
                      )}

                      <Image
                        source={AppImages.threeDots}
                        style={{
                          width: width * 0.06,
                          height: width * 0.06,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.92,
              alignSelf: 'center',
              // marginTop: height * 0.021,
              justifyContent: 'space-between',
            }}>
            <Text
              style={[styles.headingText, {color: themeContent.primaryColor}]}>
              Your Most Played
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={[
                  styles.viewAllText,
                  {color: themeContent.fixedGrayColor},
                ]}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: height * 0.009,
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                {
                  id: 1,
                  img: AppImages.mostplayed1,
                  text1: 'Save Your Tears',
                  text2: 'Single · The Weekend',
                },
                {
                  id: 2,
                  img: AppImages.mostplayed2,
                  text1: 'Love Story',
                  text2: 'Album · Taylor Swift',
                },
                {
                  id: 3,
                  img: AppImages.mostplayed1,
                  text1: 'Save Your Tears',
                  text2: 'Single · The Weekend',
                },
                {
                  id: 4,
                  img: AppImages.mostplayed2,
                  text1: 'Love Story',
                  text2: 'Album · Taylor Swift',
                },
                {
                  id: 5,
                  img: AppImages.mostplayed1,
                  text1: 'Save Your Tears',
                  text2: 'Single · The Weekend',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginLeft: width * 0.04,
                      marginRight: index == 4 ? width * 0.04 : 0,
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: width * 0.4,
                        height: height * 0.185,
                        borderRadius: width * 0.02,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: fontFamily.appTextMedium,
                        fontSize: responsiveFontSize * 0.125,
                        color: themeContent.primaryColor,
                        marginTop: height * 0.01,
                      }}>
                      {item.text1}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fontFamily.appTextRegular,
                        fontSize: responsiveFontSize * 0.102,
                        color: themeContent.fixedGrayColor,
                      }}>
                      {item.text2}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.92,
              alignSelf: 'center',
              marginTop: height * 0.021,
              justifyContent: 'space-between',
            }}>
            <Text
              style={[styles.headingText, {color: themeContent.primaryColor}]}>
              Similar Artists
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={[
                  styles.viewAllText,
                  {color: themeContent.fixedGrayColor},
                ]}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: height * 0.009,
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                {
                  id: 2,
                  img: AppImages.user2,
                  text1: 'The Weeknd',
                },
                {
                  id: 3,
                  img: AppImages.user3,
                  text1: 'Taylor Swift',
                },

                {
                  id: 5,
                  img: AppImages.user2,
                  text1: 'The Weeknd',
                },
                {
                  id: 4,
                  img: AppImages.user1,
                  text1: 'Billie Eilish',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      marginLeft: width * 0.04,
                      marginRight: index == 4 ? width * 0.04 : 0,
                      alignItems: 'center',
                    }}>
                    <View>
                      <View
                        style={{
                          width: width * 0.06,
                          height: width * 0.06,
                          borderRadius: 1000,
                          backgroundColor: themeContent.primaryColor,
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          right: -1,
                          bottom: -1,
                          zIndex: 1,
                        }}>
                        <Image
                          source={AppImages.plusIcon}
                          style={{
                            width: width * 0.035,
                            height: width * 0.035,
                            tintColor: themeContent.primaryReverseColor,
                          }}
                        />
                      </View>
                      <Image
                        source={item.img}
                        style={{
                          width: width * 0.27,
                          height: width * 0.27,
                          borderRadius: 1000,
                        }}
                      />
                    </View>

                    <Text
                      style={{
                        fontFamily: fontFamily.appTextMedium,
                        fontSize: responsiveFontSize * 0.125,
                        color: themeContent.primaryColor,
                        marginTop: height * 0.01,
                      }}>
                      {item.text1}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headingText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize * 0.148,
  },
  viewAllText: {
    fontSize: responsiveFontSize * 0.102,
    fontFamily: fontFamily.appTextMedium,
  },
});
