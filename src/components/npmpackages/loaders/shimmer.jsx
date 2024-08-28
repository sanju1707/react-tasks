import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={800}
    height={800}
    viewBox="0 0 800 800"
    backgroundColor="#8a8585"
    foregroundColor="#535050"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="600" height="600" />
  </ContentLoader>
)

export default MyLoader