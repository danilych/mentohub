import type { PostProcessorModule } from 'i18next'

const machineTranslationsProcessor: PostProcessorModule = {
  name: 'machineTranslationsProcessor',
  type: 'postProcessor',
  process(value) {
    return value.replace(/(<)\s?(\/)\s?(\w*>)/gm, '$1$2$3')
  },
}

export default machineTranslationsProcessor
