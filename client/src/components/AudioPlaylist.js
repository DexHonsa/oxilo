/* eslint react/prop-types: 0 */
import React from 'react';
import { Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';
import feel_good_art from '../img/feelgood.jpg';
import time_art from '../img/timeWellWasted.jpg';
import teflon_art from '../img/teflon3.jpg';
import need_art from '../img/XuitcaseCity_need_somebody.jpg';
import wait_art from '../img/wait_it_out_art.jpg';

import teflon_music from '../music/teflon.mp3';
import feel_good_music from '../music/feel_good.mp3';
import time_music from '../music/time.mp3';
import need_music from '../music/need.mp3';
import wait_music from '../music/wait.mp3';



const AudioPlaylist = () => (
  <JPlaylist className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Previous><i className="fa fa-step-backward" /></Previous>
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Next><i className="fa fa-step-forward" /></Next>
        <Repeat>
          <i className="fa">{/* Icon set in css*/}</i>
          <i className="fa fa-repeat" />
        </Repeat>
        <Shuffle><i className="fa fa-random" /></Shuffle>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-playlist-container">
          <Playlist>
            <Remove />
            <MediaLink>
              <PlaylistTitle />
            </MediaLink>
          </Playlist>
          <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlaylist>
);

const options = {
  id: 'AudioPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      title: 'Wait It Out',
      artist: 'Oxilo',
      sources: {
        mp3: wait_music

      },
      poster:wait_art,
      free: true,
    },
    {
      title: 'XUITCASECITY - Need Somebody (OXILO Remix)',
      artist: 'Oxilo',
      sources: {
        mp3: need_music

      },
      poster:need_art,
      free: true,
    },

    {
      title: 'Teflon Sega - Press Play and Escape (OXILO Remix)',
      artist: 'Oxilo',
      sources: {
        mp3: teflon_music

      },
      poster:teflon_art,
      free: true,
    },
    {
      title: 'Gryffin & Illenium-Feel Good ft. Daya (OXILO Remix)',
      artist: 'Oxilo',
      sources: {
        mp3: feel_good_music,

      },
      poster:feel_good_art,
      free: true,
    },
    {
      title: 'Time Well Wasted',
      artist: 'Oxilo',
      sources: {
        mp3: time_music

      },
      poster: time_art,
      free: true,
    },
  ],
};

export default connect(AudioPlaylist, options, jPlaylistOptions);
