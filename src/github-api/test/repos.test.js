require('chai').should()
const sinon = require('sinon')

const { getRepo } = require('../repos')

describe('getRepo', () => {
  let fakeData
  let httpClient

  beforeEach(() => {
    fakeData = {}
    httpClient = {
      get: sinon.stub().resolves({ data: fakeData }),
    }
  })

  it('returns promise for data returned by http client', async () => {
    const data = await getRepo('fake-repo', httpClient)
    data.should.equal(fakeData)
  })

  it('calls httpClient.get with correct url', async () => {
    const expectedUrl = 'https://api.github.com/repos/median-man/fake-repo'
    await getRepo('fake-repo', httpClient)
    httpClient.get.calledOnceWith(expectedUrl).should.be.true
  })
})
