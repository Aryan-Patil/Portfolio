import { useEffect } from 'react';
import Data from "../data/data.json"
const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: '#fc0d6d',
      maxSpeed: 0.09,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      initial: [0.3, -0.1],
      depth: 0.5,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
    <div className='tools-main'>
      <canvas
        id='tagcanvas'
        width='500'
        height='500'
        className='tools'
      ></canvas>
      <div id='taglist' style={{ display: 'none' }}>
        <ul>
          {Data.tools.map((skill) => (
            <li>
              <a target="_blank" href=''>{skill.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;