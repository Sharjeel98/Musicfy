// IMAGES (PNG/JPG etc)
import {Dimensions} from 'react-native';
const IMAGE_DIR = '../images/';

// IMAGES

const AppImages = {
  backImg: require(IMAGE_DIR + 'backImg.png'),
  backward: require(IMAGE_DIR + 'backward.png'),
  dropDown: require(IMAGE_DIR + 'dropDown.png'),
  forward: require(IMAGE_DIR + 'forward.png'),
  freshTrack: require(IMAGE_DIR + 'freshTrack.png'),
  heartSmall: require(IMAGE_DIR + 'heartSmall.png'),
  homeTab: require(IMAGE_DIR + 'homeTab.png'),
  libraryTab: require(IMAGE_DIR + 'libraryTab.png'),
  menu: require(IMAGE_DIR + 'menu.png'),
  mostplayed1: require(IMAGE_DIR + 'mostplayed1.png'),
  mostplayed2: require(IMAGE_DIR + 'mostplayed2.png'),
  pauseSmall: require(IMAGE_DIR + 'pauseSmall.png'),
  playBar: require(IMAGE_DIR + 'playBar.png'),
  playCenter: require(IMAGE_DIR + 'playCenter.png'),
  playSmall: require(IMAGE_DIR + 'playSmall.png'),
  profileTab: require(IMAGE_DIR + 'profileTab.png'),
  repeat: require(IMAGE_DIR + 'repeat.png'),
  searchTab: require(IMAGE_DIR + 'searchTab.png'),
  shareImg: require(IMAGE_DIR + 'shareImg.png'),
  shuffle: require(IMAGE_DIR + 'shuffle.png'),
  song1: require(IMAGE_DIR + 'song1.png'),
  song2: require(IMAGE_DIR + 'song2.png'),
  song3: require(IMAGE_DIR + 'song3.png'),
  song4: require(IMAGE_DIR + 'song4.png'),
  threeDots: require(IMAGE_DIR + 'threeDots.png'),
  user1: require(IMAGE_DIR + 'user1.png'),
  user2: require(IMAGE_DIR + 'user2.png'),
  user3: require(IMAGE_DIR + 'user3.png'),
  plusIcon: require(IMAGE_DIR + 'plusIcon.png'),
  groupBilly: require(IMAGE_DIR + 'groupBilly.png'),
  artistBilly: require(IMAGE_DIR + 'artistBilly.png'),
  topTabDarkMode: require(IMAGE_DIR + 'topTabDarkMode.png'),
  topTabLightMode: require(IMAGE_DIR + 'topTabLightMode.png'),
  gradientImg: require(IMAGE_DIR + 'gradientImg.png'),
  dummy1: require(IMAGE_DIR + 'dummy1.png'),
  dummy2: require(IMAGE_DIR + 'dummy2.png'),
  dummy3: require(IMAGE_DIR + 'dummy3.png'),
  dummy4: require(IMAGE_DIR + 'dummy4.png'),
  realPlay: require(IMAGE_DIR + 'realPlay.png'),
  playIconnow: require(IMAGE_DIR + 'playIconnow.png'),
};

// SVGS

// import whiteLogo from '../icons/whiteLogo.svg';

const SvgIcons = {
  // whiteLogo,
};

// FONT FAMILY

const fontFamily = {
  appTextRegular: 'Poppins-Regular',
  appTextSemibold: 'Poppins-SemiBold',
  appTextBold: 'Poppins-Bold',
  appTextMedium: 'Poppins-Medium',
  appTextLight: 'Poppins-Light',
};

// COLORS

const colors = {
  // appPrimary: '#848489',
  // appBlack: '#25282A',
  // appCyan: '#A1E6E0',
  // appGreen: '#8CD47E',
  // appRed: '#FF6961',
  // appSolidBlack: '#000',
  // appSolidWhite: '#fff',
};

// DIMENSIONS

// ACCORDING TO WINDOW HEIGHT / WIDTH ( NORMAL USAGE )

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const responsiveFontSize = (height + width) / 10;

// ACCORDING TO SCREEN HEIGHT / WIDTH ( USE WHEN NEEDED )

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('window').height;
const responsiveScreenFontSize = (screenHeight + screenWidth) / 10;

const apiUtility = {
  // baseURL: "http://192.168.18.88:8000/api",  // local
  // imageURL:"http://192.168.18.88:8000/images/" // local
};

export {
  AppImages,
  SvgIcons,
  fontFamily,
  colors,
  apiUtility,
  width,
  height,
  responsiveFontSize,
};
