import React from 'react';
import me from '../img/me.png';
import Youtube from 'react-youtube';

class EPK extends React.Component {
  render(){
    const opts = {
      height: '100%',
      width: '100%',
      setPlaybackQuality:'hd1080',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return(
<div>
    <div className="youtube-container">
      <Youtube opts={opts} videoId="AMgrWRpfmAo"/>
</div>
      <div className="epk-stage">

  <img src={me} style={{position: 'absolute', right: '20%', top: 120}} alt />
  <div className="basic-details">
    <div className="main-title">
      <div className="social-icons">
        <a href="http://twitter.com/oxilomusic"><i className="fa fa-twitter" /></a>
        <a href="http://facebook.com/oxilofficial"><i className="fa fa-facebook" /></a>
        <a href="http://instagram.com/oxilomusic"><i className="fa fa-instagram" /></a>
        <a href="http://oxilomusic.com"><i className="fa fa-globe" /></a>
        <a href="http://soundcloud.com/oxilo"><i className="fa fa-soundcloud" /></a>
      </div>
      <hr style={{width: '100%', borderColor: '#fff'}} />
      Oxilo<br /><hr style={{width: '100%', borderColor: '#fff'}} />

      <div className="details">
        <span>OXILO:</span> Dex Honsa<br />
        <span>Email:</span> oxilomusic@gmail.com<br />
        <span>Location:</span> Palm Desert, CA<br />
        <span>DAWS:</span> FL Studio<br />
        <span>Dj Rig:</span> Pioneer CDJ Nexus 2000<br /><br />
        <span>Management:</span> Adam Schifano<br />
        <span>Email:</span> oxilomgmt@gmail.com<br />
        <span>Phone:</span> 760.485.1283<br /><br />
        <strong>Producing for 12 Years <br />
          DJ for 2 Years</strong>
      </div>
    </div>
  </div>
  <div className="slanted">
  </div>
  <div className="rest">
    <div className="container">
      <div className="row">
        <div className="col-sm-6" style={{marginTop: 100}}>
          <div className="title-1">2017 noteworthy Accomplishments</div>
          <ul>
            <li>Chainsmokers private invite backstage Las Vegas experience result from success of Tropix remix of My Type. They also reposted 3 of Dex’s songs on Soundcloud.</li>
            <li>Nest HQ (Skrillex Ran)song featured in playlist </li>
            <li>Trap City Youtube Premiere</li>
            <li>Trap Nation Youtube Premiere</li>
            <li>Official Remix release for Win &amp; Woo’s Chicago</li>
            <li>6 Hypemachine Write Ups</li>
            <li>Time Well Wasted OXILO Original signed to TMH Label</li>
          </ul>
          <div className="title-1">2017 played venues</div>
          <ul>
            <li>The Bart Lounge, Cathedral City, CA</li>
            <li>The Date Shed, Coachella, CA</li>
            <li>The Hood, Palm Desert, CA</li>
            <li>Vestal Village, Indio, CA</li>
            <li>Zeldas Nightclub, Palm Springs, CA</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="title-1">Bio</div>
          Dex Honsa aka OXILO exploded on EDM Soundcloud scene releasing over 20 tracks in 2017 totaling to 1.5million plays. Dex’s style varies within EDM genres, exploring new progressive sounds in future bass and chill genres; bringing out good feelings with full sounding synths,unforgettable sustained drops, and inspiring upbeat melodies. Dex has popped up on many successful artist’s radars this year. Already, Dex has been endorsed and supported by some of the biggest names in the electronic music dance scene including: The Chainsmokers, Win &amp; Woo, Pegboard Nerds, Andrew Luce, Lucian, Lost Kings, CHEAT CODES, Two Friends, Party Thieves, TelyKast, Milk N Cooks, Lauv, to name a few! In July 2017 Dex also joined the producer duo Tropix along with Dylan Christie, resulting in the release of 4 songs all reaching the #1 on New &amp; Hot Dance/EDM and Top 50 Soundcloud Charts, and totaling to 1 million plays. Dex is an extremely talented when it comes to making music. He has a magical musical ear, this ability allows him to hear any song that’s playing and be able to play it flawlessly on the piano, guitar, or recreating the sound in a DAWS. oh and he sings too.
        </div>
      </div>
      <div className="row" style={{marginTop: 50}}>
        <div className="col-sm-12">
          <div className="title-1">discography</div>
          <a href="https://soundcloud.com/tropixremixes/nopromises"><div className="discography-item">
            <div className="disco-number">1.</div>
            <div className="disco-title">Cheat Codes feat. Demi Lovato - No Promises (Tropix Remix)<br />
              <div className="disco-details">
                Released Aug 06 2017 <i className="fa fa-play" /> 321K <i className="fa fa-heart" /> 10.2K <i className="fa fa-retweet" /> 1,804
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixremixes/mytype"><div className="discography-item">
            <div className="disco-number">2.</div>
            <div className="disco-title">The Chainsmokers - My Type (Tropix Remix)<br />
              <div className="disco-details">
                Released: Aug 30 2017 <i className="fa fa-play" /> 309K <i className="fa fa-heart" /> 11.3K <i className="fa fa-retweet" /> 1,908
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixremixes/outoflove"><div className="discography-item">
            <div className="disco-number">3.</div>
            <div className="disco-title">Two Friends - Out of Love (Tropix &amp; Oxilo Remix)<br />
              <div className="disco-details">
                Released July 07 2017 <i className="fa fa-play" /> 252K <i className="fa fa-heart" /> 9,023 <i className="fa fa-retweet" /> 1,954
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixremixes/chicago"><div className="discography-item">
            <div className="disco-number">4.</div>
            <div className="disco-title">Win &amp; woo X Bryan Fox - Chicago (tropix remix)<br />
              <div className="disco-details">
                Released Sept 09 2017 <i className="fa fa-play" /> 230K <i className="fa fa-heart" /> 9,819 <i className="fa fa-retweet" /> 2,144
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/gryffin-illenium-feel-good-ft-daya-oxilo-remix"><div className="discography-item">
            <div className="disco-number">5.</div>
            <div className="disco-title">Gryffin &amp; Illenium - Feel Good ft. Daya (OXilo Remix)<br />
              <div className="disco-details">
                Released Apr 22 2017 <i className="fa fa-play" /> 184K <i className="fa fa-heart" /> 7,630 <i className="fa fa-retweet" /> 2,450
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixremixes/thereforyou"><div className="discography-item">
            <div className="disco-number">6.</div>
            <div className="disco-title">TELYKast - There For You (Tropix Remix)<br />
              <div className="disco-details">
                Released Mar 04 2017 <i className="fa fa-play" /> 160K <i className="fa fa-heart" /> 5,458 <i className="fa fa-retweet" /> 1,325
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/zedd-alessia-cara-stay-oxilo-remix"><div className="discography-item">
            <div className="disco-number">7.</div>
            <div className="disco-title">Zedd, Alessia Cara - Stay (oxilo Remix)<br />
              <div className="disco-details">
                Released Mar 04 2017 <i className="fa fa-play" /> 155K <i className="fa fa-heart" /> 3,547 <i className="fa fa-retweet" /> 1,038
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixofficial/sets/goodthing"><div className="discography-item">
            <div className="disco-number">8.</div>
            <div className="disco-title">Tritonal feat. Laurell - Good Thing (Tropix Remix)<br />
              <div className="disco-details">
                Released Nov 30 2017 <i className="fa fa-play" /> 114K <i className="fa fa-heart" /> 3,365 <i className="fa fa-retweet" /> 801
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/teflon-sega-press-play-and-escape-oxilo-remix"><div className="discography-item">
            <div className="disco-number">9.</div>
            <div className="disco-title">Teflon Sega - Press play &amp; Escape (Oxilo Remix)<br />
              <div className="disco-details">
                Released Aug 30 2017 <i className="fa fa-play" /> 111K <i className="fa fa-heart" /> 3,965 <i className="fa fa-retweet" /> 990
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/oxilo-time-well-wasted"><div className="discography-item">
            <div className="disco-number">10.</div>
            <div className="disco-title">Oxilo - Time Well Wasted<br />
              <div className="disco-details">
                Released Oct 06 2016 <i className="fa fa-play" /> 72K <i className="fa fa-heart" /> 4,113 <i className="fa fa-retweet" /> 1,296
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/wait-it-out"><div className="discography-item">
            <div className="disco-number">11.</div>
            <div className="disco-title">Oxilo - Wait it Out<br />
              <div className="disco-details">
                Released Nov 05 2017 <i className="fa fa-play" /> 44.1K <i className="fa fa-heart" /> 2,125 <i className="fa fa-retweet" /> 1,297
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/tropixremixes/nopromises"><div className="discography-item">
            <div className="disco-number">12.</div>
            <div className="disco-title">Justin Bieber - Love yourself (oxilo Remix)<br />
              <div className="disco-details">
                Released Oct 05 2016 <i className="fa fa-play" /> 44.4K <i className="fa fa-heart" /> 2,309 <i className="fa fa-retweet" /> 1,297
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/xuitcasecity-need-somebody-oxilo-remix"><div className="discography-item">
            <div className="disco-number">13.</div>
            <div className="disco-title">XUITCaseCity - Need somebody (oxilo remix)<br />
              <div className="disco-details">
                Released Oct 10 2017 <i className="fa fa-play" /> 46.3K <i className="fa fa-heart" /> 2,039 <i className="fa fa-retweet" /> 550
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/kaivon-feel-ft-danel-oxilo-remix"><div className="discography-item">
            <div className="disco-number">14.</div>
            <div className="disco-title">Kaivon - Feel ft. Danel (oxilo Remix)<br />
              <div className="disco-details">
                Released Jun 05 2017 <i className="fa fa-play" /> 43.1K <i className="fa fa-heart" /> 2,173 <i className="fa fa-retweet" /> 643
              </div>
            </div>
          </div></a>
          <a href="https://soundcloud.com/oxilo/lincoln-jesser-ft-yuna-baby-boy-oxilo-remix"><div className="discography-item">
            <div className="disco-number">15.</div>
            <div className="disco-title">Lincoln Jesser - baby boy ft yuna (oxilo remix)<br />
              <div className="disco-details">
                Released Jan 17 2017 <i className="fa fa-play" /> 24.9K <i className="fa fa-heart" /> 1,146 <i className="fa fa-retweet" /> 465
              </div>
            </div>
          </div></a>
        </div>
      </div>
      <div style={{height: 300}} />
    </div>
  </div>
</div>
</div>

    );
  }
}
export default EPK;
