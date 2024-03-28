import React from 'react'
import Visual from '../Components/Visual'
import HomeMenu from '../Components/Home/HomeMenu'
import HomeBest from '../Components/Home/HomeBest'
import HomeAcc from '../Components/Home/HomeAcc'
import HomeRandom from '../Components/Home/HomeRandom'
import HomeReview from '../Components/Home/HomeReview'

export default function Home() {
  return (
    <>
      <Visual/>
      <HomeMenu/>
      <HomeBest/>
      <HomeAcc/>
      <HomeRandom/>
      <HomeReview/>
    </>
  )
}
