"use client"

import { ScaleLoader } from "react-spinners"
import './pageLoading.scss'

const PageLoading = () => {
  return (
    <div className="scaleLoader">
      <ScaleLoader color="#fff" radius={2} />
    </div>
  )
}

export default PageLoading