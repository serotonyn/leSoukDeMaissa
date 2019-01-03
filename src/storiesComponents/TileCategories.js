import React from 'react'
import styled from 'styled-components'

import { TileCategory } from '../symbols/TileCategory'
import { breakpoints } from '../utils/styles'

const TilesCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${breakpoints[768]}px) {
    flex-direction: row;
    justify-content: center;
    & > a:not(:last-child) {
      margin-bottom: 0;
    }
    & > a + a {
      margin-left: 20px;
    }
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    & > a > div {
      width: 310px;
      height: auto;
    }
    & > a > div + div {
      margin-left: 10px;
    }
    & > a > div > h6 {
      margin-top: 20px;
    }
    & > a > div > p:nth-of-type(1) {
      margin-bottom: 238px;
    }
  }

  @media screen and (min-width: ${breakpoints[1024]}px) {
    & > a > div {
      width: 298px;
      height: auto;
    }
    & > a > div + div {
      margin-left: 40px;
    }
    & > a > div > p:nth-of-type(1) {
      margin-bottom: 218px;
    }
  }

  @media screen and (min-width: ${breakpoints[1284]}px) {
    & > a > div {
      width: 375px;
      height: 415px;
    }
    & > a > div {
      margin-left: 46px;
    }
    & > a > div > p:nth-of-type(1) {
      margin-bottom: 298px;
    }
  }
`

export const TileCategories = () => {
  return (
    <TilesCategoriesWrapper>
      {/* {console.log(edges)} */}
      <TileCategory
        title="FEMMES"
        content="Acturellement des tailles de (Xs - 3X)"
        bottomText="Femmes >>"
        fluid={fluidWomen}
      />
      <TileCategory
        title="HOMMES"
        content="Acturellement des tailles de (Xs - 3X)"
        bottomText="Hommes >>"
        fluid={fluidMen}
      />
      <TileCategory
        title="ENFANTS"
        content="Acturellement des tailles de (Xs - 3X)"
        bottomText="Enfants >>"
        fluid={fluidKids}
      />
    </TilesCategoriesWrapper>
  )
}

const fluidWomen = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB25qU42UCvIdQf//EABkQAQADAQEAAAAAAAAAAAAAAAIAARASA//aAAgBAQABBQLfV8kdW4hShFHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAhIh/9oACAEBAAY/AmZU6fF//8QAGxABAAICAwAAAAAAAAAAAAAAAQAREGEhMVH/2gAIAQEAAT8hgjjjHZKrWy8EbjagF8lz/9oADAMBAAIAAwAAABB/4IL/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPxCj/8QAHBABAQACAwEBAAAAAAAAAAAAAREAIRAxQVFx/9oACAEBAAE/EDXeMQbOEjum78cMzZA8HQfb9wdGImRwud40QaPw84f/2Q==',
  aspectRatio: 0.9033816425120773,
  src:
    'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg',
  srcSet:
    'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9a299/Women.jpg 200w,\nhttp://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg 374w',
  sizes: '(max-width: 374px) 100vw, 374px',
}

const fluidMen = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMGAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB9uM84bBNHMwuD//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMRMv/aAAgBAQABBQKG6tTLmIHRQYmbEqRDP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhARITFRgf/aAAgBAQAGPwJUXiMerVuQHBFtEf/EABwQAAMAAwADAAAAAAAAAAAAAAABESExQWFxsf/aAAgBAQABPyFE87slE6qjIes+g05pmPnTwWIabIiSn8Kf/9oADAMBAAIAAwAAABBw4P7/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxBj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAECAQE/EAuP/8QAHhABAAMAAQUBAAAAAAAAAAAAAQARIWEQMUGBkaH/2gAIAQEAAT8QjkgYI8wAQR0RsZRasexLUpKC7XeEEor8Aj5Q7pXfKpibxVh8PR//2Q==',
  aspectRatio: 0.9033816425120773,
  src:
    'http://localhost:8000/static/ae375d2c5b19452c5912d37bee11e6d5/9d564/Men.jpg',
  srcSet:
    'http://localhost:8000/static/ae375d2c5b19452c5912d37bee11e6d5/9a299/Men.jpg 200w,\nhttp://localhost:8000/static/ae375d2c5b19452c5912d37bee11e6d5/9d564/Men.jpg 374w',
  sizes: '(max-width: 374px) 100vw, 374px',
}

const fluidKids = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBQID/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAduaFSXcQSv0HoD/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADEAQR/9oACAEBAAEFAoDnQxC1emyFQ0VQuf/EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAABBQAAAAAAAAAAAAAAAAAAAhASICH/2gAIAQEABj8CfCSa/wD/xAAZEAADAQEBAAAAAAAAAAAAAAAAATEREKH/2gAIAQEAAT8hEONPmbusz6b5y5SAjT//2gAMAwEAAgADAAAAEDPvwv/EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPxCFOP/EABYRAAMAAAAAAAAAAAAAAAAAABEgQf/aAAgBAgEBPxChP//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExEEFRYf/aAAgBAQABPxAxuJowbp1xfMAlnYZqMYupV9fdey48pcKuDd1VescP/9k=',
  aspectRatio: 0.9033816425120773,
  src:
    'http://localhost:8000/static/c942db7dd69a19ac4581310daa5daead/9d564/Kids.jpg',
  srcSet:
    'http://localhost:8000/static/c942db7dd69a19ac4581310daa5daead/9a299/Kids.jpg 200w,\nhttp://localhost:8000/static/c942db7dd69a19ac4581310daa5daead/9d564/Kids.jpg 374w',
  sizes: '(max-width: 374px) 100vw, 374px',
}
