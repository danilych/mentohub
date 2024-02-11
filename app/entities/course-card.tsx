import { Link } from '@remix-run/react'
import { RatingStar } from 'assets/icons'
import { Tag, Text } from '~/shared'

interface Props {
  id: string
  picturePath: string
  name: string
  price: string
  rating: string
}

export function CourseCard({ id, picturePath, name, price, rating }: Props) {
  return (
    <Link to={`/courses/${id}`}>
      <div className="w-[484px] relative h-[570px] bg-[#F6F6F6] pt-6 rounded-[20px] px-5">
        <img
          className="h-[250px] w-[444px] mx-auto rounded-[20px]"
          src={
            'https://mystudystorage.blob.core.windows.net/test/' + picturePath
          }
          alt=""
        />

        <div className="mt-4 flex flex-row gap-[18px]">
          <Tag>розробка</Tag>
          <Tag>python</Tag>
          <Tag>sql</Tag>
        </div>

        <p className="mt-4 leading-[26px] text-2xl font-sans font-medium text-[#0F0F10] p-0 m-0 not-italic font-manrope">
          {name}
        </p>

        <Text className="text-[#4e4e51] mt-6">
          It is test description of the course. It is test description of our
          course It is I need a lot of text to test the description of the
          course. It is test description of our course It is I need a lot of
          text to test the description of the course.
        </Text>

        <div className="bottom-6 absolute flex flex-row gap-[40px]">
          <p className="font-bold text-[#1a1a1b] text-lg font-manrope color-[#161616] p-0 m-0 leading-[22px] not-italic font-manrope">
            {price + ' UAH'}
          </p>

          <div className="flex flex-row">
            <p className="mr-1 font-bold text-[#1a1a1b] text-lg font-manrope color-[#161616] p-0 m-0 leading-[22px] not-italic font-manrope">
              {rating}
            </p>

            <img className="h-5 w-5" src={RatingStar} alt="" />
            <img className="h-5 w-5" src={RatingStar} alt="" />
            <img className="h-5 w-5" src={RatingStar} alt="" />
            <img className="h-5 w-5" src={RatingStar} alt="" />
          </div>
        </div>
      </div>
    </Link>
  )
}
