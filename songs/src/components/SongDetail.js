import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  song: state.selectedSong
});

const SongDetail = ({ song }) => {
  return (
    <div>
      {/*<h3>Details for:</h3>*/}
      <table className="ui definition unstackable small basic table">
        <caption className="ui">Details</caption>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{song.title}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{song.duration}</td>
          </tr>
        </tbody>
      </table>
      {/*<dt>Title</dt>*/}
      {/*<dd>{song.title}</dd>*/}
      {/*<dt>Duration</dt>*/}
      {/*<dd>{song.duration}</dd>*/}
    </div>
  );
};

export default connect(mapStateToProps)(SongDetail);
