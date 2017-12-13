import React from 'react';
import {connect} from 'react-redux';

import ReactLoading from 'react-loading';
import $ from 'jquery';
import Header from './header';
import teflon from '../img/teflon.png';
import feel from '../img/feel_good.png';
import time from '../img/time_well_wasted.png';
import need from '../img/need_somebody.png';
import wait from '../img/wait_it_out.png';
import Particles from 'react-particles-js';

import '../js/script.js';

class Main extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(function() {
      $('.loading').removeClass('fadeIn').addClass('fadeOut');
    }, 0)

  }
  playMusic(e, id) {
    var attr = e.target.id;

    console.log(attr);
    if (attr != '') {

      if ($('#AudioPlaylist').hasClass('jp-state-playing')) {
        if ($('#' + attr + ' i').hasClass('fa-pause')) {
          $('#' + attr + ' i').removeClass('fa-pause').addClass('fa-play');
          setTimeout(function() {
            $('.jp-play').click();
          }, 1)

        } else {
          $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          $('#' + attr + ' i').addClass('fa-pause').removeClass('fa-play');
          setTimeout(function() {
            $('.jp-playlist li:nth-child(' + id + ')').children('.jp-media-link').click();
          }, 100)
        }

      } else {
        $('.play-icon').removeClass('fa-play').addClass('fa-play');
        $('#' + attr + ' i').removeClass('fa-play').addClass('fa-pause');
        setTimeout(function() {
          $('.jp-playlist li:nth-child(' + id + ')').children('.jp-media-link').click();
        }, 1)
      }
    }
  }
  scrollDown(id) {
    var id = id
    $("html, body").animate({
      scrollTop: $('#' + id).offset().top
    }, 1000);
  }
  render() {

    return (
      <div>

        <div className="loading wow animated">
          <ReactLoading type="bars" color="#488ce6" width="25px"/>
        </div>

        <div>
          <div className="main-stage parallax--bg">
            <div onClick={() => this.scrollDown('section-1')} className="scroll-down-btn wow animated fadeInUp" data-wow-delay="1.5s">
              <i className="fa fa-angle-down"></i>
            </div>
            <div className="main-bg animated-slow fadeIn wow" data-wow-delay=".5s"/>
            <div className="main-logo">
              <div className="logo-line-left animated fadeInLines wow" data-wow-delay=".3s"/>
              <div className="logo-container animated fadeInUp wow" data-wow-delay=".3s">
                <div className="logo">OXILO</div>
              </div>
              <div className="logo-line-right animated fadeInLines wow" data-wow-delay=".3s"/>
            </div>
          </div>
          <div id="section-5" className="section-a wait-it-out">
            <div onClick={() => this.scrollDown('section-4')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={wait}/>
                  <div onClick={(e) => this.playMusic(e, 1)} className="disc-play" id="need">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Oxilo - Wait it Out</h1><br/>
                    Wait it Out is a original feature of Dex's voice and production skills. This song sums up what OXILO is all about. Just wait for the drop and you wont find it hard to listen to more than once! More to come from OXILO with this type of drop style. 
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div id="section-4" className="section-a need-somebody">
            <div onClick={() => this.scrollDown('section-3')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={need}/>
                  <div onClick={(e) => this.playMusic(e, 2)} className="disc-play" id="need">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>XUITCASECity - Need Somebody (OXILO Remix)</h1><br/>
                    OXILO's remix of Need Somebody by XUITCASECITY is a hyphy uptempo song that is gaining popularity. A dance-able version to the already great original! check it out here
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="section-3" className="section-a">
            <div onClick={() => this.scrollDown('section-2')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={teflon}/>
                  <div onClick={(e) => this.playMusic(e, 3)} className="disc-play" id="teflon">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Teflon Sega - Press Play and Escape (OXILO Remix)</h1><br/>
                    Check out Oxilo's newest remix of Teflon Sega's Press Play and Escape. With slow spacial melodies paired with Teflon Sega's soothing vocals, this remix redefines the listening experience.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="section-2" className="section-a feel-good">
            <div onClick={() => this.scrollDown('section-1')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={feel}/>
                  <div onClick={(e) => this.playMusic(e, 4)} className="disc-play" id="feel">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Gryffin & Illenium Ft. Daya - Feel Good (OXILO Remix)</h1><br/>
                    The combination of pleasing melodies and heavy bass make this track a must-listen. Feel Good has amassed over 150,000 total streams on SoundCloud and has been featured by the Youtube Channel, Pixl Network.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="section-1" className="section-a time-well-wasted">
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={time}/>
                  <div onClick={(e) => this.playMusic(e, 5)} className="disc-play" id="time">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Oxilo - Time Well Wasted</h1><br/>
                    Oxilo's debut original track. The single includes beautiful piano and synths along with a bouncy drop that is both interesting and exciting. Take a listen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default(Main);
