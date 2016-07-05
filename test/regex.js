import assert from 'assert'
import config from '../lib/config'

describe('check email', () => {
  describe('.shouldPass()', () => {
    var validEmails = [
      'dzmitry_samsonau@epam.com',
      'dzmitry_samsonau1@epam.com',
      'dzmitry_samsonau2@epam.com',
      'dzmitry@epam.com',
      'Dzmitry_Samsonau@epam.com',
      'Dzmitry_samsonau@epam.com'
    ]

    it('should be ok', () => {
      validEmails.forEach(el => {
        var re = new RegExp(config.emailRegex)
        assert(re.test(el), el)
      })
    })
  })

  describe('.shouldFail()', () => {
    var invalidEmails = [
      'demn@gmail.com',
      'demn@mail.com',
      'demn@epam.ru',
      'demn',
      'dzmitry_samsonau',
      'dzmitry_samsonau@',
      '',
      '111111111'
    ]

    it('should fail', () => {
      invalidEmails.forEach(el => {
        var re = new RegExp(config.emailRegex)
        assert(!re.test(el), el)
      })
    })
  })
})
