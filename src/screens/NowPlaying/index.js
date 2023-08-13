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
  ProgressViewIOS,
  ProgressBarAndroid,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  AppImages,
  fontFamily,
  height,
  responsiveFontSize,
  width,
} from '../../assets/utilities';
import {ThemeContext} from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  Capability,
  useProgress,
} from 'react-native-track-player';
import Sound from 'react-native-sound';
const NowPlaying = ({navigation}) => {
  const playbackState = usePlaybackState();
  const {position, duration} = useProgress();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleReset = async () => {
    if (position == duration) {
      await TrackPlayer.seekTo(0);
    }
  };
  const handleTrackEnd = useCallback(async () => {
    // setTimeout(async () => {
    await TrackPlayer.pause();
    await TrackPlayer.seekTo(0);
    // }, 1000);
    // await TrackPlayer.pause();
  }, []);

  useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-queue-ended',
      handleTrackEnd,
    );
    return () => {
      listener.remove();
    };
  }, [handleTrackEnd]);

  useEffect(() => {
    // TrackPlayer.setupPlayer().then(() => {
    TrackPlayer.add({
      id: 'trackId',
      url: require('../../assets/sounds/badguy.mp3'), // Replace with your audio URL
      title: 'Track Title',
      artist: 'Track Artist',
      // artwork: 'track-artwork.jpg', // Replace with your artwork image URL
    }).then(() => {
      TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
    });
    // });

    // return async () => {
    //   await TrackPlayer.pause();
    // };
  }, []);

  const togglePlay = async () => {
    if (playbackState === 'playing') {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      secs < 10 ? '0' : ''
    }${secs}`;
  };
  const themeContent = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: themeContent.backgroundColor}}>
      <ScrollView
        bounces={false}
        scrollEnabled={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={AppImages.groupBilly}
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
              // justifyContent: 'flex-end',
              paddingBottom: height * 0.03,
              paddingTop: height * 0.055,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: width * 0.94,
                alignSelf: 'center',
                justifyContent: 'space-between',
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
                  Now Playing
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    source={AppImages.shareImg}
                    style={{
                      width: width * 0.06,
                      height: width * 0.06,
                      tintColor: themeContent.primaryColor,
                      marginRight: width * 0.05,
                    }}
                  />
                </TouchableOpacity>
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
            </View>
          </ImageBackground>
        </ImageBackground>
        <View>
          {/* <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: -height * 0.045,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                fontSize: responsiveFontSize * 0.13,
                color: themeContent.fixedGrayColor,
              }}>
              So you're a tough guy
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                fontSize: responsiveFontSize * 0.13,
                color: themeContent.primaryColor,
                marginVertical: height * 0.012,
              }}>
              Like it really rough guy
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                fontSize: responsiveFontSize * 0.13,
                color: themeContent.fixedGrayColor,
              }}>
              Just can't get enough guy
            </Text>
          </View>
          <Image
            style={{
              width: width * 0.035,
              height: width * 0.035,
              resizeMode: 'contain',
              tintColor: themeContent.fixedGrayColor,
              alignSelf: 'center',
              marginTop: height * 0.02,
            }}
            source={AppImages.dropDown}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // marginTop: height * 0.05,
              marginTop: height * 0.14,

              width: width * 0.92,
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: fontFamily.appTextBold,
                  fontSize: responsiveFontSize * 0.165,
                  color: themeContent.primaryColor,
                }}>
                Bad Guy
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.appTextRegular,
                  fontSize: responsiveFontSize * 0.118,
                  color: themeContent.fixedGrayColor,
                }}>
                Billie Eilish · Single · 3,459,02 Hearts
              </Text>
            </View>
            <Image
              source={AppImages.heartSmall}
              style={{
                resizeMode: 'contain',
                width: width * 0.07,
                height: width * 0.07,
              }}
            />
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.92,
              alignSelf: 'center',
              marginTop: height * 0.02,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                fontSize: responsiveFontSize * 0.105,
                color: themeContent.fixedGrayColor,
              }}>
              00 : 00
            </Text>
            <View
              style={{
                height: height * 0.004,
                width: width * 0.65,
                backgroundColor: themeContent.fixedGrayColor,
                borderRadius: 1000,
              }}
            />
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                fontSize: responsiveFontSize * 0.105,
                color: themeContent.fixedGrayColor,
              }}>
              03 : 24
            </Text>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.92,
              alignSelf: 'center',
              marginTop: height * 0.022,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                fontSize: responsiveFontSize * 0.105,
                color: themeContent.fixedGrayColor,
                width: width * 0.1,
                textAlign: 'center',
              }}>
              {formatTime(position)}
            </Text>
            {duration > 0 ? (
              Platform.OS === 'ios' ? (
                <ProgressViewIOS
                  progress={position / duration}
                  progressTintColor={themeContent.primaryColor}
                  style={{width: '70%'}}
                  trackTintColor={themeContent.fixedGrayColor}
                  progressTintColor={themeContent.primaryColor}
                />
              ) : (
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={position / duration}
                  color={themeContent.primaryColor}
                  style={{width: '70%'}}
                />
              )
            ) : (
              <View
                style={{
                  height: height * 0.004,
                  width: width * 0.65,
                  backgroundColor: '#a7a7a7',
                  borderRadius: 1000,
                }}
              />
            )}
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                fontSize: responsiveFontSize * 0.105,
                color: themeContent.fixedGrayColor,
                width: width * 0.1,
                textAlign: 'center',
              }}>
              {formatTime(duration)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.7,
              alignSelf: 'center',
              marginTop: height * 0.05,
              alignItems: 'center',
            }}>
            <Image
              source={AppImages.shuffle}
              style={{
                resizeMode: 'contain',
                width: width * 0.072,
                height: width * 0.072,
              }}
            />
            <Image
              source={AppImages.backward}
              style={{
                resizeMode: 'contain',
                width: width * 0.045,
                height: width * 0.045,
                tintColor: themeContent.primaryColor,
              }}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                togglePlay();
              }}
              style={{
                width: width * 0.12,
                height: width * 0.12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: themeContent.primaryColor,
                borderRadius: 1000,
              }}>
              <Image
                source={
                  playbackState === 'playing'
                    ? AppImages.pauseSmall
                    : AppImages.playIconnow
                }
                style={{
                  resizeMode: 'contain',
                  width:
                    playbackState === 'playing' ? width * 0.07 : width * 0.09,
                  height:
                    playbackState === 'playing' ? width * 0.07 : width * 0.09,
                  tintColor: themeContent.primaryReverseColor,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={async () => {
                await TrackPlayer.seekTo(200);
              }}>
              <Image
                source={AppImages.forward}
                style={{
                  resizeMode: 'contain',
                  width: width * 0.045,
                  height: width * 0.045,
                  tintColor: themeContent.primaryColor,
                }}
              />
            </TouchableOpacity>

            <Image
              source={AppImages.repeat}
              style={{
                resizeMode: 'contain',
                width: width * 0.072,
                height: width * 0.072,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: themeContent.primaryReverseColor,
              borderRadius: width * 0.07,
              paddingTop: height * 0.02,
              marginTop: height * 0.11,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}>
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
                style={[
                  styles.headingText,
                  {
                    color: themeContent.primaryColor,
                    marginBottom: height * 0.02,
                  },
                ]}>
                Up Next
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
            <FlatList
              data={[
                {
                  img: AppImages.song1,
                  text1: 'Copycat',
                  text2: 'Single · Latest Release',
                },
                {
                  img: AppImages.song2,
                  text1: 'Ocean Eyes',
                  text2: 'Single · Latest Release',
                },
                {
                  img: AppImages.song3,
                  text1: 'Therefore I am',
                  text2: 'Album · Latest Release',
                },
                {
                  img: AppImages.song4,
                  text1: 'Bad Guy',
                  text2: 'Single · Latest Release',
                },
              ]}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('NowPlaying');
                    }}
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
                      <Image
                        source={AppImages.playSmall}
                        style={{
                          width: width * 0.06,
                          height: width * 0.06,
                          marginRight: width * 0.04,
                        }}
                      />
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
        </View>
      </ScrollView>
    </View>
  );
};

export default NowPlaying;

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
