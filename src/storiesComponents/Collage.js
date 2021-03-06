import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { breakpoints } from '../utils/styles'
import { Capital } from '../storiesComponents/Capital'

const CollageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1284px;
`
const LeftFigure = styled.figure`
  display: none;
  & > .picture {
    margin-right: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`
const RightFigure = styled.figure`
  display: none;
  & > .picture {
    margin-left: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`

const MiddleSection = styled.section`
  width: 70%;
  &.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0em;
    text-align: center;
    font-weight: 300;
  }
  & > .twoPicsInTheMiddle {
    display: flex;
    margin-bottom: 4rem;
    & .picture_middle {
      width: 100%;
      height: 7.5rem;
    }
  }
  .picture_middle + .picture_middle {
    margin-left: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 40%;
    & > .twoPicsInTheMiddle .picture_hidden {
      display: none;
    }
    & > .twoPicsInTheMiddle {
      margin-bottom: 2rem;
    }
  }
`

const Picture = styled.div`
  height: 9.75rem;
  background-position: 50%;
  background-size: auto 176px;
  background-repeat: no-repeat;
  margin-bottom: 0.25rem;
  position: relative;

  &.picture__60 {
    width: calc(60% - 0.5rem);
  }
  &.picture__40 {
    width: 77%;
  }
  &.hideOnMedium {
    display: none;
  }
  &.expandOnMedium {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    &.picture__40 {
      width: 40%;
    }
    &.hideOnMedium {
      display: block;
    }
  }
`

export const Collage = () => {
  return (
    <CollageWrapper>
      <LeftFigure>
        <Picture className="picture picture__60 hideOnMedium picture_1">
          <GatsbyImage fluid={fluid1} />
        </Picture>
        <Picture className="picture picture__40 expandOnMedium picture_2">
          <GatsbyImage fluid={fluid2} />
        </Picture>
        <Picture className="picture picture__40 picture_3">
          <GatsbyImage fluid={fluid3} />
        </Picture>
        <Picture className="picture picture__40  picture_4">
          <GatsbyImage fluid={fluid4} />
        </Picture>
        <Picture className="picture picture__60 hideOnMedium picture_5">
          <GatsbyImage fluid={fluid5} />
        </Picture>
        <Picture className="picture picture__40 hideOnMedium picture_6">
          <GatsbyImage fluid={fluid6} />
        </Picture>
      </LeftFigure>
      <MiddleSection>
        <div className="twoPicsInTheMiddle">
          <Picture className="picture picture_middle picture_7">
            <GatsbyImage fluid={fluid7} />
          </Picture>
          <Picture className="picture picture_middle picture_8">
            <GatsbyImage fluid={fluid8} />
          </Picture>
          <Picture className="picture picture_middle picture_hidden">
            <GatsbyImage fluid={fluid9} />
          </Picture>
        </div>
        <Capital />
      </MiddleSection>
      <RightFigure className="right">
        <Picture className="picture picture__40 expandOnMedium picture_9">
          <GatsbyImage fluid={fluid10} />
        </Picture>
        <Picture className="picture picture__60 hideOnMedium picture_10">
          <GatsbyImage fluid={fluid11} />
        </Picture>
        <Picture className="picture picture__40 picture_11">
          <GatsbyImage fluid={fluid12} />
        </Picture>
        <Picture className="picture picture__40 hideOnMedium picture_12">
          <GatsbyImage fluid={fluid13} />
        </Picture>
        <Picture className="picture picture__40 picture_13">
          <GatsbyImage fluid={fluid14} />
        </Picture>
        <Picture className="picture picture__60 hideOnMedium picture_14">
          <GatsbyImage fluid={fluid15} />
        </Picture>
      </RightFigure>
    </CollageWrapper>
  )
}

const fluid1 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAaiuql2wEP/EABoQAAIDAQEAAAAAAAAAAAAAAAIDAAQSATH/2gAIAQEAAQUCceBrERMlr1fctn//xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8BDJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAdEAABAgcAAAAAAAAAAAAAAAABABACESEiUWFx/9oACAEBAAY/AtlG6mGh4UJN/8QAGxABAQACAwEAAAAAAAAAAAAAAREAECFBUZH/2gAIAQEAAT8hjpKQuLrU8rp18SY/tsdf/9oADAMBAAIAAwAAABCjz//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKD/xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQIBAT8QXZ//xAAcEAEAAgIDAQAAAAAAAAAAAAABESEAEDFBYVH/2gAIAQEAAT8QViKiU9axITTYtnWvsoQ9IjEhROTwi6//2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/3bd9fef61e783300543e6788b7757b80/e5f5d/4bbece67a258c1bb0524af79d4a30583.jpeg',
  srcSet:
    'http://localhost:8000/static/3bd9fef61e783300543e6788b7757b80/dab73/4bbece67a258c1bb0524af79d4a30583.jpeg 200w,\nhttp://localhost:8000/static/3bd9fef61e783300543e6788b7757b80/e5f5d/4bbece67a258c1bb0524af79d4a30583.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid2 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABslVZn7pkUD//xAAaEAEBAAIDAAAAAAAAAAAAAAABAwACISMz/9oACAEBAAEFAr2dWVtxORezI+f/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQMBAT8BMk3/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIh/9oACAECAQE/AXbHS//EABgQAAMBAQAAAAAAAAAAAAAAAAECEABR/9oACAEBAAY/AiFx5Gv/xAAcEAEAAgIDAQAAAAAAAAAAAAABABExYSFBsdH/2gAIAQEAAT8hCLGazEJ5e4qE7jKbfZ9isXP/2gAMAwEAAgADAAAAEFMP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EMBDFL//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8Q2M8G/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFhcZHB0f/aAAgBAQABPxB02JbZew69zK8ChTgObz8g6EBIwG1tha1i4bfUoeZ//9k=',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/8d6b864bd43ba3836eb78d52a818988b/e5f5d/4cf75b6a1ef276777ea9b619471bebe5.jpeg',
  srcSet:
    'http://localhost:8000/static/8d6b864bd43ba3836eb78d52a818988b/dab73/4cf75b6a1ef276777ea9b619471bebe5.jpeg 200w,\nhttp://localhost:8000/static/8d6b864bd43ba3836eb78d52a818988b/e5f5d/4cf75b6a1ef276777ea9b619471bebe5.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}

const fluid3 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHqN4GwT//EABoQAAIDAQEAAAAAAAAAAAAAAAEDAAISEDH/2gAIAQEAAQUCdfC1X1z2AACf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAAREQIQAxQf/aAAgBAQAGPwKtmhisrsoR/8QAGhABAAIDAQAAAAAAAAAAAAAAARFBABAhwf/aAAgBAQABPyFmfUZDoYXbpAdwkEBWv//aAAwDAQACAAMAAAAQs8//xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQMBAT8QYGf/xAAWEQADAAAAAAAAAAAAAAAAAAAQESH/2gAIAQIBAT8QrH//xAAbEAEAAgIDAAAAAAAAAAAAAAABETEAECFBUf/aAAgBAQABPxA41QE9VkweGOgO41GBJgs6w61//9k=',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/664383d3f9dd60984a7c80086b8124a6/e5f5d/7ae42fe955dbc135e390ee985e05f1ed.jpeg',
  srcSet:
    'http://localhost:8000/static/664383d3f9dd60984a7c80086b8124a6/dab73/7ae42fe955dbc135e390ee985e05f1ed.jpeg 200w,\nhttp://localhost:8000/static/664383d3f9dd60984a7c80086b8124a6/e5f5d/7ae42fe955dbc135e390ee985e05f1ed.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid4 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB0oXVwwCv/8QAGRABAQEAAwAAAAAAAAAAAAAAAgMBAAQQ/9oACAEBAAEFAuwkJRvjXmTJXP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAQACAAcAAAAAAAAAAAAAAAECEAASITEyobH/2gAIAQEABj8CWG/mMjyO7ZBq1//EABwQAAEDBQAAAAAAAAAAAAAAAAEAEEERITFRsf/aAAgBAQABPyEdBjXpQjBdmVuAZb//2gAMAwEAAgADAAAAEAzP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIRBBUaHw/9oACAEBAAE/EHBFoSx894ySbpNpVA4QCII9OBc0KbkIB4OP/9k=',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/03f3df8787c50031cd463756e177342a/e5f5d/8de34031958438e64952812fb4041267.jpeg',
  srcSet:
    'http://localhost:8000/static/03f3df8787c50031cd463756e177342a/dab73/8de34031958438e64952812fb4041267.jpeg 200w,\nhttp://localhost:8000/static/03f3df8787c50031cd463756e177342a/e5f5d/8de34031958438e64952812fb4041267.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid5 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2Ccxqj//xAAYEAEBAQEBAAAAAAAAAAAAAAACAxABEv/aAAgBAQABBQJryZVNMR4iJgZ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgEFAAAAAAAAAAAAAAAAAAEQESEiMVH/2gAIAQEABj8Cb4Wij0zFR//EABkQAQEAAwEAAAAAAAAAAAAAAAERABAxIf/aAAgBAQABPyEHeCuKI1hfSaRHehiqxUmv/9oADAMBAAIAAwAAABDTz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAERABBRIYH/2gAIAQEAAT8QZtGIFhi58F8WoTpOhgsrBqs57r//2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/723785794712c88ad160bb8fa341a3e3/e5f5d/8fa49357691a2ef562d6f40ef7d58963.jpeg',
  srcSet:
    'http://localhost:8000/static/723785794712c88ad160bb8fa341a3e3/dab73/8fa49357691a2ef562d6f40ef7d58963.jpeg 200w,\nhttp://localhost:8000/static/723785794712c88ad160bb8fa341a3e3/e5f5d/8fa49357691a2ef562d6f40ef7d58963.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid6 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB14rCDwD/xAAYEAEBAQEBAAAAAAAAAAAAAAABAgMQEf/aAAgBAQABBQLR8nFrjJQQTz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAARARISL/2gAIAQEABj8COncUzI//xAAaEAEAAwADAAAAAAAAAAAAAAABABARITFB/9oACAEBAAE/IVdHHqM01V5AnNar/9oADAMBAAIAAwAAABCnz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEBAAMBAAAAAAAAAAAAAAERIQAQUYH/2gAIAQEAAT8Qs2ED5eDJbN+51JLocY046iFJrev/2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/3b2542c22f2c5c11187abaf1f11722fb/e5f5d/48b747ea3932f7e56763fb5f43dc22c0.jpeg',
  srcSet:
    'http://localhost:8000/static/3b2542c22f2c5c11187abaf1f11722fb/dab73/48b747ea3932f7e56763fb5f43dc22c0.jpeg 200w,\nhttp://localhost:8000/static/3b2542c22f2c5c11187abaf1f11722fb/e5f5d/48b747ea3932f7e56763fb5f43dc22c0.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid7 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAaaNPIZAP//EABkQAAMBAQEAAAAAAAAAAAAAAAECAwQAEP/aAAgBAQABBQLQSsMdXLdRQ6Sks/P/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAEAAQUBAAAAAAAAAAAAAAABAgAQESFBMf/aAAgBAQAGPwKae0wlvubMXtKZ3b//xAAaEAACAwEBAAAAAAAAAAAAAAABEQAQITFR/9oACAEBAAE/ITgpMIjefYeVwMBZCrIgtr//2gAMAwEAAgADAAAAEJPP/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8Qp//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPxCIf//EABoQAQACAwEAAAAAAAAAAAAAAAEAIRARUYH/2gAIAQEAAT8QVqXYFQiPujfJqsbQTcKuPGESxo8x/9k=',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/ac6cb5da227e8d190ba045229e20e413/e5f5d/9922d29a8395b9f8435ef8bb5a166042.jpeg',
  srcSet:
    'http://localhost:8000/static/ac6cb5da227e8d190ba045229e20e413/dab73/9922d29a8395b9f8435ef8bb5a166042.jpeg 200w,\nhttp://localhost:8000/static/ac6cb5da227e8d190ba045229e20e413/e5f5d/9922d29a8395b9f8435ef8bb5a166042.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid8 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAGlEE5WxElP/8QAGxAAAgEFAAAAAAAAAAAAAAAAAwQAAhATITT/2gAIAQEAAQUCYZxkpcsz0QWxf//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIQIXERgf/aAAgBAQAGPwINHqHbu4fsMxf/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBhcf/aAAgBAQABPyFT2DM1JTbYaOFavSBY+RKnaZ//2gAMAwEAAgADAAAAELD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAGT//EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPxBdn//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESFBEFFhcYGR/9oACAEBAAE/ECbID1bTo7zHhDQyaHqfHhHlpV4CBY0mOFaa+p//2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/a26cc5f896f64d49ce93888ecb2ec177/e5f5d/388171ede9f40003a32946228acd44f7.jpeg',
  srcSet:
    'http://localhost:8000/static/a26cc5f896f64d49ce93888ecb2ec177/dab73/388171ede9f40003a32946228acd44f7.jpeg 200w,\nhttp://localhost:8000/static/a26cc5f896f64d49ce93888ecb2ec177/e5f5d/388171ede9f40003a32946228acd44f7.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid9 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABZzXkZbgFf//EABoQAAICAwAAAAAAAAAAAAAAAAIDAAEEEjH/2gAIAQEAAQUCedrBJ7jMji22Lp//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwGn/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAECAQE/AVB//8QAHBAAAQMFAAAAAAAAAAAAAAAAAQAQEQISMVFx/9oACAEBAAY/ApG1JanqtGC3/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECExQf/aAAgBAQABPyER1aRFTY1zHvmi1tsx/9oADAMBAAIAAwAAABDvz//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxBcj//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAUn//EABsQAQACAwEBAAAAAAAAAAAAAAERQQAQIVGx/9oACAEBAAE/EDIEwmsLg9IhRWoeSPxwIKB4nW51/9k=',
  aspectRatio: 1.3636363636363635,
  src:
    'http://localhost:8000/static/f926d25dc5ea5367333124a6ad0a4997/a6a81/230953171c2013cc3affc2565dae335f.jpeg',
  srcSet:
    'http://localhost:8000/static/f926d25dc5ea5367333124a6ad0a4997/b8753/230953171c2013cc3affc2565dae335f.jpeg 200w,\nhttp://localhost:8000/static/f926d25dc5ea5367333124a6ad0a4997/a6a81/230953171c2013cc3affc2565dae335f.jpeg 240w',
  sizes: '(max-width: 240px) 100vw, 240px',
}
const fluid10 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtRujRX//EABkQAAIDAQAAAAAAAAAAAAAAAAECABEgIf/aAAgBAQABBQImordx/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAACBB/9oACAEBAAY/Air/AP/EABgQAQEBAQEAAAAAAAAAAAAAAAERIQAQ/9oACAEBAAE/IZDLs5l4xZr4l6b5/9oADAMBAAIAAwAAABCMz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQABBQEBAAAAAAAAAAAAAAEhABAxQWER8P/aAAgBAQABPxBECSIa9c0VEkCjM/ctE5SkLq3/2Q==',
  aspectRatio: 1.3636363636363635,
  src:
    'http://localhost:8000/static/e604b25045688fb63540aa0afbc41e36/a6a81/af0cc4c572b83fdbbf3f544cd44cdfeb.jpeg',
  srcSet:
    'http://localhost:8000/static/e604b25045688fb63540aa0afbc41e36/b8753/af0cc4c572b83fdbbf3f544cd44cdfeb.jpeg 200w,\nhttp://localhost:8000/static/e604b25045688fb63540aa0afbc41e36/a6a81/af0cc4c572b83fdbbf3f544cd44cdfeb.jpeg 240w',
  sizes: '(max-width: 240px) 100vw, 240px',
}
const fluid11 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2jUR6j//xAAYEAEAAwEAAAAAAAAAAAAAAAABABExMv/aAAgBAQABBQJwW44dT//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAAAAgMf/aAAgBAQAGPwIq/wD/xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAQIVH/2gAIAQEAAT8hcaZJtXQqM7B53X//2gAMAwEAAgADAAAAEOPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAEDBQAAAAAAAAAAAAAAAREAECExQVGh4f/aAAgBAQABPxBtaBioKwwiDjyxMblTSIQLu3//2Q==',
  aspectRatio: 1.3333333333333333,
  src:
    'http://localhost:8000/static/db3d330dfb2be21e294dc9dd8e1bc3a3/3cd92/cada6752bff0b06bce80ed7b3ef32b42.jpg',
  srcSet:
    'http://localhost:8000/static/db3d330dfb2be21e294dc9dd8e1bc3a3/9dc22/cada6752bff0b06bce80ed7b3ef32b42.jpg 200w,\nhttp://localhost:8000/static/db3d330dfb2be21e294dc9dd8e1bc3a3/3cd92/cada6752bff0b06bce80ed7b3ef32b42.jpg 300w',
  sizes: '(max-width: 300px) 100vw, 300px',
}
const fluid12 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAduVkLAT/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAECAyD/2gAIAQEAAQUCZW55/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAABEgIoH/2gAIAQEABj8CLrI//8QAGRABAQEAAwAAAAAAAAAAAAAAAREQACFh/9oACAEBAAE/IVDjBkN68bM//9oADAMBAAIAAwAAABAbz//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAwEBPxBwn//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQACAgMAAAAAAAAAAAAAAAEAERAhMUFR/9oACAEBAAE/ENiczYZVEp4cINX1KDYVj//Z',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/dbf8bc79321a47adf2261ca0616b1a84/e5f5d/cd8f0b0f1bcd72e67d8aa0d85d33ee2a.jpeg',
  srcSet:
    'http://localhost:8000/static/dbf8bc79321a47adf2261ca0616b1a84/dab73/cd8f0b0f1bcd72e67d8aa0d85d33ee2a.jpeg 200w,\nhttp://localhost:8000/static/dbf8bc79321a47adf2261ca0616b1a84/e5f5d/cd8f0b0f1bcd72e67d8aa0d85d33ee2a.jpeg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid13 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAGmvoqo1wDb/8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDAAQR/9oACAEBAAEFArsVCVY03RkHtN//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBL/2gAIAQMBAT8BV1P/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQIBAT8BEX//xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIQETFx/9oACAEBAAY/AlhiT1USPa//xAAZEAEAAgMAAAAAAAAAAAAAAAABECEAMcH/2gAIAQEAAT8hoKVx5RVajtMn/9oADAMBAAIAAwAAABBcD//EABcRAQADAAAAAAAAAAAAAAAAAAEQEWH/2gAIAQMBAT8QNUyP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QBH//xAAcEAEAAQUBAQAAAAAAAAAAAAABIQAQETFhQbH/2gAIAQEAAT8QGmnk3gp4Y5gCfG2z6PlEByQY5b//2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/e288c5df888782bc0b12d7427700053b/e5f5d/pull_vert.jpg',
  srcSet:
    'http://localhost:8000/static/e288c5df888782bc0b12d7427700053b/dab73/pull_vert.jpg 200w,\nhttp://localhost:8000/static/e288c5df888782bc0b12d7427700053b/e5f5d/pull_vert.jpg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid14 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAaiLMo0QB//EABoQAAMBAAMAAAAAAAAAAAAAAAEDBAACETP/2gAIAQEAAQUCeSEyu5tbqz1NB77/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIQERIxQoH/2gAIAQEABj8CeRmiNx1h65H/xAAcEAEAAQQDAAAAAAAAAAAAAAABEQAQIUExUaH/2gAIAQEAAT8hVtBISjnEcAjdmgbg9pszt2//2gAMAwEAAgADAAAAEKvP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qh//EABsQAQEAAgMBAAAAAAAAAAAAAAERABAhUXGB/9oACAEBAAE/EGcLQiPeGyRJAsczvTEpCeIuCu4q+Jr/2Q==',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/2fef6c2796056c9b51b596dfa1719a89/e5f5d/robe_noir.jpg',
  srcSet:
    'http://localhost:8000/static/2fef6c2796056c9b51b596dfa1719a89/dab73/robe_noir.jpg 200w,\nhttp://localhost:8000/static/2fef6c2796056c9b51b596dfa1719a89/e5f5d/robe_noir.jpg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}
const fluid15 = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAetK8x0BP//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMxEv/aAAgBAQABBQKwkKHbqPg2f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAABECH/2gAIAQEABj8CwVU//8QAGRABAQADAQAAAAAAAAAAAAAAAREAECGB/9oACAEBAAE/ITVRuMs8s0LgHpr/2gAMAwEAAgADAAAAEKQP/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EIGf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EDV//8QAGhABAQACAwAAAAAAAAAAAAAAAREAEDFRYf/aAAgBAQABPxBAsAvmWcqhCR0A3vFNOAmv/9k=',
  aspectRatio: 1.7329545454545454,
  src:
    'http://localhost:8000/static/923b6ec36591883fce22fbb0a87335a3/e5f5d/pull_leopard.jpg',
  srcSet:
    'http://localhost:8000/static/923b6ec36591883fce22fbb0a87335a3/dab73/pull_leopard.jpg 200w,\nhttp://localhost:8000/static/923b6ec36591883fce22fbb0a87335a3/e5f5d/pull_leopard.jpg 305w',
  sizes: '(max-width: 305px) 100vw, 305px',
}

const GatsbyImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
  height: 100%;
`
