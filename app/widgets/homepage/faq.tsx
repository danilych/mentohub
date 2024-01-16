import { faqQuestions } from '~/data/faq-questions'
import { FaqQuestion } from '~/features'
import { Header3 } from '~/shared'

export function FAQ() {
  return (
    <div className="w-full">
      <div className="mx-auto w-[993px] flex flex-col gap-9">
        <Header3>FAQ</Header3>
        {faqQuestions.map(question => (
          <FaqQuestion
            key={question.question}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  )
}
