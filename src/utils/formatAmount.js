import BigNumber from 'bignumber.js'

export default (amount) => {
  if (!amount) return '0'
  return new BigNumber(amount).toFormat()
}