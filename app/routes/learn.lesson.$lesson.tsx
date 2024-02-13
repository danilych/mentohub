import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header2} from '~/shared'

export default function Course() {
  // @ts-ignore
  const { lesson } = useSelector(state => state.lesson)

  const [isPostsLoading, setIsPostLoading] = useState(true)

  useEffect(() => {
    if (lesson.data != null) setIsPostLoading(false)
  })

  return (
    <div className="py-12 my-[56px] mx-auto">
      {isPostsLoading ? (
        <div className="w-full h-screen">
          <Spinner
            className="absolute top-1/2 left-1/2 mt-[-50px] ml-[-50px]"
            aria-label="Extra large spinner example"
            size="xl"
          />
        </div>
      ) : (
        <div className="w-full">
          <Header2 className="text-center mt-4">{lesson.data.theme}</Header2>

          <video className="mt-[50px]" controls width="100%">
            <source
              src={
                'https://mystudystorage.blob.core.windows.net/test/' + lesson.data.videoPath!
              }
              type="video/mp4"
            />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      )}
    </div>
  )
}
