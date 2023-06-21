//front-end
import React from 'react'
import { MobLaunchFailure, MobLaunchSuccess } from './'
//back-end

function LaunchDeterminant ({
  id,
  url,
  name,
  status,
  status_desc,
  launcher,
  rocket_name,
  mission_name,
  mission_desc,
  pad_name,
  pad_long,
  pad_lat,
  imgUrl,
  orbit_area,
  orbit_abbrev,
  launcher_name,
  launcher_type
}) {
  return (
    <>
      {status == 'Launch Successful' ? (
        <>
          <MobLaunchSuccess
            key={id}
            id={id}
            url={url}
            name={name}
            imgUrl={imgUrl}
            status={status}
            launcher={launcher}
            rocket_name={rocket_name}
            status_desc={status_desc}
            mission_name={mission_name}
            mission_desc={mission_desc}
            pad_name={pad_name}
            pad_long={pad_long}
            pad_lat={pad_lat}
            orbit_area={orbit_area}
            orbit_abbrev={orbit_abbrev}
            launcher_name={launcher_name}
            launcher_type={launcher_type}
          />
        </>
      ) : (
        <>
          <MobLaunchFailure
            key={id}
            id={id}
            url={url}
            name={name}
            imgUrl={imgUrl}
            status={status}
            launcher={launcher}
            rocket_name={rocket_name}
            status_desc={status_desc}
            mission_name={mission_name}
            mission_desc={mission_desc}
            pad_name={pad_name}
            pad_long={pad_long}
            pad_lat={pad_lat}
            orbit_area={orbit_area}
            orbit_abbrev={orbit_abbrev}
            launcher_name={launcher_name}
            launcher_type={launcher_type}
          />
        </>
      )}
    </>
  )
}

export default LaunchDeterminant
