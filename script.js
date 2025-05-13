particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3.95,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fffe37",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 455.54,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  
  let count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  
  count_particles = document.querySelector(".js-count-particles");
  
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom &&
      window.pJSDom[0] &&
      window.pJSDom[0].pJS &&
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  
  requestAnimationFrame(update);
  
  (function(){
const setbanner = (msg, x, y) => {
	let banner = document.querySelector('#banner');
	banner.querySelector('span').innerText = msg;
	let textwidth = banner.querySelector('span').offsetWidth;
	if (x + textwidth > screen.width) { x = (screen.width - textwidth) - 50;}
	banner.style.top = y + "px";
	banner.style.left = x + "px";
}
const seteventhandlers = () => {
	let elements = document.querySelector('#elements');
	elements.addEventListener('click', handleselect);
}
const handleselect = (ev) => {
	if (['path','polygon','g'].indexOf(ev.target.nodeName.toLowerCase()) !== -1){
		setbanner((information[ev.target.id]), ev.pageX, ev.pageY);
		ev.preventDefault();
	}
};
const init = () => {
	seteventhandlers();
}
init();
})();