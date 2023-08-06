import { useLayoutEffect, useState, type HTMLAttributes, type ReactNode } from 'react'
import { getIpfsURL } from '../../utils/ipfs'

const DefaultLoadingComponent = (): JSX.Element => {
  return <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">Loading...</div>
}

export interface IpfsVideoProps extends HTMLAttributes<HTMLVideoElement> {
  hash: string
  gateway?: string
  muted?: boolean
  loop?: boolean
  loadingComponent?: ReactNode
  thumbnail?: string
}

export const VideoIPFS = ({
  hash,
  gateway,
  muted = true,
  loop = true,
  loadingComponent = <DefaultLoadingComponent />,
  thumbnail,
  ...rest
}: IpfsVideoProps): JSX.Element => {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    const cleanedVideoURL = getIpfsURL(gateway, hash)
    setVideoUrl(cleanedVideoURL)
  }, [hash, gateway])

  const handleLoadedData = (): void => {
    setLoading(false)
  }

  return (
    <>
      <div className="relative">
        {loading && loadingComponent}
        {thumbnail !== undefined && videoUrl === undefined && (
          <img src={thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
        )}
        <video autoPlay muted={muted} loop={loop} playsInline {...rest} onLoadedData={handleLoadedData}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
