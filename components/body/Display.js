import React from 'react'
import { PlanetDisplay } from '../'

function Display ({ dataToDisplay }) {
  return (
    <>
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Mercury' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/0e/cd/7b/0ecd7b789e8e77385997f356f59cd8c7.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Venus' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/82/d7/8d/82d78d433b22a8af40c1300e7472a559.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Earth' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/a2/a5/03/a2a50389f10b6a8604d9e7891c682d54.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Mars' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/15/36/22/1536229727654e570b7e19f30b00a604.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Jupiter' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/ad/22/12/ad2212e7ec7bd238359ed736040cf265.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Saturn' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/13/51/ca/1351cad697a5bdbf61989908ecdc397f.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Uranus' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/7c/41/c1/7c41c13f5fdcd3833b5f1513ca1b5644.jpg'
          />
        )}
      {dataToDisplay?.displayData &&
        dataToDisplay?.displayData?.englishName == 'Neptune' && (
          <PlanetDisplay
            key={dataToDisplay?.displayData?.id}
            id={dataToDisplay?.displayData?.id}
            name={dataToDisplay?.displayData?.name}
            englishName={dataToDisplay?.displayData?.englishName}
            bodyType={dataToDisplay?.displayData?.bodyType}
            gravity={dataToDisplay?.displayData?.gravity}
            density={dataToDisplay?.displayData?.density}
            perihelion={dataToDisplay?.displayData?.perihelion}
            aphelion={dataToDisplay?.displayData?.aphelion}
            temp={dataToDisplay?.displayData?.avgTemp}
            imgType='https://i.pinimg.com/564x/eb/98/3d/eb983d5c51aad6fa5cd729f575f2d6db.jpg'
          />
        )}
    </>
  )
}

export default Display
