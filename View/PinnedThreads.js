import { View, Text, StyleSheet, Dimensions } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const PinnedThreads = (props) => {

  const getThreads = (threads) => {
    return threads.map(function (thread) {
      return (
        <View style={styles.threadContainer} >

          <View style={styles.backgroundContainer}>
            <LinearGradient
              colors={['#FFFFFF00', '#FFFFFF00', '#FFFFFF00', '#'+thread.color+'33']}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.background}          
            >
            </LinearGradient>
          </View>
          <View style={styles.backgroundContainer}>
            <LinearGradient
              colors={['#FFFFFF00', '#FFFFFF00', '#FFFFFF00', '#FFFFFF00', '#'+thread.color+'33']}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.background}          
            >
            </LinearGradient>
          </View>

          <View style={styles.threadContent} >
            <Text 
              style={styles.threadTitle}
              numberOfLines={1}
            >
              {thread.title}
            </Text>
            {getBookmarks(thread.bookmarks)}
          </View>

        </View>
      );
    });
  }

  const getBookmarks = (bookmarks) => {
    return bookmarks.map(function (bookmark) {
      return (
        <View style={styles.bookmarkContainer}>
          <Text numberOfLines={1} style={styles.bookmarkDescription}>{bookmark.description}</Text>
          <Text numberOfLines={1} style={styles.bookmarkUrl}>{bookmark.url}</Text>
        </View>
      )
    })
  }

  return (
    <View style={styles.myThreadsContainer}>
      {getThreads(props.threads)}
    </View>
  )
}

const styles = StyleSheet.create({
  myThreadsContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 50,
    paddingBottom: 50,
  },
  threadContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF99",
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    // elevation: 1,
  },
  threadContent: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  threadTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
  },
  bookmarkContainer: {
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bookmarkUrl: {
    color: "blue",
    textDecorationLine: "underline",
  },
  bookmarkDescription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  backgroundContainer: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    flex: 1,
  },
});

export default PinnedThreads;