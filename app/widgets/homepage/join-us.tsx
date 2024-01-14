import { JoinUsImage } from 'assets/images'
import { JoinUsForm } from '~/features'
import { Header3 } from '~/shared'

export function JoinUs() {
  return (
    <div className="bg-[#EFEFEF] py-9 w-full">
      <div className="mx-auto w-[1500px] relative">
        <div>
          <Header3 className="inline-block">
            Є чим поділитись? Доєднуйся і
          </Header3>

          <Header3 className="inline-block pl-3 text-[#454BE9]">
            створюй власні курси
          </Header3>
        </div>
        <div className="flex flex-row mt-6 gap-[42px]">
          <JoinUsForm />

          <div className="flex flex-col gap-[42px]">
            <p className="w-[399px]">
              Створення власних курсів - це захоплива можливість поділитися
              своїми знаннями та навичками з іншими людьми. Ваш досвід може
              стати цінним джерелом навчання для тих, хто бажає розвиватися в
              вашій галузі. Ми допоможемо тобі подолати крок створення курсу!
            </p>

            <div>
              <p>Залишилися питтаня? </p>
              <p className="inline-block">Пиши на</p>

              <p className="inline-block pl-3 text-[#454BE9]">
                hello@mentohub.com
              </p>
            </div>
          </div>
        </div>

        <img
          className="h-[535px] right-[-230px] bottom-[-36px] absolute"
          src={JoinUsImage}
          alt=""
        />
      </div>
    </div>
  )
}
