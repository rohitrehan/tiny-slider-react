import { useMemo, useRef, useState } from 'react'
import { TinySlider, TinySliderConfig } from '../src'
import React from 'react'

const blocks = ['A', 'B', 'C','D']
const blocks2 = ['1', '2', '3', '4', '5', '6', '7']

const App = () => {
  const carousel = useRef(null)
  const carousel2 = useRef(null)
  const [currentBlocks, setCurrentBlocks] = useState(blocks2)

  const responsive = {
    '800': {
      items: 3
    },
    '1200': {
      items: 4
    }
  }
  const settings1:TinySliderConfig = useMemo(() => {
    return {
      responsive: responsive,
      swipeAngle: true,
      items: 3,
      mouseDrag: true,
      ref: carousel,
      controls: false,
      nav: false,
      onClick: (slideIndex, info, event) => {
        console.log(slideIndex, info, event)
      },
      autoplay: true,
      loop: false
    }
  }, [])
  return (
    <div>
      <div onClick={() => setCurrentBlocks(blocks)}>Blocks 1</div>
      <div onClick={() => setCurrentBlocks(blocks2)}>Blocks 2</div>

      <TinySlider {...settings1}>
        {currentBlocks.map((block, i) => (
          <div
            key={i}
            className={'tns-item'}
            style={{ height: 100, backgroundColor: 'lightgray' }}
          >
            <div className={'slide'}>{block}</div>
          </div>
        ))}
      </TinySlider>
    </div>
  )
}

export default App
