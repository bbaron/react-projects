import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Stairway to heaven", duration: "8:02" },
    { title: "Smoke on the water", duration: "5:41" },
    { title: "Carry on wayward son", duration: "5:26" },
    { title: "Smoke from a distant fire", duration: "3:30" }
  ];
};

const NO_SONG = { title: "Select a song", duration: "0:00" };
const selectedSongReducer = (selectedSong = NO_SONG, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
